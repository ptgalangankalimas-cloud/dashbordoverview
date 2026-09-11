import React from 'react';
import { Ship, Wrench, Anchor, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { fleetData } from '../data/mockData';

const Fleet: React.FC = () => {
  const statusIcons: Record<string, React.ReactNode> = {
    'In Service': <CheckCircle className="w-4 h-4 text-emerald-500" />,
    'Under Repair': <Wrench className="w-4 h-4 text-amber-500" />,
    'Docked': <Anchor className="w-4 h-4 text-blue-500" />,
  };

  const statusColors: Record<string, string> = {
    'In Service': 'bg-emerald-100 text-emerald-700',
    'Under Repair': 'bg-amber-100 text-amber-700',
    'Docked': 'bg-blue-100 text-blue-700',
  };

  const getConditionColor = (condition: number) => {
    if (condition >= 80) return 'text-emerald-600';
    if (condition >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getConditionBarColor = (condition: number) => {
    if (condition >= 80) return 'bg-emerald-500';
    if (condition >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Fleet Management</h3>
          <p className="text-sm text-slate-500">Monitor all vessels under Kalimas Group services</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-emerald-700 font-medium">{fleetData.filter(f => f.status === 'In Service').length} Active</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-amber-700 font-medium">{fleetData.filter(f => f.status === 'Under Repair').length} Repair</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-blue-700 font-medium">{fleetData.filter(f => f.status === 'Docked').length} Docked</span>
          </div>
        </div>
      </div>

      {/* Fleet Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Vessel</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Condition</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Docking</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {fleetData.map((ship) => (
                <tr key={ship.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                        <Ship className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">{ship.name}</p>
                        <p className="text-xs text-slate-400">ID: VSL-{String(ship.id).padStart(3, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-600">{ship.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {statusIcons[ship.status]}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[ship.status]}`}>
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
                      <span className={`text-sm font-medium ${getConditionColor(ship.condition)}`}>
                        {ship.condition}%
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {ship.lastDocking}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
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
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Ship className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{fleetData.length}</p>
              <p className="text-xs text-slate-500">Total Vessels</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{Math.round(fleetData.reduce((a, b) => a + b.condition, 0) / fleetData.length)}%</p>
              <p className="text-xs text-slate-500">Avg Condition</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{fleetData.filter(f => f.condition < 60).length}</p>
              <p className="text-xs text-slate-500">Needs Attention</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
              <Anchor className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">3</p>
              <p className="text-xs text-slate-500">Dock Bays Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
