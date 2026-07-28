import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, AlertCircle, User, Users, FolderCheck, ShieldCheck, KeyRound, Copy, Check } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { copyToClipboard } from '../utils/formatters';

interface StepCardProps {
  stepNumber: number;
  title: string;
  iconName: 'user' | 'group' | 'safe' | 'safeMembership' | 'account';
  status: string;
  data: Record<string, any>;
  defaultExpanded?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  iconName,
  status,
  data,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const getIcon = () => {
    switch (iconName) {
      case 'user': return User;
      case 'group': return Users;
      case 'safe': return FolderCheck;
      case 'safeMembership': return ShieldCheck;
      case 'account': return KeyRound;
      default: return CheckCircle2;
    }
  };

  const Icon = getIcon();

  const handleCopyValue = async (key: string, val: any) => {
    const text = typeof val === 'object' ? JSON.stringify(val) : String(val);
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    }
  };

  return (
    <div className="bg-white border border-[#DCE1E6] rounded-md shadow-xs overflow-hidden transition-all duration-200">
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between border-b border-slate-200 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#00338D] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            {stepNumber}
          </div>
          <div className="p-1.5 bg-blue-50 text-[#005DB6] rounded border border-blue-100 shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">
              {title}
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">
              Step {stepNumber} of 5
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StatusBadge status={status} size="sm" />
          <button className="p-1 text-slate-400 hover:text-slate-700 transition-colors">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="p-4 bg-white border-t border-slate-100 space-y-3">
          {data && Object.keys(data).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(data).map(([key, value]) => {
                if (key === 'status') return null; // Already shown in badge

                const displayValue = typeof value === 'object' ? JSON.stringify(value) : String(value);

                return (
                  <div key={key} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-md group relative">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block font-mono">
                      {key}
                    </span>
                    <div className="flex items-center justify-between gap-1 mt-0.5">
                      <span className="text-xs font-mono font-semibold text-slate-800 truncate">
                        {displayValue}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopyValue(key, value); }}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-200 rounded text-slate-500 transition-all"
                        title={`Copy ${key}`}
                      >
                        {copiedKey === key ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic">No additional properties returned for this step.</p>
          )}
        </div>
      )}
    </div>
  );
};
