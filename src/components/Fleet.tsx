import React from 'react';
import { Ship, Wrench, Anchor, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { fleetData } from '../data/mockData';

const Fleet: React.FC = () => {
  const statusIcons: Record<string, React.ReactNode> = {
    'In Service': <CheckCircle className="w-4 h-4 text-orange-500" />,
    'Under Repair': <Wrench className="w-4 h-4 text-amber-500" />,
    'Docked': <Anchor className="w-4 h-4 text-red-500" />,
  };

  const statusColors: Record<string, string> = {
    'In Service': 'bg-orange-100 text-orange-700 border border-orange-200',
    'Under Repair': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Docked': 'bg-red-100 text-red-700 border border-red-200',
  };

  const getConditionColor = (condition: number) => {
    if (condition >= 80) return 'text-orange-600';
    if (condition >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getConditionBarColor = (condition: number) => {
    if (condition >= 80) return 'bg-gradient-to-r from-orange-400 to-orange-500';
    if (condition >= 60) return 'bg-gradient-to-r from-amber-400 to-orange-400';
    return 'bg-gradient-to-r from-red-400 to-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Fleet Management</h3>
          <p className="text-sm text-slate-500">Monitor all vessels under Kalimas Group services</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-xl border border-orange-200">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-orange-700 font-semibold">{fleetData.filter(f => f.status === 'In Service').length} Active</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-xs text-amber-700 font-semibold">{fleetData.filter(f => f.status === 'Under Repair').length} Repair</span>
          </div>
          <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-xl border border-red-200">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-xs text-red-700 font-semibold">{fleetData.filter(f => f.status === 'Docked').length} Docked</span>
          </div>
        </div>
      </div>

      {/* Fleet Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-orange-50/50 to-red-50/50 border-b border-orange-100/50">
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Vessel</th>
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Condition</th>
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Last Docking</th>
                <th className="text-left px-5 py-3.5 text-[10px] font-bold text-orange-700 uppercase tracking-wider">Next Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {fleetData.map((ship) => (
                <tr key={ship.id} className="border-b border-slate-50 hover:bg-orange-50/30 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                        <Ship className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{ship.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">VSL-{String(ship.id).padStart(3, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs text-slate-600 font-medium">{ship.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {statusIcons[ship.status]}
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColors[ship.status]}`}>
                        {ship.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getConditionBarColor(ship.condition)}`}
                          style={{ width: `${ship.condition}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-bold ${getConditionColor(ship.condition)}`}>
                        {ship.condition}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      {ship.lastDocking}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      {ship.nextMaintenance}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 card-hover">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
              <Ship className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{fleetData.length}</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Total Vessels</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 card-hover">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-md shadow-red-200">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{Math.round(fleetData.reduce((a, b) => a + b.condition, 0) / fleetData.length)}%</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Avg Condition</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 card-hover">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-200">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{fleetData.filter(f => f.condition < 60).length}</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Needs Attention</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 card-hover">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-rose-400 to-red-500 rounded-xl flex items-center justify-center shadow-md shadow-rose-200">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Dock Bays Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
