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

# Get Accounts - {{base_url}}/PasswordVault/API/Accounts
- GET METHOD
 - {
    "value": [
        {
            "categoryModificationTime": 1780069406,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "CyberArk_Test_Supriya",
            "id": "59_3",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-in-svc-supriya",
            "address": "kpmgtest.local",
            "userName": "in-svc-supriya",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)MaxRetries",
                "status": "failure",
                "lastModifiedTime": 1780042160
            },
            "createdTime": 1780042160
        },
        {
            "categoryModificationTime": 1761316837,
            "platformId": "",
            "safeName": "cyberark-connec_Accounts",
            "id": "30_3",
            "name": "PluginManagerUser",
            "address": "172.17.0.4",
            "userName": "PluginManagerUser",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1766737104
            },
            "createdTime": 1761316837
        },
        {
            "categoryModificationTime": 1771406736,
            "platformId": "WinDomain",
            "safeName": "cyberark-connec",
            "id": "26_7",
            "name": "Operating System-WinDomain-kpmg-testuser01",
            "address": "kpmg",
            "userName": "testuser01",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmg"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1771405651
            },
            "remoteMachinesAccess": {
                "remoteMachines": "192.168.10.15;192.168.10.16;192.168.10.17",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1771405467
        },
        {
            "categoryModificationTime": 1776072774,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_4",
            "name": "admin01",
            "address": "cyberark-connec",
            "userName": "admin01",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "cyberark-connec"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1769598588
            },
            "createdTime": 1761323254
        },
        {
            "categoryModificationTime": 1776083015,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_23",
            "name": "cyberarkadmin",
            "address": "172.17.0.5",
            "userName": "cyberarkadmin",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": ".\\"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1776083014
            },
            "createdTime": 1776073449
        },
        {
            "categoryModificationTime": 1761318956,
            "platformId": "KPMGSNOWDom",
            "safeName": "KPMG-Accounts",
            "id": "35_3",
            "name": "Operating System-KPMGSNOWDom-kpmg.com-vineet",
            "address": "kpmg.com",
            "userName": "vineet",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1761318955
            },
            "createdTime": 1761318955
        },
        {
            "categoryModificationTime": 1781511732,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "KPMG-Accounts",
            "id": "35_26",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-in-svc-tejasnibrad",
            "address": "kpmgtest.local",
            "userName": "in-svc-tejasnibrad",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1781511731,
                "lastReconciledTime": 1781511732
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local;Target-Win.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781253528
        },
        {
            "categoryModificationTime": 1775732297,
            "platformId": "UnixSSH",
            "safeName": "KPMG-Accounts",
            "id": "35_22",
            "name": "Operating System-UnixSSH-ec2-34-236-151-100.compute-1.amazonaws.com-ec2-user",
            "address": "ec2-3-235-223-231.compute-1.amazonaws.com",
            "userName": "ec2-user",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1775731653
            },
            "createdTime": 1775731653
        },
        {
            "categoryModificationTime": 1770293591,
            "platformId": "WinDomain",
            "safeName": "KPMG-Accounts",
            "id": "35_17",
            "name": "Operating System-WinDomain-jublcorp.com-v-omkar.gupta4_rw",
            "address": "jublcorp.com",
            "userName": "v-omkar.gupta4_rw",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1770293590
            },
            "createdTime": 1770293590
        },
        {
            "categoryModificationTime": 1768309826,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_12",
            "name": "Operating System-WindowsServerLocalAccount-Test-172.16.0.5-azureadmin",
            "address": "20.207.152.236",
            "userName": "azureadmin",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1768306518
            },
            "createdTime": 1768306518
        },
        {
            "categoryModificationTime": 1765367514,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_9",
            "name": "Operating System-WinServerLocal-172.17.0.4-PAM_admin",
            "address": "172.17.0.4",
            "userName": "PAM_admin",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1765367514
            },
            "createdTime": 1765367514
        },
        {
            "categoryModificationTime": 1769591911,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_13",
            "name": "Operating System-WinServerLocal-172.17.0.4-PAM_Recon",
            "address": "172.17.0.4",
            "userName": "PAM_Recon",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "cyberark-connec"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)UnrecoverableError",
                "status": "failure",
                "lastModifiedTime": 1769591911,
                "lastVerifiedTime": 1769591107
            },
            "createdTime": 1769590855
        },
        {
            "categoryModificationTime": 1782707198,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_14",
            "name": "Operating System-WinServerLocal-172.17.0.4-TestUser",
            "address": "cyberark-connec",
            "userName": "TestUser",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "cyberark-connec"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "status": "success",
                "lastModifiedTime": 1774948053,
                "lastVerifiedTime": 1774948364
            },
            "createdTime": 1769592148
        },
        {
            "categoryModificationTime": 1770291329,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_16",
            "name": "Operating System-WinServerLocal-192.168.0.55-admin01",
            "address": "192.168.0.55",
            "userName": "admin01",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1770291328
            },
            "createdTime": 1770291328
        },
        {
            "categoryModificationTime": 1782699053,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_11",
            "name": "Operating System-WinServerLocal-192.168.7.108-testuser",
            "address": "192.168.7.107",
            "userName": "testuser",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)MaxRetries",
                "status": "failure",
                "lastModifiedTime": 1767770978
            },
            "createdTime": 1767770978
        },
        {
            "categoryModificationTime": 1776081916,
            "platformId": "WinServerLocal",
            "safeName": "KPMG-Accounts",
            "id": "35_24",
            "name": "Operating System-WinServerLocal-20.207.145.169-administrator",
            "address": "20.207.145.169",
            "userName": "administrator",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "wintestpam"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)UnrecoverableError",
                "status": "failure",
                "lastModifiedTime": 1776081916
            },
            "createdTime": 1776080081
        },
        {
            "categoryModificationTime": 1780250665,
            "platformId": "PSM-WebApp-Test",
            "safeName": "KPMG-Accounts",
            "id": "35_25",
            "name": "Website-WebApp_Test-httpskpmg-testing.cyberark.cloud-mrunalnasare@kpmgtest.local",
            "address": "https://kpmg-testing.cyberark.cloud",
            "userName": "mrunalnasare@kpmgtest.local",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1780250349
            },
            "createdTime": 1780250349
        },
        {
            "categoryModificationTime": 1779371504,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "kpmgtest_service_account",
            "id": "57_3",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-zsp_strongaccount",
            "address": "kpmgtest.local",
            "userName": "zsp_strongaccount",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779371504
            },
            "createdTime": 1779371504
        },
        {
            "categoryModificationTime": 1781180273,
            "platformId": "MSSql",
            "safeName": "kpmgtest_targetserver",
            "id": "56_6",
            "name": "Database-MSSql-172.17.0.4-root",
            "address": "172.17.0.4",
            "userName": "root",
            "secretType": "password",
            "platformAccountProperties": {
                "Port": "3306",
                "Database": "mysql"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1780400274
            },
            "createdTime": 1780400274
        },
        {
            "categoryModificationTime": 1781180290,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "kpmgtest_targetserver",
            "id": "56_4",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-in-svc-prathamesh",
            "address": "kpmgtest.local",
            "userName": "in-svc-prathamesh",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1779375932
            },
            "remoteMachinesAccess": {
                "remoteMachines": "172.17.0.4;172.17.0.6",
                "accessRestrictedToRemoteMachines": true
            },
            "createdTime": 1779375932
        },
        {
            "categoryModificationTime": 1781180302,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "kpmgtest_targetserver",
            "id": "56_3",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-in-svc-sahilgupta",
            "address": "kpmgtest.local",
            "userName": "in-svc-sahilgupta",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1779367506
            },
            "remoteMachinesAccess": {
                "remoteMachines": "172.17.0.4;172.17.0.5;172.17.0.6",
                "accessRestrictedToRemoteMachines": true
            },
            "createdTime": 1779367506
        },
        {
            "categoryModificationTime": 1781180198,
            "platformId": "UnixSSH",
            "safeName": "kpmgtest_targetserver",
            "id": "56_5",
            "name": "Operating System-UnixSSH-52.140.176.51-admin01",
            "address": "52.140.176.51",
            "userName": "admin01",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1780386236
            },
            "createdTime": 1780386236
        },
        {
            "categoryModificationTime": 1782672800,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "kpmgtest_targetserver",
            "id": "56_7",
            "name": "sahil-test",
            "address": "kpmgtest.local",
            "userName": "sahil-test",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1782672800
            },
            "createdTime": 1782672800
        },
        {
            "categoryModificationTime": 1781171187,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "KPMGTEST-Reconcile",
            "id": "61_3",
            "name": "Operating System-KPMG-Domain-Demo-kpmgtest.local-in-svc-reconcile",
            "address": "kpmgtest.local",
            "userName": "in-svc-reconcile",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1781170889
            },
            "createdTime": 1781170889
        },
        {
            "categoryModificationTime": 1775732903,
            "platformId": "UnixSSHKeys",
            "safeName": "Linux",
            "id": "49_7",
            "name": "Operating System-UnixSSHKeys-ec2-3-90-88-239.compute-1.amazonaws.com-ec2-user",
            "address": "ec2-3-90-88-239.compute-1.amazonaws.com",
            "userName": "ec2-user",
            "secretType": "key",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1775732902
            },
            "createdTime": 1775732902
        },
        {
            "categoryModificationTime": 1774885815,
            "platformId": "UnixSSHKeys",
            "safeName": "Linux",
            "id": "49_5",
            "name": "Operating System-UnixSSHKeys-ec2-98-93-80-124.compute-1.amazonaws.com-ec2-user",
            "address": "ec2-98-93-80-124.compute-1.amazonaws.com",
            "userName": "ec2-user",
            "secretType": "key",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)MaxRetries",
                "status": "failure",
                "lastModifiedTime": 1774858511
            },
            "createdTime": 1774857996
        },
        {
            "categoryModificationTime": 1774886099,
            "platformId": "UnixSSHKeys",
            "safeName": "Linux",
            "id": "49_6",
            "name": "Operating System-UnixSSHKeys-ec2-98-93-80-124.compute-1.amazonaws.com-ec2-user (1)",
            "address": "ec2-98-93-80-124.compute-1.amazonaws.com",
            "userName": "ec2-user",
            "secretType": "key",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)MaxRetries",
                "status": "failure",
                "lastModifiedTime": 1774858815
            },
            "createdTime": 1774858701
        },
        {
            "categoryModificationTime": 1781517428,
            "platformId": "Unix-Cred-Demo",
            "safeName": "Linux-Shared",
            "id": "62_3",
            "name": "Operating System-UnixSSH-52.140.176.51-linuxuser1",
            "address": "52.140.176.51",
            "userName": "linuxuser1",
            "secretType": "password",
            "platformAccountProperties": {
                "UseSudoOnReconcile": "Yes"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1781517424,
                "lastReconciledTime": 1781180362
            },
            "createdTime": 1781179532
        },
        {
            "categoryModificationTime": 1759758319,
            "platformId": "",
            "safeName": "Notification Engine",
            "id": "3_9",
            "name": "ses-creds",
            "userName": "AKIASY3PBFJKB6HYEOGD",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1759758319
            },
            "createdTime": 1759758319
        },
        {
            "categoryModificationTime": 1763995155,
            "platformId": "",
            "safeName": "PasswordManager_Accounts",
            "id": "47_3",
            "name": "PluginManagerUser",
            "address": "192.168.7.107",
            "userName": "PluginManagerUser",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1763995155
            },
            "createdTime": 1763995155
        },
        {
            "categoryModificationTime": 1779364809,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_12",
            "name": "PSMAdmin_CA",
            "address": "172.17.0.6",
            "userName": "PSMAdminConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779364809
            },
            "createdTime": 1779364809
        },
        {
            "categoryModificationTime": 1761318751,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_8",
            "name": "PSMAdmin_cyberark-connec",
            "address": "172.17.0.4",
            "userName": "PSMAdminConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1761318751
            },
            "createdTime": 1761318751
        },
        {
            "categoryModificationTime": 1763997170,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_10",
            "name": "PSMAdmin_INDCDMZARKCON",
            "address": "192.168.7.107",
            "userName": "PSMAdminConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1763997169
            },
            "createdTime": 1763997169
        },
        {
            "categoryModificationTime": 1760006705,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_4",
            "name": "PSMAdmin_VM1",
            "address": "10.0.0.4",
            "userName": "PSMAdminConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760006705
            },
            "createdTime": 1760006705
        },
        {
            "categoryModificationTime": 1760379867,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_6",
            "name": "PSMAdmin_VM2",
            "address": "10.0.0.4",
            "userName": "PSMAdminConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760379867
            },
            "createdTime": 1760379867
        },
        {
            "categoryModificationTime": 1779364809,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_11",
            "name": "PSMServer_CA",
            "address": "172.17.0.6",
            "userName": "PSMConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779364809
            },
            "createdTime": 1779364809
        },
        {
            "categoryModificationTime": 1761318751,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_7",
            "name": "PSMServer_cyberark-connec",
            "address": "172.17.0.4",
            "userName": "PSMConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1761318751
            },
            "createdTime": 1761318751
        },
        {
            "categoryModificationTime": 1763997169,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_9",
            "name": "PSMServer_INDCDMZARKCON",
            "address": "192.168.7.107",
            "userName": "PSMConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1763997169
            },
            "createdTime": 1763997169
        },
        {
            "categoryModificationTime": 1760006705,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_3",
            "name": "PSMServer_VM1",
            "address": "10.0.0.4",
            "userName": "PSMConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760006705
            },
            "createdTime": 1760006705
        },
        {
            "categoryModificationTime": 1760379867,
            "platformId": "",
            "safeName": "PSM",
            "id": "16_5",
            "name": "PSMServer_VM2",
            "address": "10.0.0.4",
            "userName": "PSMConnect",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760379867
            },
            "createdTime": 1760379867
        },
        {
            "categoryModificationTime": 1782154800,
            "platformId": "MySQL",
            "safeName": "sahil-db",
            "id": "67_3",
            "name": "Database-MySQL-cyberark-connec-root",
            "address": "cyberark-connec",
            "userName": "root",
            "secretType": "password",
            "platformAccountProperties": {
                "Port": "3306",
                "Database": "mysql"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1782154799
            },
            "createdTime": 1782154799
        },
        {
            "categoryModificationTime": 1783412806,
            "platformId": "MySQL",
            "safeName": "Sahil",
            "id": "53_6",
            "name": "Database-MySQL-CA-sahilgupta@kpmgtest.local",
            "address": "CA",
            "userName": "sahilgupta",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1783412728
            },
            "createdTime": 1783412728
        },
        {
            "categoryModificationTime": 1783416579,
            "platformId": "MySQL",
            "safeName": "Sahil",
            "id": "53_5",
            "name": "Database-MySQL-CA-sqluser",
            "address": "CA",
            "userName": "sqluser",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1783401829
            },
            "createdTime": 1783401829
        },
        {
            "categoryModificationTime": 1782542932,
            "platformId": "UnixSSHKeys",
            "safeName": "Sahil",
            "id": "53_4",
            "name": "Operating System-UnixSSHKeys-ec2-13-126-254-19.ap-south-1.compute.amazonaws.com-ubuntu",
            "address": "ec2-13-126-254-19.ap-south-1.compute.amazonaws.com",
            "userName": "root",
            "secretType": "key",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1782513926
            },
            "createdTime": 1782513926
        },
        {
            "categoryModificationTime": 1779184232,
            "platformId": "WinDomain",
            "safeName": "Sahil",
            "id": "53_3",
            "name": "Operating System-WinDomain-172.17.0.6-cyberarkadmin",
            "address": "172.17.0.6",
            "userName": "cyberarkadmin",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "172.17.0.6"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779184232
            },
            "createdTime": 1779184232
        },
        {
            "categoryModificationTime": 1779260165,
            "platformId": "WindowsServerLocalAccount-Test",
            "safeName": "Saviynt Litmos Test",
            "id": "54_3",
            "name": "Operating System-WindowsServerLocalAccount-Test-httpssaviynt.litmos.comaccountLogin-shreyashpathak@kpmg.com",
            "address": "https://saviynt.litmos.com/account/Login",
            "userName": "shreyashpathak@kpmg.com",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779260164
            },
            "createdTime": 1779260164
        },
        {
            "platformId": "",
            "safeName": "TelemetryConfig",
            "id": "13_3",
            "name": "salesforce_hash_key",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1781421286
            },
            "createdTime": 1759759679
        },
        {
            "categoryModificationTime": 1760380943,
            "platformId": "WindowsServerLocalAccount-Test",
            "safeName": "Test Safe_RDP",
            "id": "22_4",
            "name": "Operating System-WindowsServerLocalAccount-Test-20.193.128.184-Azureadmin1",
            "address": "20.193.128.184",
            "userName": "Azureadmin1",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "20.193.128.184"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760380943
            },
            "createdTime": 1760380943
        },
        {
            "categoryModificationTime": 1760380851,
            "platformId": "WindowsServerLocalAccount-Test",
            "safeName": "Test Safe_RDP",
            "id": "22_3",
            "name": "Operating System-WindowsServerLocalAccount-Test-4.213.182.40-Azureadmin",
            "address": "4.213.182.40",
            "userName": "Azureadmin",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "20.193.128.184"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1760007476
            },
            "createdTime": 1760007476
        },
        {
            "categoryModificationTime": 1760456078,
            "platformId": "WebApp_Test",
            "safeName": "Test Safe_Web App",
            "id": "15_3",
            "name": "Website-WebApp_Test-httpsacb4709.id.cyberark.cloud-vineet.vij@cyberark.cloud.43372",
            "address": "kpmg-testing.cyberark.cloud",
            "userName": "vineet.vij@cyberark.cloud.43372",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1759842605
            },
            "createdTime": 1759842605
        },
        {
            "categoryModificationTime": 1769581996,
            "platformId": "WindowsServerLocalAccount-Test",
            "safeName": "TestApp",
            "id": "52_3",
            "name": "testapp",
            "address": "cyberark-connec",
            "userName": "testapp",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1769581787
            },
            "createdTime": 1769581787
        },
        {
            "categoryModificationTime": 1769584296,
            "platformId": "WebApp_Test",
            "safeName": "TestApp",
            "id": "52_4",
            "name": "Website-WebApp_Test-auth.in.alero-aleroservice",
            "address": "auth.in.alero",
            "userName": "aleroservice",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1769584296
            },
            "createdTime": 1769584296
        },
        {
            "categoryModificationTime": 1781000452,
            "platformId": "WebApp_Test",
            "safeName": "Test-SNOW",
            "id": "48_5",
            "name": "Website-WebApp_Test-alero-Alero_user",
            "address": "alero",
            "userName": "Alero_user",
            "secretType": "password",
            "platformAccountProperties": {},
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "No Reason",
                "lastModifiedTime": 1781000452
            },
            "createdTime": 1781000452
        },
        {
            "categoryModificationTime": 1781523907,
            "platformId": "KPMG-Domain-Demo-EA",
            "safeName": "Windows Domain Account_ea",
            "id": "66_3",
            "name": "Operating System-KPMG-Domain-Demo-EA-kpmgtest.local-in-svc-shreyash-ea",
            "address": "kpmgtest.local",
            "userName": "in-svc-shared-ea",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1781523906,
                "lastReconciledTime": 1781259046,
                "lastVerifiedTime": 1781259355
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781509831
        },
        {
            "categoryModificationTime": 1781414363,
            "platformId": "KPMG-Domain-Demo",
            "safeName": "Windows Domain Account_John",
            "id": "64_3",
            "name": "Operating System-KPMG-Domain-Demo-wintest.kpmgtest.local-in-svc-john",
            "address": "wintest.kpmgtest.local",
            "userName": "in-svc-john",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "wintest.kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1781414362
            },
            "remoteMachinesAccess": {
                "remoteMachines": "wintest.kpmgtest.local;CA.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781414362
        },
        {
            "categoryModificationTime": 1781544733,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "Windows Domain Account_Mike",
            "id": "63_3",
            "name": "Operating System-KPMG-Domain-Demo-kpmgtest.local-in-svc-mike",
            "address": "kpmgtest.local",
            "userName": "in-svc-mike",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": false,
                "manualManagementReason": "(CPM)MaxRetries",
                "status": "failure",
                "lastModifiedTime": 1781544733,
                "lastReconciledTime": 1781512215
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781414226
        },
        {
            "categoryModificationTime": 1781511801,
            "platformId": "KPMG-Domain-Demo",
            "safeName": "WindowsDomainaccount_shared",
            "id": "65_3",
            "name": "Operating System-WinDomain-kpmgtest.local-in-svc-shared",
            "address": "kpmgtest.local",
            "userName": "in-svc-shared",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1781415350
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781415350
        },
        {
            "categoryModificationTime": 1781257145,
            "platformId": "KPMG-Domain-Demo",
            "safeName": "Windows-Domain-Shreyash",
            "id": "60_3",
            "name": "Operating System-KPMG-Domain-Demo-kpmgtest.local-in-svc-shreyash",
            "address": "kpmgtest.local",
            "userName": "in-svc-shreyash",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1781257144,
                "lastReconciledTime": 1781241299,
                "lastVerifiedTime": 1781172858
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781170314
        },
        {
            "categoryModificationTime": 1781269516,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "Windows-Domain-Shreyash",
            "id": "60_5",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-in-admin-shreyash",
            "address": "kpmgtest.local",
            "userName": "in-admin-shreyash",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "status": "success",
                "lastModifiedTime": 1781269515,
                "lastReconciledTime": 1781269515
            },
            "remoteMachinesAccess": {
                "remoteMachines": "CA.kpmgtest.local;wintest.kpmgtest.local;cyberark-connec.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1781269435
        },
        {
            "categoryModificationTime": 1782387282,
            "platformId": "MySQL",
            "safeName": "ZSP-Tejas",
            "id": "58_5",
            "name": "Database-MySQL-target-win.kpmgtest.local-target-scanner",
            "address": "target-win.kpmgtest.local",
            "userName": "target-scanner",
            "secretType": "password",
            "platformAccountProperties": {
                "Port": "3306",
                "Database": "mysql"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1782387281
            },
            "remoteMachinesAccess": {
                "remoteMachines": "target-win.kpmgtest.local",
                "accessRestrictedToRemoteMachines": false
            },
            "createdTime": 1782387281
        },
        {
            "categoryModificationTime": 1779856563,
            "platformId": "kpmgtest_domainaccounts",
            "safeName": "ZSP-Tejas",
            "id": "58_3",
            "name": "Operating System-kpmgtest_domainaccounts-kpmgtest.local-zsp-sa-tejas",
            "address": "kpmgtest.local",
            "userName": "zsp-sa-tejas",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "kpmgtest.local"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1779856563
            },
            "createdTime": 1779856563
        },
        {
            "categoryModificationTime": 1782298969,
            "platformId": "WinServerLocal",
            "safeName": "ZSP-Tejas",
            "id": "58_4",
            "name": "Operating System-WinServerLocal-target-win.kpmgtest.local-admin01",
            "address": "target-win.kpmgtest.local",
            "userName": "admin01",
            "secretType": "password",
            "platformAccountProperties": {
                "LogonDomain": "target-win"
            },
            "secretManagement": {
                "automaticManagementEnabled": true,
                "lastModifiedTime": 1782298969
            },
            "createdTime": 1782298969
        }
    ],
    "count": 62
}
# Create Account - {{base_url}}/PasswordVault/API/Accounts
- POST METHOD
- body : {
  "name": "sahil-test",
  "address": "kpmgtest.local",
  "userName": "sahil-test",
  "platformId": "kpmgtest_domainaccounts",
  "safeName": "kpmgtest_targetserver",
  "secretType": "password",
  "secret": "Password@123",
  "platformAccountProperties": {}
}
- response : {
    "categoryModificationTime": 1783665771,
    "platformId": "kpmgtest_domainaccounts",
    "safeName": "kpmgtest_targetserver",
    "id": "56_8",
    "name": "soham-test",
    "address": "kpmgtest.local",
    "userName": "sahil-test",
    "secretType": "password",
    "secretManagement": {
        "automaticManagementEnabled": true,
        "lastModifiedTime": 1783665771
    },
    "createdTime": 1783665771
}

# Reconcile - {{base_url}}/PasswordVault/API/Accounts/{account_id}/Reconcile

- POST METHOD
