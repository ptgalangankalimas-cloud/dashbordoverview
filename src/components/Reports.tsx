import React from 'react';
import { BarChart3, Download, FileText, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Reports & Analytics</h3>
          <p className="text-sm text-slate-500">Performance insights and downloadable reports</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
          <Download className="w-4 h-4" />
          Export All
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Quality Radar */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800 mb-1">Quality Performance</h4>
          <p className="text-sm text-slate-500 mb-4">Score vs Target metrics</p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#64748b' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Radar name="Score" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
              <Radar name="Target" dataKey="target" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Ships Growth */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800 mb-1">Ships Served Growth</h4>
          <p className="text-sm text-slate-500 mb-4">Cumulative ships served by year</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyShips}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="ships" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
        <h4 className="text-lg font-semibold text-slate-800 mb-1">Revenue Performance Trend</h4>
        <p className="text-sm text-slate-500 mb-4">12-month revenue, expenses, and profit analysis</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" />
            <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800">Available Reports</h4>
          <p className="text-sm text-slate-500">Download detailed reports and analytics</p>
        </div>
        <div className="divide-y divide-slate-50">
          {reports.map((report, index) => (
            <div key={index} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  report.type === 'Operations' ? 'bg-cyan-100' :
                  report.type === 'Finance' ? 'bg-emerald-100' :
                  report.type === 'Quality' ? 'bg-violet-100' :
                  report.type === 'Fleet' ? 'bg-blue-100' :
                  report.type === 'Safety' ? 'bg-amber-100' :
                  'bg-pink-100'
                }`}>
                  <FileText className={`w-5 h-5 ${
                    report.type === 'Operations' ? 'text-cyan-600' :
                    report.type === 'Finance' ? 'text-emerald-600' :
                    report.type === 'Quality' ? 'text-violet-600' :
                    report.type === 'Fleet' ? 'text-blue-600' :
                    report.type === 'Safety' ? 'text-amber-600' :
                    'text-pink-600'
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{report.title}</p>
                  <p className="text-xs text-slate-500">{report.date} • {report.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  report.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {report.status}
                </span>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Download className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
