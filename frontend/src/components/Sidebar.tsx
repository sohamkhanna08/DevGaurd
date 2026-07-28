import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  ShieldCheck,
  FileText,
  HelpCircle,
  LogOut,
  LogIn,
  PlusCircle,
  ShieldAlert,
  GitFork,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useSidebar } from "../context/SidebarContext";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { isMobileOpen, isCollapsed, closeMobile, toggleCollapse } =
    useSidebar();

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
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 h-screen z-40 bg-[#00205F] text-white flex flex-col justify-between shadow-xl border-r border-[#00338D]/40 select-none transition-all duration-300 ease-in-out w-64
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
        `}
      >
        <div className="flex flex-col min-h-0 overflow-y-auto flex-1">
          {/* Brand Header */}
          <div
            className={`p-4 border-b border-[#00338D]/60 flex items-center transition-all duration-300 ${
              isCollapsed && !isMobileOpen
                ? "lg:px-2 lg:py-3.5 lg:flex-col lg:justify-center lg:gap-2.5"
                : "justify-between gap-2"
            }`}
          >
            <div
              className={`flex items-center gap-3 overflow-hidden ${
                isCollapsed && !isMobileOpen
                  ? "lg:justify-center lg:w-full"
                  : ""
              }`}
            >
              <button
                type="button"
                onClick={
                  isCollapsed && !isMobileOpen ? toggleCollapse : undefined
                }
                className="w-9 h-9 rounded-md bg-[#005DB6] flex items-center justify-center text-white font-bold shadow-md shadow-[#00174B]/50 shrink-0 hover:bg-[#00468C] transition-colors cursor-pointer"
                title={
                  isCollapsed && !isMobileOpen
                    ? "Click to Expand Sidebar"
                    : "CyberArk PAM"
                }
              >
                <ShieldAlert className="w-5 h-5 text-white" />
              </button>
              {(!isCollapsed || isMobileOpen) && (
                <div className="transition-opacity duration-200 min-w-0">
                  <h1 className="font-bold text-base leading-tight tracking-tight text-white whitespace-nowrap truncate">
                    CyberArk PAM
                  </h1>
                  <p className="text-[10px] text-blue-200/80 font-mono tracking-wider uppercase whitespace-nowrap truncate">
                    Operations Portal
                  </p>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle Button */}
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-1.5 text-blue-200 hover:text-white hover:bg-[#00338D] rounded-md transition-colors shrink-0"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={closeMobile}
              className="lg:hidden p-1.5 text-blue-200 hover:text-white hover:bg-[#00338D] rounded-md transition-colors shrink-0"
              title="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="p-3 space-y-1.5 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  title={isCollapsed && !isMobileOpen ? item.name : undefined}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? "bg-[#00338D] text-white shadow-sm font-semibold"
                      : "text-blue-100/70 hover:bg-[#002B7A] hover:text-white"
                  } ${isCollapsed && !isMobileOpen ? "justify-center px-0" : ""}`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#63A1FF] rounded-r" />
                  )}
                  <Icon
                    className={`w-4 h-4 shrink-0 ${isActive ? "text-[#81A1FF]" : "text-blue-200/60"}`}
                  />
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="truncate">{item.name}</span>
                  )}
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
            onClick={closeMobile}
            title={isCollapsed && !isMobileOpen ? "Access Request" : undefined}
            className={`flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-md bg-[#005DB6] hover:bg-[#00468C] text-white text-xs font-semibold shadow-md transition-all border border-[#63A1FF]/30 active:scale-[0.98] ${
              isCollapsed && !isMobileOpen ? "px-0" : ""
            }`}
          >
            <PlusCircle className="w-4 h-4 text-blue-200 shrink-0" />
            {(!isCollapsed || isMobileOpen) && (
              <span className="truncate">Access Request</span>
            )}
          </NavLink>

          <div className="space-y-0.5 pt-1">
            <a
              href="#docs"
              onClick={(e) => {
                e.preventDefault();
                closeMobile();
                // alert('CyberArk PAM API Documentation & REST Guide v2.4');
                window.open(
                  "https://docs.cyberark.com/pam-self-hosted/latest/en/content/webservices/implementing%20privileged%20account%20security%20web%20services%20.htm",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              title={isCollapsed && !isMobileOpen ? "Documentation" : undefined}
              className={`flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white transition-colors ${
                isCollapsed && !isMobileOpen ? "justify-center px-0" : ""
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-300/60 shrink-0" />
              {(!isCollapsed || isMobileOpen) && (
                <span className="truncate">Documentation</span>
              )}
            </a>

            <NavLink
              to="/workflow"
              onClick={closeMobile}
              title={
                isCollapsed && !isMobileOpen
                  ? "Workflow & Architecture"
                  : undefined
              }
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-[#00338D] text-white font-semibold"
                    : "text-blue-200/70 hover:bg-[#002B7A] hover:text-white"
                } ${isCollapsed && !isMobileOpen ? "justify-center px-0" : ""}`
              }
            >
              <GitFork className="w-3.5 h-3.5 text-blue-300/60 shrink-0" />
              {(!isCollapsed || isMobileOpen) && (
                <span className="truncate">Workflow & Architecture</span>
              )}
            </NavLink>

            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                closeMobile();
                // alert('Support Desk: security-pam-ops@enterprise.com');
                window.open(
                  "https://github.com/sohamkhanna08",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              title={isCollapsed && !isMobileOpen ? "Support" : undefined}
              className={`flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white transition-colors ${
                isCollapsed && !isMobileOpen ? "justify-center px-0" : ""
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-300/60 shrink-0" />
              {(!isCollapsed || isMobileOpen) && (
                <span className="truncate">Support</span>
              )}
            </a>

            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  closeMobile();
                }}
                title={isCollapsed && !isMobileOpen ? "Logout" : undefined}
                className={`flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-red-200/70 hover:bg-red-900/30 hover:text-red-200 w-full text-left transition-colors ${
                  isCollapsed && !isMobileOpen ? "justify-center px-0" : ""
                }`}
              >
                <LogOut className="w-3.5 h-3.5 text-red-300/60 shrink-0" />
                {(!isCollapsed || isMobileOpen) && (
                  <span className="truncate">Logout</span>
                )}
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  closeMobile();
                }}
                title={
                  isCollapsed && !isMobileOpen ? "Login / Register" : undefined
                }
                className={`flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-medium text-blue-200/70 hover:bg-[#002B7A] hover:text-white w-full text-left transition-colors ${
                  isCollapsed && !isMobileOpen ? "justify-center px-0" : ""
                }`}
              >
                <LogIn className="w-3.5 h-3.5 text-blue-300/60 shrink-0" />
                {(!isCollapsed || isMobileOpen) && (
                  <span className="truncate">Login / Register</span>
                )}
              </button>
            )}
          </div>

          {/* Environment Footer Info */}
          {(!isCollapsed || isMobileOpen) && (
            <div className="px-3 pt-2 text-[10px] text-blue-300/50 font-mono border-t border-[#00338D]/40 flex justify-between items-center">
              <span>v2.4.12-Enterprise</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
