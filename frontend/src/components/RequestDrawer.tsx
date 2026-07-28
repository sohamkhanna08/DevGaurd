import React, { useState } from 'react';
import { X, Copy, Download, Check, Clock, User, Shield, Server, FileCode, Activity } from 'lucide-react';
import { AuditLogEntry } from '../types';
import { StatusBadge } from './StatusBadge';
import { JSONViewer } from './JSONViewer';
import { formatDate, formatDuration, copyToClipboard, downloadJsonFile } from '../utils/formatters';

interface RequestDrawerProps {
  log: AuditLogEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDrawer: React.FC<RequestDrawerProps> = ({ log, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'json'>('overview');
  const [copiedId, setCopiedId] = useState(false);

  if (!isOpen || !log) return null;

  const requestId = log.response?.requestId || log._id;
  const isSuccess = log.response?.success ?? false;
  const statusStr = isSuccess ? 'SUCCESS' : 'FAILURE';
  const requesterName = `${log.request?.firstName || ''} ${log.request?.lastName || ''}`.trim() || log.request?.username || 'N/A';
  const username = log.response?.steps?.user?.username || log.request?.username || 'N/A';
  const safeName = log.response?.steps?.safe?.safeName || 'N/A';
  const platformId = log.response?.steps?.account?.platformId || log.request?.account?.platformId || 'N/A';
  const accountName = log.response?.steps?.account?.userName || log.request?.account?.username || 'N/A';
  const address = log.request?.account?.address || log.response?.steps?.account?.address || 'N/A';

  const handleCopyRequestId = async () => {
    const ok = await copyToClipboard(requestId);
    if (ok) {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end transition-opacity">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-[#00205F] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-mono tracking-wider text-blue-200 font-semibold">
                Request Details
              </span>
              <StatusBadge status={statusStr} size="sm" />
            </div>
            <h2 className="text-sm font-mono font-bold text-white flex items-center gap-2">
              ID: {requestId}
              <button
                onClick={handleCopyRequestId}
                className="p-1 hover:bg-[#00338D] rounded text-blue-200 hover:text-white transition-colors"
                title="Copy Request ID"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-[#00338D] rounded-full text-blue-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 text-xs font-semibold text-slate-600 gap-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#005DB6] text-[#00338D] font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Request Metadata
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'timeline'
                ? 'border-[#005DB6] text-[#00338D] font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Provisioning Timeline
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'json'
                ? 'border-[#005DB6] text-[#00338D] font-bold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Raw JSON Payload
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Summary Banner */}
              <div className="bg-[#F4F3FB] border border-[#E2E2EA] p-4 rounded-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block">Execution Message</span>
                  <p className="text-xs font-semibold text-slate-900 mt-0.5">{log.response?.message || 'N/A'}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 font-semibold uppercase block">Execution Time</span>
                  <p className="text-xs font-mono font-bold text-[#005DB6] mt-0.5">{formatDuration(log.response?.durationMs ?? 0)}</p>
                </div>
              </div>

              {/* Grid Metadata */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Requester</span>
                  <span className="font-bold text-slate-800 text-sm mt-1 block">{requesterName}</span>
                  {log.request?.email && <span className="text-[11px] text-slate-500 font-mono">{log.request.email}</span>}
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Username</span>
                  <span className="font-mono font-bold text-slate-800 text-sm mt-1 block">{username}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Target Safe</span>
                  <span className="font-mono font-bold text-[#00338D] text-sm mt-1 block">{safeName}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Platform ID</span>
                  <span className="font-mono font-semibold text-slate-700 text-xs mt-1 block">{platformId}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Address / Host</span>
                  <span className="font-mono font-semibold text-slate-700 text-xs mt-1 block">{address}</span>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-md">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block">Timestamp</span>
                  <span className="font-mono text-slate-700 text-xs mt-1 block">{formatDate(log.createdAt || log.response?.requestedAt || '')}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step Execution Breakdown
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {/* Step 1: User */}
                <div className="relative">
                  <span className="absolute -left-6 top-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center text-[10px] font-bold">
                    1
                  </span>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs">
                    <p className="font-bold text-slate-800">User Provisioning</p>
                    <p className="text-slate-600 text-[11px] mt-0.5 font-mono">
                      Username: {username} | Status: {log.response?.steps?.user?.status || 'completed'}
                    </p>
                  </div>
                </div>

                {/* Step 2: Group */}
                <div className="relative">
                  <span className="absolute -left-6 top-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center text-[10px] font-bold">
                    2
                  </span>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs">
                    <p className="font-bold text-slate-800">Group Membership</p>
                    <p className="text-slate-600 text-[11px] mt-0.5 font-mono">
                      Group: {log.response?.steps?.groupMemberships?.[0]?.groupName || 'Privilege Cloud Users'} | Status: {log.response?.steps?.groupMemberships?.[0]?.status || 'completed'}
                    </p>
                  </div>
                </div>

                {/* Step 3: Safe */}
                <div className="relative">
                  <span className="absolute -left-6 top-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center text-[10px] font-bold">
                    3
                  </span>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs">
                    <p className="font-bold text-slate-800">Safe Creation & Allocation</p>
                    <p className="text-slate-600 text-[11px] mt-0.5 font-mono">
                      Safe: {safeName} | Status: {log.response?.steps?.safe?.status || 'completed'}
                    </p>
                  </div>
                </div>

                {/* Step 4: Account */}
                <div className="relative">
                  <span className={`absolute -left-6 top-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isSuccess ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}>
                    4
                  </span>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs">
                    <p className="font-bold text-slate-800">Managed Account Onboarding</p>
                    <p className="text-slate-600 text-[11px] mt-0.5 font-mono">
                      Account: {accountName} | Platform: {platformId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="space-y-6">
              <JSONViewer
                data={log.request}
                title={`Request Payload - ID: ${requestId}`}
                filename={`request_${requestId}.json`}
              />
              <JSONViewer
                data={log.response}
                title={`Response Payload - ID: ${requestId}`}
                filename={`response_${requestId}.json`}
              />
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={() => downloadJsonFile(`audit_${requestId}.json`, log)}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Record</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#00338D] text-white hover:bg-[#00205F] text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
