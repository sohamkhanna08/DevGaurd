import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

interface WorkflowSuccessCardProps {
  successPercentage?: number;
  successfulCount?: number;
  failedCount?: number;
  avgTimeSec?: number;
}

export const WorkflowSuccessCard: React.FC<WorkflowSuccessCardProps> = ({
  successPercentage = 95,
  successfulCount = 39,
  failedCount = 3,
  avgTimeSec = 18
}) => {
  const strokeDashoffset = 283 - (283 * successPercentage) / 100;

  return (
    <div className="bg-[#00205F] text-white rounded-md p-5 shadow-md flex flex-col justify-between border border-[#00338D]">
      <div className="flex items-center justify-between pb-3 border-b border-[#00338D]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200 font-mono flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#81A1FF]" />
          Workflow Success Rate
        </h3>
        <span className="text-[10px] font-mono bg-[#00338D] text-blue-200 px-2 py-0.5 rounded border border-[#63A1FF]/30">
          Last 24 Hours
        </span>
      </div>

      {/* Circle Gauge */}
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="text-[#00338D]"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Progress Ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="text-[#63A1FF] transition-all duration-1000 ease-out"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold text-white tracking-tight font-sans">
              {successPercentage}%
            </span>
            <span className="text-[11px] font-medium text-blue-200 uppercase tracking-wider">
              Uptime
            </span>
          </div>
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#00338D] text-center">
        <div className="bg-[#00338D]/60 rounded p-2.5 border border-[#63A1FF]/20">
          <span className="text-[10px] uppercase font-semibold text-blue-200 block">
            Success
          </span>
          <span className="text-lg font-bold text-emerald-400 mt-0.5 block">
            {successfulCount}
          </span>
        </div>
        <div className="bg-[#00338D]/60 rounded p-2.5 border border-[#63A1FF]/20">
          <span className="text-[10px] uppercase font-semibold text-blue-200 block">
            Failure
          </span>
          <span className="text-lg font-bold text-rose-400 mt-0.5 block">
            {failedCount}
          </span>
        </div>
      </div>
    </div>
  );
};
