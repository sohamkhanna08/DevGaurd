const axios = require("axios");
const crypto = require("crypto");
const AuditLog = require("../models/AuditLog");

//Authentication
const getAccessToken = async () => {
  try {
    const params = new URLSearchParams();

    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.CYBERARK_CLIENT_ID);
    params.append("client_secret", process.env.CYBERARK_CLIENT_SECRET);

    const { data } = await axios.post(process.env.CYBERARK_TOKEN_URL, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return data.access_token;
  } catch (err) {
    throw new Error("Failed to fetch CyberArk access token.");
  }
};

// User Provisioning
const checkUserExists = async (accessToken, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username: username,
      },
    });

    if (response.data.Total === 0) {
      return null;
    }

    const user = response.data.Users.find((u) => u.username === username);

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      username: user.username,
      userType: user.userType,
      source: user.source,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Error in checking user exists or not");
  }
};

// const hasPrivilegeCloudRole = async (accessToken, username) => {
//   try {
//     const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

//     const allUsersData = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       params: {
//         username: username,
//       },
//     });
//     const userData = await axios.get(
//       `${url}/${allUsersData.data.Users[0].id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       },
//     );
//     return userData.data.groupsMembership.findIndex(
//       (group) => group.groupName === "Privilege Cloud Users",
//     );
//   } catch (error) {
//     if (error.response?.status === 401) {
//       throw new Error("Invalid or expired access token.");
//     }

//     throw new Error("Error in checking Priviledge Cloud Role");
//   }
// };

const createUser = async (accessToken, userData) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

    const { data } = await axios.post(
      url,
      {
        username: userData.username,
        initialPassword: "Password@123",
        userType: userData.userType || "EPVUser",
        changePassOnNextLogon: false,
        enableUser: true,
        personalDetails: {
          firstName: userData.firstName,
          lastName: userData.lastName || "",
        },
        internet: {
          businessEmail: userData.email,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return {
      id: data.id,
      username: data.username,
      userType: data.userType,
      source: data.source,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in creating new user");
  }
};

// const assignPrivilegeCloudRole = async (accessToken, username) => {
//   try {
//     const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/UserGroups/70/Members`;

//     const data = await axios.post(
//       url,
//       {
//         memberId: username,
//         memberType: "Vault",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   } catch (error) {
//     if (error.response?.status === 401) {
//       throw new Error("Invalid or expired access token");
//     }

//     throw new Error("Error in assigning Priviledge Clous Role");
//   }
// };

const ensureGroupMembership = async (
  accessToken,
  username,
  groupId,
  groupName,
) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

    const allUsersData = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        search: username,
      },
    });

    const userData = await axios.get(
      `${url}/${allUsersData.data.Users[0].id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const isMember = userData.data.groupsMembership.some(
      (group) => group.groupName === groupName,
    );

    if (!isMember) {
      await axios.post(
        `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/UserGroups/${groupId}/Members`,
        {
          memberId: username,
          memberType: "Vault",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );

      return {
        status: "assigned",
        groupId,
        groupName,
      };
    }

    return {
      status: "already_member",
      groupId,
      groupName,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error(`Failed to ensure membership for group '${groupName}'.`);
  }
};

// Safe Provisioning
const checkSafeExists = async (accessToken, safeName) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        search: safeName,
      },
    });

    const safe = data.value.find((s) => s.safeName === safeName);

    if (!safe) {
      return null;
    }

    return {
      safeId: safe.safeNumber,
      safeName: safe.safeName,
      managingCPM: safe.managingCPM,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error checking Safe exists or not");
  }
};

const createSafe = async (accessToken, safeName) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes`;

    const { data } = await axios.post(
      url,
      {
        safeName: safeName,
        ManagingCPM: "PasswordManager",
        numberOfVersionsRetention: 5,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return {
      safeId: data.safeNumber,
      safeName: data.safeName,
      managingCPM: data.managingCPM,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in creating new safe");
  }
};

const isUserMemberOfSafe = async (accessToken, safeName, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes/${safeName}/Members`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const member = data.value.find((member) => member.memberName === username);

    if (!member) {
      return null;
    }

    return {
      memberId: member.memberId,
      memberName: member.memberName,
      memberType: member.memberType,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Failed to check Safe membership.");
  }
};

const addUserToSafe = async (accessToken, safeName, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes/${safeName}/Members`;

    const data = await axios.post(
      url,
      {
        memberName: username,
        memberType: "User",
        Permissions: {
          UseAccounts: true,
          // RetrieveAccounts: true,
          ListAccounts: true,
          // AddAccounts: true,
          // UpdateAccountContent: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in adding user to safe");
  }
};

const addAdminToSafe = async (accessToken, safeName, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes/${safeName}/Members`;

    const data = await axios.post(
      url,
      {
        memberName: username,
        memberType: "User",
        Permissions: {
          UseAccounts: true,
          RetrieveAccounts: true,
          ListAccounts: true,
          AddAccounts: true,
          UpdateAccountContent: true,
          manageSafe: true,
          manageSafeMembers: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in adding admin to safe");
  }
};

// Account Provisioning
const checkAccountExists = async (accessToken, accountData, safeName) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Accounts`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        search: accountData.username,
      },
    });

    if (data.count === 0) {
      return null;
    }

    const user = data.value.find(
      (u) => u.userName === accountData.username && u.safeName === safeName,
    );

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      username: user.userName,
      platformId: user.platformId,
      address: user.address,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Error in checking account exists or not");
  }
};

