import React, { useState, useEffect } from "react";
import {
  RefreshCw,
  Download,
  ShieldCheck,
  AlertTriangle,
  History,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DataTable, Column } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { FilterPanel } from "../components/FilterPanel";
import { SearchBar } from "../components/SearchBar";
import { RequestDrawer } from "../components/RequestDrawer";
import { EmptyState } from "../components/EmptyState";
import { AuditKPIs, AuditLogEntry } from "../types";
import { fetchAuditLogs } from "../api/cyberarkApi";
import {} from "../utils/mockData";
import {
  formatDate,
  formatDuration,
  downloadJsonFile,
} from "../utils/formatters";

export const AuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<AuditLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);

  // Filters State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("ALL");
  const [userFilter, setUserFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [safeFilter, setSafeFilter] = useState<string>("ALL");
  const [kpis, setKpis] = useState<AuditKPIs>({
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    averageExecutionTime: 0,
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 8;

  const loadLogs = async () => {
    setIsLoading(true);
    try {
      const serverLogs = await fetchAuditLogs();
      if (serverLogs) {
        setLogs(serverLogs.auditLogs);
        setKpis(serverLogs.kpis);
      }
    } catch (e) {
      console.warn("Using initial audit logs store:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  // Filter application logic
  useEffect(() => {
    let result = [...logs];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((item) => {
        const reqId = item.response?.requestId || item._id || "";
        const reqBy =
          `${item.request?.firstName || ""} ${item.request?.lastName || ""}`.trim() ||
          item.request?.username ||
          "";
        const user =
          item.response?.steps?.user?.username || item.request?.username || "";
        const safe = item.response?.steps?.safe?.safeName || "";
        const account =
          item.response?.steps?.account?.userName ||
          item.request?.account?.username ||
          "";
        const msg = item.response?.message || "";
        return (
          reqId.toLowerCase().includes(q) ||
          reqBy.toLowerCase().includes(q) ||
          user.toLowerCase().includes(q) ||
          safe.toLowerCase().includes(q) ||
          account.toLowerCase().includes(q) ||
          msg.toLowerCase().includes(q)
        );
      });
    }

    if (userFilter.trim()) {
      const u = userFilter.toLowerCase();
      result = result.filter((item) => {
        const reqBy =
          `${item.request?.firstName || ""} ${item.request?.lastName || ""}`.trim() ||
          item.request?.username ||
          "";
        const user =
          item.response?.steps?.user?.username || item.request?.username || "";
        const email = item.request?.email || "";
        return (
          reqBy.toLowerCase().includes(u) ||
          user.toLowerCase().includes(u) ||
          email.toLowerCase().includes(u)
        );
      });
    }

    if (statusFilter !== "ALL") {
      if (statusFilter === "SUCCESS") {
        result = result.filter((item) => item.response?.success === true);
      } else if (statusFilter === "FAILURE" || statusFilter === "FAILED") {
        result = result.filter((item) => item.response?.success === false);
      }
    }

    if (safeFilter !== "ALL") {
      const sFilter = safeFilter.toLowerCase();
      result = result.filter((item) => {
        const safe = item.response?.steps?.safe?.safeName || "";
        return safe.toLowerCase().includes(sFilter);
      });
    }

    setFilteredLogs(result);
    setCurrentPage(1);
  }, [logs, searchQuery, dateRange, userFilter, statusFilter, safeFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setDateRange("ALL");
    setUserFilter("");
    setStatusFilter("ALL");
    setSafeFilter("ALL");
  };

  const handleExportCSV = () => {
    const headers = [
      "Timestamp",
      "Request ID",
      "Requested By",
      "Username",
      "Safe",
      "Account",
      "Platform",
      "Duration (ms)",
      "Status",
      "Message",
    ];
    const rows = filteredLogs.map((l) => {
      const reqId = l.response?.requestId || l._id;
      const reqBy =
        `${l.request?.firstName || ""} ${l.request?.lastName || ""}`.trim() ||
        l.request?.username ||
        "N/A";
      const uname =
        l.response?.steps?.user?.username || l.request?.username || "N/A";
      const safeName = l.response?.steps?.safe?.safeName || "N/A";
      const accName =
        l.response?.steps?.account?.userName ||
        l.request?.account?.username ||
        "N/A";
      const platform =
        l.response?.steps?.account?.platformId ||
        l.request?.account?.platformId ||
        "N/A";
      const duration = l.response?.durationMs ?? 0;
      const status = l.response?.success ? "SUCCESS" : "FAILURE";
      const message = (l.response?.message || "").replace(/"/g, '""');

      return [
        l.createdAt || l.response?.requestedAt || "",
        reqId,
        `"${reqBy}"`,
        uname,
        safeName,
        accName,
        platform,
        duration,
        status,
        `"${message}"`,
      ];
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `cyberark_pam_audit_logs_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredLogs.length / pageSize));
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  // Table Columns definition
  const columns: Column<AuditLogEntry>[] = [
    {
      header: "Timestamp",
      cell: (item) => (
        <span className="font-mono text-slate-700 text-xs">
          {formatDate(item.createdAt || item.response?.requestedAt || "")}
        </span>
      ),
    },
    {
      header: "Requested For",
      cell: (item) => {
        const reqBy =
          `${item.request?.firstName || ""} ${item.request?.lastName || ""}`.trim() ||
          item.request?.username ||
          "N/A";
        // const reqBy = "Soham Khanna";
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#00205F] text-white flex items-center justify-center font-bold text-[10px]">
              {reqBy.split(" ")[0][0].toUpperCase()}
              {reqBy.split(" ")[1][0].toUpperCase()}
            </div>
            <span className="font-semibold text-slate-900 text-xs">
              {reqBy}
            </span>
          </div>
        );
      },
    },
    {
      header: "Username",
      cell: (item) => {
        const uname =
          item.response?.steps?.user?.username ||
          item.request?.username ||
          "N/A";
        return (
          <span className="font-mono text-xs font-semibold text-slate-800">
            {uname}
          </span>
        );
      },
    },
    {
      header: "Safe",
      cell: (item) => {
        const safeName = item.response?.steps?.safe?.safeName || "N/A";
        return (
          <span className="font-mono text-xs font-bold text-[#00338D] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            {safeName}
          </span>
        );
      },
    },
    {
      header: "Account",
      cell: (item) => {
        const accName =
          item.response?.steps?.account?.userName ||
          item.request?.account?.username ||
          "N/A";
        return (
          <span className="font-mono text-xs text-slate-700">{accName}</span>
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
      header: "Message / Steps Summary",
      cell: (item) => {
        const msg = item.response?.message || "N/A";
        return (
          <span
            className="text-slate-600 text-xs line-clamp-1 max-w-xs"
            title={msg}
          >
            {msg}
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
      {/* Top Header & Global Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
            SIEM Audit Logs
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review privileged access requests, automated provisioning traces,
            and system security events.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap sm:flex-nowrap">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-[#DCE1E6] hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-md shadow-2xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={loadLogs}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#00205F] hover:bg-[#00338D] text-white text-xs font-semibold rounded-md shadow-2xs transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-blue-200 ${isLoading ? "animate-spin" : ""}`}
            />
            <span>Refresh Logs</span>
          </button>
        </div>
      </div>

      {/* Filter Panel & Search */}
      <div className="space-y-3">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterPanel
          dateRange={dateRange}
          setDateRange={setDateRange}
          userFilter={userFilter}
          setUserFilter={setUserFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          safeFilter={safeFilter}
          setSafeFilter={setSafeFilter}
          onReset={handleResetFilters}
        />
      </div>

      {/* Audit Log Table */}
      <div className="space-y-3">
        <DataTable
          data={paginatedLogs}
          columns={columns}
          keyExtractor={(item) => item._id}
          isLoading={isLoading}
          emptyMessage="No audit logs match the specified search or filter criteria."
          onRowClick={(item) => setSelectedLog(item)}
        />

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 border border-[#DCE1E6] rounded-md text-xs text-slate-600">
          <span>
            Showing{" "}
            <strong className="text-slate-900">
              {filteredLogs.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}
            </strong>{" "}
            to{" "}
            <strong className="text-slate-900">
              {Math.min(currentPage * pageSize, filteredLogs.length)}
            </strong>{" "}
            of <strong className="text-slate-900">{filteredLogs.length}</strong>{" "}
            entries
          </span>

          <div className="flex items-center gap-1 font-mono">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded border border-slate-200 hover:bg-slate-100 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pNum = idx + 1;
              return (
                <button
                  key={pNum}
                  onClick={() => setCurrentPage(pNum)}
                  className={`w-7 h-7 rounded text-xs font-bold transition-colors ${
                    currentPage === pNum
                      ? "bg-[#00338D] text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {pNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded border border-slate-200 hover:bg-slate-100 disabled:opacity-40 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom SIEM Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
              Success Rate (24h)
            </span>
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 font-sans">
              {kpis.totalRequests > 0
                ? Number(
                    (
                      (kpis.successfulRequests / kpis.totalRequests) *
                      100
                    ).toFixed(1),
                  )
                : 0}
            </span>
            <span className="text-xs font-semibold text-emerald-600">
              +0.2%
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Exceeds 99.0% SLA compliance target.
          </p>
        </div>

        <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
              Failed Automations
            </span>
            <div className="p-2 rounded-full bg-rose-50 text-rose-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-rose-600 font-sans">
              {kpis.failedRequests}
            </span>
            <span className="text-xs text-slate-500">events flagged</span>
          </div>
          <a
            href="#errors"
            onClick={(e) => {
              e.preventDefault();
              setStatusFilter("FAILURE");
            }}
            className="text-[11px] text-[#005DB6] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Review errors</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
              Total Log Volume
            </span>
            <div className="p-2 rounded-full bg-blue-50 text-[#005DB6]">
              <History className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 font-sans">
              100+
            </span>
            <span className="text-xs text-slate-500">entries retained</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Retention policy: 7 years compliance standard.
          </p>
        </div>
      </div>

      {/* Right Side Details Drawer */}
      <RequestDrawer
        log={selectedLog}
        isOpen={selectedLog !== null}
        onClose={() => setSelectedLog(null)}
      />
    </div>
  );
};
