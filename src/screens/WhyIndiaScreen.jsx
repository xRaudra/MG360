import { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const GRADIENT = 'linear-gradient(140deg, #F59E0B 0%, #D97706 100%)';

const advantages = [
  { icon: '💰', color: '#059669', bg: '#F0FDF4', title: 'Up to 90% Cost Savings',           desc: 'The same surgery that costs $80,000 in the US costs $8,000 in India — with no compromise on quality.' },
  { icon: '🏆', color: '#1B4FBF', bg: '#EFF6FF', title: 'World-Class Hospitals',            desc: 'India has more JCI-accredited hospitals than any other country in Asia. Apollo, Fortis, AIIMS — global names, local prices.' },
  { icon: '👨‍⚕️', color: '#7C3AED', bg: '#FAF5FF', title: 'Internationally Trained Doctors',  desc: 'Most senior surgeons have trained in the US, UK, or Europe. English-speaking and globally certified.' },
  { icon: '⚡', color: '#F59E0B', bg: '#FFFBEB', title: 'No Waiting Lists',                 desc: 'Skip the 6–12 month NHS waitlists. Get a confirmed surgery date within days of your assessment.' },
  { icon: '🔬', color: '#0D9488', bg: '#F0FDFA', title: 'Advanced Technology',              desc: "Robotic surgery, proton therapy, AI diagnostics — same equipment as the world's leading US centres." },
  { icon: '✈️', color: '#EC4899', bg: '#FDF2F8', title: 'Excellent Connectivity',           desc: 'Direct or one-stop flights from Lagos, Nairobi, Accra, Dubai, and London to Delhi, Mumbai, Chennai.' },
];

const costComparison = [
  { procedure: 'Cardiac Bypass',   india: '$7,200',  abroad: '$80,000'  },
  { procedure: 'Knee Replacement', india: '$4,500',  abroad: '$35,000'  },
  { procedure: 'Liver Transplant', india: '$28,000', abroad: '$200,000' },
  { procedure: 'Cancer Treatment', india: '$12,000', abroad: '$100,000' },
];

const specialties = [
  { name: 'Cardiology',   icon: '❤️' },
  { name: 'Orthopedics',  icon: '🦴' },
  { name: 'Oncology',     icon: '🩺' },
  { name: 'Neurosurgery', icon: '🧠' },
  { name: 'Transplant',   icon: '🫀' },
  { name: 'Fertility',    icon: '👶' },
];

const Pill = ({ style = {} }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
    style={{ background: 'rgba(255,255,255,0.22)', ...style }}>
    <span className="text-sm">🇮🇳</span>
    <span className="text-white text-xs font-semibold">Why India</span>
  </div>
);

export default function WhyIndiaScreen({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* ── Unified collapsible hero ──────────────────────────── */}
      <div className="flex-shrink-0 relative overflow-hidden" style={{ background: GRADIENT }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.1)', transform: 'translate(30%,-30%)' }} />

        {/* Top row */}
        <div className="flex items-center gap-3 px-4 pt-4"
          style={{ paddingBottom: scrolled ? 14 : 0 }}>
          <button onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <span className="text-white/80 text-xs font-medium">About Us</span>
          <div className="ml-auto" style={{
            opacity:    scrolled ? 1 : 0,
            transform:  `translateX(${scrolled ? 0 : 20}px)`,
            transition: 'opacity 0.2s ease 0.1s, transform 0.25s ease 0.1s',
            pointerEvents: scrolled ? 'auto' : 'none',
          }}>
            <Pill />
          </div>
        </div>

        {/* Hero content */}
        <div style={{
          maxHeight:     scrolled ? 0 : 300,
          opacity:       scrolled ? 0 : 1,
          overflow:      'hidden',
          transition:    'max-height 0.35s ease, opacity 0.2s ease, padding 0.3s ease',
          paddingTop:    scrolled ? 0 : 14,
          paddingBottom: scrolled ? 0 : 22,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
          <div style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 0.12s ease' }}>
            <Pill style={{ marginBottom: 14, display: 'inline-flex' }} />
          </div>
          <h1 className="text-white font-bold text-2xl leading-tight mb-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            The world's #1<br />medical travel destination
          </h1>
          <p className="text-white/85 text-sm leading-relaxed">
            India combines world-class surgical expertise, cutting-edge technology, and costs up to 90% lower than Western countries.
          </p>
        </div>
      </div>

      {/* ── Scrollable content ─────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto hide-scrollbar"
        onScroll={e => setScrolled(e.currentTarget.scrollTop > 60)}>
        <div className="px-4 py-5 flex flex-col gap-6">

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: '90%',   label: 'Lower cost\nvs US/UK'    },
              { value: '1M+',   label: 'Medical tourists\n/year' },
              { value: '24hrs', label: 'Average\nwait time'      },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl py-3 px-2 text-center"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <p className="font-bold text-[#D97706] text-lg leading-none"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.value}</p>
                <p className="text-slate-400 text-xs mt-1 leading-tight whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Advantages */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Advantages</p>
            <div className="flex flex-col gap-3">
              {advantages.map(a => (
                <div key={a.title} className="flex items-start gap-3 bg-white rounded-2xl p-4"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: a.bg }}>
                    {a.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{a.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost comparison */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Cost Comparison</p>
            <div className="bg-white rounded-2xl" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex px-4 py-2.5" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <p className="flex-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Procedure</p>
                <p className="w-20 text-xs font-bold text-center" style={{ color: '#059669' }}>India</p>
                <p className="w-20 text-xs font-bold text-center text-slate-400">US / UK</p>
              </div>
              {costComparison.map((row, i) => (
                <div key={row.procedure} className="flex items-center px-4 py-3"
                  style={{ borderBottom: i < costComparison.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <p className="flex-1 text-sm text-slate-700 font-medium">{row.procedure}</p>
                  <p className="w-20 text-sm font-bold text-center" style={{ color: '#059669' }}>{row.india}</p>
                  <p className="w-20 text-sm text-center text-slate-400 line-through">{row.abroad}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">Indicative pricing. Final cost depends on hospital and case complexity.</p>
          </div>

          {/* Top specialties */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Top Specialties</p>
            <div className="grid grid-cols-3 gap-2">
              {specialties.map(s => (
                <div key={s.name} className="bg-white rounded-2xl py-3 px-2 flex flex-col items-center gap-1.5"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <span className="text-2xl">{s.icon}</span>
                  <p className="text-xs font-medium text-slate-600 text-center leading-tight">{s.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross links */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Explore More</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => onNavigate('whyMedGlobal')}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl">🌟</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-sm">Why Med Global 360?</p>
                  <p className="text-slate-400 text-xs">Your end-to-end medical travel partner</p>
                </div>
                <ChevronRight size={16} color="#CBD5E1" />
              </button>
              <button onClick={() => onNavigate('caseStudies')}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <span className="text-2xl">📖</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-sm">Case Studies</p>
                  <p className="text-slate-400 text-xs">Real patients, real outcomes</p>
                </div>
                <ChevronRight size={16} color="#CBD5E1" />
              </button>
            </div>
          </div>

          <button onClick={() => onNavigate('explore')}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95 mb-2"
            style={{ background: GRADIENT }}>
            Find a Treatment in India
          </button>
        </div>
      </div>
    </div>
  );
}
