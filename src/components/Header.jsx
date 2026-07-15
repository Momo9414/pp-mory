import React from "react";
import { Link } from "react-router-dom";

export default function Header({ logoUrl = "/logo.png" }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top flag bar (Orange, White, Green bands) */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#f97316]"></div> {/* Orange */}
        <div className="h-full w-1/3 bg-white"></div> {/* White */}
        <div className="h-full w-1/3 bg-[#059669]"></div> {/* Green */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3 select-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl flex items-center justify-center p-2 border border-slate-100 shadow-sm flex-shrink-0">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f97316" width="48" height="48"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>';
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
