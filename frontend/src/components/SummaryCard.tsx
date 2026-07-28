import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  badgeText?: string;
  badgeType?: 'success' | 'warning' | 'info';
  children?: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  subtitle,
  badgeText,
  badgeType = 'info',
  children
}) => {
  let badgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
  if (badgeType === 'success') badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
  if (badgeType === 'warning') badgeClass = 'bg-rose-100 text-rose-800 border-rose-200';

  return (
    <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
          {title}
        </span>
        {badgeText && (
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeClass}`}>
            {badgeText}
          </span>
        )}
      </div>

      <div className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
        {value}
      </div>

      {subtitle && (
        <p className="text-xs text-slate-500 leading-normal">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};
