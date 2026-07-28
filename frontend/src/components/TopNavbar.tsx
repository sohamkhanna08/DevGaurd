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
} from "lucide-react";
import { checkBackendHealth } from "../api/cyberarkApi";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

export const TopNavbar: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();

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
    <header className="h-16 bg-white border-b border-[#E2E2EA] px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Global Search */}
      <div className="relative w-96 max-w-full">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search PAM Portal, Safes, Users, Requests..."
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F4F3FB] border border-[#E2E2EA] rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005DB6]/30 focus:border-[#005DB6] transition-all"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Backend Connection Indicator */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
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

        {/* Environment Badge */}
        {/* <div className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-[#00338D]/10 text-[#00338D] border border-[#00338D]/20 uppercase">
          DEVELOPMENT
        </div> */}

        {/* Action Icons */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md relative transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
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
          className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* User Profile / Auth Actions */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#00205F] text-white flex items-center justify-center font-bold text-xs shadow-xs border border-[#00338D]/30 shrink-0">
                  {getInitials(user.username)}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-semibold text-slate-900 leading-tight">
                    {user.username}
                  </p>
                  <span
                    className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.2 rounded uppercase ${
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
                className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors flex items-center gap-1 text-xs font-semibold"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden lg:inline text-[11px]">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#00338D] hover:bg-slate-100 rounded-md transition-colors border border-slate-200"
              >
                <LogIn className="w-3.5 h-3.5 text-[#00338D]" />
                <span>Log In</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#00338D] hover:bg-[#00205F] rounded-md transition-colors shadow-xs"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
