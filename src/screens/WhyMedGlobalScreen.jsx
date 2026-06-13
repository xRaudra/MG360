import { useState } from 'react';
import { ArrowLeft, ChevronRight, Shield, Users, DollarSign, Clock, Phone, Star } from 'lucide-react';

const GRADIENT = 'linear-gradient(140deg, #0B3D91 0%, #1B4FBF 100%)';

const pillars = [
  { icon: Shield,     color: '#1B4FBF', bg: '#EFF6FF', title: 'Curated Hospital Network',     desc: 'Only JCI & NABL accredited hospitals — hand-picked for safety, quality, and international patient care.' },
  { icon: Users,      color: '#7C3AED', bg: '#FAF5FF', title: 'Expert Doctor Matching',        desc: 'Specialists who have treated thousands of international patients and communicate in your language.' },
  { icon: DollarSign, color: '#059669', bg: '#F0FDF4', title: 'Transparent Pricing',           desc: 'Detailed cost estimates before you book anything. No hidden fees, no surprises — ever.' },
  { icon: Clock,      color: '#F59E0B', bg: '#FFFBEB', title: 'Zero Waiting Time',             desc: 'Skip 6–12 month waitlists. Treatment begins within days of your arrival in India.' },
  { icon: Users,      color: '#0D9488', bg: '#F0FDFA', title: 'Family-Centred Care',           desc: 'Your loved ones travel with you. We keep your Care Circle informed and supported throughout.' },
  { icon: Phone,      color: '#EC4899', bg: '#FDF2F8', title: '24/7 Care Coordination',        desc: 'A dedicated coordinator is with you at every stage — from your first question to your final follow-up.' },
];

const howItWorks = [
  { step: '01', title: 'Share Your Case',       desc: 'Tell us your diagnosis, reports, and preferred timeline.' },
  { step: '02', title: 'Get a Treatment Plan',  desc: 'We match you with the right hospital and doctor within 48 hours.' },
  { step: '03', title: 'We Arrange Everything', desc: 'Visa, flights, hotel, transfer — all coordinated for you.' },
  { step: '04', title: 'Travel & Get Treated',  desc: 'Arrive in India with a dedicated coordinator by your side.' },
  { step: '05', title: 'Return & Follow Up',    desc: 'We stay in touch until you are fully recovered at home.' },
];

const stats = [
  { value: '50+',  label: 'Hospitals' },
  { value: '300+', label: 'Doctors'   },
];

const Pill = ({ style = {} }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
    style={{ background: 'rgba(255,255,255,0.18)', ...style }}>
    <Star size={11} color="#FCD34D" fill="#FCD34D" />
    <span className="text-white text-xs font-semibold">Why MedGlobal360</span>
  </div>
);

export default function WhyMedGlobalScreen({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* ── Unified collapsible hero ──────────────────────────── */}
      <div className="flex-shrink-0 relative overflow-hidden" style={{ background: GRADIENT }}>

        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.08)', transform: 'translate(30%,-30%)' }} />

        {/* Top row — back + about + pill (pill slides in when scrolled) */}
        <div className="flex items-center gap-3 px-4 pt-4"
          style={{ paddingBottom: scrolled ? 14 : 0 }}>
          <button onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <span className="text-white/70 text-xs font-medium">About Us</span>

          {/* Pill slides in from right when collapsed */}
          <div className="ml-auto" style={{
            opacity:    scrolled ? 1 : 0,
            transform:  `translateX(${scrolled ? 0 : 20}px)`,
            transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.4s cubic-bezier(0.4,0,0.2,1) 0.15s',
            pointerEvents: scrolled ? 'auto' : 'none',
          }}>
            <Pill />
          </div>
        </div>

        {/* Hero content — collapses on scroll */}
        <div style={{
          maxHeight:  scrolled ? 0 : 300,
          opacity:    scrolled ? 0 : 1,
          overflow:   'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.45s cubic-bezier(0.4,0,0.2,1)',
          paddingTop: scrolled ? 0 : 14,
          paddingBottom: scrolled ? 0 : 22,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
          {/* Pill in hero position — fades out quickly */}
          <div style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 0.25s cubic-bezier(0.4,0,0.2,1)' }}>
            <Pill style={{ marginBottom: 14, display: 'inline-flex' }} />
          </div>

          <h1 className="text-white font-bold text-2xl leading-tight mb-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Your trusted partner<br />in medical travel
          </h1>
          <p className="text-white/70 text-sm leading-relaxed">
            We make world-class healthcare in India accessible, safe, and completely stress-free for every international patient.
          </p>
        </div>
      </div>

      {/* ── Scrollable content ─────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto hide-scrollbar"
        onScroll={e => setScrolled(e.currentTarget.scrollTop > 60)}>
        <div className="px-4 py-5 flex flex-col gap-6">

          {/* Mission */}
          <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)' }}>
            <p className="text-xs font-bold text-[#1B4FBF] uppercase tracking-wider mb-2">Our Mission</p>
            <p className="text-slate-700 text-sm leading-relaxed font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              "To make premium medical care in India accessible to every patient around the world — with transparency, compassion, and complete end-to-end support."
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {stats.map(s => (
              <div key={s.label} className="bg-white rounded-2xl py-3 px-1 text-center"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <p className="font-bold text-[#1B4FBF] text-base leading-none"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.value}</p>
                <p className="text-slate-400 text-xs mt-1 leading-tight whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Why Choose Us</p>
            <div className="flex flex-col gap-3">
              {pillars.map(p => {
                const Ic = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-3 bg-white rounded-2xl p-4"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: p.bg }}>
                      <Ic size={18} color={p.color} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{p.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How it works */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">How It Works</p>
            <div className="bg-white rounded-2xl" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {howItWorks.map((item, i) => (
                <div key={item.step} className="flex items-start gap-3 px-4 py-3.5"
                  style={{ borderBottom: i < howItWorks.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 mt-0.5"
                    style={{ background: '#EFF6FF', color: '#1B4FBF' }}>{item.step}</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross links */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Explore More</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => onNavigate('whyIndia')}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl">🇮🇳</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-sm">Why India?</p>
                  <p className="text-slate-400 text-xs">The world's leading medical tourism destination</p>
                </div>
                <ChevronRight size={16} color="#CBD5E1" />
              </button>
            </div>
          </div>

          <button onClick={() => onNavigate('freeQuote')}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95"
            style={{ background: GRADIENT }}>
            Free Consultation
          </button>

          <button
            onClick={() => window.open('https://medglobal360.com/', '_blank')}
            className="flex items-center justify-center gap-1 w-full py-2 mb-2 transition-all active:opacity-60">
            <span className="text-slate-400 text-xs">Full details at</span>
            <span className="text-slate-500 text-xs font-semibold underline underline-offset-2">medglobal360.com</span>
            <span className="text-slate-400 text-xs">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
