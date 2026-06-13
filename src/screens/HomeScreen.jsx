import { Bell, Globe, Search, ArrowUpRight } from 'lucide-react';
import { doctors, hospitals, treatments } from '../data/mockData';

const quickActions = [
  { key: 'whyMedGlobal', label: 'Why\nMedGlobal360?', img: '/icon-why-medglobal.png', bannerBg: 'rgba(41,188,176,0.10)'  },
  { key: 'whyIndia',     label: 'Why\nIndia?',         img: '/icon-why-india.png',     bannerBg: 'rgba(254,119,0,0.18)'   },
  // { key: 'caseStudies', label: 'Case\nStudies',     img: null,                      bannerBg: 'rgba(227,30,36,0.10)'  }, // disabled
  { key: 'contact',      label: 'Contact\nUs',         img: '/icon-contact-us.png',    bannerBg: 'rgba(86,105,143,0.24)' },
];

const avatarColors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#0D9488'];

const treatmentCardBgs = [
  'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)',
  'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
  'linear-gradient(135deg, #BBF7D0 0%, #6EE7B7 100%)',
  'linear-gradient(135deg, #FEE2E2 0%, #FCA5A5 100%)',
];

export default function HomeScreen({ onNavigate, isGuest = false }) {
  return (
    <div
      className="flex flex-col h-full overflow-y-auto hide-scrollbar screen-enter"
      style={{
        backgroundImage: 'url(/default-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'local',
      }}
    >

      {/* ── Header ── */}
      <div className="px-4 pt-4 pb-3 flex-shrink-0">

        {/* Top row: avatar + name + actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid #C6C6C6' }}>
              <span className="text-slate-400 text-base">👤</span>
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-base leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {isGuest ? 'Guest User' : 'Kwame Mensah'}
              </h2>
              <p className="text-slate-400 text-xs">Good Morning!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('language')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all active:opacity-70"
              style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid #C6C6C6' }}
            >
              <Globe size={13} color="#64748B" />
              <span className="text-slate-600 text-xs font-semibold">EN</span>
            </button>
            <button
              onClick={() => onNavigate('notifications')}
              className="w-9 h-9 rounded-full flex items-center justify-center relative transition-all active:opacity-70"
              style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid #C6C6C6' }}
            >
              <Bell size={17} color="#64748B" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3 rounded-full px-4 py-2.5 bg-white" style={{ border: '1px solid #C6C6C6' }}>
          <Search size={16} color="#94A3B8" />
          <input
            className="flex-1 text-sm outline-none text-slate-700 bg-transparent placeholder:text-slate-400"
            placeholder="Search treatments, hospitals, doctors..."
            onFocus={() => onNavigate('explore')}
            readOnly
          />
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="px-4 py-4 flex flex-col gap-5">

        {/* ── Hero Banner ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 55%, #C7D2FE 100%)', border: '1px solid #C6C6C6' }}
        >
          <div className="flex items-stretch gap-2 px-4 pt-4">
            {/* Text */}
            <div className="flex-1 pb-4">
              <h3
                className="font-bold text-slate-800 text-sm leading-snug mb-1.5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Global Medical Treatment in India
              </h3>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                Connect with top NABH & JCI accredited hospitals
              </p>
              <div className="flex flex-col gap-1">
                {['40+ Partner Hospitals', '24*7 Care Co-Ordinator'].map(b => (
                  <div key={b} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B4FBF' }} />
                    <span className="text-xs text-slate-600">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Doctor illustration */}
            <div className="w-24 flex-shrink-0 flex items-end justify-center">
              <div
                className="w-20 h-24 rounded-t-xl flex items-end justify-center overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.35)' }}
              >
                <span style={{ fontSize: '52px', lineHeight: 1 }}>👩‍⚕️</span>
              </div>
            </div>
          </div>
          {/* CTA row */}
          <div style={{ borderTop: '1px solid rgba(147,197,253,0.45)' }}>
            <button
              onClick={() => onNavigate(isGuest ? 'freeQuote' : 'journey')}
              className="w-full py-3 flex items-center justify-center gap-1 transition-all active:opacity-70"
            >
              <span className="font-semibold text-sm" style={{ color: '#1B4FBF' }}>Get Free Treatment Plan</span>
              <span className="font-bold text-base" style={{ color: '#1B4FBF' }}>»</span>
            </button>
          </div>
        </div>

        {/* ── Quick Actions ── */}
        <div>
          <h3
            className="font-bold text-slate-800 text-base mb-3"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Quick Actions
          </h3>
          <div className="flex gap-4">
            {quickActions.map(a => (
              <button
                key={a.key}
                onClick={() => onNavigate(a.key)}
                className="flex flex-col items-center transition-all active:scale-95"
                style={{
                  flex: '1 0 0',
                  height: 100,
                  padding: '0 10px 8px 10px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 8,
                  border: '1px solid #C6C6C6',
                  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.48) 100%)',
                  boxShadow: '-22px 44px 88px 0px #DDD',
                  backdropFilter: 'blur(22px)',
                }}
              >
                {/* Icon banner */}
                <div
                  className="w-full flex items-end justify-center flex-shrink-0"
                  style={{ height: 52, background: a.bannerBg, borderRadius: '0 0 10px 10px', paddingBottom: 8 }}
                >
                  {a.img && <img src={a.img} alt={a.label} style={{ height: 22, width: 'auto', objectFit: 'contain' }} />}
                </div>
                {/* Label */}
                <span
                  className="font-medium text-slate-500 text-center leading-tight"
                  style={{ whiteSpace: 'pre-line', fontSize: '12px' }}
                >
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Popular Treatments ── */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Popular Treatments
            </h3>
            <button onClick={() => onNavigate('treatment')} className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>
              View All
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
            {treatments.filter(t => t.popular).slice(0, 4).map((t, i) => (
              <button
                key={t.id}
                onClick={() => onNavigate('treatmentDetail', t)}
                className="flex-shrink-0 w-44 rounded-2xl overflow-hidden text-left transition-all active:scale-95 bg-white"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}
              >
                {/* Image area */}
                <div
                  className="relative h-32 flex items-center justify-center"
                  style={{ background: treatmentCardBgs[i % treatmentCardBgs.length] }}
                >
                  <span className="text-5xl opacity-70">{t.icon}</span>
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                    style={{ background: '#16A34A' }}
                  >
                    Starts from {t.price}
                  </div>
                </div>
                {/* Info */}
                <div className="p-3">
                  <p
                    className="font-semibold text-slate-800 text-xs leading-snug mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {t.name}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: '#1B4FBF' }}>
                      18 Hospitals
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#FEF3C7', color: '#B45309' }}>
                      {t.duration}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Top Doctors ── */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Top Doctors
            </h3>
            <button onClick={() => onNavigate('doctors')} className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {doctors.slice(0, 4).map((doc, i) => (
              <button
                key={doc.id}
                onClick={() => onNavigate('doctorDetail', doc)}
                className="bg-white rounded-2xl p-3 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full mb-2.5 flex items-center justify-center text-white font-bold text-base"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {doc.avatar}
                </div>
                {/* Name */}
                <p
                  className="font-bold text-slate-800 text-xs leading-snug mb-0.5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {doc.name}
                </p>
                {/* Specialization */}
                <p className="text-slate-400 text-xs mb-2 leading-tight">{doc.specialization}</p>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs font-bold text-slate-700">{doc.rating}</span>
                  <span className="text-slate-300 text-xs">·</span>
                  <span className="text-slate-400 text-xs">{doc.reviews} Reviews</span>
                </div>
                {/* Experience + arrow */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-slate-700 text-xs font-semibold">{doc.experience}</p>
                    <p className="text-slate-400 text-xs">Experience</p>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: '#1B4FBF' }}
                  >
                    <ArrowUpRight size={13} color="white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Top Hospitals ── */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Top Hospitals
            </h3>
            <button onClick={() => onNavigate('hospitals')} className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>
              View All
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {hospitals.slice(0, 3).map((h, i) => {
              const iconBgs    = ['#DCFCE7', '#DBEAFE', '#EDE9FE'];
              const arrowColors = ['#059669', '#1B4FBF', '#7C3AED'];
              return (
                <button
                  key={h.id}
                  onClick={() => onNavigate('hospitalDetail', h)}
                  className="bg-white rounded-2xl p-4 text-left transition-all active:scale-95"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: iconBgs[i % iconBgs.length] }}
                    >
                      🏥
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold text-slate-800 text-sm leading-snug"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {h.name}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{h.city}</p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: arrowColors[i % arrowColors.length] }}
                    >
                      <ArrowUpRight size={14} color="white" />
                    </div>
                  </div>

                  {/* Specialty tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {h.specialties.slice(0, 3).map(s => (
                      <span key={s} className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        {s}
                      </span>
                    ))}
                    {h.specialties.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        +{h.specialties.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold text-slate-700">{h.rating}</span>
                      <span>73 Reviews</span>
                    </div>
                    <span className="text-slate-200">|</span>
                    <span>{h.founded} Estd.</span>
                    <span className="text-slate-200">|</span>
                    {h.accreditation.slice(0, 2).map(a => (
                      <span key={a} className="font-semibold text-slate-600">{a}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
