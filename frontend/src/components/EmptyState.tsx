import React from 'react';
import { ShieldAlert, Search } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Records Found',
  description = 'No matching audit records or onboarding requests match your criteria.',
  actionText,
  onAction
}) => {
  return (
    <div className="py-12 px-4 text-center bg-white rounded-md border border-[#DCE1E6] my-4 shadow-2xs">
      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
        <Search className="w-6 h-6" />
      </div>
      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono">
        {title}
      </h3>
      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-[#00338D] text-white text-xs font-semibold rounded-md hover:bg-[#00205F] transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
