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
    { label: 'Total Ships Served', value: `${kpiData.totalShips}+`, icon: Ship, gradient: 'from-orange-500 to-red-500', shadow: 'shadow-orange-200', change: '+12 this month' },
    { label: 'Active Projects', value: kpiData.activeProjects.toString(), icon: ClipboardList, gradient: 'from-red-500 to-rose-600', shadow: 'shadow-red-200', change: '3 starting soon' },
    { label: 'Revenue (Billion IDR)', value: `Rp ${kpiData.revenue}B`, icon: DollarSign, gradient: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-200', change: `+${kpiData.revenueGrowth}% vs last year` },
    { label: 'Customer Rating', value: `${kpiData.customerSatisfaction}/5`, icon: Star, gradient: 'from-orange-400 to-red-500', shadow: 'shadow-orange-200', change: '4.9 out of 5 stars' },
  ];

  const serviceColors = ['#ff6b2b', '#e63946', '#ff8c42', '#ff4757', '#ffa502'];

  const activityIcons: Record<string, React.ReactNode> = {
    project: <ClipboardList className="w-4 h-4" />,
    finance: <DollarSign className="w-4 h-4" />,
    operations: <Activity className="w-4 h-4" />,
    quality: <CheckCircle className="w-4 h-4" />,
    client: <Ship className="w-4 h-4" />,
    logistics: <Clock className="w-4 h-4" />,
  };

  const activityColors: Record<string, string> = {
    project: 'bg-orange-100 text-orange-600',
    finance: 'bg-emerald-100 text-emerald-600',
    operations: 'bg-red-100 text-red-600',
    quality: 'bg-amber-100 text-amber-600',
    client: 'bg-rose-100 text-rose-600',
    logistics: 'bg-orange-50 text-orange-500',
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
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${kpi.gradient} opacity-5 rounded-bl-full`}></div>
              <div className="flex items-start justify-between relative">
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{kpi.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{kpi.value}</p>
                  <p className="text-xs text-orange-600 mt-2 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {kpi.change}
                  </p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${kpi.gradient} rounded-2xl flex items-center justify-center shadow-lg ${kpi.shadow}`}>
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
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Revenue Overview</h3>
              <p className="text-xs text-slate-500">Monthly revenue, expenses & profit (Billion IDR)</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Revenue</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Expenses</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Profit</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b2b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ff6b2b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e63946" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#e63946" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa', boxShadow: '0 4px 20px rgba(255,107,43,0.1)' }} />
              <Area type="monotone" dataKey="revenue" stroke="#ff6b2b" fill="url(#colorRevenue)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="expenses" stroke="#94a3b8" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" />
              <Area type="monotone" dataKey="profit" stroke="#e63946" fill="url(#colorProfit)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Service Distribution</h3>
          <p className="text-xs text-slate-500 mb-4">Revenue by service type</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {serviceDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={serviceColors[index]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {serviceDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: serviceColors[index] }}></span>
                  <span className="text-slate-600 text-xs">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-800 text-xs">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Project Status */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Project Status</h3>
          <p className="text-xs text-slate-500 mb-4">Current project overview</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={projectStatusData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: '#64748b' }} width={70} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa' }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color === '#10b981' ? '#ff6b2b' : entry.color === '#f59e0b' ? '#ffa502' : entry.color === '#ef4444' ? '#e63946' : '#ff8c42'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-3 text-center border border-orange-100">
              <p className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>14</p>
              <p className="text-[10px] text-orange-700 font-medium uppercase tracking-wide">On Track</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-3 text-center border border-red-100">
              <p className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3</p>
              <p className="text-[10px] text-red-700 font-medium uppercase tracking-wide">Delayed</p>
            </div>
          </div>
        </div>

        {/* Dock Utilization */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Dock Utilization</h3>
          <p className="text-xs text-slate-500 mb-4">Current capacity usage</p>
          <div className="space-y-4">
            {dockUtilization.map((dock, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-700">{dock.name}</span>
                  <span className="text-xs text-slate-500">{dock.current}/{dock.capacity} ships</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all ${
                      dock.utilization >= 80 ? 'bg-gradient-to-r from-red-500 to-rose-500' : dock.utilization >= 60 ? 'bg-gradient-to-r from-orange-400 to-amber-500' : 'bg-gradient-to-r from-orange-300 to-orange-400'
                    }`}
                    style={{ width: `${dock.utilization}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">{dock.utilization}% utilized</p>
              </div>
            ))}
          </div>

          {/* Quality Metrics */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wide">Quality Metrics</h4>
            <div className="space-y-2.5">
              {qualityMetrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-600">{metric.metric}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                        style={{ width: `${metric.score}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 w-7">{metric.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Recent Activities</h3>
          <p className="text-xs text-slate-500 mb-4">Latest updates & events</p>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activityColors[activity.type]}`}>
                  {activityIcons[activity.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-700">{activity.action}</p>
                  <p className="text-[11px] text-slate-500 truncate">{activity.detail}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50 rounded-2xl p-4 flex items-start gap-3 card-hover">
          <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-orange-800">2 Projects Need Attention</p>
            <p className="text-xs text-orange-600 mt-0.5">MV Sulawesi Pride & MV Balikpapan Express are behind schedule</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200/50 rounded-2xl p-4 flex items-start gap-3 card-hover">
          <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-red-800">ISO 9001 Audit Passed</p>
            <p className="text-xs text-red-600 mt-0.5">Quality management system audit completed successfully</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-4 flex items-start gap-3 card-hover">
          <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-800">Revenue Up 12.5%</p>
            <p className="text-xs text-amber-600 mt-0.5">Year-over-year growth exceeds target by 2.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
