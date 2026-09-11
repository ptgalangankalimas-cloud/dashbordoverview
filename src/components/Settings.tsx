import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Palette, Database, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'language', label: 'Language', icon: Globe },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Backup', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-800">Settings</h3>
        <p className="text-sm text-slate-500">Manage dashboard preferences and configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Nav */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3">
          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyan-50 text-cyan-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {activeSection === 'general' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">General Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      defaultValue="Kalimas Group Indonesia"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                    <input
                      type="text"
                      defaultValue="https://kalimasgroup.com"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Dashboard Title</label>
                    <input
                      type="text"
                      defaultValue="Kalimas Group - Management Control"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500">
                      <option>Asia/Makassar (WITA)</option>
                      <option>Asia/Jakarta (WIB)</option>
                      <option>Asia/Jayapura (WIT)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Notification Preferences</h4>
              <div className="space-y-4">
                {[
                  { label: 'Project Updates', desc: 'Get notified when project status changes', default: true },
                  { label: 'Financial Alerts', desc: 'Payment received and budget threshold alerts', default: true },
                  { label: 'Operations Schedule', desc: 'Dock schedule changes and maintenance reminders', default: true },
                  { label: 'Quality Reports', desc: 'ISO compliance and audit notifications', default: false },
                  { label: 'Team Updates', desc: 'New team members and role changes', default: false },
                  { label: 'System Alerts', desc: 'Platform maintenance and system notifications', default: true },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-700">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.default} className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Security Settings</h4>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Two-Factor Authentication</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Enabled</span>
                  </div>
                  <p className="text-xs text-slate-500">Add an extra layer of security to your account</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Session Timeout</p>
                    <span className="text-sm text-slate-600">30 minutes</span>
                  </div>
                  <p className="text-xs text-slate-500">Automatically log out after inactivity</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Login History</p>
                    <span className="text-sm text-slate-600">Last: Today, 09:32 AM</span>
                  </div>
                  <p className="text-xs text-slate-500">IP: 103.xx.xx.xx • Balikpapan, Indonesia</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">API Access</p>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Restricted</span>
                  </div>
                  <p className="text-xs text-slate-500">NexusBuild API integration status</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'language' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Language & Region</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Dashboard Language</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500">
                    <option>English</option>
                    <option>Bahasa Indonesia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date Format</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Currency</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500">
                    <option>IDR - Indonesian Rupiah</option>
                    <option>USD - US Dollar</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Appearance</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-4 border-2 border-cyan-500 rounded-lg bg-white text-center">
                      <div className="w-8 h-8 bg-white border border-slate-200 rounded mx-auto mb-2"></div>
                      <span className="text-xs font-medium text-slate-700">Light</span>
                    </button>
                    <button className="p-4 border-2 border-slate-200 rounded-lg bg-white text-center hover:border-slate-300">
                      <div className="w-8 h-8 bg-slate-800 rounded mx-auto mb-2"></div>
                      <span className="text-xs font-medium text-slate-700">Dark</span>
                    </button>
                    <button className="p-4 border-2 border-slate-200 rounded-lg bg-white text-center hover:border-slate-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-white to-slate-800 rounded mx-auto mb-2"></div>
                      <span className="text-xs font-medium text-slate-700">Auto</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Accent Color</label>
                  <div className="flex items-center gap-3">
                    {['bg-cyan-500', 'bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'].map((color, i) => (
                      <button
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} ${i === 0 ? 'ring-2 ring-offset-2 ring-cyan-500' : ''} hover:scale-110 transition-transform`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Data & Backup</h4>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Auto Backup</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Enabled</span>
                  </div>
                  <p className="text-xs text-slate-500">Daily backup at 02:00 AM WITA • Last backup: Today</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">Data Storage</p>
                    <span className="text-sm text-slate-600">2.4 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                    <div className="h-2 rounded-full bg-cyan-500" style={{ width: '24%' }}></div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-slate-700">NexusBuild Sync</p>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Connected</span>
                  </div>
                  <p className="text-xs text-slate-500">Real-time sync with AI platform • Last sync: 2 min ago</p>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-shadow text-sm font-medium">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
