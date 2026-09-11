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
    <div className="min-h-screen bg-[#fafafa]">
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
        <footer className="px-6 py-4 border-t border-orange-100/50 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
                alt="Kalimas Group" 
                className="w-8 h-8 object-contain"
              />
              <p className="text-xs text-slate-400">
                © 2026 Kalimas Group Indonesia. Powered by NexusBuild AI Platform.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-slate-400 font-medium">ISO 9001 Certified</span>
              <span className="text-slate-200">|</span>
              <span className="text-[10px] text-orange-500 font-bold">Escrow Secured</span>
              <span className="text-slate-200">|</span>
              <span className="text-[10px] text-slate-400">Deployed on GitHub Pages</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
