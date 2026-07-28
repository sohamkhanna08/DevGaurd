import React, { useEffect, useState } from "react";
import { Loader2, ShieldCheck, Lock, Server } from "lucide-react";

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message = "Automating Privileged Account Onboarding...",
}) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const stages = [
    "Authenticating with CyberArk Identity REST API...",
    "Verifying EPV User & Privilege Group Memberships...",
    "Allocating & Hardening Storage Safe in EPV Vault...",
    "Assigning Safe Access Permissions...",
    "Onboarding Managed Account & Syncing Secrets...",
  ];

  useEffect(() => {
    if (!isLoading) {
      setCurrentStageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStageIndex((prev) =>
        prev < stages.length - 1 ? prev + 1 : prev,
      );
    }, 600);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    // <div className="absolute inset-0 z-30 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 min-h-100 rounded-lg">
    <div className="absolute top-18 left-0 right-0 -bottom-6 z-30 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 rounded-lg">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 p-6 sm:p-8 max-w-md w-full text-center space-y-6 animate-in zoom-in-95 duration-200">
        {/* Animated CyberArk Emblem */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-[#005DB6] animate-spin" />
          <div className="w-14 h-14 rounded-full bg-[#00205F] text-white flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-7 h-7 text-[#81A1FF]" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            {message}
          </h3>
          <p className="text-xs font-mono font-medium text-[#005DB6] bg-blue-50 py-1.5 px-3 rounded border border-blue-100 min-h-7">
            {stages[currentStageIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
          <div
            className="bg-[#005DB6] h-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStageIndex + 1) / stages.length) * 100}%`,
            }}
          />
        </div>

        {/* <p className="text-[11px] text-slate-400 font-sans italic">
          Communicating directly with POST http://localhost:4444/api/onboarding
        </p> */}
      </div>
    </div>
  );
};
