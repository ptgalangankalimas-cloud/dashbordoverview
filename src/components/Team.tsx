import React from 'react';
import { Users, Mail, Phone, Shield, Award } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const Team: React.FC = () => {
  const departments = [
    { name: 'Executive', count: 1, gradient: 'from-orange-400 to-orange-500' },
    { name: 'Operations', count: 45, gradient: 'from-red-400 to-red-500' },
    { name: 'Engineering', count: 62, gradient: 'from-amber-400 to-orange-500' },
    { name: 'Finance', count: 8, gradient: 'from-rose-400 to-red-500' },
    { name: 'Legal', count: 5, gradient: 'from-orange-500 to-red-500' },
    { name: 'Quality & Safety', count: 12, gradient: 'from-amber-500 to-orange-500' },
    { name: 'Admin & Support', count: 9, gradient: 'from-red-500 to-rose-600' },
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
        <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Team & Organization</h3>
        <p className="text-sm text-slate-500">Management team, departments, and certifications</p>
      </div>

      {/* Management Team */}
      <div>
        <h4 className="text-lg font-bold text-slate-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Board of Directors</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-orange-200">
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h5 className="text-sm font-bold text-slate-800">{member.name}</h5>
              <p className="text-[10px] text-orange-600 font-bold mt-0.5 uppercase tracking-wide">{member.role}</p>
              <p className="text-[10px] text-slate-400 mt-1">{member.department}</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-orange-600 font-semibold">{member.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Department Overview</h4>
            <p className="text-xs text-slate-500">Total workforce: 142 employees</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-400" />
            <span className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>142</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {departments.map((dept, index) => (
            <div key={index} className="p-3 bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-xl border border-orange-100/50">
              <div className={`w-8 h-8 bg-gradient-to-br ${dept.gradient} rounded-lg flex items-center justify-center mb-2 shadow-sm`}>
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-700">{dept.name}</p>
              <p className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{dept.count} <span className="text-[10px] font-normal text-slate-500">staff</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-orange-50/50 to-transparent">
          <h4 className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Certifications & Compliance</h4>
          <p className="text-xs text-slate-500">Active certifications and standards compliance</p>
        </div>
        <div className="divide-y divide-slate-50">
          {certifications.map((cert, index) => (
            <div key={index} className="px-5 py-4 flex items-center justify-between hover:bg-orange-50/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{cert.name}</p>
                  <p className="text-[10px] text-slate-500">{cert.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-slate-500 font-medium">Expires: {cert.expiry}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-700">
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg shadow-orange-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <h4 className="text-lg font-bold mb-4 relative" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Contact Information</h4>
          <div className="space-y-3 relative">
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
        <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg shadow-red-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <h4 className="text-lg font-bold mb-4 relative" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Platform Status</h4>
          <div className="space-y-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">NexusBuild AI Platform</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Escrow System</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Dashboard Monitoring</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Uptime</span>
              <span className="text-sm font-bold">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
