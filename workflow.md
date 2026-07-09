# Get Access Token - POST METHOD
- https://acb4709.id.cyberark.cloud/oauth2/platformtoken
- body : {
  "grant_type": "client_credentials",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVDODgxQTAxODJEN0UzQzJFMDFFRENCNzM2RjVGODFFMzNBMDQxODAiLCJ4NXQiOiI3SWdhQVlMWDQ4TGdIdHkzTnZYNEhqT2dRWUEiLCJhcHBfaWQiOiJfX2lkYXB0aXZlX2N5YnJfdXNlcl9vaWRjIn0.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYWhpbF9nQGN5YmVyYXJrLmNsb3VkLjQzMzcyIiwiZmFtaWx5X25hbWUiOiJvYXV0aCIsInRlbmFudF9zdWJkb21haW4iOiJodHRwczovL2twbWctdGVzdGluZy5jeWJlcmFyay5jbG91ZCIsInVuaXF1ZV9uYW1lIjoic2FoaWxfZ0BjeWJlcmFyay5jbG91ZC40MzM3MiIsImlkYXB0aXZlX3RlbmFudF9pZCI6IkFDQjQ3MDkiLCJ0ZW5hbnRfaWQiOiJhZTFkOGFjMi1kODBlLTQ2NDUtYWU1OS1mMjA4NjBkMTM1NzgiLCJ1c2VyX3JvbGVzIjpbIlByaXZpbGVnZSBDbG91ZCBBZG1pbmlzdHJhdG9ycyIsIlByaXZpbGVnZSBDbG91ZCBTZXNzaW9uIEFkbWluIiwiVERSIEFkbWluaXN0cmF0b3IiLCJnbG9iYWwgYXVkaXRvciJdLCJpYXQiOjE3ODM0MTEwODEsInN1YiI6IjAwOWE3OTg4LTYxMDYtNDJmOC05OWQ0LWY2ZmZhMjZmYTg5NSIsImF1dGhfdGltZSI6MTc4MzQwNjMzOCwicHJlZmVycmVkX3RpbWUiOiIiLCJleHAiOjE3ODM0MTE5ODEsInVzZXJfdXVpZCI6IjAwOWE3OTg4LTYxMDYtNDJmOC05OWQ0LWY2ZmZhMjZmYTg5NSIsInNjb3BlIjoib3BlbmlkIGFwaSBwcm9maWxlIiwibGFzdF9sb2dpbiI6IjE3ODM0MDU5ODUiLCJhdWQiOiJfX2lkYXB0aXZlX2N5YnJfdXNlcl9vaWRjIiwiaXNfZGFya19tb2RlX2VuYWJsZWQiOmZhbHNlLCJwcmVmZXJyZWRfbGFuZ3VhZ2UiOiIiLCJhd3NfcmVnaW9uIjoiYXAtc291dGgtMSIsInN1YmRvbWFpbiI6ImtwbWctdGVzdGluZyIsImNzcmZfdG9rZW4iOiJZaEs4aWZzakdONXNTVFdHRUdrZVRDc1pBYTlNT0JCS3Zkay0ybWRidHBRMSIsImludGVybmFsX3Nlc3Npb25faWQiOiJpa3hjSFJ5Z3pHanF3MkgxemxQZXZzT3FrQzltX1lKS29vVGY3aHZwNjdnMSIsInBsYXRmb3JtX2RvbWFpbiI6ImN5YmVyYXJrLmNsb3VkIiwiaXNzIjoiaHR0cHM6Ly9hY2I0NzA5LmlkLmN5YmVyYXJrLmNsb3VkL19faWRhcHRpdmVfY3licl91c2VyX29pZGMvIiwiYXRfaGFzaCI6IlUwXzB0ay01dkhCa0JjbFNSRHo4ZkEiLCJuYW1lIjoib2F1dGgiLCJnaXZlbl9uYW1lIjoib2F1dGgiLCJFeHRlcm5hbFV1aWQiOiIwMDlhNzk4OC02MTA2LTQyZjgtOTlkNC1mNmZmYTI2ZmE4OTUiLCJhcHBfaWQiOiJfX2lkYXB0aXZlX2N5YnJfdXNlcl9vaWRjIn0.tLwyJnjWcADjYYgVgbSPBbid6PzQqca5CEkQm2CT8WnyhVTfQGTZzirCLJzNlICCF41k5x6qpZnq9tpnLBv_KK1VKxhib78ZDXn_oIWN4xULMlAlicAoocmN4vwtGmp7Of5554bwCuaJ_XWhrR1EsDgneg2kemeBHlv6eGDeb8MQvlcY65yLuN-gRY-7NN8I1NI3i3yxD9VkPWYQo0xPn-vN5_w-9WIjIBVZBeTRYAOr0RKl3_qGzrkvREOIiKWsIW_86pKouYgjV-to3dxnq_nvdsLK8KiUZMzB5zcMQ_Z2jwWV-gkpS1iXsLdWJW8sKEU6LG1lZ6jMpcmFV-HURw",
    "token_type": "Bearer",
    "expires_in": 900
}

