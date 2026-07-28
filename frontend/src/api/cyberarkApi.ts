import axios from "axios";
import {
  OnboardingRequestPayload,
  OnboardingResponse,
  AuditLogEntry,
  AuditLogsResponse,
} from "../types";
import { s } from "motion/react-client";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function submitOnboardingRequest(
  payload: OnboardingRequestPayload,
): Promise<OnboardingResponse> {
  try {
    const response = await axios.post<OnboardingResponse>(
      `${API_BASE}/api/onboarding`,
      payload,
      {
        timeout: 20000,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        return {
          success: false,
          message:
            error.response.data?.message ||
            "Please log in with an administrator account to perform CyberArk onboarding.",
        };
      }

      if (error.response.data) {
        return error.response.data as OnboardingResponse;
      }
    }

    return {
      success: false,
      message:
        error.message ||
        "Failed to communicate with CyberArk PAM backend service.",
    };
  }
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    await axios.get(`${API_BASE}/api/health`, { timeout: 3000 });
    return true;
  } catch {
    return false;
  }
}

export async function fetchAuditLogs(): Promise<AuditLogsResponse> {
  try {
    const res = await axios.get<AuditLogsResponse>(
      `${API_BASE}/api/audit-logs`,
    );
    return res.data;
  } catch {
    return {
      kpis: {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        averageExecutionTime: 0,
      },
      auditLogs: [],
    };
  }
}
