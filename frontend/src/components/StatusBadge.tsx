import React from 'react';
import { CheckCircle2, AlertCircle, RefreshCw, Clock, Check } from 'lucide-react';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md', className = '' }) => {
  const normStatus = status?.toUpperCase() || 'UNKNOWN';

  let bgClass = 'bg-gray-100 text-gray-700 border-gray-200';
  let Icon = Clock;
  let label = status;

  if (['SUCCESS', 'CREATED', 'ALREADY_EXISTS', 'ALREADY_MEMBER', 'ALREADY_ADDED', 'ADDED'].includes(normStatus)) {
    bgClass = 'bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]';
    Icon = CheckCircle2;
    if (normStatus === 'ALREADY_EXISTS') label = 'ALREADY EXISTS';
    else if (normStatus === 'ALREADY_MEMBER') label = 'ALREADY MEMBER';
    else if (normStatus === 'ALREADY_ADDED') label = 'ALREADY ADDED';
    else if (normStatus === 'SUCCESS') label = 'SUCCESS';
    else label = normStatus;
  } else if (['FAILURE', 'FAILED', 'ERROR'].includes(normStatus)) {
    bgClass = 'bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]';
    Icon = AlertCircle;
    label = normStatus === 'FAILURE' ? 'FAILURE' : 'FAILED';
  } else if (['IN_PROGRESS', 'RUNNING'].includes(normStatus)) {
    bgClass = 'bg-[#E8F0FE] text-[#1A73E8] border-[#D2E3FC]';
    Icon = RefreshCw;
    label = 'IN PROGRESS';
  } else if (['PENDING'].includes(normStatus)) {
    bgClass = 'bg-slate-100 text-slate-600 border-slate-200';
    Icon = Clock;
    label = 'PENDING';
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5 font-medium',
    lg: 'px-3 py-1.5 text-sm gap-2 font-semibold'
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-md border tracking-wide uppercase font-mono ${bgClass} ${sizeClasses} ${className}`}
    >
      <Icon className={`w-3.5 h-3.5 shrink-0 ${normStatus === 'IN_PROGRESS' ? 'animate-spin' : ''}`} />
      <span>{label}</span>
    </span>
  );
};
