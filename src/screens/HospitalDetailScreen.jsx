import { ArrowLeft, MapPin, ChevronRight, Heart } from 'lucide-react';
import StarRating from '../components/StarRating';
import { doctors } from '../data/mockData';

export default function HospitalDetailScreen({ data, onNavigate }) {
  const h = data || {
    id: 1, name: 'Apollo Hospitals', city: 'Delhi & 70+ locations',
    specialties: ['Cardiology', 'Orthopedics', 'Oncology', 'Neurology'],
    rating: 4.9, beds: 10000, accreditation: ['JCI', 'NABL'], founded: 1983, logo: 'AH',
  };

  const hDoctors = doctors.slice(0, 3);

  const facilities = ['ICU & Critical Care', 'Robotic Surgery', '24/7 Emergency', 'International Patient Lounge', 'Visa Assistance', 'Language Interpreters', 'In-hospital Accommodation', 'Telemedicine'];

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter overflow-y-auto hide-scrollbar">
      {/* Hero */}
      <div className="relative"
        style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}>
        <div className="flex items-center justify-between px-4 pt-4 pb-4">
          <button onClick={() => onNavigate('hospitals')} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <Heart size={18} color="white" />
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
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Specialties</h3>
          <div className="flex flex-wrap gap-2">
            {h.specialties.map(s => (
              <span key={s} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1B4FBF]">{s}</span>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Facilities</h3>
          <div className="grid grid-cols-2 gap-2">
            {facilities.map(f => (
              <div key={f} className="flex items-center gap-2 py-1">
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-xs">✓</span>
                </div>
                <span className="text-slate-600 text-xs">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Key Doctors</h3>
            <button onClick={() => onNavigate('doctors')} className="text-xs text-[#1B4FBF] font-semibold flex items-center gap-1">
              All Doctors <ChevronRight size={13} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {hDoctors.map((d, i) => (
              <button key={d.id}
                onClick={() => onNavigate('doctorDetail', d)}
                className="flex items-center gap-3 bg-white rounded-xl p-3 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: ['#1B4FBF', '#059669', '#7C3AED'][i] }}>
                  {d.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-xs">{d.name}</p>
                  <p className="text-slate-400 text-xs">{d.specialization} · {d.experience}</p>
                </div>
                <div className="flex items-center gap-1">
                  <StarRating rating={d.rating} size={11} />
                  <span className="text-xs text-slate-600">{d.rating}</span>
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
