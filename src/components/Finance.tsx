import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { financialData } from '../data/mockData';

const Finance: React.FC = () => {
  const transactions = [
    { id: 1, description: 'MV Borneo Spirit - Phase 2 Payment', client: 'PT Samudra Transport', amount: 2100, type: 'income', date: '2026-03-10', status: 'Received' },
    { id: 2, description: 'Steel Materials Procurement', client: 'PT Baja Nusantara', amount: -450, type: 'expense', date: '2026-03-09', status: 'Paid' },
    { id: 3, description: 'KM Kalimantan Jaya - Down Payment', client: 'PT Batubara Nusantara', amount: 1800, type: 'income', date: '2026-03-08', status: 'Received' },
    { id: 4, description: 'Worker Salaries - February', client: 'Internal', amount: -680, type: 'expense', date: '2026-03-05', status: 'Paid' },
    { id: 5, description: 'MT East Kalimantan - Final Payment', client: 'PT Minyak Timur', amount: 3200, type: 'income', date: '2026-03-04', status: 'Escrow' },
    { id: 6, description: 'Equipment Maintenance', client: 'Various', amount: -220, type: 'expense', date: '2026-03-03', status: 'Paid' },
    { id: 7, description: 'KM Mahakam Raya - Progress Payment', client: 'PT Coal Indonesia', amount: 1500, type: 'income', date: '2026-03-02', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Financial Overview</h3>
        <p className="text-sm text-slate-500">Revenue, expenses, and escrow management</p>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full"></div>
          <div className="flex items-center justify-between mb-3 relative">
            <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] text-orange-600 font-bold flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Rp {financialData.totalRevenue}B</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide mt-1">Total Revenue (YTD)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-100 to-transparent rounded-bl-full"></div>
          <div className="flex items-center justify-between mb-3 relative">
            <div className="w-11 h-11 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-md shadow-red-200">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] text-red-600 font-bold flex items-center gap-0.5">
              <ArrowDownRight className="w-3 h-3" /> +8.2%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Rp {financialData.totalExpenses}B</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide mt-1">Total Expenses (YTD)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-full"></div>
          <div className="flex items-center justify-between mb-3 relative">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-200">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] text-orange-600 font-bold flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +18.3%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Rp {financialData.netProfit}B</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide mt-1">Net Profit (YTD)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full"></div>
          <div className="flex items-center justify-between mb-3 relative">
            <div className="w-11 h-11 bg-gradient-to-br from-rose-400 to-red-500 rounded-xl flex items-center justify-center shadow-md shadow-rose-200">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] text-rose-600 font-bold">Escrow</span>
          </div>
          <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Rp {financialData.escrowBalance}B</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide mt-1">Escrow Balance</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Revenue vs Expenses */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Revenue vs Expenses</h4>
          <p className="text-xs text-slate-500 mb-4">Monthly comparison (Billion IDR)</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={financialData.monthlyReceivables}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fed7aa', boxShadow: '0 4px 20px rgba(255,107,43,0.1)' }} />
              <Bar dataKey="amount" fill="#ff6b2b" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Trend */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Profit Margin Trend</h4>
          <p className="text-xs text-slate-500 mb-4">Monthly profit margin percentage</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={[
              { month: 'Jan', margin: 43.8 },
              { month: 'Feb', margin: 44.7 },
              { month: 'Mar', margin: 42.9 },
              { month: 'Apr', margin: 42.9 },
              { month: 'May', margin: 45.8 },
              { month: 'Jun', margin: 46.2 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} domain={[35, 55]} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #fecaca' }} />
              <Line type="monotone" dataKey="margin" stroke="#e63946" strokeWidth={2.5} dot={{ fill: '#e63946', r: 4, strokeWidth: 2, stroke: '#fff' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-orange-50/50 to-transparent">
          <div>
            <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Recent Transactions</h4>
            <p className="text-xs text-slate-500">Latest financial activities</p>
          </div>
          <button className="text-xs text-orange-600 hover:text-orange-700 font-bold">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Description</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-slate-50 hover:bg-orange-50/30">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${tx.type === 'income' ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs text-slate-700 font-medium">{tx.description}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-xs text-slate-600">{tx.client}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-bold ${tx.type === 'income' ? 'text-orange-600' : 'text-red-600'}`}>
                      {tx.type === 'income' ? '+' : ''}Rp {Math.abs(tx.amount)}M
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs text-slate-500">{tx.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      tx.status === 'Received' ? 'bg-orange-100 text-orange-700' :
                      tx.status === 'Paid' ? 'bg-slate-100 text-slate-700' :
                      tx.status === 'Escrow' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Escrow Info */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg shadow-orange-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-white/5 rounded-full -mb-10"></div>
        <div className="flex items-start gap-4 relative">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>NexusBuild Escrow System</h4>
            <p className="text-sm opacity-90 mt-1">
              All project payments are secured through our AI-powered escrow platform. 
              Current escrow balance: <strong>Rp {financialData.escrowBalance}B</strong> | 
              Pending releases: <strong>Rp {financialData.pendingPayments}B</strong>
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs opacity-80">4 Active Escrows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                <span className="text-xs opacity-80">2 Pending Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
