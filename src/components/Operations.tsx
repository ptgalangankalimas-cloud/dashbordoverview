import React from 'react';
import { Calendar, MapPin, Clock, AlertTriangle, CheckCircle, Wrench, Ship } from 'lucide-react';
import { operationsSchedule, dockUtilization } from '../data/mockData';

const Operations: React.FC = () => {
  const priorityColors: Record<string, string> = {
    'Critical': 'bg-red-100 text-red-700 border border-red-200',
    'High': 'bg-orange-100 text-orange-700 border border-orange-200',
    'Medium': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Low': 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  const priorityDots: Record<string, string> = {
    'Critical': 'bg-red-500',
    'High': 'bg-orange-500',
    'Medium': 'bg-amber-500',
    'Low': 'bg-slate-400',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Operations Control</h3>
          <p className="text-sm text-slate-500">Manage dock schedules, maintenance, and shipyard operations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-slate-600 font-medium">March 2026</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white shadow-lg shadow-orange-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-5 -mt-5"></div>
          <Ship className="w-7 h-7 opacity-80 mb-2" />
          <p className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12</p>
          <p className="text-sm opacity-80 font-medium">Ships in Dock</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-5 text-white shadow-lg shadow-red-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-5 -mt-5"></div>
          <Wrench className="w-7 h-7 opacity-80 mb-2" />
          <p className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8</p>
          <p className="text-sm opacity-80 font-medium">Active Repairs</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 text-white shadow-lg shadow-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-5 -mt-5"></div>
          <CheckCircle className="w-7 h-7 opacity-80 mb-2" />
          <p className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8</p>
          <p className="text-sm opacity-80 font-medium">Completed This Month</p>
        </div>
        <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-5 text-white shadow-lg shadow-rose-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-5 -mt-5"></div>
          <AlertTriangle className="w-7 h-7 opacity-80 mb-2" />
          <p className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2</p>
          <p className="text-sm opacity-80 font-medium">Critical Issues</p>
        </div>
      </div>

      {/* Schedule & Dock Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Schedule */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-orange-50/50 to-transparent">
            <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Upcoming Schedule</h4>
            <p className="text-xs text-slate-500">Planned activities for the next 7 days</p>
          </div>
          <div className="divide-y divide-slate-50">
            {operationsSchedule.map((item) => (
              <div key={item.id} className="px-5 py-4 hover:bg-orange-50/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${priorityDots[item.priority]} shadow-sm`}></div>
                      <div className="w-0.5 h-12 bg-gradient-to-b from-orange-200 to-transparent mt-1"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-sm font-bold text-slate-800">{item.ship}</h5>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${priorityColors[item.priority]}`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{item.activity}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <MapPin className="w-3 h-3 text-orange-400" />
                          {item.dock}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <Calendar className="w-3 h-3 text-orange-400" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <Clock className="w-3 h-3 text-orange-400" />
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-red-50/50 to-transparent">
            <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Dock Status</h4>
            <p className="text-xs text-slate-500">Real-time dock bay status</p>
          </div>
          <div className="p-5 space-y-4">
            {dockUtilization.map((dock, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-orange-50/50 to-red-50/50 rounded-xl border border-orange-100/50">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-xs font-bold text-slate-700">{dock.name}</h5>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    dock.utilization >= 80 ? 'bg-red-100 text-red-700' :
                    dock.utilization >= 60 ? 'bg-orange-100 text-orange-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {dock.utilization}%
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: dock.capacity }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-6 rounded-md ${
                        i < dock.current ? 'bg-gradient-to-b from-orange-400 to-red-500' : 'bg-slate-200'
                      }`}
                    ></div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 font-medium">{dock.current} of {dock.capacity} bays occupied</p>
              </div>
            ))}
          </div>

          {/* Worker Status */}
          <div className="px-5 pb-5">
            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100/50">
              <h5 className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Workforce Today</h5>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-bold text-orange-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>142</p>
                  <p className="text-[10px] text-slate-500 font-medium">Workers Present</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-red-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8</p>
                  <p className="text-[10px] text-slate-500 font-medium">On Leave</p>
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
