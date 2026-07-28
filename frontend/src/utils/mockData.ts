import { DashboardKPIData, RecentActivityEvent } from '../types';

export const initialKPIData: DashboardKPIData = {
  todaysRequests: 42,
  todaysRequestsTrend: '+12% from last 24h',
  successfulRequests: 39,
  successfulPercentage: '92.8% Completion',
  failedRequests: 0,
  failedAttentionText: 'Requires Attention',
  avgExecutionTimeSec: 5,
  avgExecutionTimeTrend: 'Optimal Performance'
};

export const initialRecentActivities: RecentActivityEvent[] = [
  {
    id: 'act-1',
    type: 'SAFE_CREATED',
    title: 'Safe Provisioning Complete',
    description: 'Safe "SALES_APP_01" created by System in Vault "EPV_CORE_01".',
    timestamp: '10:45 AM',
    status: 'success'
  },
  {
    id: 'act-2',
    type: 'VAULT_TIMEOUT',
    title: 'API Authentication Failure',
    description: 'Vault connection timeout for node DC-02 during token exchange.',
    timestamp: '09:12 AM',
    status: 'failed'
  },
  {
    id: 'act-3',
    type: 'ACCOUNT_CREATED',
    title: 'Bulk Upload Succeeded',
    description: '12 privilege objects successfully onboarded into PAM safe.',
    timestamp: '08:45 AM',
    status: 'success'
  },
  {
    id: 'act-4',
    type: 'ROLE_ASSIGNED',
    title: 'Privilege Cloud Group Synced',
    description: 'Added 4 users to "Privilege Cloud Users" group.',
    timestamp: '07:30 AM',
    status: 'info'
  },
  {
    id: 'act-5',
    type: 'AUTH_FAILURE',
    title: 'Client Credentials Rejected',
    description: 'Invalid Client Secret supplied for App ID "kpmg-sec-auto".',
    timestamp: '06:15 AM',
    status: 'warning'
  }
];

