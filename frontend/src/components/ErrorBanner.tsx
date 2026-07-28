import React from 'react';
import { AlertOctagon, RefreshCw, X } from 'lucide-react';

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, onRetry, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="p-4 rounded-md bg-[#FCE8E6] border border-[#FAD2CF] text-[#93000A] shadow-xs flex items-start justify-between gap-4 animate-in fade-in duration-200">
      <div className="flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-[#C5221F] shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-[#93000A]">
            Onboarding Automation Failed
          </h4>
          <p className="text-xs font-medium text-[#C5221F] mt-1 leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#BA1A1A] hover:bg-[#93000A] text-white text-xs font-semibold rounded shadow-xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Request</span>
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 hover:bg-[#FFDAD6] rounded text-[#93000A] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
