export interface AccountConfig {
  username: string;
  platformId: string;
  address: string;
}

export interface OnboardingRequestPayload {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  account: AccountConfig;
}

export interface StepUserDetail {
  status: 'created' | 'already_exists' | 'failed' | 'pending' | 'in_progress';
  userId?: number;
  username: string;
  userType?: string;
  message?: string;
}

export interface StepGroupMembership {
  status: 'added' | 'already_member' | 'failed' | 'pending' | 'in_progress';
  groupId?: number;
  groupName: string;
  message?: string;
}

export interface StepSafeDetail {
  status: 'created' | 'already_exists' | 'failed' | 'pending' | 'in_progress';
  safeId?: number;
  safeName: string;
  message?: string;
}

export interface StepSafeMembership {
  status: 'added' | 'already_added' | 'failed' | 'pending' | 'in_progress';
  safeName: string;
  message?: string;
}

export interface StepAccountDetail {
  status: 'created' | 'already_exists' | 'failed' | 'pending' | 'in_progress';
  accountId?: string;
  userName: string;
  platformId: string;
  address: string;
  message?: string;
}

export interface OnboardingSteps {
  user?: StepUserDetail;
  groupMemberships?: StepGroupMembership[];
  safe?: StepSafeDetail;
  safeMembership?: StepSafeMembership;
  account?: StepAccountDetail;
}

export interface OnboardingSuccessResponse {
  success: true;
  message: string;
  requestId: string;
  requestedAt: string;
  completedAt: string;
  durationMs: number;
  steps: OnboardingSteps;
}

export interface OnboardingErrorResponse {
  success: false;
  message: string;
  requestId?: string;
  requestedAt?: string;
  completedAt?: string;
  durationMs?: number;
  steps?: OnboardingSteps;
}

export type OnboardingResponse = OnboardingSuccessResponse | OnboardingErrorResponse;

export type ExecutionStatus = 'SUCCESS' | 'FAILURE' | 'IN_PROGRESS' | 'PENDING';

export interface AuditLogEntry {
  _id: string;
  workflow: string;
  request: OnboardingRequestPayload;
  response: OnboardingResponse;
  createdAt: string;
}

export interface AuditKPIs {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageExecutionTime: number;
}

export interface AuditLogsResponse {
  kpis: AuditKPIs;
  auditLogs: AuditLogEntry[];
}

export interface DashboardKPIData {
  todaysRequests: number;
  todaysRequestsTrend: string;
  successfulRequests: number;
  successfulPercentage: string;
  failedRequests: number;
  failedAttentionText: string;
  avgExecutionTimeSec: number;
  avgExecutionTimeTrend: string;
}

export interface RecentActivityEvent {
  id: string;
  type: 'SAFE_CREATED' | 'ACCOUNT_CREATED' | 'ROLE_ASSIGNED' | 'VAULT_TIMEOUT' | 'AUTH_FAILURE' | 'USER_ONBOARDED';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'failed' | 'warning' | 'info';
}


export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user' | string;
}

export interface LoginPayload {
  username: string;
  password?: string;
}

export interface SignupPayload {
  username: string;
  password?: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

