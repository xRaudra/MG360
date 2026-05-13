import { ArrowLeft, Plus, ChevronRight, Eye, Shield, Heart, Clock } from 'lucide-react';
import { careCircleMembers } from '../data/mockData';

const permissionConfig = {
  view_only: { label: 'View Only', color: '#1B4FBF', bg: '#EFF6FF', icon: Eye },
  support:   { label: 'Support',   color: '#D97706', bg: '#FFFBEB', icon: Shield },
  full:      { label: 'Full Caregiver', color: '#059669', bg: '#F0FDF4', icon: Heart },
};

export default function CareCircleScreen({ onNavigate }) {
  const activeMembers  = careCircleMembers.filter(m => m.status === 'active');
  const pendingMembers = careCircleMembers.filter(m => m.status === 'pending');

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-6" style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Care Circle
            </h2>
            <p className="text-white/60 text-xs">Family &amp; trusted access</p>
          </div>
        </div>

        <div className="flex gap-3">
          {[
            { label: 'Active',  value: activeMembers.length,  color: '#34D399' },
            { label: 'Pending', value: pendingMembers.length, color: '#FCD34D' },
            { label: 'Max',     value: '6',                   color: 'rgba(255,255,255,0.5)' },
          ].map(s => (
            <div key={s.label} className="flex-1 rounded-xl px-3 py-2 text-center"
              style={{ background: 'rgba(255,255,255,0.12)' }}>
              <p className="font-bold text-base" style={{ color: s.color }}>{s.value}</p>
              <p className="text-white/60 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-4 flex flex-col gap-5">
        {/* Active Members */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Members ({activeMembers.length})
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {activeMembers.map((member, i) => {
              const perm = permissionConfig[member.permission];
              const PermIcon = perm.icon;
              return (
                <button key={member.id}
                  onClick={() => onNavigate('memberDetail', member)}
                  className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left"
                  style={{ borderBottom: i < activeMembers.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 text-sm">{member.name}</p>
                    <p className="text-slate-400 text-xs">{member.relationship} · {member.lastActive}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full flex-shrink-0"
                    style={{ background: perm.bg }}>
                    <PermIcon size={11} color={perm.color} />
                    <span className="text-xs font-semibold" style={{ color: perm.color }}>{perm.label}</span>
                  </div>
                  <ChevronRight size={14} color="#CBD5E1" className="ml-1 flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Pending Invites */}
        {pendingMembers.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Pending Invites ({pendingMembers.length})
            </p>
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {pendingMembers.map((member, i) => (
                <div key={member.id}
                  className="flex items-center gap-3 px-4 py-3.5"
                  style={{ borderBottom: i < pendingMembers.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-400 flex-shrink-0">
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 text-sm">{member.name}</p>
                    <p className="text-slate-400 text-xs">{member.relationship} · Invite sent</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 flex-shrink-0">
                    <Clock size={11} color="#D97706" />
                    <span className="text-xs font-semibold text-amber-600">Pending</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Access Level Legend */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Access Levels</p>
          {[
            { key: 'view_only', desc: 'Journey timeline & travel info' },
            { key: 'support',   desc: 'Above + documents & appointments' },
            { key: 'full',      desc: 'Full access including chat & decisions' },
          ].map(({ key, desc }) => {
            const cfg = permissionConfig[key];
            const Ic = cfg.icon;
            return (
              <div key={key} className="flex items-center gap-3 mb-2.5 last:mb-0">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: cfg.bg }}>
                  <Ic size={14} color={cfg.color} />
                </div>
                <div>
                  <span className="text-xs font-semibold" style={{ color: cfg.color }}>{cfg.label}</span>
                  <p className="text-slate-400 text-xs">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Member CTA */}
        <button onClick={() => onNavigate('addMember')}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95"
          style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
          <Plus size={18} />
          Add Family Member
        </button>

        <p className="text-center text-slate-400 text-xs pb-2">
          Care Circle members follow your journey updates in real-time.
        </p>
      </div>
    </div>
  );
}
