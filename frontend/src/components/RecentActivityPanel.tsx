import React from 'react';
import { RecentActivityEvent } from '../types';
import { ShieldCheck, AlertTriangle, Key, Clock, RefreshCw } from 'lucide-react';

interface RecentActivityPanelProps {
  activities: RecentActivityEvent[];
  onRefresh?: () => void;
}

export const RecentActivityPanel: React.FC<RecentActivityPanelProps> = ({
  activities,
  onRefresh
}) => {
  return (
    <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
          Recent Activity
        </h3>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 transition-colors"
            title="Refresh feed"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="space-y-3.5 overflow-y-auto max-h-9 pr-1">
        {activities.map((act) => {
          let dotClass = 'border-emerald-500 text-emerald-600 bg-emerald-50';
          if (act.status === 'failed') dotClass = 'border-rose-500 text-rose-600 bg-rose-50';
          if (act.status === 'warning') dotClass = 'border-amber-500 text-amber-600 bg-amber-50';
          if (act.status === 'info') dotClass = 'border-blue-500 text-blue-600 bg-blue-50';

          return (
            <div key={act.id} className="flex items-start gap-3 text-xs group">
              <div
                className={`w-2.5 h-2.5 rounded-full border-2 mt-1 shrink-0 ${dotClass}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-slate-900 truncate group-hover:text-[#005DB6] transition-colors">
                    {act.title}
                  </p>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0">
                    {act.timestamp}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5 line-clamp-2">
                  {act.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
