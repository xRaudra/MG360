import { ChevronRight, Globe, FileText, Settings, LogOut, Bell, Shield, HelpCircle, User, Users } from 'lucide-react';

const menuSections = [
  {
    title: 'Account',
    items: [
      { icon: <User size={18} />, label: 'Personal Information', color: '#1B4FBF', bg: '#EFF6FF', key: 'personal' },
      { icon: <Globe size={18} />, label: 'Language & Region', value: 'English (EN)', color: '#7C3AED', bg: '#FAF5FF', key: 'language' },
      { icon: <Bell size={18} />, label: 'Notifications', color: '#F59E0B', bg: '#FFFBEB', key: 'notifications' },
      { icon: <Users size={18} />, label: 'Care Circle', value: '3 members', color: '#0D9488', bg: '#F0FDFA', key: 'careCircle' },
    ],
  },
  {
    title: 'Medical',
    items: [
      { icon: <FileText size={18} />, label: 'My Documents', value: '6 files', color: '#059669', bg: '#F0FDF4', key: 'documents' },
      { icon: <Shield size={18} />, label: 'My Travel', color: '#0D9488', bg: '#F0FDFA', key: 'journey' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: <HelpCircle size={18} />, label: 'Help & FAQ', color: '#06B6D4', bg: '#ECFEFF', key: 'help' },
      { icon: <Settings size={18} />, label: 'App Settings', color: '#475569', bg: '#F8FAFC', key: 'settings' },
    ],
  },
];

export default function ProfileScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="px-4 pt-6 pb-8"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)' }}>
        <h2 className="font-bold text-white text-xl mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          My Profile
        </h2>

        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold border-3 border-white/30 flex-shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            KM
          </div>
          <div>
            <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Kwame Mensah
            </h3>
            <p className="text-white/70 text-sm">kwame@email.com</p>
          </div>
        </div>

        {/* Profile info rows */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
          {[
            { label: 'Country of Origin', value: '🇳🇬 Nigeria' },
            { label: 'Care Coordinator',  value: 'Priya Nair', sub: '+91 98765 43210' },
            { label: 'Hospital',          value: 'Apollo Hospital, Delhi' },
          ].map((row, i, arr) => (
            <div key={row.label}
              className="flex items-center justify-between px-4 py-2.5"
              style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <p className="text-white/60 text-xs">{row.label}</p>
              <div className="text-right">
                <p className="text-white text-xs font-semibold">{row.value}</p>
                {row.sub && <p className="text-white/50 text-xs">{row.sub}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Menu sections */}
      <div className="px-4 py-5 flex flex-col gap-5">
        {menuSections.map(section => (
          <div key={section.title}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{section.title}</p>
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {section.items.map((item, i) => (
                <button key={item.key}
                  onClick={() => {
                    if (item.key === 'documents') return onNavigate('journeyDocuments', { from: 'profile' });
                    if (item.key === 'journey')   return onNavigate('journeyTravel',     { from: 'profile' });
                    onNavigate(item.key);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left"
                  style={{ borderBottom: i < section.items.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg, color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="flex-1 text-sm font-medium text-slate-700">{item.label}</span>
                  {item.value && <span className="text-xs text-slate-400 mr-2">{item.value}</span>}
                  <ChevronRight size={16} color="#CBD5E1" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button
          onClick={() => onNavigate('login')}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border-2 border-red-100 bg-red-50 text-red-500 font-semibold text-sm transition-all active:scale-95">
          <LogOut size={18} />
          Sign Out
        </button>

        <p className="text-center text-slate-400 text-xs pb-2">
          Med Global 360 · v1.0.0
        </p>
      </div>
    </div>
  );
}
