import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Fleet from './components/Fleet';
import Operations from './components/Operations';
import Finance from './components/Finance';
import Reports from './components/Reports';
import Team from './components/Team';
import SettingsPage from './components/Settings';

const pageConfig: Record<string, { title: string; subtitle: string }> = {
  dashboard: { title: 'Dashboard Overview', subtitle: 'Welcome back, Aditya. Here\'s what\'s happening at Galangan Kalimas today.' },
  projects: { title: 'Project Management', subtitle: 'Track and manage all active shipyard projects' },
  fleet: { title: 'Fleet Management', subtitle: 'Monitor vessels and maintenance schedules' },
  operations: { title: 'Operations Control', subtitle: 'Manage dock schedules and shipyard operations' },
  finance: { title: 'Financial Management', subtitle: 'Revenue, expenses, and escrow tracking' },
  reports: { title: 'Reports & Analytics', subtitle: 'Performance insights and business intelligence' },
  team: { title: 'Team & Organization', subtitle: 'Management team and organizational structure' },
  settings: { title: 'Settings', subtitle: 'Configure dashboard preferences and system settings' },
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const currentPage = pageConfig[activeTab] || pageConfig.dashboard;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects />;
      case 'fleet': return <Fleet />;
      case 'operations': return <Operations />;
      case 'finance': return <Finance />;
      case 'reports': return <Reports />;
      case 'team': return <Team />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header title={currentPage.title} subtitle={currentPage.subtitle} />
        <main className="p-6">
          {renderContent()}
        </main>
        {/* Footer */}
        <footer className="px-6 py-4 border-t border-slate-200 bg-white/50">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">
              © 2026 Kalimas Group Indonesia. Powered by NexusBuild AI Platform.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400">ISO 9001 Certified</span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs text-cyan-600 font-medium">Escrow Secured</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
