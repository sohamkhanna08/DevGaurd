import React, { useState } from "react";
import {
  GitFork,
  CheckCircle2,
  XCircle,
  ArrowDown,
  ArrowRight,
  Shield,
  Server,
  User,
  FolderLock,
  Key,
  Copy,
  Check,
  FileCode,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";

export const WorkflowPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"visual" | "ascii">("visual");
  const [copiedFlowchart, setCopiedFlowchart] = useState(false);
  const [copiedArchitecture, setCopiedArchitecture] = useState(false);

  const rawFlowchartText = `User raises request
        │
        ▼
Check User Exists in CyberArk?
  ┌──────────────┐
No │            │ Yes
 ▼              ▼
Create User      Continue
 │
 ▼
Is Privilege Cloud Role Assigned?
 ┌──────────────┐
No │            │ Yes
 ▼              ▼
Assign Role      Continue
 │
 ▼
Check Safe Exists?
 ┌──────────────┐
No │            │ Yes
 ▼              ▼
Create Safe      Continue
 │
 ▼
Is User a Safe Member?
 ┌──────────────┐
No │            │ Yes
 ▼              ▼
Add User to Safe    Continue
 │
 ▼
Check Managed Account Exists?
 ┌──────────────┐
No │            │ Yes
 ▼              ▼
Create Managed Account   Success
 │
 ▼
Enable CPM / Verify
 │
 ▼
Provision Complete`;

  const rawArchitectureText = `         CyberArk

   +-------------------+
   |      User         |
   |  soham.khanna     |
   +---------+---------+
             │
  Safe Membership
             │
             ▼
+------------------------+
|   SAFE_PROD_WINDOWS    |
+------------------------+
  │         │        │
  │         │        │
  ▼         ▼        ▼
 Admin1     Admin2    SQLAdmin
  │
  ▼
 Windows Server`;

  const handleCopy = (text: string, type: "flowchart" | "arch") => {
    navigator.clipboard.writeText(text);
    if (type === "flowchart") {
      setCopiedFlowchart(true);
      setTimeout(() => setCopiedFlowchart(false), 2000);
    } else {
      setCopiedArchitecture(true);
      setTimeout(() => setCopiedArchitecture(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#00205F] text-blue-100 uppercase tracking-wider font-mono">
              Architecture & Logic
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-semibold text-slate-500">
              v2.4 Enterprise
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans mt-1">
            Application Workflow & Provisioning Architecture
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Comprehensive decision flow, step-by-step CyberArk API
            orchestration, and privileged access safe hierarchy.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("visual")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === "visual"
                ? "bg-white text-[#00205F] shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#005DB6]" />
            <span>Visual Diagrams</span>
          </button>

          <button
            onClick={() => setActiveTab("ascii")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === "ascii"
                ? "bg-white text-[#00205F] shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-[#005DB6]" />
            <span>ASCII Flowcharts</span>
          </button>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="bg-linear-to-r from-[#00205F] to-[#00338D] rounded-lg p-5 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span>Automated Privilege Onboarding Engine</span>
          </div>
          <h2 className="text-lg font-bold text-white">
            How This CyberArk PAM Integration Works
          </h2>
          <p className="text-xs text-blue-100/90 leading-relaxed">
            When a request is submitted via the User Onboarding form, this
            application initiates a multi-stage sequential verification and
            creation workflow against CyberArk PAM REST APIs. It ensures
            non-duplication of identities, assigns Privilege Cloud roles,
            provisions secure Safes, attaches vault permissions, and provisions
            CPM-managed endpoint credentials.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3 bg-white/10 p-3 rounded-md border border-white/20 backdrop-blur-xs text-xs font-mono">
          <div>
            <div className="text-[10px] text-blue-200 uppercase">
              Target Engine
            </div>
            <div className="font-bold text-white">CyberArk Privilege Cloud</div>
          </div>
        </div>
      </div>

      {activeTab === "visual" ? (
        <div className="space-y-10">
          {/* Section 1: Provisioning Workflow Chart */}
          <section className="bg-white border border-[#DCE1E6] rounded-lg p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-[#005DB6] flex items-center justify-center font-bold">
                  <GitFork className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-sans">
                    1. Provisioning Decision Flowchart
                  </h3>
                  <p className="text-xs text-slate-500">
                    Step-by-step decision tree executed during automated account
                    onboarding.
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold rounded-md font-mono">
                Idempotent Execution
              </span>
            </div>

            {/* Visual Step-by-Step Flowchart Nodes */}
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              {/* Trigger Node */}
              <div className="flex flex-col items-center">
                <div className="bg-[#00205F] text-white px-6 py-3 rounded-md shadow-md text-center font-semibold text-xs font-mono flex items-center gap-2 border border-[#00338D]">
                  <User className="w-4 h-4 text-blue-200" />
                  <span>START: User Raises Request</span>
                </div>
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Step 1: Check User Exists */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00338D] font-mono">
                    STEP 1
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    GET /PasswordVault/API/Users
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900">
                  Check User Exists in CyberArk?
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <XCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>NO → Create User</span>
                    </div>
                    <p className="text-[11px] text-amber-700">
                      Calls{" "}
                      <code className="font-mono bg-amber-100/80 px-1 rounded">
                        POST /Users
                      </code>{" "}
                      to register new identity with email & login name.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>YES → Continue</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      User identity found. Fetch assigned privileges and
                      validate account metadata.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Step 2: Privilege Cloud Role */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00338D] font-mono">
                    STEP 2
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    GET /PasswordVault/API/UserRoles
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900">
                  Is Privilege Cloud Role Assigned?
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <XCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>NO → Assign Role</span>
                    </div>
                    <p className="text-[11px] text-amber-700">
                      Grant Privilege Cloud User / Basic User privileges via
                      Identity API.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>YES → Continue</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Role verified. Proceed to Safe container verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Step 3: Check Safe Exists */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00338D] font-mono">
                    STEP 3
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    GET /PasswordVault/API/Safes/{"{safeName}"}
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900">
                  Check Safe Exists?
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <XCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>NO → Create Safe</span>
                    </div>
                    <p className="text-[11px] text-amber-700">
                      Create container (e.g.{" "}
                      <code className="font-mono bg-amber-100/80 px-1 rounded">
                        SAFE_PROD_WINDOWS
                      </code>
                      ) with 7-day retention & CPM enabled.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>YES → Continue</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Target Safe container confirmed active and healthy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Step 4: Is User a Safe Member? */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00338D] font-mono">
                    STEP 4
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    GET /PasswordVault/API/Safes/{"{safeName}"}/Members
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900">
                  Is User a Safe Member?
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <XCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>NO → Add User to Safe</span>
                    </div>
                    <p className="text-[11px] text-amber-700">
                      Grant Retrieve, UsePassword, and AccessWithoutConfirmation
                      permissions.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>YES → Continue</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Membership and ACL permissions already present.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Step 5: Managed Account & CPM */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00338D] font-mono">
                    STEP 5
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    POST /PasswordVault/API/Accounts
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900">
                  Check Managed Account Exists?
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                      <XCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>NO → Create Account + CPM + Reconciliation</span>
                    </div>
                    <p className="text-[11px] text-amber-700">
                      Store endpoint credential in Vault & activate CPM
                      automatic password rotation.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>YES → Success</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Account already vaulted. Verify status and complete
                      request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300 my-1"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />
              </div>

              {/* Completion Node */}
              <div className="flex flex-col items-center">
                <div className="bg-emerald-700 text-white px-8 py-3 rounded-md shadow-lg text-center font-bold text-xs font-mono flex items-center gap-2 border border-emerald-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>PROVISION COMPLETE: Success Response Returned</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Architecture & Membership Hierarchy */}
          <section className="bg-white border border-[#DCE1E6] rounded-lg p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-50 text-[#005DB6] flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-sans">
                    2. Privilege Access Architecture & Membership Hierarchy
                  </h3>
                  <p className="text-xs text-slate-500">
                    Relationship model between CyberArk Vault identities, Safes,
                    managed privileged accounts, and target servers.
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-blue-50 text-[#005DB6] border border-blue-200 text-[11px] font-bold rounded-md font-mono">
                RBAC & Isolation
              </span>
            </div>

            {/* Architecture Diagram Canvas */}
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-xs space-y-8 border border-slate-800 shadow-inner">
              {/* Level 1: CyberArk System & User */}
              <div className="flex flex-col items-center space-y-2">
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                  Central Vault Identity
                </div>
                <div className="bg-[#00205F] border border-[#005DB6] text-white px-6 py-3 rounded-md text-center shadow-md w-64">
                  <div className="font-bold text-xs text-blue-200 flex items-center justify-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-300" />
                    <span>CyberArk User</span>
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    soham.khanna
                  </div>
                  <div className="text-[10px] text-blue-300/80 mt-1">
                    Role: Privilege Cloud User
                  </div>
                </div>

                <div className="h-6 w-0.5 bg-blue-500/50"></div>
                <div className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800/80 px-2 py-0.5 rounded font-mono">
                  Safe Membership
                </div>
                <div className="h-6 w-0.5 bg-blue-500/50"></div>
              </div>

              {/* Level 2: Target Safe Container */}
              <div className="flex flex-col items-center space-y-2">
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                  Isolated Vault Container
                </div>
                <div className="bg-amber-950/60 border border-amber-600/60 text-amber-100 px-8 py-3.5 rounded-md text-center shadow-md w-80">
                  <div className="font-bold text-xs text-amber-400 flex items-center justify-center gap-1.5">
                    <FolderLock className="w-4 h-4 text-amber-300" />
                    <span>TARGET SAFE</span>
                  </div>
                  <div className="text-base font-extrabold text-amber-200 mt-0.5 tracking-tight">
                    SAFE_PROD_WINDOWS
                  </div>
                  <div className="text-[10px] text-amber-300/80 mt-1">
                    CPM Engine: Enabled | Retention: 7 Days
                  </div>
                </div>

                <div className="h-8 w-0.5 bg-amber-500/50"></div>
              </div>

              {/* Level 3: Accounts inside the Safe */}
              <div className="space-y-2">
                <div className="text-center text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  Vaulted Privileged Accounts
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
                  <div className="bg-slate-800/90 border border-emerald-500/40 rounded p-3 text-center space-y-1">
                    <Key className="w-4 h-4 text-emerald-400 mx-auto" />
                    <div className="font-bold text-emerald-200">Admin1</div>
                    <div className="text-[10px] text-slate-400">
                      Local Admin Credential
                    </div>
                  </div>

                  <div className="bg-slate-800/90 border border-emerald-500/40 rounded p-3 text-center space-y-1">
                    <Key className="w-4 h-4 text-emerald-400 mx-auto" />
                    <div className="font-bold text-emerald-200">Admin2</div>
                    <div className="text-[10px] text-slate-400">
                      Domain Service Account
                    </div>
                  </div>

                  <div className="bg-slate-800/90 border border-emerald-500/40 rounded p-3 text-center space-y-1">
                    <Key className="w-4 h-4 text-emerald-400 mx-auto" />
                    <div className="font-bold text-emerald-200">SQLAdmin</div>
                    <div className="text-[10px] text-slate-400">
                      Database SA Privileged
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow to target server */}
              <div className="flex flex-col items-center space-y-2 pt-2">
                <div className="h-6 w-0.5 bg-slate-600"></div>
                <ArrowDown className="w-4 h-4 text-slate-400 -mt-2" />

                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Destination Infrastructure
                </div>
                <div className="bg-slate-800 border border-slate-700 text-slate-200 px-6 py-3 rounded-md text-center shadow-md w-72 flex items-center justify-center gap-2">
                  <Server className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-white">
                      Windows Server
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      dc01.prod.local (10.0.0.1)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* ASCII View Mode */
        <div className="space-y-8">
          {/* Flowchart Raw ASCII */}
          <div className="bg-white border border-[#DCE1E6] rounded-lg p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-sans">
                  Provisioning Flowchart (Raw Text Diagram)
                </h3>
                <p className="text-xs text-slate-500">
                  Clean ASCII rendering suitable for documentation, markdown
                  files, and commit logs.
                </p>
              </div>
              <button
                onClick={() => handleCopy(rawFlowchartText, "flowchart")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00205F] hover:bg-[#00338D] text-white text-xs font-semibold rounded-md transition-colors"
              >
                {copiedFlowchart ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-blue-200" />
                )}
                <span>
                  {copiedFlowchart ? "Copied Diagram!" : "Copy Flowchart"}
                </span>
              </button>
            </div>

            <pre className="bg-slate-900 text-emerald-400 p-5 rounded-lg overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 select-all">
              {rawFlowchartText}
            </pre>
          </div>

          {/* Architecture Raw ASCII */}
          <div className="bg-white border border-[#DCE1E6] rounded-lg p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-sans">
                  Privilege Membership Architecture (Raw Text Diagram)
                </h3>
                <p className="text-xs text-slate-500">
                  ASCII structure diagram showing user to safe to account server
                  mapping.
                </p>
              </div>
              <button
                onClick={() => handleCopy(rawArchitectureText, "arch")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00205F] hover:bg-[#00338D] text-white text-xs font-semibold rounded-md transition-colors"
              >
                {copiedArchitecture ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-blue-200" />
                )}
                <span>
                  {copiedArchitecture
                    ? "Copied Architecture!"
                    : "Copy Architecture"}
                </span>
              </button>
            </div>

            <pre className="bg-slate-900 text-cyan-400 p-5 rounded-lg overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 select-all">
              {rawArchitectureText}
            </pre>
          </div>
        </div>
      )}

      {/* Info Callout */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 text-xs text-slate-700">
        <Info className="w-5 h-5 text-[#005DB6] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-[#00205F]">Integration Note:</span>
          <p className="text-slate-600 leading-relaxed">
            {/* (<code className="font-mono bg-blue-100/80 px-1 py-0.5 rounded text-[#00338D]"></code>) */}
            All CyberArk PAM operations performed by this app call the backend
            CyberArk PAM API gateway . Operations maintain idempotency, ensuring
            duplicate requests update or verify existing configurations without
            throwing breaking vault errors.
          </p>
        </div>
      </div>
    </div>
  );
};
