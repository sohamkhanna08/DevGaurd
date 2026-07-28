import React from 'react';
import { Calendar, User, Shield, Server, Filter } from 'lucide-react';

interface FilterPanelProps {
  dateRange: string;
  setDateRange: (val: string) => void;
  userFilter: string;
  setUserFilter: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  safeFilter: string;
  setSafeFilter: (val: string) => void;
  onReset: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  dateRange,
  setDateRange,
  userFilter,
  setUserFilter,
  statusFilter,
  setStatusFilter,
  safeFilter,
  setSafeFilter,
  onReset
}) => {
  return (
    <div className="p-4 bg-white border border-[#DCE1E6] rounded-md shadow-2xs space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 border-b border-slate-100 pb-2">
        <span className="flex items-center gap-1.5 uppercase font-mono tracking-wider text-slate-500 text-[11px]">
          <Filter className="w-3.5 h-3.5 text-[#005DB6]" />
          SIEM Audit Log Filters
        </span>
        <button
          onClick={onReset}
          className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {/* Date Range */}
        <div>
          <label className="text-[11px] font-semibold text-slate-500 block mb-1">
            Date Range
          </label>
          <div className="relative">
            <Calendar className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:border-[#005DB6]"
            >
              <option value="ALL">All Time</option>
              <option value="TODAY">Last 24 Hours</option>
              <option value="WEEK">Last 7 Days</option>
              <option value="MONTH">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Username / Requester */}
        <div>
          <label className="text-[11px] font-semibold text-slate-500 block mb-1">
            Username / Requester
          </label>
          <div className="relative">
            <User className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={userFilter}
              onChange={(e) => setUserFilter(e.target.value)}
              placeholder="Filter user..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:border-[#005DB6]"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="text-[11px] font-semibold text-slate-500 block mb-1">
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:border-[#005DB6]"
          >
            <option value="ALL">All Status</option>
            <option value="SUCCESS">Success Only</option>
            <option value="FAILURE">Failure Only</option>
            {/* <option value="IN_PROGRESS">In Progress</option> */}
          </select>
        </div>

        {/* Target Safe */}
        <div>
          <label className="text-[11px] font-semibold text-slate-500 block mb-1">
            Target Safe
          </label>
          <div className="relative">
            <Shield className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={safeFilter}
              onChange={(e) => setSafeFilter(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:outline-none focus:border-[#005DB6]"
            >
              <option value="ALL">All Safes</option>
              <option value="Prod-DB-Admin">Prod-DB-Admin</option>
              <option value="Web-Front-LB">Web-Front-LB</option>
              <option value="Cloud-Mgmt-Root">Cloud-Mgmt-Root</option>
              <option value="INFRA_ADMIN_S1">INFRA_ADMIN_S1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
