import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  ShieldCheck,
  FileText,
  HelpCircle,
  LogOut,
  PlusCircle,
  ShieldAlert,
  GitFork,
  LogIn,
} from "lucide-react";
import kpmgLogo from "../assets/KPMGLogo_new-e1686087607475-1.webp";
import { useAuth } from "../context/AuthContext";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "User Onboarding",
      path: "/onboarding",
      icon: UserPlus,
    },
    {
      name: "Audit Logs",
      path: "/audit",
      icon: ShieldCheck,
    },
  ];

  return (
    <aside className="w-64 bg-[#00205F] text-white flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 shadow-xl border-r border-[#00338D]/40 select-none overflow-hidden">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-[#00338D]/60 flex items-center gap-3">
          {/* <div className="w-9 h-9 rounded-md bg-[#005DB6] flex items-center justify-center text-white font-bold shadow-md shadow-[#00174B]/50 shrink-0">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div> */}
          {/* kpmg Logo */}
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-md shrink-0">
            <img src={kpmgLogo} alt="KPMG" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight tracking-tight text-white">
              {/* CyberArk PAM */}
              Dev Gaurd
            </h1>
            <p className="text-[11px] text-blue-200/80 font-mono tracking-wider uppercase">
              PAM Automation Portal
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="p-3 space-y-1 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-150 relative ${
                  isActive
                    ? "bg-[#00338D] text-white shadow-sm font-semibold"
                    : "text-blue-100/70 hover:bg-[#002B7A] hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#63A1FF] rounded-r" />
                )}
                <Icon
                  className={`w-4 h-4 shrink-0 ${isActive ? "text-[#81A1FF]" : "text-blue-200/60"}`}
                />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t border-[#00338D]/60 space-y-3">
        {/* Quick Action Card */}
        <NavLink
          to="/onboarding"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-[#005DB6] hover:bg-[#00468C] text-white text-xs font-semibold shadow-md transition-all border border-[#63A1FF]/30 active:scale-[0.98]"
        >
          <PlusCircle className="w-4 h-4 text-blue-200" />
          <span>Access Request</span>
        </NavLink>

        <div className="space-y-0.5 pt-1">
          <NavLink
            to="/workflow"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                isActive
                  ? "bg-[#00338D] text-white font-semibold"
                  : "text-blue-200/70 hover:bg-[#002B7A] hover:text-white"
              }`
            }
          >
            <GitFork className="w-3.5 h-3.5 text-blue-300/60" />
            <span>Workflow & Architecture</span>
          </NavLink>

          <a
            href="#docs"
            onClick={(e) => {
              e.preventDefault();
              // alert("CyberArk PAM API Documentation & REST Guide v2.4");
              window.open(
                "https://docs.cyberark.com/pam-self-hosted/latest/en/content/webservices/implementing%20privileged%20account%20security%20web%20services%20.htm",
                "_blank",
                "noopener,noreferrer",
              );
            }}
            className="flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-blue-300/60" />
            <span>Documentation</span>
          </a>

          <a
            href="#support"
            onClick={(e) => {
              e.preventDefault();
              // alert("Support Desk: security-pam-ops@enterprise.com");
              window.open(
                "https://github.com/sohamkhanna08",
                "_blank",
                "noopener,noreferrer",
              );
            }}
            className="flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-300/60" />
            <span>Support</span>
          </a>

          {isAuthenticated ? (
            <button
              onClick={logout}
              className="flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-red-200/70 hover:bg-red-900/30 hover:text-red-200 w-full text-left transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 text-red-300/60" />
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white w-full text-left transition-colors"
            >
              <LogIn className="w-3.5 h-3.5 text-blue-300/60" />
              <span>Login / Register</span>
            </button>
          )}
        </div>

        {/* Environment Footer Info */}
        <div className="px-3 pt-2 text-[10px] text-blue-300/50 font-mono border-t border-[#00338D]/40 flex justify-between items-center">
          <span>v2.4.12-Enterprise</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online
          </span>
        </div>
      </div>
    </aside>
  );
};