const createAccount = async (accessToken, accountData, safeName) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Accounts`;

    const { data } = await axios.post(
      url,
      {
        name: accountData.username,
        address: accountData.address,
        platformId: accountData.platformId,
        userName: accountData.username,
        safeName: safeName,
        secretType: "password",
        secret: "Password@123",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return {
      id: data.id,
      userName: data.userName,
      platformId: data.platformId,
      address: data.address,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Failed to create account.");
  }
};

const reconcileAccount = async (accessToken, accountId) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Accounts/${accountId}/Reconcile`;

    await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return { id: accountId };
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Failed to reconcile account.");
  }
};

//Master Function
const onboardUser = async (userData) => {
  const requestId = crypto.randomUUID();
  const startTime = Date.now();

  const response = {
    success: true,
    message: "User onboarded successfully",
    requestId,
    requestedAt: new Date(startTime).toISOString(),
    completedAt: null,
    durationMs: null,
    steps: {},
  };

  // Step 1: Get CyberArk Access Token
  const accessToken = await getAccessToken();

  // Step 2: Check if user exists, if yes then move forward

  const existingUser = await checkUserExists(accessToken, userData.username);

  if (existingUser) {
    response.steps.user = {
      status: "already_exists",
      userId: existingUser.id,
      username: existingUser.username,
      userType: existingUser.userType,
    };
  } else {
    const user = await createUser(accessToken, userData);

    response.steps.user = {
      status: "created",
      userId: user.id,
      username: user.username,
      userType: user.userType,
    };
  }

  response.steps.groupMemberships = [
    await ensureGroupMembership(
      accessToken,
      userData.username,
      70,
      "Privilege Cloud Users",
    ),
  ];

  // Step 6: Safe Provisioning
  let safeName;

  if (userData.safeName === "" || userData.safeName === undefined) {
    safeName = userData.firstName + "_safe";
  } else {
    safeName = userData.safeName;
  }

  let safe = await checkSafeExists(accessToken, safeName);

  if (safe) {
    response.steps.safe = {
      status: "already_exists",
      safeId: safe.safeId,
      safeName: safe.safeName,
    };
  } else {
    safe = await createSafe(accessToken, safeName);

    response.steps.safe = {
      status: "created",
      safeId: safe.safeId,
      safeName: safe.safeName,
    };
  }

  const safeMember = await isUserMemberOfSafe(
    accessToken,
    safe.safeName,
    userData.username,
  );

  if (safeMember) {
    response.steps.safeMembership = {
      status: "already_added",
      safeName: safe.safeName,
    };
  } else {
    await addUserToSafe(accessToken, safe.safeName, userData.username);

    response.steps.safeMembership = {
      status: "added",
      safeName: safe.safeName,
    };
  }

  const adminUsername = "sahilgupta@kpmg";
  const isAdminInSafe = await isUserMemberOfSafe(
    accessToken,
    safe.safeName,
    adminUsername,
  );

  if (!isAdminInSafe) {
    await addAdminToSafe(accessToken, safe.safeName, adminUsername);
  }

  // Step 7: Account Provisioning

  const existingAccount = await checkAccountExists(
    accessToken,
    userData.account,
    safeName,
  );

  if (existingAccount) {
    response.steps.account = {
      status: "already_exists",
      accountId: existingAccount.id,
      userName: existingAccount.username,
      platformId: existingAccount.platformId,
      address: existingAccount.address,
    };
  } else {
    const newAccount = await createAccount(
      accessToken,
      userData.account,
      safeName,
    );

    response.steps.account = {
      status: "created",
      accountId: newAccount.id,
      userName: newAccount.userName,
      platformId: newAccount.platformId,
      address: newAccount.address,
    };

    const { id } = await reconcileAccount(accessToken, newAccount.id);

    response.steps.reconciliation = {
      status: "completed",
      accountId: id,
    };
  }

  const endTime = Date.now();

  response.completedAt = new Date(endTime).toISOString();
  response.durationMs = endTime - startTime;

  await AuditLog.create({
    workflow: "USER_ONBOARDING",
    request: userData,
    response,
  });

  return response;
};

module.exports = { onboardUser };
