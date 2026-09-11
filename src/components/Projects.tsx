import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Calendar, DollarSign, User, Clock } from 'lucide-react';
import { activeProjects } from '../data/mockData';

const Projects: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const statuses = ['All', 'On Track', 'Delayed', 'Critical', 'Completed'];

  const filteredProjects = filterStatus === 'All'
    ? activeProjects
    : activeProjects.filter(p => p.status === filterStatus);

  const statusColors: Record<string, string> = {
    'On Track': 'bg-orange-100 text-orange-700 border border-orange-200',
    'Delayed': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Critical': 'bg-red-100 text-red-700 border border-red-200',
    'Completed': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Active Projects</h3>
          <p className="text-sm text-slate-500">Manage and monitor all shipyard projects</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all text-sm font-semibold">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-slate-200 shadow-sm flex-1">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent border-none outline-none text-sm text-slate-600 w-full"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-400" />
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterStatus === status
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 card-hover relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full"></div>
            
            <div className="flex items-start justify-between mb-3 relative">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{project.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mt-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.shipName}</h4>
                <p className="text-xs text-slate-500">{project.type} • {project.client}</p>
              </div>
              <button className="p-1.5 hover:bg-orange-50 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Progress */}
            <div className="mb-4 relative">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Progress</span>
                <span className="text-xs font-bold text-slate-700">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    project.progress >= 80 ? 'bg-gradient-to-r from-orange-400 to-orange-500' : project.progress >= 50 ? 'bg-gradient-to-r from-orange-400 to-red-400' : 'bg-gradient-to-r from-amber-400 to-orange-400'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                <span>{project.endDate}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <DollarSign className="w-3.5 h-3.5 text-orange-400" />
                <span>Rp {project.spent}/{project.budget}M</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <User className="w-3.5 h-3.5 text-orange-400" />
                <span>{project.manager}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>Started {project.startDate}</span>
              </div>
            </div>

            {/* Budget bar */}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-medium uppercase tracking-wide">Budget Usage</span>
                <span className={`font-bold ${
                  (project.spent / project.budget) > 0.9 ? 'text-red-600' : (project.spent / project.budget) > 0.7 ? 'text-amber-600' : 'text-orange-600'
                }`}>
                  {Math.round((project.spent / project.budget) * 100)}% used
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1.5">
                <div
                  className={`h-1.5 rounded-full ${
                    (project.spent / project.budget) > 0.9 ? 'bg-gradient-to-r from-red-500 to-rose-500' : (project.spent / project.budget) > 0.7 ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-orange-300 to-orange-500'
                  }`}
                  style={{ width: `${(project.spent / project.budget) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
