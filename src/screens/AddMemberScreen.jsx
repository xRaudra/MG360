import { useState } from 'react';
import { ArrowLeft, ChevronRight, Eye, Shield, Heart, Phone, Mail, MessageSquare, Share2, Check } from 'lucide-react';

const relationships = ['Mother', 'Father', 'Spouse / Partner', 'Sibling', 'Child', 'Friend', 'Doctor / Nurse', 'Other'];

const permissionOptions = [
  {
    key: 'view_only',
    label: 'View Only',
    icon: Eye,
    color: '#1B4FBF',
    bg: '#EFF6FF',
    desc: 'Can see journey timeline, travel info, and hospital details.',
    perms: ['Journey timeline', 'Travel details', 'Hospital info'],
  },
  {
    key: 'support',
    label: 'Support Access',
    icon: Shield,
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'View Only plus documents, appointments and progress updates.',
    perms: ['Everything in View Only', 'Medical documents', 'Appointment dates'],
  },
  {
    key: 'full',
    label: 'Full Caregiver',
    icon: Heart,
    color: '#059669',
    bg: '#F0FDF4',
    desc: 'Complete access including chat, decisions, and all records.',
    perms: ['Everything in Support', 'Chat with care team', 'Update journey info'],
  },
];

export default function AddMemberScreen({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', email: '', relationship: '' });
  const [permission, setPermission] = useState('view_only');
  const [sent, setSent] = useState(false);

  const canNext1 = form.name.trim() && form.relationship && (form.phone.trim() || form.email.trim());

  const handleSend = () => {
    setSent(true);
    setTimeout(() => onNavigate('careCircle'), 1800);
  };

  const selectedPermission = permissionOptions.find(p => p.key === permission);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => step > 1 ? setStep(s => s - 1) : onNavigate('careCircle')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Add Member
            </h2>
            <p className="text-white/60 text-xs">Step {step} of 3</p>
          </div>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map(s => (
            <div key={s} className="h-1.5 rounded-full transition-all"
              style={{
                background: s <= step ? 'white' : 'rgba(255,255,255,0.3)',
                flex: s <= step ? 2 : 1,
              }} />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5">
        {/* Step 1: Contact */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1.5">Full Name *</p>
              <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Thandi Mensah"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white"
                style={{ '--tw-ring-color': '#0D9488' }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-2">Relationship *</p>
              <div className="flex flex-wrap gap-2">
                {relationships.map(r => (
                  <button key={r} onClick={() => setForm(f => ({ ...f, relationship: r }))}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                    style={{
                      background: form.relationship === r ? '#0D9488' : 'white',
                      color: form.relationship === r ? 'white' : '#475569',
                      borderColor: form.relationship === r ? '#0D9488' : '#E2E8F0',
                    }}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1.5">Phone Number</p>
              <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+234 801 234 5678"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-1.5">Email Address</p>
              <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="family@email.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white" />
            </div>
            <p className="text-xs text-slate-400 text-center">Phone or email is required to send the invite.</p>
          </div>
        )}

        {/* Step 2: Permission */}
        {step === 2 && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-slate-500 mb-1">
              Choose what <strong className="text-slate-700">{form.name}</strong> can see and do:
            </p>
            {permissionOptions.map(opt => {
              const Ic = opt.icon;
              const isSelected = permission === opt.key;
              return (
                <button key={opt.key} onClick={() => setPermission(opt.key)}
                  className="flex items-start gap-3 p-4 rounded-2xl border-2 text-left transition-all w-full"
                  style={{ borderColor: isSelected ? opt.color : '#E2E8F0', background: isSelected ? opt.bg : 'white' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: opt.bg }}>
                    <Ic size={20} color={opt.color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm" style={{ color: opt.color }}>{opt.label}</p>
                      {isSelected && <Check size={16} color={opt.color} />}
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">{opt.desc}</p>
                    <div className="flex flex-col gap-1 mt-2">
                      {opt.perms.map(p => (
                        <p key={p} className="text-xs text-slate-400 flex items-center gap-1">
                          <span style={{ color: opt.color }}>✓</span> {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Step 3: Send */}
        {step === 3 && !sent && (
          <div className="flex flex-col gap-4">
            {/* Summary */}
            <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Invite Summary</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
                  {form.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{form.name}</p>
                  <p className="text-slate-400 text-xs">{form.relationship}</p>
                </div>
              </div>
              {selectedPermission && (() => {
                const Ic = selectedPermission.icon;
                return (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: selectedPermission.bg }}>
                    <Ic size={14} color={selectedPermission.color} />
                    <span className="text-xs font-semibold" style={{ color: selectedPermission.color }}>
                      {selectedPermission.label}
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* Send via */}
            <p className="text-sm font-semibold text-slate-700">Send invite via</p>
            {[
              { icon: MessageSquare, label: 'WhatsApp', sub: form.phone || 'Phone not added', color: '#25D366', available: !!form.phone },
              { icon: Phone,         label: 'SMS',       sub: form.phone || 'Phone not added', color: '#1B4FBF', available: !!form.phone },
              { icon: Mail,          label: 'Email',     sub: form.email || 'Email not added', color: '#7C3AED', available: !!form.email },
              { icon: Share2,        label: 'Copy Link', sub: 'Share manually',                color: '#0D9488', available: true },
            ].map(method => {
              const Ic = method.icon;
              return (
                <button key={method.label}
                  onClick={method.available ? handleSend : undefined}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white transition-all active:scale-95"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)', opacity: method.available ? 1 : 0.4 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${method.color}18` }}>
                    <Ic size={18} color={method.color} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-slate-800 text-sm">{method.label}</p>
                    <p className="text-slate-400 text-xs">{method.sub}</p>
                  </div>
                  <ChevronRight size={16} color="#CBD5E1" />
                </button>
              );
            })}
          </div>
        )}

        {/* Success */}
        {sent && (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={36} color="#059669" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-slate-800 text-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Invite Sent!
            </h3>
            <p className="text-slate-500 text-sm text-center px-8">
              {form.name} will receive an invite to join your Care Circle.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      {!sent && step < 3 && (
        <div className="px-4 pb-5 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
          <button
            onClick={() => setStep(s => s + 1)}
            disabled={step === 1 && !canNext1}
            className="w-full py-4 rounded-2xl font-semibold text-sm transition-all active:scale-95"
            style={{
              background: (step === 1 && !canNext1) ? '#E2E8F0' : 'linear-gradient(135deg, #0D9488, #1B4FBF)',
              color: (step === 1 && !canNext1) ? '#94A3B8' : 'white',
            }}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
