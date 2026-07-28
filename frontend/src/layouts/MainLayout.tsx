import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { TopNavbar } from "../components/TopNavbar";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8FF] flex font-sans text-slate-900 antialiased">
      {/* Persistent Left Sidebar */}
      <Sidebar />

      {/* Main Workspace Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Sticky Top Navigation */}
        <TopNavbar />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 md:p-8 max-w-360 w-full mx-auto space-y-6">
          <Outlet />
        </main>

        {/* Global Enterprise Footer */}
        <footer className="mt-auto bg-white border-t border-[#E2E2EA] px-6 py-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            {/* <p>© 2026 KPMG International / Enterprise Security Operations. All Rights Reserved.</p> */}
            <p>
              © 2026 KPMG / Enterprise Security Operations. All Rights Reserved • Made with <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://www.linkedin.com/in/sohamkhanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 hover:text-blue-600 hover:underline transition-colors"
              >
                Soham Khanna
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Operational
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">v2.4.12-Enterprise</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
