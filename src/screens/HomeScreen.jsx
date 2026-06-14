import { ArrowUpRight } from 'lucide-react';
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
        <div className="flex items-center justify-between" style={{ marginBottom: 24 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}>
              <img src="/icon-avatar.png" alt="Avatar" style={{ width: 20, height: 20, objectFit: 'contain' }} />
            </div>
            <div>
              <h2 className="font-bold leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131', fontSize: '18px' }}>
                {isGuest ? 'Guest User' : 'Kwame Mensah'}
              </h2>
              <p className="text-slate-400" style={{ fontSize: '14px' }}>Good Morning!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('language')}
              className="flex items-center gap-1 rounded-full transition-all active:opacity-70"
              style={{ width: 60, height: 38, justifyContent: 'center', background: '#F1F1F1', border: '1px solid #C6C6C6' }}
            >
              <img src="/icon-language.png" alt="Language" style={{ width: 18, height: 18, objectFit: 'contain' }} />
              <span className="text-slate-600 font-semibold" style={{ fontSize: '14px' }}>EN</span>
            </button>
            <button
              onClick={() => onNavigate('notifications')}
              className="rounded-full flex items-center justify-center transition-all active:opacity-70"
              style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}
            >
              <img src="/icon-notification.png" alt="Notifications" style={{ width: 18, height: 18, objectFit: 'contain' }} />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className="flex items-center"
          style={{
            height: 52,
            borderRadius: 40,
            border: '1px solid #C6C6C6',
            background: 'rgba(241,241,241,0.8)',
            padding: '0 12px 0 8px',
            gap: 10,
          }}
        >
          {/* Icon circle */}
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 36, height: 36,
              borderRadius: '100%',
              background: 'linear-gradient(135deg, rgba(170,196,235,0) 0%, rgba(170,196,235,1) 100%)',
              border: '1px solid #fff',
            }}
          >
            <img src="/icon-search.png" alt="Search" style={{ width: 18, height: 18, objectFit: 'contain' }} />
          </div>
          <input
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-[#7C7C7C]"
            style={{ color: '#7C7C7C' }}
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
          className="overflow-hidden"
          style={{
            border: '1px solid #C6C6C6',
            borderRadius: 20,
            backgroundImage: 'url(/banner-hero.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 216,
          }}
        >
          <div className="flex items-stretch gap-2 px-4 pt-4">
            <div className="flex-1 pb-4">
              <h3
                className="font-bold leading-snug mb-1.5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131', fontSize: '16px' }}
              >
                Global Medical Treatment in<br />India
              </h3>
              <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                Connect with top NABH & JCI<br />accredited hospitals
              </p>
              <div className="flex flex-col" style={{ gap: 7 }}>
                {['40+ Partner Hospitals', '24*7 Care Co-Ordinator'].map(b => (
                  <div key={b} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B4FBF' }} />
                    <span className="text-xs text-slate-600">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate(isGuest ? 'freeQuote' : 'journey')}
            className="transition-all active:opacity-70"
            style={{
              display: 'flex',
              width: '100%',
              height: 48,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              borderRadius: '0 0 20px 20px',
              background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.31) 100%)',
              boxShadow: '-22px 44px 88px 0 #DDD',
              backdropFilter: 'blur(22px)',
            }}
          >
            <span className="font-medium" style={{ color: '#4D81E7', fontSize: '16px' }}>Get Free Treatment Plan</span>
            <span style={{ color: '#4D81E7', fontSize: '20px' }}>»</span>
          </button>
        </div>

        {/* ── Quick Actions ── */}
        <div>
          <h3
            className="font-bold text-base mb-3"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}
          >
            Quick Actions
          </h3>
          <div className="flex gap-3">
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
                  style={{ height: 52, width: 72, background: a.bannerBg, borderRadius: '0 0 10px 10px', paddingBottom: 8 }}
                >
                  {a.img && <img src={a.img} alt={a.label} style={{ height: 23, width: 'auto', objectFit: 'contain' }} />}
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
            <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
              Popular Treatments
            </h3>
            <button onClick={() => onNavigate('treatment')} className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>
              View All
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1" style={{ margin: '0 -16px', padding: '0 16px' }}>
            {treatments.filter(t => t.popular).slice(0, 4).map((t, i) => (
              <button
                key={t.id}
                onClick={() => onNavigate('treatmentDetail', t)}
                className="flex-shrink-0 rounded-xl overflow-hidden text-left transition-all active:scale-95 relative"
                style={{
                  width: 230, height: 200,
                  transform: 'translateZ(0)',
                  background: t.img ? undefined : treatmentCardBgs[i % treatmentCardBgs.length],
                  backgroundImage: t.img ? `url(${t.img})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Icon centered in card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-60">{t.icon}</span>
                </div>

                {/* Green price badge */}
                <div
                  className="absolute top-2 left-2 px-2 py-1 text-white font-semibold"
                  style={{ background: '#16A34A', borderRadius: 6, fontSize: 10 }}
                >
                  Starts from {t.price}
                </div>

                {/* Bottom overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 pt-3 pb-3"
                  style={{
                    background: 'radial-gradient(ellipse at center bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 100%)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  <p className="text-white font-bold leading-snug mb-2" style={{ fontSize: 13 }}>
                    {t.name}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className="font-semibold text-white"
                      style={{ background: '#29BCB0', borderRadius: 20, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, fontSize: 10 }}
                    >
                      18 Hospitals
                    </span>
                    <span
                      className="font-semibold"
                      style={{ border: '1px solid white', borderRadius: 20, paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3, fontSize: 10, color: '#EF4444', background: 'white' }}
                    >
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
            <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
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
                  className="font-bold text-xs leading-snug mb-0.5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}
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
            <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
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
                        className="font-bold text-sm leading-snug"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}
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
