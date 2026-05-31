import { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const GRADIENT = 'linear-gradient(140deg, #7C3AED 0%, #1B4FBF 100%)';

const cases = [
  {
    id: 1,
    name: 'Emmanuel O.', age: 58, country: '🇳🇬 Nigeria',
    treatment: 'Cardiac Bypass Surgery', hospital: 'Apollo Hospital, Delhi',
    costIndia: '$9,500', costHome: '$120,000', duration: '21 days',
    avatar: 'EO', avatarColor: '#1B4FBF', tag: 'Cardiology',
    quote: '"I was told I needed urgent surgery. My local hospital quoted $120,000. Med Global 360 arranged everything — flight, hotel, and full treatment — for $9,500. I came home a new man."',
    outcome: 'Full recovery. Back home in 21 days.',
  },
  {
    id: 2,
    name: 'Amina K.', age: 44, country: '🇰🇪 Kenya',
    treatment: 'Knee Replacement', hospital: 'Fortis Hospital, Mumbai',
    costIndia: '$5,100', costHome: '$38,000', duration: '12 days',
    avatar: 'AK', avatarColor: '#0D9488', tag: 'Orthopedics',
    quote: '"The surgeon spoke English perfectly and explained every step. The care felt genuinely personal. I was walking without pain on day 10."',
    outcome: 'Walking without pain after 10 days.',
  },
  {
    id: 3,
    name: 'Jean-Pierre M.', age: 62, country: '🇫🇷 France',
    treatment: 'Liver Transplant', hospital: 'Max Hospital, Delhi',
    costIndia: '$28,000', costHome: '$200,000', duration: '35 days',
    avatar: 'JP', avatarColor: '#7C3AED', tag: 'Transplant',
    quote: '"The 6-month waiting list in France was not an option. Med Global 360 found me a matched donor and a world-class surgical team. Three weeks later, I had a new liver."',
    outcome: 'Successful transplant. 2-year follow-up clear.',
  },
  {
    id: 4,
    name: 'Fatima A.', age: 35, country: '🇦🇪 UAE',
    treatment: 'Cancer Treatment', hospital: 'Tata Memorial, Mumbai',
    costIndia: '$14,000', costHome: '$110,000', duration: '56 days',
    avatar: 'FA', avatarColor: '#EC4899', tag: 'Oncology',
    quote: '"World-leading oncologists, the same protocol as top US hospitals, at 15% of the cost. Med Global 360 treated my family like their own."',
    outcome: 'Complete remission after 8 weeks.',
  },
];

const Pill = ({ style = {} }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
    style={{ background: 'rgba(255,255,255,0.18)', ...style }}>
    <span className="text-xs">📖</span>
    <span className="text-white text-xs font-semibold">Case Studies</span>
  </div>
);

export default function CaseStudiesScreen({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* ── Unified collapsible hero ──────────────────────────── */}
      <div className="flex-shrink-0 relative overflow-hidden" style={{ background: GRADIENT }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.08)', transform: 'translate(30%,-30%)' }} />

        {/* Top row */}
        <div className="flex items-center gap-3 px-4 pt-4"
          style={{ paddingBottom: scrolled ? 14 : 0 }}>
          <button onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <span className="text-white/70 text-xs font-medium">About Us</span>
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
            Real patients.<br />Real outcomes.
          </h1>
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            From cardiac surgery to cancer treatment — stories of patients who trusted us with their journey.
          </p>
          {/* Stats */}
          <div className="flex gap-3">
            {[
              { value: '500+', label: 'Patients helped' },
              { value: '50+',  label: 'Countries'       },
              { value: '98%',  label: 'Satisfied'       },
            ].map(s => (
              <div key={s.label} className="flex-1 rounded-xl py-2 text-center"
                style={{ background: 'rgba(255,255,255,0.12)' }}>
                <p className="text-white font-bold text-base">{s.value}</p>
                <p className="text-white/60 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrollable content ─────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto hide-scrollbar"
        onScroll={e => setScrolled(e.currentTarget.scrollTop > 60)}>
        <div className="px-4 py-5 flex flex-col gap-5">

          {cases.map(c => (
            <div key={c.id} className="bg-white rounded-2xl"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>

              {/* Patient */}
              <div className="flex items-center gap-3 px-4 pt-4 pb-3"
                style={{ borderBottom: '1px solid #F1F5F9' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: c.avatarColor }}>
                  {c.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800 text-sm"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {c.name}, {c.age}
                  </p>
                  <p className="text-slate-400 text-xs">{c.country}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-semibold"
                  style={{ background: '#F1F5F9', color: '#475569' }}>
                  {c.tag}
                </span>
              </div>

              {/* Treatment + cost */}
              <div className="px-4 py-3" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">🏥</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{c.treatment}</p>
                    <p className="text-slate-400 text-xs">{c.hospital} · {c.duration}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 rounded-xl px-3 py-2" style={{ background: '#F0FDF4' }}>
                    <p className="text-xs text-slate-500 mb-0.5">India cost</p>
                    <p className="font-bold text-sm" style={{ color: '#059669' }}>{c.costIndia}</p>
                  </div>
                  <div className="flex-1 rounded-xl px-3 py-2 bg-slate-50">
                    <p className="text-xs text-slate-400 mb-0.5">Home country</p>
                    <p className="font-bold text-sm text-slate-400 line-through">{c.costHome}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="px-4 py-3" style={{ borderBottom: '1px solid #F1F5F9' }}>
                <p className="text-slate-600 text-sm leading-relaxed italic">{c.quote}</p>
              </div>

              {/* Outcome */}
              <div className="px-4 py-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <p className="text-sm font-semibold text-green-600">{c.outcome}</p>
              </div>
            </div>
          ))}

          {/* Cross links */}
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Learn More</p>
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

          <button onClick={() => onNavigate('contact')}
            className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95"
            style={{ background: GRADIENT }}>
            Start Your Journey
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
