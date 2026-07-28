import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral' | 'warning';
  icon: LucideIcon;
  subtext?: string;
  accentColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendType = 'positive',
  icon: Icon,
  subtext,
  accentColor = 'text-[#00338D] bg-blue-50 border-blue-100'
}) => {
  let trendClass = 'text-emerald-600 bg-emerald-50';
  if (trendType === 'negative' || trendType === 'warning') {
    trendClass = 'text-amber-700 bg-amber-50';
  } else if (trendType === 'neutral') {
    trendClass = 'text-slate-600 bg-slate-100';
  }

  return (
    <div className="bg-white rounded-md border border-[#DCE1E6] p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block font-sans">
            {title}
          </span>
          <div className="mt-2 text-2xl md:text-3xl font-bold text-[#1A1B21] tracking-tight font-sans">
            {value}
          </div>
        </div>

        <div className={`p-2.5 rounded-md border shrink-0 ${accentColor}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(trend || subtext) && (
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          {trend && (
            <span className={`px-2 py-0.5 rounded font-medium text-[11px] ${trendClass}`}>
              {trend}
            </span>
          )}
          {subtext && (
            <span className="text-slate-500 font-normal truncate ml-auto">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