# Get Users
- https://kpmg-testing.privilegecloud.cyberark.cloud/PasswordVault/API/Users/
- bearer token 
- {
    "Users": [
        {
            "id": 7,
            "username": "CyberarkAccountsIntegration",
            "source": "CyberArk",
            "userType": "Built-InAdmins",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "CYBERARKACCOUNTSINTEGRATION",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "8e032552-4cb0-408a-93a2-28ad03c57c94"
        },
        {
            "id": 8,
            "username": "CyberarkRotationService",
            "source": "CyberArk",
            "userType": "Built-InAdmins",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "30aa1217-17f0-4f33-9aea-0c00d87e4766"
        },
        {
            "id": 9,
            "username": "CyberarkAccessService",
            "source": "CyberArk",
            "userType": "Built-InAdmins",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "CYBERARKACCESSSERVICE",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "da6502cc-188f-4c68-8661-7036292691ee"
        },
        {
            "id": 10,
            "username": "CyberarkDiscoveryService",
            "source": "CyberArk",
            "userType": "Built-InAdmins",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "CYBERARKDISCOVERYSERVICE",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "c05aa026-52d9-4ea0-a6a4-e67ec7e0816b"
        },
        {
            "id": 17,
            "username": "NotificationEngine",
            "source": "CyberArk",
            "userType": "ENE",
            "componentUser": true,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 31,
            "username": "saascorps-vault@cyberark.com",
            "source": "CyberArk",
            "userType": "SaaSSRV",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "AddNetworkAreas",
                "ManageDirectoryMapping",
                "ManageServerFileCategories",
                "AuditUsers",
                "BackupAllSafes",
                "RestoreAllSafes",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 32,
            "username": "InstallerUser@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "Install",
            "componentUser": true,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 34,
            "username": "CLOUDENGINEERING@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "fbfb3ee6-6c62-4efa-ae58-2d1404f1803b"
        },
        {
            "id": 38,
            "username": "PCLOUDCONSOLE@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "abd6edde-49e6-43c2-ba37-02deab158412"
        },
        {
            "id": 39,
            "username": "DPA_RDP_SERVICE_USER@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "2ad9f45e-3578-4c89-bda6-47f08db02bd3"
        },
        {
            "id": 42,
            "username": "PCLOUD_EPHEMERAL_ACCESS_SERVICE_USER@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "a79e7f84-3928-4a96-8c7a-c5b0ff346ee2"
        },
        {
            "id": 44,
            "username": "ACCESS_MGMT_USER@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "782daf9c-db18-43a1-a60d-16f0a087f832"
        },
        {
            "id": 54,
            "username": "shojana_r@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Shojana_R",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "c2c7bcc6-9560-44e0-8dff-5be221cd37ee"
        },
        {
            "id": 55,
            "username": "LS_SSU_AE1D8AC2-D80E-4645-AE59-F20860D13578",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "LS_SSU_AE1D8AC2-D80E-4645-AE5",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "78763c20-f8c4-4546-8e61-668f67c5ce5b"
        },
        {
            "id": 56,
            "username": "vineet.vij@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Vineet",
                "middleName": "",
                "lastName": "Vij"
            },
            "UUID": "04bf605c-cda6-441b-9978-ec6ae1c93fce"
        },
        {
            "id": 59,
            "username": "USER-PVWA-AE1D8AC2-D80E-4645-AE59-F20860D13578",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "USER-PVWA-AE1D8AC2-D80E-4645-",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "2a6d5b25-f1a4-4310-8e58-1a4ddc68ff4e"
        },
        {
            "id": 60,
            "username": "SYNCSERVICEUSER@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "2a65ad62-ad7f-4a39-bad0-63d3d7070ff8"
        },
        {
            "id": 61,
            "username": "identity-dpa-privilege-integration-user$@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "CyberArkServiceUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AuditUsers",
                "ResetUsersPasswords"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Installer",
                "middleName": "",
                "lastName": "Synchronizer"
            },
            "UUID": "50eff790-edf1-4556-94a5-63bdc1bebd20"
        },
        {
            "id": 62,
            "username": "PSMApp_VM1",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 63,
            "username": "PSMGw_VM1",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 67,
            "username": "PSMApp_VM2",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 68,
            "username": "PSMGw_VM2",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 69,
            "username": "omkargupta@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Omkargupta",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "1e173248-cc15-4e68-a640-b822a7ee64d9"
        },
        {
            "id": 71,
            "username": "sahilgupta@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "sahilgupta",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "9247f989-1c30-4f4b-8103-81f3f8005c72"
        },
        {
            "id": 74,
            "username": "cyberark-connec",
            "source": "CyberArk",
            "userType": "CPM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 75,
            "username": "PSMApp_cyberark-connec",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 76,
            "username": "PSMGw_cyberark-connec",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 79,
            "username": "SAASCORPS-UI@CYBERARK.CLOUD.43372",
            "source": "CyberArk",
            "userType": "SaasSRVUI",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "c3c99ad5-9205-4b0c-95bf-2ab1ade5b83c"
        },
        {
            "id": 93,
            "username": "PasswordManager",
            "source": "CyberArk",
            "userType": "CPM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 94,
            "username": "PSMApp_INDCDMZARKCON",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 95,
            "username": "PSMGw_INDCDMZARKCON",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 105,
            "username": "mrunalnasare@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Mrunal",
                "middleName": "",
                "lastName": "Nasare"
            },
            "UUID": "ff0f6224-fd79-4d35-820e-8919150e25bc"
        },
        {
            "id": 106,
            "username": "tejasnibrad@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Tejas",
                "middleName": "",
                "lastName": "Nibrad"
            },
            "UUID": "dada8e00-5854-444c-bcd4-db392c025d87"
        },
        {
            "id": 107,
            "username": "shivanityagi@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Shivani",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "ef477ff0-f096-455c-9cc8-abc25761355b"
        },
        {
            "id": 109,
            "username": "Prov_cyberark-connec",
            "source": "CyberArk",
            "userType": "AppProvider",
            "componentUser": true,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\Applications",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 110,
            "username": "AIMWebService",
            "source": "CyberArk",
            "userType": "AIMAccount",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\Applications",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 111,
            "username": "TestApp",
            "source": "CyberArk",
            "userType": "AIMAccount",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\Applications",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 112,
            "username": "srv-api@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Service",
                "middleName": "",
                "lastName": "API"
            },
            "UUID": "82b62fc4-916a-40b8-99a0-3625c2f058ac"
        },
        {
            "id": 114,
            "username": "prathameshjoshi@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Prathamesh",
                "middleName": "",
                "lastName": "Joshi"
            },
            "UUID": "ed8b8d05-9ced-4ba8-9377-953ed1a11f90"
        },
        {
            "id": 118,
            "username": "PVWAAppUser",
            "source": "CyberArk",
            "userType": "PVWA",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 121,
            "username": "shreyashpathak@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Shreyash",
                "middleName": "",
                "lastName": "Pathak"
            },
            "UUID": "f44db881-a196-4caf-b5d4-0926ff321f72"
        },
        {
            "id": 122,
            "username": "supriyasivaraj@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Supriya",
                "middleName": "",
                "lastName": "Sivaraj"
            },
            "UUID": "297aa190-9f45-43ab-ba22-1f6e8e001960"
        },
        {
            "id": 130,
            "username": "PSMApp_CA",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 131,
            "username": "PSMGw_CA",
            "source": "CyberArk",
            "userType": "PSM",
            "componentUser": true,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 132,
            "username": "sahilgupta@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "sahil",
                "middleName": "",
                "lastName": "gupta"
            },
            "UUID": "b4218730-4c59-46dd-8669-5682e9b3014b"
        },
        {
            "id": 133,
            "username": "prathameshjoshi@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "prathamesh",
                "middleName": "",
                "lastName": "joshi"
            },
            "UUID": "39b62bca-258b-46e9-a4a2-095dad4b0760"
        },
        {
            "id": 135,
            "username": "shivanityagi@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "shivani",
                "middleName": "",
                "lastName": "tyagi"
            },
            "UUID": "fe83a979-7157-4459-a383-f00ca0c63e28"
        },
        {
            "id": 137,
            "username": "sarovarsubba@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "sarovar",
                "middleName": "",
                "lastName": "subba"
            },
            "UUID": "7fbddf6b-2426-436c-a44f-616878391c12"
        },
        {
            "id": 140,
            "username": "shreyashpathak@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "shreyash",
                "middleName": "",
                "lastName": "pathak"
            },
            "UUID": "2f5491c0-1b63-4f68-a527-6967fc10204d"
        },
        {
            "id": 142,
            "username": "ca-localuser@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "CA",
                "middleName": "",
                "lastName": "User"
            },
            "UUID": "d093ea22-1ecf-4402-ba0b-926742ce5a46"
        },
        {
            "id": 143,
            "username": "Mike@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "Mike",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "c8e7b0e0-f76a-4972-8ea0-a29cda44bdf6"
        },
        {
            "id": 145,
            "username": "PVWAAppUser1",
            "source": "CyberArk",
            "userType": "PVWA",
            "componentUser": true,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 146,
            "username": "PVWAGWUser1",
            "source": "CyberArk",
            "userType": "PVWA",
            "componentUser": true,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 147,
            "username": "TelemetryUser1",
            "source": "CyberArk",
            "userType": "Telemetry",
            "componentUser": true,
            "vaultAuthorization": [
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        },
        {
            "id": 148,
            "username": "john@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddSafes",
                "AuditUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "John",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "86077635-fd3a-4213-b868-2f97894f07ad"
        },
        {
            "id": 158,
            "username": "sohamkhanna@kpmg",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "Soham",
                "middleName": "",
                "lastName": "Khanna"
            },
            "UUID": "03bb7da1-4098-418a-8839-40f502077c8a"
        },
        {
            "id": 161,
            "username": "mrunalnasare@kpmgtest.local",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "mrunal",
                "middleName": "",
                "lastName": "nasare"
            },
            "UUID": "8f2b36ab-be2a-48e3-ad67-b1ee73a4313d"
        },
        {
            "id": 162,
            "username": "sahil_g@cyberark.cloud.43372",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [
                "AddUpdateUsers",
                "AddSafes",
                "ManageServerFileCategories",
                "AuditUsers",
                "ResetUsersPasswords",
                "ActivateUsers"
            ],
            "location": "\\",
            "personalDetails": {
                "firstName": "oauth",
                "middleName": "",
                "lastName": ""
            },
            "UUID": "009a7988-6106-42f8-99d4-f6ffa26fa895"
        },
        {
            "id": 164,
            "username": "sai",
            "source": "CyberArk",
            "userType": "EPVUser",
            "componentUser": false,
            "vaultAuthorization": [],
            "location": "\\",
            "personalDetails": {
                "firstName": "",
                "middleName": "",
                "lastName": ""
            }
        }
    ],
    "Total": 59
}

