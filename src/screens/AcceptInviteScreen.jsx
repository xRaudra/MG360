import { useState } from 'react';
import { Check, Eye, Shield, Heart } from 'lucide-react';

const permissionConfig = {
  view_only: { label: 'View Only',      color: '#1B4FBF', bg: '#EFF6FF', icon: Eye,   desc: 'See journey timeline & travel updates' },
  support:   { label: 'Support Access', color: '#D97706', bg: '#FFFBEB', icon: Shield, desc: 'Documents, appointments & updates' },
  full:      { label: 'Full Caregiver', color: '#059669', bg: '#F0FDF4', icon: Heart,  desc: 'Full access to all journey info' },
};

const inviteData = {
  patientName: 'Kwame Mensah',
  patientAvatar: 'KM',
  invitedAs: 'Mother',
  permission: 'view_only',
  treatment: 'Cardiac Bypass',
  hospital: 'Apollo Hospital, Delhi',
};

export default function AcceptInviteScreen({ onNavigate }) {
  const [step, setStep] = useState('invite');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cfg = permissionConfig[inviteData.permission];
  const PermIcon = cfg.icon;

  const caregiverMember = {
    id: 'guest',
    name: name || 'Thandi Mensah',
    relationship: inviteData.invitedAs,
    permission: inviteData.permission,
    status: 'active',
    avatar: name ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'TM',
    lastActive: 'Just now',
  };

  if (step === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-transparent screen-enter gap-4 px-6">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <Check size={42} color="#059669" strokeWidth={2.5} />
        </div>
        <h2 className="font-bold text-slate-800 text-2xl text-center"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          You're in the Circle!
        </h2>
        <p className="text-slate-500 text-sm text-center">
          You can now follow {inviteData.patientName}'s medical journey in real-time.
        </p>
        <button
          onClick={() => onNavigate('caregiverJourney', caregiverMember)}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95 mt-4"
          style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
          View Journey
        </button>
      </div>
    );
  }

  if (step === 'signup') {
    return (
      <div className="flex flex-col h-full bg-transparent screen-enter">
        <div className="px-4 pt-4 pb-5" style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
          <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Create Account
          </h2>
          <p className="text-white/60 text-xs mt-1">
            Quick setup to access {inviteData.patientName}'s journey
          </p>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-1.5">Your Name</p>
            <input value={name} onChange={e => setName(e.target.value)}
              placeholder="Thandi Mensah"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-1.5">Email Address</p>
            <input value={email} onChange={e => setEmail(e.target.value)}
              placeholder="thandi@email.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-1.5">Create Password</p>
            <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white" />
          </div>
          <p className="text-xs text-slate-400">
            By signing up you agree to MG360 Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className="px-4 pb-5 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
          <button onClick={() => setStep('success')}
            disabled={!name || !email || !password}
            className="w-full py-4 rounded-2xl font-semibold text-sm transition-all active:scale-95"
            style={{
              background: (name && email && password) ? 'linear-gradient(135deg, #0D9488, #1B4FBF)' : '#E2E8F0',
              color: (name && email && password) ? 'white' : '#94A3B8',
            }}>
            Join Care Circle
          </button>
        </div>
      </div>
    );
  }

  // Initial invite view
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      <div className="px-6 pt-8 pb-6 flex flex-col items-center"
        style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold mb-3 border-2 border-white/30">
          {inviteData.patientAvatar}
        </div>
        <h2 className="text-white font-bold text-xl text-center"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {inviteData.patientName}
        </h2>
        <p className="text-white/70 text-sm mt-1">has invited you to their Care Circle</p>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 py-5 flex flex-col gap-4">
        {/* Your role */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Your Role</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: cfg.bg }}>
              <PermIcon size={18} color={cfg.color} />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: cfg.color }}>
                {cfg.label} · {inviteData.invitedAs}
              </p>
              <p className="text-slate-400 text-xs">{cfg.desc}</p>
            </div>
          </div>
        </div>

        {/* Journey info */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Journey</p>
          <div className="flex items-center gap-2">
            <span className="text-base">🏥</span>
            <div>
              <p className="font-semibold text-slate-800 text-sm">{inviteData.treatment}</p>
              <p className="text-slate-400 text-xs">{inviteData.hospital}</p>
            </div>
          </div>
        </div>

        {/* What you can see */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">You Can See</p>
          {['Journey timeline & progress', 'Travel dates & hospital info', 'Key milestone updates'].map(item => (
            <div key={item} className="flex items-center gap-2 mb-2 last:mb-0">
              <Check size={14} color="#059669" />
              <p className="text-slate-700 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-1">
          <button onClick={() => setStep('signup')}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
            Accept Invitation
          </button>
          <button onClick={() => onNavigate('home')}
            className="w-full py-3 rounded-2xl font-semibold text-sm text-slate-500 transition-all active:scale-95">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
