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
  Anchor,
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
      className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 z-50 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-slate-700">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
          <Anchor className="w-6 h-6 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold tracking-tight">Kalimas Group</h1>
            <p className="text-xs text-slate-400">Management Control</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-l-3 border-cyan-400'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : ''}`} />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Bottom info */}
      {!collapsed && (
        <div className="absolute bottom-20 left-4 right-4 p-3 bg-slate-700/50 rounded-lg">
          <p className="text-xs text-slate-400">NexusBuild Platform</p>
          <p className="text-xs text-cyan-400 font-medium">AI & Escrow Active</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