# Create User - {{base_url}}/PasswordVault/API/Users
- {
  "username": "sahil1111",
  "initialPassword": "Password@123",
  "userTypeName": "EPVUser",
  "changePasswordOnTheNextLogon": false,
  "businessAddress": {
    "workStreet": "CyberArk Street",
    "workCity": "Delhi",
    "workCountry": "India"
  },
  "enableUser": true
}

# List all Safes - {{base_url}}/PasswordVault/API/Safes
- GET METHOD
{
    "value": [
        {
            "safeNumber": 2,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 30,
            "autoPurgeEnabled": false,
            "creationTime": 1759757958,
            "lastModificationTime": 1783472400891778,
            "safeUrlId": "VaultInternal",
            "safeName": "VaultInternal",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 3,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 30,
            "autoPurgeEnabled": false,
            "creationTime": 1759757958,
            "lastModificationTime": 1783493709780440,
            "safeUrlId": "Notification%20Engine",
            "safeName": "Notification Engine",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 6,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1759759375,
            "lastModificationTime": 1783472401269570,
            "safeUrlId": "SharedAuth_Internal",
            "safeName": "SharedAuth_Internal",
            "description": "",
            "managingCPM": "PasswordManager,cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 7,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": true,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 30,
            "autoPurgeEnabled": true,
            "creationTime": 1759759375,
            "lastModificationTime": 1783472401303578,
            "safeUrlId": "PVWAReports",
            "safeName": "PVWAReports",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 8,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1759759375,
            "lastModificationTime": 1783472401331880,
            "safeUrlId": "PVWATicketingSystem",
            "safeName": "PVWATicketingSystem",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 9,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1759759375,
            "lastModificationTime": 1783472401359206,
            "safeUrlId": "PVWAPublicData",
            "safeName": "PVWAPublicData",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 13,
            "location": "\\",
            "creator": {
                "id": "2",
                "name": "Administrator"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1759759678,
            "lastModificationTime": 1783472402860915,
            "safeUrlId": "TelemetryConfig",
            "safeName": "TelemetryConfig",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 15,
            "location": "\\",
            "creator": {
                "id": "04bf605c-cda6-441b-9978-ec6ae1c93fce",
                "name": "vineet.vij@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1759842552,
            "lastModificationTime": 1783472402900476,
            "safeUrlId": "Test%20Safe_Web%20App",
            "safeName": "Test Safe_Web App",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 16,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1760006703,
            "lastModificationTime": 1783472402945055,
            "safeUrlId": "PSM",
            "safeName": "PSM",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 20,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 30,
            "autoPurgeEnabled": false,
            "creationTime": 1760006704,
            "lastModificationTime": 1783472403234172,
            "safeUrlId": "PSMUniversalConnectors",
            "safeName": "PSMUniversalConnectors",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 22,
            "location": "\\",
            "creator": {
                "id": "04bf605c-cda6-441b-9978-ec6ae1c93fce",
                "name": "vineet.vij@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1760007421,
            "lastModificationTime": 1783472403306246,
            "safeUrlId": "Test%20Safe_RDP",
            "safeName": "Test Safe_RDP",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 23,
            "location": "\\",
            "creator": {
                "id": "67",
                "name": "PSMApp_VM2"
            },
            "olacEnabled": true,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 180,
            "autoPurgeEnabled": true,
            "creationTime": 1760434535,
            "lastModificationTime": 1783472403430321,
            "safeUrlId": "PSMRecordings",
            "safeName": "PSMRecordings",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 26,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 5,
            "autoPurgeEnabled": false,
            "creationTime": 1761316809,
            "lastModificationTime": 1783472403479268,
            "safeUrlId": "cyberark-connec",
            "safeName": "cyberark-connec",
            "description": "",
            "managingCPM": "cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 30,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 0,
            "autoPurgeEnabled": false,
            "creationTime": 1761316810,
            "lastModificationTime": 1783472403632051,
            "safeUrlId": "cyberark-connec_Accounts",
            "safeName": "cyberark-connec_Accounts",
            "description": "",
            "managingCPM": "cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 32,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 0,
            "autoPurgeEnabled": false,
            "creationTime": 1761316810,
            "lastModificationTime": 1783472403713053,
            "safeUrlId": "PasswordManager_Pending",
            "safeName": "PasswordManager_Pending",
            "description": "",
            "managingCPM": "PasswordManager,cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 33,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 0,
            "autoPurgeEnabled": false,
            "creationTime": 1761316810,
            "lastModificationTime": 1783472403749573,
            "safeUrlId": "AccountsFeedADAccounts",
            "safeName": "AccountsFeedADAccounts",
            "description": "",
            "managingCPM": "PasswordManager,cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 34,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 1,
            "autoPurgeEnabled": false,
            "creationTime": 1761316810,
            "lastModificationTime": 1783472403799853,
            "safeUrlId": "AccountsFeedDiscoveryLogs",
            "safeName": "AccountsFeedDiscoveryLogs",
            "description": "",
            "managingCPM": "PasswordManager,cyberark-connec",
            "isExpiredMember": false
        },
        {
            "safeNumber": 35,
            "location": "\\",
            "creator": {
                "id": "9247f989-1c30-4f4b-8103-81f3f8005c72",
                "name": "sahilgupta@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1761318812,
            "lastModificationTime": 1783472403842466,
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "description": "",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 43,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 5,
            "autoPurgeEnabled": false,
            "creationTime": 1763995094,
            "lastModificationTime": 1783472403884595,
            "safeUrlId": "PasswordManager",
            "safeName": "PasswordManager",
            "description": "",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 47,
            "location": "\\",
            "creator": {
                "id": "32",
                "name": "InstallerUser@cyberark.cloud.43372"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 0,
            "autoPurgeEnabled": false,
            "creationTime": 1763995095,
            "lastModificationTime": 1783472404078938,
            "safeUrlId": "PasswordManager_Accounts",
            "safeName": "PasswordManager_Accounts",
            "description": "",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 48,
            "location": "\\",
            "creator": {
                "id": "1e173248-cc15-4e68-a640-b822a7ee64d9",
                "name": "omkargupta@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1767859446,
            "lastModificationTime": 1783472404120795,
            "safeUrlId": "Test-SNOW",
            "safeName": "Test-SNOW",
            "description": "",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 49,
            "location": "\\",
            "creator": {
                "id": "1e173248-cc15-4e68-a640-b822a7ee64d9",
                "name": "omkargupta@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1768303716,
            "lastModificationTime": 1783472404164732,
            "safeUrlId": "Linux",
            "safeName": "Linux",
            "description": "",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 52,
            "location": "\\",
            "creator": {
                "id": "dada8e00-5854-444c-bcd4-db392c025d87",
                "name": "tejasnibrad@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1769581643,
            "lastModificationTime": 1783472404296492,
            "safeUrlId": "TestApp",
            "safeName": "TestApp",
            "description": "For testing CCP",
            "managingCPM": "PasswordManager",
            "isExpiredMember": false
        },
        {
            "safeNumber": 53,
            "location": "\\",
            "creator": {
                "id": "9247f989-1c30-4f4b-8103-81f3f8005c72",
                "name": "sahilgupta@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1779184094,
            "lastModificationTime": 1783472404328846,
            "safeUrlId": "Sahil",
            "safeName": "Sahil",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        },
        {
            "safeNumber": 54,
            "location": "\\",
            "creator": {
                "id": "dada8e00-5854-444c-bcd4-db392c025d87",
                "name": "tejasnibrad@kpmg"
            },
            "olacEnabled": false,
            "numberOfVersionsRetention": null,
            "numberOfDaysRetention": 7,
            "autoPurgeEnabled": false,
            "creationTime": 1779260001,
            "lastModificationTime": 1783472404360189,
            "safeUrlId": "Saviynt%20Litmos%20Test",
            "safeName": "Saviynt Litmos Test",
            "description": "",
            "managingCPM": "",
            "isExpiredMember": false
        }
    ],
    "count": 38,
    "nextLink": "API/Safes?offset=25&limit=25&useCache=False"
}

# List Safes Members - {{base_url}}/PasswordVault/API/Safes/{{safeName}}/Members
- GET METHOD
{
    "value": [
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "9247f989-1c30-4f4b-8103-81f3f8005c72",
            "memberName": "sahilgupta@kpmg",
            "memberType": "User",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": true,
            "permissions": {
                "useAccounts": true,
                "retrieveAccounts": true,
                "listAccounts": true,
                "addAccounts": true,
                "updateAccountContent": true,
                "updateAccountProperties": true,
                "initiateCPMAccountManagementOperations": true,
                "specifyNextAccountContent": true,
                "renameAccounts": true,
                "deleteAccounts": true,
                "unlockAccounts": true,
                "manageSafe": true,
                "manageSafeMembers": true,
                "backupSafe": true,
                "viewAuditLog": true,
                "viewSafeMembers": true,
                "accessWithoutConfirmation": true,
                "createFolders": true,
                "deleteFolders": true,
                "moveAccountsAndFolders": true,
                "requestsAuthorizationLevel1": true,
                "requestsAuthorizationLevel2": false
            }
        },
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "65",
            "memberName": "PSMAppUsers",
            "memberType": "Group",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": false,
            "permissions": {
                "useAccounts": false,
                "retrieveAccounts": false,
                "listAccounts": true,
                "addAccounts": false,
                "updateAccountContent": false,
                "updateAccountProperties": false,
                "initiateCPMAccountManagementOperations": false,
                "specifyNextAccountContent": false,
                "renameAccounts": false,
                "deleteAccounts": false,
                "unlockAccounts": true,
                "manageSafe": false,
                "manageSafeMembers": false,
                "backupSafe": false,
                "viewAuditLog": false,
                "viewSafeMembers": false,
                "accessWithoutConfirmation": false,
                "createFolders": false,
                "deleteFolders": false,
                "moveAccountsAndFolders": false,
                "requestsAuthorizationLevel1": false,
                "requestsAuthorizationLevel2": false
            }
        },
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "Privilege_Cloud_Admins_ID",
            "memberName": "Privilege Cloud Administrators",
            "memberType": "Group",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": false,
            "permissions": {
                "useAccounts": true,
                "retrieveAccounts": true,
                "listAccounts": true,
                "addAccounts": true,
                "updateAccountContent": true,
                "updateAccountProperties": true,
                "initiateCPMAccountManagementOperations": true,
                "specifyNextAccountContent": true,
                "renameAccounts": true,
                "deleteAccounts": true,
                "unlockAccounts": true,
                "manageSafe": true,
                "manageSafeMembers": true,
                "backupSafe": true,
                "viewAuditLog": true,
                "viewSafeMembers": true,
                "accessWithoutConfirmation": true,
                "createFolders": true,
                "deleteFolders": true,
                "moveAccountsAndFolders": true,
                "requestsAuthorizationLevel1": true,
                "requestsAuthorizationLevel2": false
            }
        },
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "93",
            "memberName": "PasswordManager",
            "memberType": "User",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": false,
            "permissions": {
                "useAccounts": true,
                "retrieveAccounts": true,
                "listAccounts": true,
                "addAccounts": true,
                "updateAccountContent": true,
                "updateAccountProperties": true,
                "initiateCPMAccountManagementOperations": true,
                "specifyNextAccountContent": true,
                "renameAccounts": true,
                "deleteAccounts": true,
                "unlockAccounts": true,
                "manageSafe": false,
                "manageSafeMembers": false,
                "backupSafe": false,
                "viewAuditLog": true,
                "viewSafeMembers": false,
                "accessWithoutConfirmation": false,
                "createFolders": true,
                "deleteFolders": true,
                "moveAccountsAndFolders": true,
                "requestsAuthorizationLevel1": false,
                "requestsAuthorizationLevel2": false
            }
        },
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "DPA_RDP_Privilege_Cloud_Secrets_Access",
            "memberName": "DPA RDP Privilege Cloud Secrets Access",
            "memberType": "Group",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": false,
            "permissions": {
                "useAccounts": true,
                "retrieveAccounts": true,
                "listAccounts": true,
                "addAccounts": true,
                "updateAccountContent": true,
                "updateAccountProperties": true,
                "initiateCPMAccountManagementOperations": true,
                "specifyNextAccountContent": true,
                "renameAccounts": true,
                "deleteAccounts": true,
                "unlockAccounts": true,
                "manageSafe": true,
                "manageSafeMembers": true,
                "backupSafe": true,
                "viewAuditLog": true,
                "viewSafeMembers": true,
                "accessWithoutConfirmation": true,
                "createFolders": true,
                "deleteFolders": true,
                "moveAccountsAndFolders": true,
                "requestsAuthorizationLevel1": true,
                "requestsAuthorizationLevel2": false
            }
        },
        {
            "safeUrlId": "KPMG-Accounts",
            "safeName": "KPMG-Accounts",
            "safeNumber": 35,
            "memberId": "118",
            "memberName": "PVWAAppUser",
            "memberType": "User",
            "membershipExpirationDate": null,
            "isExpiredMembershipEnable": false,
            "isPredefinedUser": false,
            "isReadOnly": false,
            "permissions": {
                "useAccounts": true,
                "retrieveAccounts": true,
                "listAccounts": true,
                "addAccounts": true,
                "updateAccountContent": true,
                "updateAccountProperties": true,
                "initiateCPMAccountManagementOperations": true,
                "specifyNextAccountContent": true,
                "renameAccounts": true,
                "deleteAccounts": true,
                "unlockAccounts": true,
                "manageSafe": true,
                "manageSafeMembers": true,
                "backupSafe": true,
                "viewAuditLog": true,
                "viewSafeMembers": true,
                "accessWithoutConfirmation": true,
                "createFolders": true,
                "deleteFolders": true,
                "moveAccountsAndFolders": true,
                "requestsAuthorizationLevel1": true,
                "requestsAuthorizationLevel2": false
            }
        }
    ],
    "count": 6
}

# Create Safe - {{base_url}}/PasswordVault/API/Safes
- POST METHOD
- body : 
{
  "SafeName": "TestSafe",
  "Description": "",
  "OLACEnabled": false,
  "ManagingCPM": "PasswordManager",
  "NumberOfVersionsRetention": 5
}

# Add member to Safe - {{base_url}}/PasswordVault/API/Safes/{safeName}/Members
- POST METHOD
- body : 
{
  "MemberName": "sahilgupta@kpmg",
  "MemberType": "User",
  "Permissions": {
    "UseAccounts": true,
    "RetrieveAccounts": true,
    "ListAccounts": true,
    "AddAccounts": true,
    "UpdateAccountContent": true
  }
}
