import React from 'react';
import { Download, FileText } from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { qualityMetrics, revenueData } from '../data/mockData';

const Reports: React.FC = () => {
  const radarData = qualityMetrics.map(m => ({
    subject: m.metric,
    score: m.score,
    target: m.target,
  }));

  const yearlyShips = [
    { year: '2021', ships: 120 },
    { year: '2022', ships: 185 },
    { year: '2023', ships: 245 },
    { year: '2024', ships: 310 },
    { year: '2025', ships: 395 },
    { year: '2026', ships: 447 },
  ];

  const reports = [
    { title: 'Monthly Operations Report', date: 'March 2026', type: 'Operations', status: 'Ready' },
    { title: 'Q1 Financial Summary', date: 'Q1 2026', type: 'Finance', status: 'Ready' },
    { title: 'ISO 9001 Compliance Audit', date: 'February 2026', type: 'Quality', status: 'Ready' },
    { title: 'Fleet Condition Assessment', date: 'March 2026', type: 'Fleet', status: 'In Progress' },
    { title: 'Annual Safety Report', date: '2025', type: 'Safety', status: 'Ready' },
    { title: 'Client Satisfaction Survey', date: 'Q1 2026', type: 'Client', status: 'In Progress' },
  ];

  const reportColors: Record<string, { bg: string; text: string }> = {
    'Operations': { bg: 'bg-orange-100', text: 'text-orange-600' },
    'Finance': { bg: 'bg-red-100', text: 'text-red-600' },
    'Quality': { bg: 'bg-amber-100', text: 'text-amber-600' },
    'Fleet': { bg: 'bg-rose-100', text: 'text-rose-600' },
    'Safety': { bg: 'bg-orange-50', text: 'text-orange-500' },
    'Client': { bg: 'bg-red-50', text: 'text-red-500' },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Reports & Analytics</h3>
          <p className="text-sm text-slate-500">Performance insights and downloadable reports</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all text-sm font-semibold shadow-sm">
          <Download className="w-4 h-4" />
          Export All
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Quality Radar */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quality Performance</h4>
          <p className="text-xs text-slate-500 mb-4">Score vs Target metrics</p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#fed7aa" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#64748b' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: '#94a3b8' }} />
              <Radar name="Score" dataKey="score" stroke="#ff6b2b" fill="#ff6b2b" fillOpacity={0.2} />
              <Radar name="Target" dataKey="target" stroke="#e63946" fill="#e63946" fillOpacity={0.1} />
              <Legend />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Ships Growth */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Ships Served Growth</h4>
          <p className="text-xs text-slate-500 mb-4">Cumulative ships served by year</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyShips}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa' }} />
              <Bar dataKey="ships" fill="#ff6b2b" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <h4 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Revenue Performance Trend</h4>
        <p className="text-xs text-slate-500 mb-4">12-month revenue, expenses, and profit analysis</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa' }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#ff6b2b" strokeWidth={2.5} dot={{ r: 3, fill: '#ff6b2b' }} />
            <Line type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" />
            <Line type="monotone" dataKey="profit" stroke="#e63946" strokeWidth={2.5} dot={{ r: 3, fill: '#e63946' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-orange-50/50 to-transparent">
          <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Available Reports</h4>
          <p className="text-xs text-slate-500">Download detailed reports and analytics</p>
        </div>
        <div className="divide-y divide-slate-50">
          {reports.map((report, index) => {
            const colors = reportColors[report.type] || { bg: 'bg-orange-100', text: 'text-orange-600' };
            return (
              <div key={index} className="px-5 py-4 flex items-center justify-between hover:bg-orange-50/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg}`}>
                    <FileText className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{report.title}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{report.date} • {report.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    report.status === 'Ready' ? 'bg-orange-100 text-orange-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {report.status}
                  </span>
                  <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-orange-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
