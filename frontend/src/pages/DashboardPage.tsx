import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  CheckCircle2,
  AlertOctagon,
  Clock,
  PlusCircle,
  HelpCircle,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { StatCard } from "../components/StatCard";
import { ProvisioningProgressWidget } from "../components/ProvisioningProgressWidget";
import { DataTable, Column } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { WorkflowSuccessCard } from "../components/WorkflowSuccessCard";
import { RecentActivityPanel } from "../components/RecentActivityPanel";
import { RequestDrawer } from "../components/RequestDrawer";
import { fetchAuditLogs } from "../api/cyberarkApi";
import { initialKPIData, initialRecentActivities } from "../utils/mockData";
import { AuditKPIs, AuditLogEntry } from "../types";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);
  const [kpis, setKpis] = useState<AuditKPIs>({
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    averageExecutionTime: 0,
  });

  useEffect(() => {
    fetchAuditLogs().then((res) => {
      setKpis(res.kpis);
      setLogs(res.auditLogs);
    });
  }, []);

  // Columns for Recent Requests Table
  const columns: Column<AuditLogEntry>[] = [
    {
      header: "User",
      cell: (item) => {
        const reqBy =
          `${item.request?.firstName || ""} ${item.request?.lastName || ""}`.trim() ||
          item.request?.username ||
          "N/A";
        const uname =
          item.response?.steps?.user?.username ||
          item.request?.username ||
          "N/A";
        return (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#00338D] text-white flex items-center justify-center font-bold text-[10px]">
              {reqBy.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-xs">{reqBy}</p>
              <p className="text-[10px] text-slate-400 font-mono">{uname}</p>
            </div>
          </div>
        );
      },
    },
    {
      header: "Safe",
      cell: (item) => {
        const safeName = item.response?.steps?.safe?.safeName || "N/A";
        return (
          <span className="font-mono text-xs font-semibold text-[#00338D] bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100">
            {safeName}
          </span>
        );
      },
    },
    {
      header: "Status",
      cell: (item) => (
        <StatusBadge
          status={item.response?.success ? "SUCCESS" : "FAILURE"}
          size="sm"
        />
      ),
    },
    {
      header: "Time",
      cell: (item) => {
        const dateStr = item.createdAt || item.response?.requestedAt || "";
        let formattedTime = "N/A";
        try {
          if (dateStr) {
            formattedTime = new Date(dateStr).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
          }
        } catch {
          formattedTime = dateStr;
        }
        return (
          <span className="text-slate-500 text-xs font-mono">
            {formattedTime}
          </span>
        );
      },
    },
    {
      header: "Action",
      cell: (item) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedLog(item);
          }}
          className="text-xs font-semibold text-[#005DB6] hover:text-[#00376F] hover:underline"
        >
          View Details
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
            Operations Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time status of privileged access automation workflows and
            CyberArk EPV metrics.
          </p>
        </div>

        <button
          onClick={() => navigate("/onboarding")}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00338D] hover:bg-[#00205F] text-white text-xs font-semibold rounded-md shadow-sm transition-all duration-150 active:scale-95 shrink-0"
        >
          <PlusCircle className="w-4 h-4 text-blue-200" />
          <span>New User Onboarding</span>
        </button>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="TOTAL REQUESTS"
          value={kpis.totalRequests}
          trend={initialKPIData.todaysRequestsTrend}
          trendType="positive"
          icon={FileText}
          subtext="Today's Total Volume"
          accentColor="text-[#00338D] bg-blue-50 border-blue-200"
        />

        <StatCard
          title="SUCCESSFUL"
          value={kpis.successfulRequests}
          trend={
            (kpis.totalRequests > 0
              ? ((kpis.successfulRequests / kpis.totalRequests) * 100).toFixed(
                  1,
                )
              : "0") + " % Completion"
          }
          trendType="positive"
          icon={CheckCircle2}
          subtext="Auto-provisioned"
          accentColor="text-emerald-700 bg-emerald-50 border-emerald-200"
        />

        <StatCard
          title="FAILED"
          value={kpis.failedRequests}
          trend={initialKPIData.failedAttentionText}
          trendType="warning"
          icon={AlertOctagon}
          subtext="Requires Review"
          accentColor="text-rose-700 bg-rose-50 border-rose-200"
        />

        <StatCard
          title="AVG TIME"
          value={`${(kpis.averageExecutionTime / 1000).toFixed(1)} sec`}
          trend={initialKPIData.avgExecutionTimeTrend}
          trendType="positive"
          icon={Clock}
          subtext="Optimal Threshold"
          accentColor="text-blue-700 bg-blue-50 border-blue-200"
        />
      </div>

      {/* Active Provisioning Stepper Widget */}
      {/* <ProvisioningProgressWidget currentStep={4} title="ACTIVE ONBOARDING PROCESS: J_MILLER_SOC" /> */}

      {/* Main Grid: Recent Requests (Left) + Activity & Success Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Requests Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-md border border-[#DCE1E6] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <div>
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Recent Requests
                </h3>
                <p className="text-[11px] text-slate-500">
                  Live operational log of privilege onboarding tasks.
                </p>
              </div>

              <button
                onClick={() => navigate("/audit")}
                className="text-xs font-semibold text-[#005DB6] hover:text-[#00376F] flex items-center gap-1 transition-colors"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <DataTable
              data={logs.slice(0, 5)}
              columns={columns}
              keyExtractor={(item) => item._id}
              emptyMessage="No recent requests recorded."
            />
          </div>
        </div>

        {/* Right 1 Col: Workflow Success Card & Recent Activity */}
        <div className="space-y-6">
          <WorkflowSuccessCard
            successPercentage={
              kpis.totalRequests > 0
                ? Number(
                    (
                      (kpis.successfulRequests / kpis.totalRequests) *
                      100
                    ).toFixed(1),
                  )
                : 0
            }
            successfulCount={kpis.successfulRequests}
            failedCount={kpis.failedRequests}
            avgTimeSec={kpis.averageExecutionTime}
          />

          <RecentActivityPanel activities={initialRecentActivities} />

          {/* Need Assistance Card */}
          <div className="bg-[#F4F3FB] border border-[#E2E2EA] p-4 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#00338D] text-white rounded-md">
                <HelpCircle className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Need assistance?
                </h4>
                <p className="text-[11px] text-slate-500">
                  Contact PAM Support Team or view API guide.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                alert("Support Ticket Desk: security-pam-ops@enterprise.com")
              }
              className="p-1.5 text-slate-600 hover:text-[#00338D] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Audit Detail Drawer */}
      <RequestDrawer
        log={selectedLog}
        isOpen={selectedLog !== null}
        onClose={() => setSelectedLog(null)}
      />
    </div>
  );
};
