import { useState } from 'react';
import { MapPin, ChevronRight, Heart } from 'lucide-react';
import BackButton from '../components/BackButton';
import StarRating from '../components/StarRating';
import { doctors } from '../data/mockData';

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

export default function HospitalDetailScreen({ data, onNavigate }) {
  const [saved, setSaved] = useState(false);
  const h = data || {
    id: 1, name: 'Apollo Hospitals', city: 'Delhi & 70+ locations',
    specialties: ['Cardiology', 'Orthopedics', 'Oncology', 'Neurology'],
    rating: 4.9, beds: 10000, accreditation: ['JCI', 'NABH'], founded: 1983, logo: 'AH',
  };

  const hDoctors = doctors.slice(0, 3);

  const facilities = ['ICU & Critical Care', 'Robotic Surgery', '24/7 Emergency', 'International Patient Lounge', 'Visa Assistance', 'Language Interpreters', 'In-hospital Accommodation', 'Telemedicine'];

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter overflow-y-auto hide-scrollbar">
      {/* Hero */}
      <div className="relative"
        style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}>
        <div className="flex items-center justify-between px-4 pt-4 pb-4">
          <BackButton onPress={() => data?.from === 'doctorDetail' ? onNavigate('doctorDetail', data.doctorData) : onNavigate('hospitals')} />
          <button onClick={() => setSaved(v => !v)} className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: saved ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.1)' }}>
            <Heart size={18} color={saved ? '#EF4444' : 'white'} strokeWidth={saved ? 2.5 : 1.8} />
          </button>
        </div>

        <div className="px-4 pb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
              style={{ background: '#1B4FBF' }}>
              {h.logo}
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-xl leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {h.name}
              </h2>
              <div className="flex items-center gap-1 mt-1">
                <MapPin size={13} color="rgba(255,255,255,0.5)" />
                <span className="text-white/60 text-sm">{h.city}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1.5">
                  <StarRating rating={h.rating} size={13} />
                  <span className="text-white font-semibold text-sm">{h.rating}</span>
                </div>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/60 text-xs">Est. {h.founded}</span>
              </div>
            </div>
          </div>

          {/* Accreditations */}
          <div className="flex gap-2 mb-4">
            {h.accreditation.map(a => (
              <span key={a} className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-300">
                ✓ {a} Accredited
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Beds', value: h.beds.toLocaleString() },
              { label: 'Specialties', value: `${h.specialties.length}+` },
              { label: 'Est.', value: h.founded },
            ].map(s => (
              <div key={s.label} className="rounded-xl px-3 py-2 text-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <p className="text-white font-bold text-base">{s.value}</p>
                <p className="text-white/50 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5 flex flex-col gap-4">
        {/* Specialties */}
        <div className="p-4" style={CARD_STYLE}>
          <h3 className="font-bold text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>Specialties</h3>
          <div className="flex flex-wrap gap-2">
            {h.specialties.map(s => (
              <span key={s} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1B4FBF]">{s}</span>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="p-4" style={CARD_STYLE}>
          <h3 className="font-bold text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>Facilities</h3>
          <div className="grid grid-cols-2 gap-2">
            {facilities.map(f => (
              <div key={f} className="flex items-center gap-2 py-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(83,201,122,0.15)' }}>
                  <span className="text-xs" style={{ color: '#059669' }}>✓</span>
                </div>
                <span className="text-xs" style={{ color: '#313131' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>Key Doctors</h3>
            <button onClick={() => onNavigate('doctors')} className="text-xs font-semibold flex items-center gap-1" style={{ color: '#1B4FBF' }}>
              All Doctors <ChevronRight size={13} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {hDoctors.map((d, i) => (
              <button key={d.id}
                onClick={() => onNavigate('doctorDetail', d)}
                className="flex items-center gap-3 p-3 text-left transition-all active:scale-95"
                style={{ ...CARD_STYLE, borderRadius: 12 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: ['#1B4FBF', '#059669', '#7C3AED'][i] }}>
                  {d.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-xs" style={{ color: '#313131' }}>{d.name}</p>
                  <p className="text-xs" style={{ color: '#7C7C7C' }}>{d.specialization} · {d.experience}</p>
                </div>
                <div className="flex items-center gap-1">
                  <StarRating rating={d.rating} size={11} />
                  <span className="text-xs" style={{ color: '#313131' }}>{d.rating}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 flex gap-3">
        <button onClick={() => onNavigate('chat')}
          className="flex-1 py-3.5 rounded-full border-2 border-[#1B4FBF] text-[#1B4FBF] font-semibold text-sm">
          Enquire
        </button>
        <button onClick={() => onNavigate('journey')}
          className="flex-1 py-3.5 rounded-full text-white font-semibold text-sm"
          style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
          Plan Visit ✈️
        </button>
      </div>
    </div>
  );
}
