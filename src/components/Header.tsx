import React from 'react';
import { Bell, Search, User, Globe } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="glass border-b border-orange-100/50 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-slate-600 w-40"
            />
          </div>

          {/* Language */}
          <button className="p-2.5 hover:bg-orange-50 rounded-xl transition-colors border border-transparent hover:border-orange-200">
            <Globe className="w-5 h-5 text-slate-500" />
          </button>

          {/* Notifications */}
          <button className="relative p-2.5 hover:bg-orange-50 rounded-xl transition-colors border border-transparent hover:border-orange-200">
            <Bell className="w-5 h-5 text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
          </button>

          {/* User */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-700">Aditya Topani</p>
              <p className="text-xs text-slate-400">President Director</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
