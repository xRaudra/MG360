import { useState } from 'react';
import { Search, ArrowLeft, SlidersHorizontal, Globe, Users, Route, ArrowUpRight, CheckCircle, Shield } from 'lucide-react';
import StarRating from '../components/StarRating';
import { treatments, categories } from '../data/mockData';

const trustPillars = [
  {
    icon: Globe,
    color: '#0D9488',
    bg: '#F0FDFA',
    title: 'Global Reach',
    desc: 'Patients from 50+ countries treated every year',
  },
  {
    icon: Shield,
    color: '#1B4FBF',
    bg: '#EFF6FF',
    title: 'Verified Care',
    desc: 'JCI & NABL accredited hospitals only',
  },
  {
    icon: Users,
    color: '#7C3AED',
    bg: '#FAF5FF',
    title: 'Family First',
    desc: 'We support patients and their loved ones',
  },
];

const stats = [
  { value: '500+', label: 'Hospitals' },
  { value: '50+',  label: 'Countries' },
  { value: '10K+', label: 'Patients' },
];

export default function ExploreScreen({ onNavigate }) {
  const [query, setQuery] = useState('');

  const filtered = treatments.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="bg-white px-4 pt-4 pb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
            <ArrowLeft size={18} color="#0F172A" />
          </button>
          <h2 className="font-bold text-slate-800 text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Find Treatment
          </h2>
          <div className="ml-auto">
            <button className="p-2 rounded-xl bg-[#EFF6FF]">
              <SlidersHorizontal size={18} color="#1B4FBF" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-3">
          <Search size={16} color="#94A3B8" />
          <input
            className="flex-1 text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            placeholder="Knee replacement, cancer, spine…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {!query && (
          <div className="px-4 pt-5">

            {/* ── ABOUT US ─────────────────────────────────────── */}

            {/* Hero card */}
            <div className="rounded-3xl overflow-hidden mb-4"
              style={{ background: 'linear-gradient(140deg, #0B3D91 0%, #0D9488 100%)' }}>

              {/* Decorative arc */}
              <div className="relative px-5 pt-5 pb-1">
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10"
                  style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5"
                  style={{ background: 'white', transform: 'translate(-40%, 40%)' }} />

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white text-xs font-semibold tracking-wide">About MG360</span>
                </div>

                {/* Headline */}
                <h2 className="text-white font-bold text-xl leading-tight mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Your bridge to<br />world-class medical care
                </h2>

                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  MG360 connects international patients with India's top hospitals and
                  doctors — guiding you from the very first question to a full recovery.
                </p>

                {/* Value props */}
                <div className="flex flex-col gap-2 mb-5">
                  {[
                    'Trusted specialists across 20+ disciplines',
                    'End-to-end support for patients & families',
                    'Transparent pricing, no hidden costs',
                  ].map(point => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle size={14} color="#34D399" className="mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-xs leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA strip */}
              <button
                onClick={() => window.open('http://medglobal360.com/', '_blank')}
                className="flex items-center justify-between w-full px-5 py-4 transition-all active:opacity-80"
                style={{ background: 'rgba(255,255,255,0.12)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    medglobal360.com
                  </p>
                  <p className="text-white/60 text-xs">Learn more about our mission</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <ArrowUpRight size={16} color="white" />
                </div>
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-3 mb-5">
              {stats.map(s => (
                <div key={s.label} className="flex-1 bg-white rounded-2xl py-3 text-center"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <p className="font-bold text-[#1B4FBF] text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {s.value}
                  </p>
                  <p className="text-slate-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust pillars */}
            <div className="flex flex-col gap-2.5 mb-6">
              {trustPillars.map(p => {
                const Ic = p.icon;
                return (
                  <div key={p.title}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: p.bg }}>
                      <Ic size={18} color={p.color} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{p.title}</p>
                      <p className="text-slate-400 text-xs">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── EXISTING SECTIONS ─────────────────────────────── */}

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Browse by Specialty
            </p>
            <div className="grid grid-cols-4 gap-3 mb-5">
              {categories.map(c => (
                <button key={c.id}
                  onClick={() => setQuery(c.name)}
                  className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-white transition-all active:scale-95"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: c.color + '20' }}>
                    <span className="text-xl">{c.icon}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-600 text-center leading-tight">{c.name}</span>
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              All Treatments
            </p>
          </div>
        )}

        {/* Treatment list */}
        <div className="px-4 pb-6" style={{ paddingTop: query ? 16 : 0 }}>
          {query && (
            <p className="text-xs text-slate-500 mb-3">{filtered.length} results for "{query}"</p>
          )}
          <div className="flex flex-col gap-3">
            {filtered.map(t => (
              <button key={t.id}
                onClick={() => onNavigate('treatmentDetail', t)}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: '#EFF6FF' }}>
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm mb-0.5"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs mb-1.5">{t.category} · {t.duration}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <StarRating rating={t.rating} size={11} />
                      <span className="text-xs text-slate-600 font-medium">{t.rating}</span>
                      <span className="text-xs text-slate-400">({t.reviews})</span>
                    </div>
                    {t.popular && (
                      <span className="text-xs bg-orange-50 text-orange-600 font-semibold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-[#1B4FBF] text-sm">{t.price}</p>
                  <p className="text-slate-400 text-xs">from</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