// export const initialAuditLogs: AuditLogEntry[] = [
//   {
//     id: 'audit-101',
//     timestamp: '2026-07-21T10:20:00.000Z',
//     requestId: '24f15dec-3d57-463f-84ac-f114ac976ea6',
//     requestedBy: 'Soham D.',
//     username: 'soham_test',
//     userEmail: 'soham.d@enterprise.com',
//     safe: 'Prod-DB-Admin',
//     account: 'root-svc-01',
//     platform: 'Windows Domain',
//     durationMs: 2938,
//     status: 'SUCCESS',
//     message: 'Provisioning complete. User and safe initialized.',
//     stepsSummary: { user: true, groups: true, safe: true, account: true },
//     rawPayload: {
//       username: 'soham_test',
//       email: 'soham.d@enterprise.com',
//       firstName: 'Soham',
//       lastName: 'D',
//       account: {
//         username: 'root-svc-01',
//         platformId: 'Windows Domain',
//         address: 'dc01.prod.local'
//       }
//     },
//     rawResponse: {
//       success: true,
//       message: 'User onboarded successfully',
//       requestId: '24f15dec-3d57-463f-84ac-f114ac976ea6',
//       requestedAt: '2026-07-21T10:19:57.062Z',
//       completedAt: '2026-07-21T10:20:00.000Z',
//       durationMs: 2938,
//       steps: {
//         user: { status: 'already_exists', userId: 180, username: 'soham_test', userType: 'EPVUser' },
//         groupMemberships: [{ status: 'already_member', groupId: 70, groupName: 'Privilege Cloud Users' }],
//         safe: { status: 'already_exists', safeId: 69, safeName: 'Prod-DB-Admin' },
//         safeMembership: { status: 'already_added', safeName: 'Prod-DB-Admin' },
//         account: { status: 'already_exists', accountId: '69_4', userName: 'root-svc-01', platformId: 'Windows Domain', address: 'dc01.prod.local' }
//       }
//     }
//   },
//   {
//     id: 'audit-102',
//     timestamp: '2026-07-21T10:45:12.000Z',
//     requestId: '91d8e12b-7c11-4e89-82a0-43b900fa2110',
//     requestedBy: 'Alex Lee',
//     username: 'alex_dev_22',
//     userEmail: 'alex.lee@enterprise.com',
//     safe: 'Web-Front-LB',
//     account: 'admin_web',
//     platform: 'Linux SSH',
//     durationMs: 5200,
//     status: 'FAILURE',
//     message: 'Vault API Timeout (504) during safe membership assignment.',
//     stepsSummary: { user: true, groups: true, safe: true, account: false },
//     rawPayload: {
//       username: 'alex_dev_22',
//       email: 'alex.lee@enterprise.com',
//       firstName: 'Alex',
//       lastName: 'Lee',
//       account: {
//         username: 'admin_web',
//         platformId: 'Linux SSH',
//         address: 'lb01.web.internal'
//       }
//     },
//     rawResponse: {
//       success: false,
//       message: 'Failed to fetch CyberArk access token: Gateway Timeout (504).'
//     }
//   },
//   {
//     id: 'audit-103',
//     timestamp: '2026-07-21T11:12:30.000Z',
//     requestId: 'a7189c44-32b0-4581-99cd-0021fa418931',
//     requestedBy: 'Maria R.',
//     username: 'm_rodriguez',
//     userEmail: 'm.rodriguez@enterprise.com',
//     safe: 'Cloud-Mgmt-Root',
//     account: 'aws_iam_admin',
//     platform: 'AWS IAM Access Key',
//     durationMs: 3120,
//     status: 'SUCCESS',
//     message: 'IAM Role Assumed and Master Key stored in CyberArk Vault.',
//     stepsSummary: { user: true, groups: true, safe: true, account: true },
//     rawPayload: {
//       username: 'm_rodriguez',
//       email: 'm.rodriguez@enterprise.com',
//       firstName: 'Maria',
//       lastName: 'Rodriguez',
//       account: {
//         username: 'aws_iam_admin',
//         platformId: 'AWS IAM Access Key',
//         address: 'aws.amazon.com/arn:aws:iam::123456789'
//       }
//     },
//     rawResponse: {
//       success: true,
//       message: 'User onboarded successfully',
//       requestId: 'a7189c44-32b0-4581-99cd-0021fa418931',
//       requestedAt: '2026-07-21T11:12:26.880Z',
//       completedAt: '2026-07-21T11:12:30.000Z',
//       durationMs: 3120,
//       steps: {
//         user: { status: 'created', userId: 204, username: 'm_rodriguez', userType: 'EPVUser' },
//         groupMemberships: [{ status: 'added', groupId: 70, groupName: 'Privilege Cloud Users' }],
//         safe: { status: 'created', safeId: 102, safeName: 'Cloud-Mgmt-Root' },
//         safeMembership: { status: 'added', safeName: 'Cloud-Mgmt-Root' },
//         account: { status: 'created', accountId: '102_1', userName: 'aws_iam_admin', platformId: 'AWS IAM Access Key', address: 'aws.amazon.com' }
//       }
//     }
//   },
//   {
//     id: 'audit-104',
//     timestamp: '2026-07-21T11:58:04.000Z',
//     requestId: 'f491c01e-087a-42d1-b0e2-8812c30045e1',
//     requestedBy: 'System',
//     username: 'auto_rotation_svc',
//     userEmail: 'system@enterprise.com',
//     safe: 'Vault-Core-Keys',
//     account: 'master_key_v1',
//     platform: 'CyberArk Vault Internal',
//     durationMs: 1450,
//     status: 'IN_PROGRESS',
//     message: 'Rotating master keys and validating platform policies...',
//     stepsSummary: { user: true, groups: true, safe: true, account: false }
//   },
//   {
//     id: 'audit-105',
//     timestamp: '2026-07-21T12:30:15.000Z',
//     requestId: '6219df0a-81a1-43e5-a22b-99f78231012f',
//     requestedBy: 'Sarah Miller',
//     username: 'smiller_adm',
//     userEmail: 'sarah.miller@enterprise.com',
//     safe: 'INFRA_ADMIN_S1',
//     account: 'svc_infra_mgr',
//     platform: 'Windows Domain',
//     durationMs: 2840,
//     status: 'SUCCESS',
//     message: 'Account onboarded successfully with Windows Domain platform.',
//     stepsSummary: { user: true, groups: true, safe: true, account: true },
//     rawPayload: {
//       username: 'smiller_adm',
//       email: 'sarah.miller@enterprise.com',
//       firstName: 'Sarah',
//       lastName: 'Miller',
//       account: {
//         username: 'svc_infra_mgr',
//         platformId: 'Windows Domain',
//         address: 'dc02.infra.local'
//       }
//     },
//     rawResponse: {
//       success: true,
//       message: 'User onboarded successfully',
//       requestId: '6219df0a-81a1-43e5-a22b-99f78231012f',
//       requestedAt: '2026-07-21T12:30:12.160Z',
//       completedAt: '2026-07-21T12:30:15.000Z',
//       durationMs: 2840,
//       steps: {
//         user: { status: 'already_exists', userId: 192, username: 'smiller_adm', userType: 'EPVUser' },
//         groupMemberships: [{ status: 'already_member', groupId: 70, groupName: 'Privilege Cloud Users' }],
//         safe: { status: 'already_exists', safeId: 88, safeName: 'INFRA_ADMIN_S1' },
//         safeMembership: { status: 'already_added', safeName: 'INFRA_ADMIN_S1' },
//         account: { status: 'created', accountId: '88_12', userName: 'svc_infra_mgr', platformId: 'Windows Domain', address: 'dc02.infra.local' }
//       }
//     }
//   }
// ];
