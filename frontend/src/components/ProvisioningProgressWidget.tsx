import React from 'react';
import { Check, Loader2, ShieldCheck, UserCheck, FolderCheck, KeyRound, Server } from 'lucide-react';

interface ProvisioningProgressProps {
  currentStep?: number; // 1 to 5
  title?: string;
}

export const ProvisioningProgressWidget: React.FC<ProvisioningProgressProps> = ({
  currentStep = 4,
  title = 'ACTIVE ONBOARDING PROCESS: J_MILLER_SOC'
}) => {
  const steps = [
    { id: 1, label: 'User Created', icon: UserCheck },
    { id: 2, label: 'Role Assigned', icon: ShieldCheck },
    { id: 3, label: 'Safe Found', icon: FolderCheck },
    { id: 4, label: 'Creating Account', icon: KeyRound },
    { id: 5, label: 'Final Validation', icon: Server }
  ];

  return (
    <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-[#00338D]/10 rounded border border-[#00338D]/20 text-[#00338D]">
            <Server className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-[#00338D] uppercase tracking-wider font-mono">
            {title}
          </h3>
        </div>
        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#005DB6] border border-blue-200">
          Step {currentStep}/5
        </span>
      </div>

      {/* Visual Stepper */}
      <div className="relative flex items-center justify-between max-w-3xl mx-auto px-4 py-2">
        {/* Background Connecting Line */}
        <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

        {/* Progress Line */}
        <div
          className="absolute top-1/2 left-10 h-0.5 bg-[#005DB6] -translate-y-1/2 transition-all duration-500 z-0"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 80}%` }}
        />

        {steps.map((s) => {
          const isCompleted = s.id < currentStep;
          const isCurrent = s.id === currentStep;
          const isPending = s.id > currentStep;
          const Icon = s.icon;

          return (
            <div key={s.id} className="relative z-10 flex flex-col items-center group">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 border-2 ${
                  isCompleted
                    ? 'bg-[#00338D] border-[#00338D] text-white shadow-sm'
                    : isCurrent
                    ? 'bg-white border-[#005DB6] text-[#005DB6] ring-4 ring-blue-100 shadow-md scale-110'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-white" />
                ) : isCurrent ? (
                  <Loader2 className="w-5 h-5 text-[#005DB6] animate-spin" />
                ) : (
                  <Icon className="w-4 h-4 text-slate-400" />
                )}
              </div>

              <span
                className={`mt-2.5 text-xs font-medium text-center tracking-tight transition-colors ${
                  isCurrent
                    ? 'text-[#00338D] font-bold'
                    : isCompleted
                    ? 'text-slate-800'
                    : 'text-slate-400'
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
