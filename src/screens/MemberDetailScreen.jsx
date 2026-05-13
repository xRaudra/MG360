import { useState } from 'react';
import { ArrowLeft, Eye, Shield, Heart, Phone, Mail, Trash2, Check, ChevronRight } from 'lucide-react';

const permissionConfig = {
  view_only: { label: 'View Only',      color: '#1B4FBF', bg: '#EFF6FF', icon: Eye,    desc: 'Journey timeline & travel info only' },
  support:   { label: 'Support Access', color: '#D97706', bg: '#FFFBEB', icon: Shield,  desc: 'Documents, appointments + View Only' },
  full:      { label: 'Full Caregiver', color: '#059669', bg: '#F0FDF4', icon: Heart,   desc: 'Full access including chat & decisions' },
};

export default function MemberDetailScreen({ onNavigate, data: member }) {
  const [permission, setPermission] = useState(member?.permission || 'view_only');
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!member) return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => { setSaved(false); onNavigate('careCircle'); }, 1200);
  };

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-6" style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => onNavigate('careCircle')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Member Details
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white/30"
            style={{ background: 'rgba(255,255,255,0.2)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {member.avatar}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {member.name}
            </h3>
            <p className="text-white/70 text-sm">{member.relationship}</p>
            <p className="text-white/50 text-xs mt-0.5">
              {member.status === 'pending' ? '⏳ Invite pending' : `Last active ${member.lastActive}`}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-5">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 pt-3.5 pb-2">Contact</p>
          {member.phone && (
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Phone size={15} color="#1B4FBF" />
              </div>
              <span className="text-sm text-slate-700">{member.phone}</span>
            </div>
          )}
          {member.email && (
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                <Mail size={15} color="#7C3AED" />
              </div>
              <span className="text-sm text-slate-700">{member.email}</span>
            </div>
          )}
        </div>

        {/* Permission Editor */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Access Level</p>
          <div className="flex flex-col gap-2">
            {Object.entries(permissionConfig).map(([key, cfg]) => {
              const Ic = cfg.icon;
              const isSelected = permission === key;
              return (
                <button key={key} onClick={() => setPermission(key)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all"
                  style={{ borderColor: isSelected ? cfg.color : '#E2E8F0', background: isSelected ? cfg.bg : 'white' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cfg.bg }}>
                    <Ic size={17} color={cfg.color} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm" style={{ color: cfg.color }}>{cfg.label}</p>
                    <p className="text-slate-400 text-xs">{cfg.desc}</p>
                  </div>
                  {isSelected && <Check size={16} color={cfg.color} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview caregiver view */}
        {member.status === 'active' && (
          <button onClick={() => onNavigate('caregiverJourney', { ...member, permission })}
            className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl w-full text-left transition-all active:bg-slate-50"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <Eye size={17} color="#0D9488" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 text-sm">Preview Their View</p>
              <p className="text-slate-400 text-xs">See what {member.name.split(' ')[0]} can access</p>
            </div>
            <ChevronRight size={14} color="#CBD5E1" />
          </button>
        )}

        {/* Remove member */}
        {!showRemoveConfirm ? (
          <button onClick={() => setShowRemoveConfirm(true)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border-2 border-red-100 bg-red-50 text-red-500 font-semibold text-sm transition-all active:scale-95">
            <Trash2 size={16} />
            Remove from Care Circle
          </button>
        ) : (
          <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
            <p className="text-red-700 font-semibold text-sm mb-1">
              Remove {member.name.split(' ')[0]}?
            </p>
            <p className="text-red-500 text-xs mb-3">
              They will lose access to your journey immediately.
            </p>
            <div className="flex gap-2">
              <button onClick={() => setShowRemoveConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-white border border-red-200 text-slate-600 text-sm font-semibold">
                Cancel
              </button>
              <button onClick={() => onNavigate('careCircle')}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">
                Remove
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Save CTA */}
      <div className="px-4 pb-5 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
        <button onClick={handleSave}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ background: saved ? '#059669' : 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
          {saved ? <><Check size={18} /> Saved!</> : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
