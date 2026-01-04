import React from "react";
import { 
  User, 
  Mail, 
  ShieldCheck, 
  Edit3, 
  Camera, 
  KeyRound 
} from "lucide-react";

export default function AdminProfile() {
  // In a real app, you might fetch this from a context or API
  const adminData = {
    name: "Admin User",
    email: "admin@digitalbusiness.com",
    role: "System Administrator",
    joined: "January 2024"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Account Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your administrative profile and security preferences.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Avatar Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
          <div className="relative group">
            <div className="h-24 w-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 border-4 border-white shadow-md">
              <User size={40} />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 hover:text-indigo-600 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          
          <h3 className="mt-4 text-lg font-bold text-slate-800">{adminData.name}</h3>
          <span className="mt-1 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            {adminData.role}
          </span>
          <p className="mt-4 text-xs text-slate-400 font-medium italic">
            Joined {adminData.joined}
          </p>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Details Card */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h4 className="font-semibold text-slate-700">Personal Information</h4>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                <Edit3 size={14} /> Edit
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Full Name</p>
                  <p className="text-sm font-semibold text-slate-800">{adminData.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</p>
                  <p className="text-sm font-semibold text-slate-800">{adminData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Access Level</p>
                  <p className="text-sm font-semibold text-slate-800">{adminData.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                <KeyRound size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Password & Security</h4>
                <p className="text-xs text-slate-500">Last changed 3 months ago</p>
              </div>
            </div>
            <button className="px-4 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors uppercase">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}