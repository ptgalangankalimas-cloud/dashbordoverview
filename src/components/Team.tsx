import React from 'react';
import { Users, Mail, Phone, Shield, Award } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const Team: React.FC = () => {
  const departments = [
    { name: 'Executive', count: 1, color: 'from-cyan-500 to-blue-600' },
    { name: 'Operations', count: 45, color: 'from-violet-500 to-purple-600' },
    { name: 'Engineering', count: 62, color: 'from-emerald-500 to-green-600' },
    { name: 'Finance', count: 8, color: 'from-amber-500 to-orange-600' },
    { name: 'Legal', count: 5, color: 'from-pink-500 to-rose-600' },
    { name: 'Quality & Safety', count: 12, color: 'from-teal-500 to-cyan-600' },
    { name: 'Admin & Support', count: 9, color: 'from-slate-500 to-slate-700' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System', status: 'Active', expiry: '2027-06' },
    { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', status: 'Active', expiry: '2027-03' },
    { name: 'BKI Classification', description: 'Biro Klasifikasi Indonesia', status: 'Active', expiry: '2026-12' },
    { name: 'NexusBuild Platform', description: 'AI & Escrow System', status: 'Active', expiry: 'N/A' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-800">Team & Organization</h3>
        <p className="text-sm text-slate-500">Management team, departments, and certifications</p>
      </div>

      {/* Management Team */}
      <div>
        <h4 className="text-lg font-semibold text-slate-800 mb-4">Board of Directors</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h5 className="text-sm font-semibold text-slate-800">{member.name}</h5>
              <p className="text-xs text-cyan-600 font-medium mt-0.5">{member.role}</p>
              <p className="text-xs text-slate-400 mt-1">{member.department}</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xs text-emerald-600">{member.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Department Overview</h4>
            <p className="text-sm text-slate-500">Total workforce: 142 employees</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-400" />
            <span className="text-2xl font-bold text-slate-800">142</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {departments.map((dept, index) => (
            <div key={index} className="p-3 bg-slate-50 rounded-lg">
              <div className={`w-8 h-8 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center mb-2`}>
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-medium text-slate-700">{dept.name}</p>
              <p className="text-lg font-bold text-slate-800">{dept.count} <span className="text-xs font-normal text-slate-500">staff</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h4 className="text-lg font-semibold text-slate-800">Certifications & Compliance</h4>
          <p className="text-sm text-slate-500">Active certifications and standards compliance</p>
        </div>
        <div className="divide-y divide-slate-50">
          {certifications.map((cert, index) => (
            <div key={index} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500">Expires: {cert.expiry}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 opacity-80" />
              <span className="text-sm">+62 (0) 811-541-164</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 opacity-80" />
              <span className="text-sm">info@kalimasgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 opacity-80" />
              <span className="text-sm">Jl. Somber RT. 040 No. 112, Balikpapan</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-6 text-white">
          <h4 className="text-lg font-semibold mb-4">Platform Status</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">NexusBuild AI Platform</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Escrow System</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Dashboard Monitoring</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Uptime</span>
              <span className="text-sm font-medium">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
