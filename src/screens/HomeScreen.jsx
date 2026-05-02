import { Bell, Globe, Search, ChevronRight } from 'lucide-react';
import StarRating from '../components/StarRating';
import { doctors, treatments } from '../data/mockData';

const quickActions = [
  { key: 'treatment', label: 'Find\nTreatment', icon: '🩺', color: '#EFF6FF', iconBg: '#1B4FBF' },
  { key: 'doctors', label: 'Top\nDoctors', icon: '👨‍⚕️', color: '#F0FDF4', iconBg: '#059669' },
  { key: 'hospitals', label: 'Hospitals', icon: '🏥', color: '#FFF7ED', iconBg: '#F59E0B' },
  { key: 'journey', label: 'My\nJourney', icon: '✈️', color: '#FAF5FF', iconBg: '#7C3AED' },
];

function Avatar({ initials, color = '#1B4FBF' }) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ background: color }}>
      {initials}
    </div>
  );
}

export default function HomeScreen({ onNavigate }) {
  const lang = 'EN';

  return (
    <div className="flex flex-col h-full bg-transparent overflow-y-auto hide-scrollbar screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-5"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #1338A0 100%)' }}>

        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Good morning,</p>
            <h2 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Kwame Mensah 👋
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Language */}
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/15">
              <Globe size={14} color="white" />
              <span className="text-white text-xs font-medium">{lang}</span>
            </button>
            {/* Notifications */}
            <button onClick={() => onNavigate('notifications')}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center relative">
              <Bell size={18} color="white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400 border border-[#1338A0]" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg">
          <Search size={18} color="#94A3B8" />
          <input
            className="flex-1 text-sm outline-none text-slate-700 bg-transparent placeholder:text-slate-400"
            placeholder="Knee replacement, Dr. Sharma…"
            onFocus={() => onNavigate('explore')}
            readOnly
          />
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#1B4FBF]">
            <span className="text-white text-xs font-semibold">Filter</span>
          </div>
        </div>

        {/* Journey progress pill */}
        <div onClick={() => onNavigate('journey')}
          className="flex items-center justify-between mt-3 px-4 py-2.5 rounded-xl cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.12)' }}>
          <div className="flex items-center gap-2">
            <span className="text-base">✈️</span>
            <div>
              <p className="text-white text-xs font-semibold">Travel to Delhi in 3 days</p>
              <p className="text-white/60 text-xs">Cardiac Bypass — Apollo Hospital</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white/70">
            <span className="text-xs">View</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Quick Actions
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map(a => (
            <button key={a.key} onClick={() => onNavigate(a.key)}
              className="flex flex-col items-center gap-2 py-3 rounded-2xl transition-all active:scale-95"
              style={{ background: a.color }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{ background: a.iconBg }}>
                <span className="text-xl">{a.icon}</span>
              </div>
              <span className="text-xs font-semibold text-slate-700 text-center leading-tight"
                style={{ whiteSpace: 'pre-line' }}>
                {a.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mx-5 mb-4 rounded-2xl overflow-hidden cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)' }}>
        <div className="relative px-4 py-4">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl opacity-20">💬</div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white/25 text-white text-xs font-bold px-2 py-0.5 rounded-full">FREE</span>
          </div>
          <h3 className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Get a Free Second Opinion
          </h3>
          <p className="text-white/75 text-xs mt-1">
            Share your reports · Expert advice in 24h
          </p>
          <button className="mt-3 flex items-center gap-1 bg-white text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full">
            Get Started <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Top Doctors */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Top Doctors
          </h3>
          <button onClick={() => onNavigate('doctors')}
            className="flex items-center gap-1 text-[#1B4FBF] text-xs font-semibold">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {doctors.slice(0, 4).map(doc => (
            <button key={doc.id}
              onClick={() => onNavigate('doctorDetail', doc)}
              className="flex-shrink-0 w-36 bg-white rounded-2xl p-3 text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="flex justify-between items-start mb-2">
                <Avatar initials={doc.avatar}
                  color={['#1B4FBF', '#059669', '#7C3AED', '#F59E0B'][doc.id % 4]} />
                {doc.available && (
                  <span className="w-2 h-2 rounded-full bg-green-400 mt-1" />
                )}
              </div>
              <p className="font-semibold text-slate-800 text-xs leading-tight mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {doc.name}
              </p>
              <p className="text-slate-400 text-xs mb-2 leading-tight">{doc.specialization.split(' ')[0]}</p>
              <div className="flex items-center gap-1">
                <StarRating rating={doc.rating} size={11} />
                <span className="text-xs text-slate-600 font-semibold">{doc.rating}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Treatments */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Popular Treatments
          </h3>
          <button onClick={() => onNavigate('treatment')}
            className="flex items-center gap-1 text-[#1B4FBF] text-xs font-semibold">
            See all <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {treatments.filter(t => t.popular).slice(0, 3).map(t => (
            <button key={t.id}
              onClick={() => onNavigate('treatmentDetail', t)}
              className="flex items-center gap-3 bg-white rounded-2xl p-3 text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-blue-50 flex-shrink-0">
                {t.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {t.name}
                </p>
                <p className="text-slate-400 text-xs">{t.category} · {t.duration}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-[#1B4FBF] text-sm">{t.price}</p>
                <div className="flex items-center gap-1 justify-end">
                  <StarRating rating={t.rating} size={11} />
                  <span className="text-xs text-slate-500">{t.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
