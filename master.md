# PAM Workflow

> A New user wants Privilege Access to Server

## 1. User Provisioning

- Check if user is onboarded in Cyberark
  - If No- Create user ( assign Privilege cloud user role during creation)
  - If yes- see Privilege cloud user role should be assign

## 2. Safe Provisioning

- Check if safe exist (follow one naming convention - to avoid duplicate safes)
  - If safe exist- Add user to safe with list and use account privilege
  - If safe doesn't exist - create safe and add user with above mentioned privilege

## 3. Account Provisioning

- Check if account exists
  - If yes- bingo job done
  - If no, create account with (account type(wind/linux). safe, platform, username, domain, password) and reconcile

| Step               | Status Values                         |
| ------------------ | ------------------------------------- |
| **user**           | `created`, `already_exists`, `failed` |
| **groupMembership**           | `assigned`, `already_member`, `failed`      |
| **safe**           | `created`, `already_exists`, `failed` |
| **safeMembership** | `added`, `already_added`, `failed`    |
| **account**        | `created`, `already_exists`, `failed` |

# APIs
````{
  "Access Token": [
    {
      "method": "POST",
      "name": "Access Token"
    }
  ],
  "User Management": [
    {
      "method": "POST",
      "name": "Create user"
    },
    {
      "method": "GET",
      "name": "Get users"
    },
    {
      "method": "GET",
      "name": "Get users search"
    },
    {
      "method": "GET",
      "name": "Get User by ID"
    },
    {
      "method": "PUT",
      "name": "Update User"
    },
    {
      "method": "DELETE",
      "name": "Delete User"
    }
  ],
  "Group Management":[
    {
      "method": "GET",
      "name": "Get Group Users"
    }
  ]
  ,
  "Account Management": [
    {
      "method": "GET",
      "name": "Get Accounts"
    },
    {
      "method": "GET",
      "name": "Get Account by ID"
    },
    {
      "method": "GET",
      "name": "Get Account Activities"
    },
    {
      "method": "POST",
      "name": "Create Account"
    },
    {
      "method": "POST",
      "name": "Enable Account Mngmnt - CPM"
    },
    {
      "method": "POST",
      "name": "Retrieve Password"
    },
    {
      "method": "POST",
      "name": "Verify Account"
    },
    {
      "method": "POST",
      "name": "Change Password"
    },
    {
      "method": "POST",
      "name": "Reconcile"
    }
  ],
  "Safe Management": [
    {
      "method": "GET",
      "name": "List all Safes"
    },
    {
      "method": "GET",
      "name": "List Safes Members"
    },
    {
      "method": "GET",
      "name": "Search Safes"
    },
    {
      "method": "POST",
      "name": "Create Safe"
    },
    {
      "method": "POST",
      "name": "Add member to safe"
    }
  ],
  "System Health": [
    {
      "method": "GET",
      "name": "System Health"
    }
  ],
  "PSM Recordings Audit": [
    {
      "method": "GET",
      "name": "Get Recordings"
    },
    {
      "method": "GET",
      "name": "Get Recordings By ID"
    }
  ]
}
````
# All Safes
```[
  "VaultInternal",
  "Notification Engine",
  "SharedAuth_Internal",
  "PVWAReports",
  "PVWATicketingSystem",
  "PVWAPublicData",
  "TelemetryConfig",
  "Test Safe_Web App",
  "PSM",
  "PSMUniversalConnectors",
  "Test Safe_RDP",
  "PSMRecordings",
  "cyberark-connec",
  "cyberark-connec_Accounts",
  "PasswordManager_Pending",
  "AccountsFeedADAccounts",
  "AccountsFeedDiscoveryLogs",
  "KPMG-Accounts",
  "PasswordManager",
  "PasswordManager_Accounts",
  "Test-SNOW",
  "Linux",
  "TestApp",
  "Sahil",
  "Saviynt Litmos Test",
  "kpmgtest_targetserver",
  "kpmgtest_service_account",
  "ZSP-Tejas",
  "CyberArk_Test_Supriya",
  "Windows-Domain-Shreyash",
  "KPMGTEST-Reconcile",
  "Linux-Shared",
  "Windows Domain Account_Mike",
  "Windows Domain Account_John",
  "WindowsDomainaccount_shared",
  "Windows Domain Account_ea",
  "sahil-db",
  "TestSafe",
  "soham_safe",
  "soham_test_safe",
  "soham_2_safe",
  "soham_test_2_safe"
]```