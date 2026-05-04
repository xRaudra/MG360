import { ArrowLeft, Bell, FileText, DollarSign, AlertCircle, MessageCircle } from 'lucide-react';
import { notifications } from '../data/mockData';

const typeConfig = {
  appointment: { icon: <Bell size={16} />, color: '#1B4FBF', bg: '#EFF6FF' },
  document: { icon: <FileText size={16} />, color: '#7C3AED', bg: '#FAF5FF' },
  payment: { icon: <DollarSign size={16} />, color: '#059669', bg: '#F0FDF4' },
  alert: { icon: <AlertCircle size={16} />, color: '#F59E0B', bg: '#FFFBEB' },
  message: { icon: <MessageCircle size={16} />, color: '#0D9488', bg: '#F0FDFA' },
};

export default function NotificationsScreen({ onNavigate }) {
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 bg-white" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
            <ArrowLeft size={18} color="#0F172A" />
          </button>
          <h2 className="font-bold text-slate-800 text-lg flex-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Notifications
          </h2>
          {unread > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#1B4FBF] text-white text-xs font-bold">
              {unread} new
            </span>
          )}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Unread section */}
        {unread > 0 && (
          <div className="px-4 pt-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">New</p>
            <div className="flex flex-col gap-2">
              {notifications.filter(n => !n.read).map(n => {
                const cfg = typeConfig[n.type];
                return (
                  <div key={n.id}
                    className="flex items-start gap-3 bg-white rounded-2xl p-4 border-l-4"
                    style={{ borderLeftColor: cfg.color, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: cfg.bg, color: cfg.color }}>
                      {cfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {n.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{n.body}</p>
                      <p className="text-slate-400 text-xs mt-1.5">{n.time}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#1B4FBF] flex-shrink-0 mt-1" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Earlier */}
        <div className="px-4 pt-4 pb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Earlier</p>
          <div className="flex flex-col gap-2">
            {notifications.filter(n => n.read).map(n => {
              const cfg = typeConfig[n.type];
              return (
                <div key={n.id}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 opacity-70"
                    style={{ background: cfg.bg, color: cfg.color }}>
                    {cfg.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-600 text-sm">{n.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{n.body}</p>
                    <p className="text-slate-300 text-xs mt-1.5">{n.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
