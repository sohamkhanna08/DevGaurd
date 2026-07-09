const axios = require("axios");
const crypto = require("crypto");

//Authentication
const getAccessToken = async (userData) => {
  try {
    const params = new URLSearchParams();

    params.append("grant_type", "client_credentials");
    params.append("client_id", userData.cyberarkClientId);
    params.append("client_secret", userData.cyberarkClientSecret);

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

const hasPrivilegeCloudRole = async (accessToken, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

    const allUsersData = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username: username,
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
    return userData.data.groupsMembership.findIndex(
      (group) => group.groupName === "Privilege Cloud Users",
    );
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token.");
    }

    throw new Error("Error in checking Priviledge Cloud Role");
  }
};

const createUser = async (accessToken, userData) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Users`;

    const data = await axios.post(
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
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in creating new user");
  }
};

const assignPrivilegeCloudRole = async (accessToken, username) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/UserGroups/70/Members`;

    const data = await axios.post(
      url,
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
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error in assigning Priviledge Clous Role");
  }
};

// Safe Provisioning
const checkSafeExists = async (accessToken, safeName) => {
  try {
    const url = `${process.env.CYBERARK_BASE_URL}/PasswordVault/API/Safes`;

    let safeData = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        search: safeName,
      },
    });

    return safeData.data.value.findIndex((safe) => {
      return safe.safeName === safeName;
    });
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

    const data = await axios.post(
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

    let safeMembers = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return safeMembers.data.value.findIndex((member) => {
      return member.memberName === username;
    });
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Invalid or expired access token");
    }

    throw new Error("Error checking if safe member or not");
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
          RetrieveAccounts: true,
          ListAccounts: true,
          AddAccounts: true,
          UpdateAccountContent: true,
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

// Account Provisioning
const checkAccountExists = async (accessToken, accountData) => {};

const createAccount = async (accessToken, accountData) => {};

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
  const accessToken = await getAccessToken(userData);

  // Step 2: Check if user exists, if yes then move forward

  const existingUser = await checkUserExists(accessToken, userData.username);

  if (existingUser) {
    const hasRole = await hasPrivilegeCloudRole(accessToken, userData.username);
    
    response.steps.user = {
      status: "already_exists",
      userId: existingUser.id,
      username: existingUser.username,
    };

    //Step 3: Check if Privilege Cloud User role is assigned
    if (hasRole == -1) {
      await assignPrivilegeCloudRole(accessToken, userData.username);
      response.steps.role = { status: "assigned" };
    } else {
      response.steps.role = { status: "verified" };
    }
  } else {
    //   Step 4: Create user if required

    await createUser(accessToken, userData);

    await assignPrivilegeCloudRole(accessToken, userData.username);

    response.steps.user = "Created";
    response.steps.role = { status: "assigned" };
  }

  // Step 6: Safe Provisioning
  let safeName;

  if (userData.safeName === "" || userData.safeName === undefined) {
    safeName = userData.firstName + "_safe";
  } else {
    safeName = userData.safeName;
  }

  const existingSafe = await checkSafeExists(accessToken, safeName);

  if (existingSafe != -1) {
    response.steps.safe = "Already Exists";
  } else {
    await createSafe(accessToken, safeName);
    response.steps.safe = "Created";
  }

  const userInSafe = await isUserMemberOfSafe(
    accessToken,
    safeName,
    userData.username,
  );

  if (userInSafe != -1) {
    response.steps.safeMembership = "User Already Added";
  } else {
    await addUserToSafe(accessToken, safeName, userData.username);
    response.steps.safeMembership = "User Added";
  }

  // Step 7: Account Provisioning

  const existingAccount = await checkAccountExists(accessToken, userData);

  if (existingAccount) {
    response.steps.account = "Already Exists";
  } else {
    await createAccount(accessToken, userData);
    response.steps.account = "Created";
  }

  const endTime = Date.now();

  response.completedAt = new Date(endTime).toISOString();
  response.durationMs = endTime - startTime;

  return response;
};

module.exports = {
  onboardUser,
};
