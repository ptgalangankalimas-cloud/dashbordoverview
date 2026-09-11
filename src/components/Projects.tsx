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
    'On Track': 'bg-emerald-100 text-emerald-700',
    'Delayed': 'bg-amber-100 text-amber-700',
    'Critical': 'bg-red-100 text-red-700',
    'Completed': 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Active Projects</h3>
          <p className="text-sm text-slate-500">Manage and monitor all shipyard projects</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-shadow text-sm font-medium">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-200 flex-1">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent border-none outline-none text-sm text-slate-600 w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
          <div key={project.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">{project.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mt-1">{project.shipName}</h4>
                <p className="text-sm text-slate-500">{project.type} • {project.client}</p>
              </div>
              <button className="p-1 hover:bg-slate-100 rounded">
                <MoreVertical className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500">Progress</span>
                <span className="text-xs font-medium text-slate-700">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    project.progress >= 80 ? 'bg-emerald-500' : project.progress >= 50 ? 'bg-cyan-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{project.endDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <DollarSign className="w-4 h-4 text-slate-400" />
                <span>Rp {project.spent}/{project.budget}M</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <User className="w-4 h-4 text-slate-400" />
                <span>{project.manager}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Started {project.startDate}</span>
              </div>
            </div>

            {/* Budget bar */}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Budget Usage</span>
                <span className={`font-medium ${
                  (project.spent / project.budget) > 0.9 ? 'text-red-600' : (project.spent / project.budget) > 0.7 ? 'text-amber-600' : 'text-emerald-600'
                }`}>
                  {Math.round((project.spent / project.budget) * 100)}% used
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
                <div
                  className={`h-1.5 rounded-full ${
                    (project.spent / project.budget) > 0.9 ? 'bg-red-500' : (project.spent / project.budget) > 0.7 ? 'bg-amber-500' : 'bg-emerald-500'
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
