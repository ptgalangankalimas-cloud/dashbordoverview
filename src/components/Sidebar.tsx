import React from 'react';
import {
  LayoutDashboard,
  Ship,
  Wrench,
  DollarSign,
  ClipboardList,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: ClipboardList },
  { id: 'fleet', label: 'Fleet Management', icon: Ship },
  { id: 'operations', label: 'Operations', icon: Wrench },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, collapsed, setCollapsed }) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f23] text-white transition-all duration-300 z-50 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
      
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
        <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
          <img 
            src="/logo.svg" 
            alt="Kalimas Group" 
            className="w-9 h-9 object-contain"
          />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-base font-bold tracking-tight bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              KALIMAS GROUP
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Management Control</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-5 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500/15 to-red-500/10 text-orange-400 shadow-inner'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <div className={`flex-shrink-0 ${isActive ? 'relative' : ''}`}>
                {isActive && (
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md"></div>
                )}
                <Icon className={`w-[18px] h-[18px] relative ${isActive ? 'text-orange-400' : ''}`} />
              </div>
              {!collapsed && (
                <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {item.label}
                </span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all hover:border-orange-500/30"
      >
        {collapsed ? <ChevronRight className="w-4 h-4 text-slate-400" /> : <ChevronLeft className="w-4 h-4 text-slate-400" />}
      </button>

      {/* Bottom info */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <p className="text-[10px] text-orange-300 font-medium tracking-wide uppercase">NexusBuild AI</p>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Escrow Platform Active</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
