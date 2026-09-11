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
        <h3 className="text-xl font-bold text-slate-800">Financial Overview</h3>
        <p className="text-sm text-slate-500">Revenue, expenses, and escrow management</p>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800">Rp {financialData.totalRevenue}B</p>
          <p className="text-sm text-slate-500">Total Revenue (YTD)</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-xs text-red-600 font-medium flex items-center gap-1">
              <ArrowDownRight className="w-3 h-3" /> +8.2%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800">Rp {financialData.totalExpenses}B</p>
          <p className="text-sm text-slate-500">Total Expenses (YTD)</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-cyan-600" />
            </div>
            <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +18.3%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-800">Rp {financialData.netProfit}B</p>
          <p className="text-sm text-slate-500">Net Profit (YTD)</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-violet-600" />
            </div>
            <span className="text-xs text-violet-600 font-medium">Escrow</span>
          </div>
          <p className="text-2xl font-bold text-slate-800">Rp {financialData.escrowBalance}B</p>
          <p className="text-sm text-slate-500">Escrow Balance</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Revenue vs Expenses */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800 mb-1">Revenue vs Expenses</h4>
          <p className="text-sm text-slate-500 mb-4">Monthly comparison (Billion IDR)</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={financialData.monthlyReceivables}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="amount" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Trend */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800 mb-1">Profit Margin Trend</h4>
          <p className="text-sm text-slate-500 mb-4">Monthly profit margin percentage</p>
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
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[35, 55]} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Line type="monotone" dataKey="margin" stroke="#8b5cf6" strokeWidth={2.5} dot={{ fill: '#8b5cf6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Recent Transactions</h4>
            <p className="text-sm text-slate-500">Latest financial activities</p>
          </div>
          <button className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Description</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Client</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Amount</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${tx.type === 'income' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                      <span className="text-sm text-slate-700">{tx.description}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{tx.client}</td>
                  <td className="px-5 py-3">
                    <span className={`text-sm font-medium ${tx.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {tx.type === 'income' ? '+' : ''}Rp {Math.abs(tx.amount)}M
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-500">{tx.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      tx.status === 'Received' ? 'bg-emerald-100 text-emerald-700' :
                      tx.status === 'Paid' ? 'bg-slate-100 text-slate-700' :
                      tx.status === 'Escrow' ? 'bg-violet-100 text-violet-700' :
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
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <CreditCard className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-violet-800">NexusBuild Escrow System</h4>
            <p className="text-sm text-violet-600 mt-1">
              All project payments are secured through our AI-powered escrow platform. 
              Current escrow balance: <strong>Rp {financialData.escrowBalance}B</strong> | 
              Pending releases: <strong>Rp {financialData.pendingPayments}B</strong>
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xs text-violet-700">4 Active Escrows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-xs text-violet-700">2 Pending Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
