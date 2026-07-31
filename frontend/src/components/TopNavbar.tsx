import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  Settings,
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
  LogOut,
  LogIn,
  UserPlus,
  Menu,
} from "lucide-react";
import { checkBackendHealth } from "../api/cyberarkApi";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export const TopNavbar: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();
  const { toggleMobile } = useSidebar();

  useEffect(() => {
    checkBackendHealth().then((connected) => setIsConnected(connected));
    const interval = setInterval(() => {
      checkBackendHealth().then((connected) => setIsConnected(connected));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getInitials = (name?: string) => {
    if (!name) return "GU";
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <header className="h-16 bg-white border-b border-[#E2E2EA] px-3 sm:px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Left: Mobile Hamburger Toggle + Search Bar */}
      <div className="flex items-center gap-1.5 sm:gap-4 flex-1 min-w-0 pr-1 sm:pr-2">
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobile}
          className="lg:hidden p-1.5 sm:p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors shrink-0 z-10"
          title="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search */}
        <div className="relative flex-1 min-w-0 max-w-30 xs:max-w-[180px] sm:max-w-xs md:max-w-md">
          <Search className="w-4 h-4 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 sm:pl-9 pr-2 sm:pr-4 py-1.5 text-xs bg-[#F4F3FB] border border-[#E2E2EA] rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005DB6]/30 focus:border-[#005DB6] transition-all truncate"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
        {/* Backend Connection Indicator (Hidden on mobile phones) */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-2 py-1 sm:px-2.5 rounded-full text-[11px] sm:text-xs font-mono font-medium ${
            isConnected
              ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-emerald-500 animate-pulse" : "bg-red-500"
            }`}
          />
          <span>Backend: {isConnected ? "Connected" : "Disconnected"}</span>
        </div>

        {/* Action Icons */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-1 sm:p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md relative transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-slate-200 p-3 z-50 text-xs text-slate-700 space-y-2">
              <div className="font-semibold text-slate-900 border-b pb-1.5 flex justify-between items-center">
                <span>System Notifications</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">
                  2 NEW
                </span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <p className="font-medium text-slate-800">
                  Safe Created Successfully
                </p>
                <p className="text-[11px] text-slate-500">
                  Safe "Prod-DB-Admin" verified in CyberArk Vault.
                </p>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <p className="font-medium text-slate-800">
                  Vault Timeout Alert
                </p>
                <p className="text-[11px] text-slate-500">
                  Vault node DC-02 latency normal after auto-recovery.
                </p>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => alert("PAM Portal Settings v2.4")}
          className="p-1 sm:p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* User Profile / Auth Actions */}
        <div className="flex items-center gap-1 sm:gap-2 pl-1.5 sm:pl-3 border-l border-slate-200">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-1.5 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00205F] text-white flex items-center justify-center font-bold text-xs shadow-xs border border-[#00338D]/30 shrink-0">
                  {getInitials(user.username)}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-semibold text-slate-900 leading-tight truncate max-w-25">
                    {user.username}
                  </p>
                  <span
                    className={`inline-block text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-800 border border-purple-200"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {user.role}
                  </span>
                </div>
              </div>

              <button
                onClick={logout}
                className="p-1 sm:p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors flex items-center gap-1 text-xs font-semibold"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Default Guest Avatar */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00205F] text-white flex items-center justify-center font-bold text-xs shadow-xs border border-[#00338D]/30 shrink-0">
                {getInitials()}
              </div>

              <p className="hidden md:block text-xs font-semibold text-slate-900 leading-tight truncate max-w-20">
                Guest
              </p>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <Link
                  to="/login"
                  className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 text-xs font-semibold text-slate-700 hover:text-[#00338D] hover:bg-slate-100 rounded-md transition-colors border border-slate-200"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#00338D]" />
                  <span className="hidden sm:inline">Log In</span>
                </Link>

                <Link
                  to="/signup"
                  className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 text-xs font-semibold text-white bg-[#00338D] hover:bg-[#00205F] rounded-md transition-colors shadow-xs"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign Up</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
