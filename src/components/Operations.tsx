import React from 'react';
import { Calendar, MapPin, Clock, AlertTriangle, CheckCircle, Wrench, Ship } from 'lucide-react';
import { operationsSchedule, dockUtilization } from '../data/mockData';

const Operations: React.FC = () => {
  const priorityColors: Record<string, string> = {
    'Critical': 'bg-red-100 text-red-700 border-red-200',
    'High': 'bg-amber-100 text-amber-700 border-amber-200',
    'Medium': 'bg-blue-100 text-blue-700 border-blue-200',
    'Low': 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const priorityDots: Record<string, string> = {
    'Critical': 'bg-red-500',
    'High': 'bg-amber-500',
    'Medium': 'bg-blue-500',
    'Low': 'bg-slate-400',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Operations Control</h3>
          <p className="text-sm text-slate-500">Manage dock schedules, maintenance, and shipyard operations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-600">March 2026</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-5 text-white">
          <Ship className="w-8 h-8 opacity-80 mb-2" />
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm opacity-80">Ships in Dock</p>
        </div>
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-5 text-white">
          <Wrench className="w-8 h-8 opacity-80 mb-2" />
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm opacity-80">Active Repairs</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-5 text-white">
          <CheckCircle className="w-8 h-8 opacity-80 mb-2" />
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm opacity-80">Completed This Month</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white">
          <AlertTriangle className="w-8 h-8 opacity-80 mb-2" />
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm opacity-80">Critical Issues</p>
        </div>
      </div>

      {/* Schedule & Dock Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h4 className="text-lg font-semibold text-slate-800">Upcoming Schedule</h4>
            <p className="text-sm text-slate-500">Planned activities for the next 7 days</p>
          </div>
          <div className="divide-y divide-slate-50">
            {operationsSchedule.map((item) => (
              <div key={item.id} className="px-5 py-4 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${priorityDots[item.priority]}`}></div>
                      <div className="w-0.5 h-12 bg-slate-100 mt-1"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-sm font-semibold text-slate-800">{item.ship}</h5>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${priorityColors[item.priority]}`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{item.activity}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.dock}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dock Status */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-5 py-4 border-b border-slate-100">
            <h4 className="text-lg font-semibold text-slate-800">Dock Status</h4>
            <p className="text-sm text-slate-500">Real-time dock bay status</p>
          </div>
          <div className="p-5 space-y-4">
            {dockUtilization.map((dock, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-sm font-semibold text-slate-700">{dock.name}</h5>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    dock.utilization >= 80 ? 'bg-red-100 text-red-700' :
                    dock.utilization >= 60 ? 'bg-amber-100 text-amber-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {dock.utilization}%
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: dock.capacity }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-6 rounded ${
                        i < dock.current ? 'bg-cyan-500' : 'bg-slate-200'
                      }`}
                    ></div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">{dock.current} of {dock.capacity} bays occupied</p>
              </div>
            ))}
          </div>

          {/* Worker Status */}
          <div className="px-5 pb-5">
            <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
              <h5 className="text-sm font-semibold text-slate-700 mb-2">Workforce Today</h5>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-bold text-slate-800">142</p>
                  <p className="text-xs text-slate-500">Workers Present</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-800">8</p>
                  <p className="text-xs text-slate-500">On Leave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
