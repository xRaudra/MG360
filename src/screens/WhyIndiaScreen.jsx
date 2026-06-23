import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import BackButton from '../components/BackButton';

const GRADIENT = 'linear-gradient(140deg, #F59E0B 0%, #D97706 100%)';

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

const advantages = [
  { icon: '💰', color: '#059669', bg: '#F0FDF4', title: 'Up to 90% Cost Savings',           desc: 'The same surgery that costs $80,000 in the US costs $8,000 in India — with no compromise on quality.' },
  { icon: '🏆', color: '#1B4FBF', bg: '#EFF6FF', title: 'World-Class Hospitals',            desc: 'India has more JCI-accredited hospitals than any other country in Asia. Apollo, Fortis, AIIMS — global names, local prices.' },
  { icon: '👨‍⚕️', color: '#7C3AED', bg: '#FAF5FF', title: 'Internationally Trained Doctors',  desc: 'Most senior surgeons have trained in the US, UK, or Europe. English-speaking and globally certified.' },
  { icon: '⚡', color: '#F59E0B', bg: '#FFFBEB', title: 'No Waiting Lists',                 desc: 'Skip the 6–12 month NHS waitlists. Get a confirmed surgery date within days of your assessment.' },
  { icon: '🔬', color: '#0D9488', bg: '#F0FDFA', title: 'Advanced Technology',              desc: "Robotic surgery, proton therapy, AI diagnostics — same equipment as the world's leading US centres." },
  { icon: '✈️', color: '#EC4899', bg: '#FDF2F8', title: 'Excellent Connectivity',           desc: 'Direct or one-stop flights from Lagos, Nairobi, Accra, Dubai, and London to Delhi, Mumbai, Chennai.' },
];

const costComparison = [
  { procedure: 'Cardiac Bypass',   india: '$6,000',  abroad: '$80,000'  },
  { procedure: 'Knee Replacement', india: '$4,500',  abroad: '$35,000'  },
  { procedure: 'Liver Transplant', india: '$25,000', abroad: '$200,000' },
  { procedure: 'Cancer Treatment', india: '$10,000', abroad: '$100,000' },
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

      {/* Collapsible hero */}
      <div className="flex-shrink-0 relative overflow-hidden" style={{ background: GRADIENT }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.1)', transform: 'translate(30%,-30%)' }} />

        <div className="flex items-center gap-3 px-4 pt-4"
          style={{ paddingBottom: scrolled ? 14 : 0 }}>
          <BackButton onPress={() => onNavigate('home')} />
          <span className="text-white/80 text-xs font-medium">About Us</span>
          <div className="ml-auto" style={{
            opacity:    scrolled ? 1 : 0,
            transform:  `translateX(${scrolled ? 0 : 20}px)`,
            transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.4s cubic-bezier(0.4,0,0.2,1) 0.15s',
            pointerEvents: scrolled ? 'auto' : 'none',
          }}>
            <Pill />
          </div>
        </div>

        <div style={{
          maxHeight:     scrolled ? 0 : 300,
          opacity:       scrolled ? 0 : 1,
          overflow:      'hidden',
          transition:    'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.45s cubic-bezier(0.4,0,0.2,1)',
          paddingTop:    scrolled ? 0 : 14,
          paddingBottom: scrolled ? 0 : 22,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
          <div style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 0.25s cubic-bezier(0.4,0,0.2,1)' }}>
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar"
        onScroll={e => setScrolled(e.currentTarget.scrollTop > 60)}>
        <div className="px-4 py-5 flex flex-col gap-4">

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: '90%',   label: 'Lower cost\nvs US/UK'    },
              { value: '1M+',   label: 'Medical tourists\n/year' },
              { value: '24hrs', label: 'Average\nwait time'      },
            ].map(s => (
              <div key={s.label} className="rounded-2xl py-3 px-2 text-center" style={CARD_STYLE}>
                <p className="font-bold text-lg leading-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#D97706' }}>{s.value}</p>
                <p className="text-xs mt-1 leading-tight whitespace-pre-line" style={{ color: '#7C7C7C' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Advantages */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#7C7C7C' }}>Key Advantages</p>
            <div className="flex flex-col gap-3">
              {advantages.map(a => (
                <div key={a.title} className="flex items-start gap-3 rounded-2xl p-4" style={CARD_STYLE}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: a.bg }}>
                    {a.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>{a.title}</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#7C7C7C' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost comparison */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#7C7C7C' }}>Cost Comparison</p>
            <div className="rounded-2xl overflow-hidden" style={CARD_STYLE}>
              <div className="flex px-4 py-2.5" style={{ borderBottom: '1px solid #F0F0F0' }}>
                <p className="flex-1 text-xs font-bold uppercase tracking-wider" style={{ color: '#7C7C7C' }}>Procedure</p>
                <p className="w-20 text-xs font-bold text-center" style={{ color: '#059669' }}>India</p>
                <p className="w-20 text-xs font-bold text-center" style={{ color: '#7C7C7C' }}>US / UK</p>
              </div>
              {costComparison.map((row, i) => (
                <div key={row.procedure} className="flex items-center px-4 py-3"
                  style={{ borderBottom: i < costComparison.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                  <p className="flex-1 text-sm font-medium" style={{ color: '#313131' }}>{row.procedure}</p>
                  <p className="w-20 text-sm font-bold text-center" style={{ color: '#059669' }}>{row.india}</p>
                  <p className="w-20 text-sm text-center line-through" style={{ color: '#7C7C7C' }}>{row.abroad}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-2" style={{ color: '#7C7C7C' }}>Indicative pricing. Final cost depends on hospital and case complexity.</p>
          </div>

          {/* Top specialties */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#7C7C7C' }}>Top Specialties</p>
            <div className="grid grid-cols-3 gap-2">
              {specialties.map(s => (
                <div key={s.name} className="rounded-2xl py-3 px-2 flex flex-col items-center gap-1.5" style={CARD_STYLE}>
                  <span className="text-2xl">{s.icon}</span>
                  <p className="text-xs font-medium text-center leading-tight" style={{ color: '#313131' }}>{s.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#7C7C7C' }}>Explore More</p>
            <button onClick={() => onNavigate('whyMedGlobal')}
              className="flex items-center gap-3 w-full rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
              style={CARD_STYLE}>
              <span className="text-2xl">🌟</span>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: '#313131' }}>Why MedGlobal360?</p>
                <p className="text-xs" style={{ color: '#7C7C7C' }}>Your end-to-end medical travel partner</p>
              </div>
              <ChevronRight size={16} color="#C6C6C6" />
            </button>
          </div>

          <button onClick={() => onNavigate('freeQuote')}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95"
            style={{ background: GRADIENT }}>
            Free Consultation
          </button>

          <button
            onClick={() => window.open('https://medglobal360.com/', '_blank')}
            className="flex items-center justify-center gap-1 w-full py-2 mb-2 transition-all active:opacity-60">
            <span className="text-xs" style={{ color: '#7C7C7C' }}>Full details at</span>
            <span className="text-xs font-semibold underline underline-offset-2" style={{ color: '#7C7C7C' }}>medglobal360.com</span>
            <span className="text-xs" style={{ color: '#7C7C7C' }}>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
