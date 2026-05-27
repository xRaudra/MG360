import { useState } from 'react';
import { Search, ArrowLeft, SlidersHorizontal, Globe, Users, ArrowUpRight, CheckCircle, Shield, ChevronRight } from 'lucide-react';
import StarRating from '../components/StarRating';
import { treatments, categories } from '../data/mockData';

const trustPillars = [
  { icon: Globe,   color: '#0D9488', bg: '#F0FDFA', title: 'Global Reach',  desc: 'Patients from 50+ countries treated every year' },
  { icon: Shield,  color: '#1B4FBF', bg: '#EFF6FF', title: 'Verified Care', desc: 'JCI & NABL accredited hospitals only' },
  { icon: Users,   color: '#7C3AED', bg: '#FAF5FF', title: 'Family First',  desc: 'We support patients and their loved ones' },
];

const stats = [
  { value: '500+', label: 'Hospitals' },
  { value: '50+',  label: 'Countries' },
  { value: '10K+', label: 'Patients'  },
];

export default function ExploreScreen({ onNavigate }) {
  const [query,   setQuery]   = useState('');
  const [showAll, setShowAll] = useState(false);

  const filtered = treatments.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* ── Header ────────────────────────────────────────────────── */}
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
            onChange={e => { setQuery(e.target.value); setShowAll(false); }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 text-xs font-medium">
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* ── Default view (no search) ──────────────────────────── */}
        {!query && (
          <>
            {/* ── About Us ────────────────────────────────────────── */}
            <div className="px-4 pt-5 mb-5">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(140deg, #0B3D91 0%, #0D9488 100%)' }}>
                <div className="relative px-5 pt-5 pb-1">
                  <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10"
                    style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5"
                    style={{ background: 'white', transform: 'translate(-40%, 40%)' }} />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                    style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white text-xs font-semibold tracking-wide">About MG360</span>
                  </div>
                  <h2 className="text-white font-bold text-xl leading-tight mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Your bridge to<br />world-class medical care
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    MG360 connects international patients with India's top hospitals and
                    doctors — guiding you from the very first question to a full recovery.
                  </p>
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

              {/* Stats */}
              <div className="flex gap-3 mt-4">
                {stats.map(s => (
                  <div key={s.label} className="flex-1 bg-white rounded-2xl py-3 text-center"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <p className="font-bold text-[#1B4FBF] text-lg"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.value}</p>
                    <p className="text-slate-400 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust pillars */}
              <div className="flex flex-col gap-2.5 mt-4">
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
            </div>

            {/* ── Browse by Specialty — CAROUSEL ─────────────────── */}
            <div className="mb-5">
              <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="font-bold text-slate-800 text-base"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Browse by Specialty
                </h3>
                <button className="flex items-center gap-0.5 text-[#1B4FBF] text-xs font-semibold">
                  See all <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-1">
                {categories.map(c => (
                  <button key={c.id}
                    onClick={() => setQuery(c.name)}
                    className="flex-shrink-0 flex flex-col items-center gap-2 w-[76px] py-3.5 rounded-2xl bg-white transition-all active:scale-95"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: c.color + '20' }}>
                      <span className="text-xl">{c.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-600 text-center leading-tight px-1">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── All Treatments — CAROUSEL ───────────────────────── */}
            <div className="mb-6">
              <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="font-bold text-slate-800 text-base"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  All Treatments
                </h3>
                <button
                  onClick={() => setShowAll(v => !v)}
                  className="flex items-center gap-0.5 text-[#1B4FBF] text-xs font-semibold">
                  {showAll ? 'See less' : 'See all'}
                  <ChevronRight size={14}
                    style={{ transition: 'transform 0.2s', transform: showAll ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </button>
              </div>

              {/* Horizontal carousel */}
              <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-1">
                {treatments.map(t => (
                  <button key={t.id}
                    onClick={() => onNavigate('treatmentDetail', t)}
                    className="flex-shrink-0 w-40 bg-white rounded-2xl p-3 text-left transition-all active:scale-95"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2.5 flex-shrink-0"
                      style={{ background: '#EFF6FF' }}>
                      {t.icon}
                    </div>
                    <p className="font-semibold text-slate-800 text-xs leading-tight mb-0.5"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif',
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs mb-2 truncate">{t.category}</p>
                    <p className="font-bold text-[#1B4FBF] text-sm mb-1">{t.price}</p>
                    <div className="flex items-center gap-1">
                      <StarRating rating={t.rating} size={11} />
                      <span className="text-xs text-slate-600 font-medium">{t.rating}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Expanded vertical list */}
              {showAll && (
                <div className="flex flex-col gap-3 px-4 mt-4">
                  {treatments.map(t => (
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
                          <StarRating rating={t.rating} size={11} />
                          <span className="text-xs text-slate-600 font-medium">{t.rating}</span>
                          <span className="text-xs text-slate-400">({t.reviews})</span>
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
              )}
            </div>
          </>
        )}

        {/* ── Search results ────────────────────────────────────── */}
        {query && (
          <div className="px-4 pt-4 pb-6">
            <p className="text-xs text-slate-500 mb-3">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
            </p>
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
              {filtered.length === 0 && (
                <div className="flex flex-col items-center py-16 gap-3">
                  <span className="text-4xl">🔍</span>
                  <p className="font-semibold text-slate-700 text-sm">No results found</p>
                  <p className="text-slate-400 text-xs text-center">Try a different treatment name or specialty</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
