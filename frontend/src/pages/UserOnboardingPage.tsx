import React, { useState } from 'react';
import {
  Rocket,
  Key,
  User,
  Shield,
  Server,
  Eye,
  EyeOff,
  Copy,
  Download,
  Check,
  RefreshCw,
  FolderCheck,
  CheckCircle2,
  Clock,
  Code
} from 'lucide-react';
import { OnboardingRequestPayload, OnboardingResponse, OnboardingSuccessResponse } from '../types';
import { submitOnboardingRequest } from '../api/cyberarkApi';
import { StepCard } from '../components/StepCard';
import { StatusBadge } from '../components/StatusBadge';
import { ErrorBanner } from '../components/ErrorBanner';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { JSONViewer } from '../components/JSONViewer';
import { copyToClipboard, downloadJsonFile, formatDate, formatDuration } from '../utils/formatters';

export const UserOnboardingPage: React.FC = () => {
  // Form State
  const [loginName, setLoginName] = useState<string>('John');
  const [suffix, setSuffix] = useState<string>('cyberark.cloud.43372');
  const [email, setEmail] = useState<string>('john.smith@enterprise.com');
  const [lastName, setLastName] = useState<string>('Smith');

  const [account, setAccount] = useState({
    username: 'SVC_PAM_PROD',
    platformId: 'kpmgtest_domainaccounts',
    address: 'dc01.prod.local'
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<OnboardingResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const field = name.replace('account.', '');
    setAccount((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setResponse(null);

    const fullUsername = `${loginName.trim()}@${suffix}`;
    const payload: OnboardingRequestPayload = {
      username: fullUsername,
      email: email.trim(),
      firstName: loginName.trim(),
      lastName: lastName.trim(),
      account
    };

    try {
      const res = await submitOnboardingRequest(payload);
      setIsLoading(false);

      if (res.success) {
        setResponse(res);
      } else {
        setErrorMessage(res.message || 'Onboarding request failed.');
        setResponse(res);
      }
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Network error executing onboarding API.');
    }
  };

  const handleCopyRequestId = async (id: string) => {
    const ok = await copyToClipboard(id);
    if (ok) {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleCopyResponseJson = async () => {
    if (!response) return;
    const ok = await copyToClipboard(JSON.stringify(response, null, 2));
    if (ok) {
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    }
  };

  const isSuccess = response && response.success === true;
  const successRes = isSuccess ? (response as OnboardingSuccessResponse) : null;

  return (
    <div className="space-y-6">
      {/* Loading Overlay */}
      <LoadingOverlay isLoading={isLoading} message="Executing CyberArk Onboarding Workflow..." />

      {/* Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
          User & Managed Account Onboarding
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Automates EPV user creation, group memberships, vault safe allocation, and managed privilege accounts.
        </p>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Input Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Banner if API returned error */}
            {errorMessage && (
              <ErrorBanner
                message={errorMessage}
                onRetry={handleSubmit}
                onDismiss={() => setErrorMessage(null)}
              />
            )}

            {/* Section 1: CyberArk User Information */}
            <div className="bg-white border border-[#DCE1E6] rounded-md p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="p-1.5 bg-[#00338D]/10 rounded text-[#00338D]">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Section 1: CyberArk User Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Login Name & Suffix combined */}
                <div className="sm:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                    <div className="sm:col-span-6">
                      <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                        Login Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={loginName}
                        onChange={(e) => setLoginName(e.target.value)}
                        disabled={isLoading}
                        required
                        placeholder="e.g. soham_test"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-mono text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                      />
                    </div>

                    <div className="hidden sm:flex sm:col-span-1 items-center justify-center pb-2">
                      <span className="text-slate-400 font-bold font-mono text-sm">@</span>
                    </div>

                    <div className="sm:col-span-5">
                      <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                        Suffix <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={suffix}
                        onChange={(e) => setSuffix(e.target.value)}
                        disabled={isLoading}
                        required
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-mono text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                      >
                        <option value="cyberark.cloud.43372">cyberark.cloud.43372</option>
                        <option value="kpmg">kpmg</option>
                      </select>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 font-mono">
                    Constructed CyberArk Username: <span className="font-bold text-[#00338D] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">{loginName ? loginName+'@'+suffix : "Please Enter Login Name"}</span>
                  </p>
                </div>
                
                {/* Last Name */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Last Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isLoading}
                    placeholder="Smith"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                    placeholder="john.smith@enterprise.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                  />
                </div>


              </div>
            </div>

            {/* Section 2: Managed Account Configuration */}
            <div className="bg-white border border-[#DCE1E6] rounded-md p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="p-1.5 bg-[#00338D]/10 rounded text-[#00338D]">
                  <Key className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Section 2: Managed Account Configuration
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Account Username */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Account Username <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="account.username"
                    value={account.username}
                    onChange={handleAccountChange}
                    disabled={isLoading}
                    required
                    placeholder="e.g. SVC_PAM_PROD"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-mono text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                  />
                </div>

                {/* Platform ID */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Platform ID <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="account.platformId"
                    value={account.platformId}
                    onChange={handleAccountChange}
                    disabled={isLoading}
                    required
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-mono text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                  >
                    <option value="kpmgtest_domainaccounts">Windows</option>
                    <option value="UnixSSH">Linux SSH</option>
                    <option value="MSSql">Microsoft SQL Server</option>
                  </select>
                </div>

                {/* Address / Hostname */}
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider block mb-1">
                    Address / Hostname <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="account.address"
                    value={account.address}
                    onChange={handleAccountChange}
                    disabled={isLoading}
                    required
                    placeholder="dc01.prod.local or 10.0.0.1"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md font-mono text-slate-800 focus:outline-none focus:border-[#005DB6] disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Start Onboarding Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-[#00205F] hover:bg-[#00338D] text-white text-xs font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider font-mono disabled:opacity-60 active:scale-[0.99]"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-blue-200" />
                      <span>Provisioning Onboarding Task...</span>
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4 text-blue-300" />
                      <span>Start Onboarding</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Live Feed / Provisioning Timeline (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#DCE1E6] rounded-md p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#005DB6]" />
                Provisioning Timeline
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Live Feed</span>
            </div>

            <div className="space-y-4">
              {/* Stage 1 */}
              <div className="flex items-start gap-3 text-xs">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 shrink-0 ${isSuccess ? 'bg-emerald-500 border-emerald-600' : isLoading ? 'bg-blue-500 border-blue-600 animate-ping' : 'bg-slate-200 border-slate-300'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">User Provisioning</p>
                    <StatusBadge status={isSuccess ? 'SUCCESS' : isLoading ? 'IN_PROGRESS' : 'PENDING'} size="sm" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Creating or verifying user account in CyberArk Vault.</p>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="flex items-start gap-3 text-xs">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 shrink-0 ${isSuccess ? 'bg-emerald-500 border-emerald-600' : 'bg-slate-200 border-slate-300'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">Group Membership</p>
                    <StatusBadge status={isSuccess ? 'SUCCESS' : 'PENDING'} size="sm" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Assigning user to required Administrative groups.</p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="flex items-start gap-3 text-xs">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 shrink-0 ${isSuccess ? 'bg-emerald-500 border-emerald-600' : 'bg-slate-200 border-slate-300'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">Safe Creation</p>
                    <StatusBadge status={isSuccess ? 'SUCCESS' : 'PENDING'} size="sm" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Allocating vault storage (Safe) for secrets.</p>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="flex items-start gap-3 text-xs">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 shrink-0 ${isSuccess ? 'bg-emerald-500 border-emerald-600' : 'bg-slate-200 border-slate-300'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">Safe Membership</p>
                    <StatusBadge status={isSuccess ? 'SUCCESS' : 'PENDING'} size="sm" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Granting user permissions to the newly created Safe.</p>
                </div>
              </div>

              {/* Stage 5 */}
              <div className="flex items-start gap-3 text-xs">
                <div className={`w-3 h-3 rounded-full mt-1 border-2 shrink-0 ${isSuccess ? 'bg-emerald-500 border-emerald-600' : 'bg-slate-200 border-slate-300'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">Managed Account</p>
                    <StatusBadge status={isSuccess ? 'SUCCESS' : 'PENDING'} size="sm" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Onboarding the target account into the PAM safe.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security at Scale Promo Card */}
          <div className="relative rounded-md overflow-hidden bg-linear-to-r from-[#00205F] to-[#005DB6] p-6 text-white shadow-md">
            <div className="relative z-10 space-y-1">
              <h3 className="text-base font-bold tracking-tight">Security at Scale</h3>
              <p className="text-xs text-blue-100/80">
                Automating privileged identities and zero-trust policies for the modern enterprise workforce.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Response Display Section (Rendered after successful or completed request) */}
      {successRes && (
        <div className="bg-white border border-[#DCE1E6] rounded-md p-6 shadow-md space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header & Quick Action Copy Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <StatusBadge status="SUCCESS" size="md" />
                <span className="text-xs font-mono font-bold text-slate-500">
                  REQUEST ID: {successRes.requestId}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                {successRes.message}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopyRequestId(successRes.requestId)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded border border-slate-300 transition-colors"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? 'Copied ID' : 'Copy Request ID'}</span>
              </button>

              <button
                onClick={handleCopyResponseJson}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded border border-slate-300 transition-colors"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Code className="w-3.5 h-3.5" />}
                <span>{copiedJson ? 'Copied JSON' : 'Copy Response JSON'}</span>
              </button>

              <button
                onClick={() => downloadJsonFile(`onboarding_${successRes.requestId}.json`, successRes)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00338D] hover:bg-[#00205F] text-white text-xs font-semibold rounded transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download JSON</span>
              </button>
            </div>
          </div>

          {/* Execution Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F4F3FB] border border-[#E2E2EA] rounded-md text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Execution Duration</span>
              <span className="font-bold text-[#005DB6] mt-0.5 block">{formatDuration(successRes.durationMs)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Requested Time</span>
              <span className="text-slate-800 mt-0.5 block">{formatDate(successRes.requestedAt)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Completed Time</span>
              <span className="text-slate-800 mt-0.5 block">{formatDate(successRes.completedAt)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Overall Status</span>
              <span className="font-bold text-emerald-700 mt-0.5 block">SUCCESS</span>
            </div>
          </div>

          {/* Dynamic Workflow Expandable Step Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
              Provisioning Workflow Step Outputs
            </h3>

            {/* Step 1: User */}
            {successRes.steps?.user && (
              <StepCard
                stepNumber={1}
                title="User Provisioning"
                iconName="user"
                status={successRes.steps.user.status}
                data={successRes.steps.user}
              />
            )}

            {/* Step 2: Group Memberships */}
            {successRes.steps?.groupMemberships && successRes.steps.groupMemberships.length > 0 && (
              <StepCard
                stepNumber={2}
                title="Group Memberships"
                iconName="group"
                status={successRes.steps.groupMemberships[0].status}
                data={successRes.steps.groupMemberships[0]}
              />
            )}

            {/* Step 3: Safe */}
            {successRes.steps?.safe && (
              <StepCard
                stepNumber={3}
                title="Safe Allocation"
                iconName="safe"
                status={successRes.steps.safe.status}
                data={successRes.steps.safe}
              />
            )}

            {/* Step 4: Safe Membership */}
            {successRes.steps?.safeMembership && (
              <StepCard
                stepNumber={4}
                title="Safe Membership Permissions"
                iconName="safeMembership"
                status={successRes.steps.safeMembership.status}
                data={successRes.steps.safeMembership}
              />
            )}

            {/* Step 5: Managed Account */}
            {successRes.steps?.account && (
              <StepCard
                stepNumber={5}
                title="Managed Account Onboarding"
                iconName="account"
                status={successRes.steps.account.status}
                data={successRes.steps.account}
              />
            )}
          </div>

          {/* Raw JSON View */}
          {/* <div className="pt-2">
          <JSONViewer data={successRes} title="Raw CyberArk API Response" filename={`cyberark_${successRes.requestId}.json`} />
          </div> */}
        </div>
      )}
    </div>
  );
};
