import React from 'react';
import {
  Ship,
  ClipboardList,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import {
  kpiData,
  revenueData,
  serviceDistribution,
  projectStatusData,
  recentActivities,
  dockUtilization,
  qualityMetrics,
} from '../data/mockData';

const Dashboard: React.FC = () => {
  const kpis = [
    { label: 'Total Ships Served', value: `${kpiData.totalShips}+`, icon: Ship, color: 'from-cyan-500 to-blue-500', change: '+12 this month' },
    { label: 'Active Projects', value: kpiData.activeProjects.toString(), icon: ClipboardList, color: 'from-violet-500 to-purple-500', change: '3 starting soon' },
    { label: 'Revenue (Billion IDR)', value: `Rp ${kpiData.revenue}B`, icon: DollarSign, color: 'from-emerald-500 to-green-500', change: `+${kpiData.revenueGrowth}% vs last year` },
    { label: 'Customer Rating', value: `${kpiData.customerSatisfaction}/5`, icon: Star, color: 'from-amber-500 to-orange-500', change: '4.9 out of 5 stars' },
  ];

  const activityIcons: Record<string, React.ReactNode> = {
    project: <ClipboardList className="w-4 h-4" />,
    finance: <DollarSign className="w-4 h-4" />,
    operations: <Activity className="w-4 h-4" />,
    quality: <CheckCircle className="w-4 h-4" />,
    client: <Ship className="w-4 h-4" />,
    logistics: <Clock className="w-4 h-4" />,
  };

  const activityColors: Record<string, string> = {
    project: 'bg-blue-100 text-blue-600',
    finance: 'bg-green-100 text-green-600',
    operations: 'bg-purple-100 text-purple-600',
    quality: 'bg-emerald-100 text-emerald-600',
    client: 'bg-cyan-100 text-cyan-600',
    logistics: 'bg-amber-100 text-amber-600',
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">{kpi.label}</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</p>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {kpi.change}
                  </p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Revenue Overview</h3>
              <p className="text-sm text-slate-500">Monthly revenue, expenses & profit (Billion IDR)</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-cyan-500"></span> Revenue</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-300"></span> Expenses</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Profit</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#06b6d4" fill="url(#colorRevenue)" strokeWidth={2} />
              <Area type="monotone" dataKey="expenses" stroke="#94a3b8" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" />
              <Area type="monotone" dataKey="profit" stroke="#10b981" fill="url(#colorProfit)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Service Distribution</h3>
          <p className="text-sm text-slate-500 mb-4">Revenue by service type</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {serviceDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-medium text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Project Status */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Project Status</h3>
          <p className="text-sm text-slate-500 mb-4">Current project overview</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectStatusData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12, fill: '#64748b' }} width={80} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-emerald-600">14</p>
              <p className="text-xs text-emerald-700">On Track</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-amber-600">3</p>
              <p className="text-xs text-amber-700">Delayed</p>
            </div>
          </div>
        </div>

        {/* Dock Utilization */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Dock Utilization</h3>
          <p className="text-sm text-slate-500 mb-4">Current capacity usage</p>
          <div className="space-y-4">
            {dockUtilization.map((dock, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{dock.name}</span>
                  <span className="text-sm text-slate-500">{dock.current}/{dock.capacity} ships</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      dock.utilization >= 80 ? 'bg-red-500' : dock.utilization >= 60 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${dock.utilization}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">{dock.utilization}% utilized</p>
              </div>
            ))}
          </div>

          {/* Quality Metrics */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Quality Metrics</h4>
            <div className="space-y-2">
              {qualityMetrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{metric.metric}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-slate-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${metric.score}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-slate-700 w-8">{metric.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Recent Activities</h3>
          <p className="text-sm text-slate-500 mb-4">Latest updates & events</p>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activityColors[activity.type]}`}>
                  {activityIcons[activity.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700">{activity.action}</p>
                  <p className="text-xs text-slate-500 truncate">{activity.detail}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">2 Projects Need Attention</p>
            <p className="text-xs text-amber-600 mt-1">MV Sulawesi Pride & MV Balikpapan Express are behind schedule</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-cyan-800">ISO 9001 Audit Passed</p>
            <p className="text-xs text-cyan-600 mt-1">Quality management system audit completed successfully</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-emerald-800">Revenue Up 12.5%</p>
            <p className="text-xs text-emerald-600 mt-1">Year-over-year growth exceeds target by 2.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
