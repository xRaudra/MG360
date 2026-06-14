import { useState } from 'react';
import { ArrowLeft, Star, MapPin, Heart, MessageCircle, Phone } from 'lucide-react';

const colors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

export default function DoctorDetailScreen({ data, onNavigate }) {
  const doc = data || {
    id: 1, name: 'Dr. Rajesh Sharma', specialization: 'Cardiothoracic Surgeon',
    hospital: 'Apollo Hospital', city: 'Delhi', experience: '22 yrs',
    rating: 4.9, reviews: 1240, fee: '$80', avatar: 'RS', available: true,
    languages: ['English', 'Hindi'],
  };

  const colorIdx = doc.id % colors.length;
  const [saved, setSaved]       = useState(false);
  const [selDate, setSelDate]   = useState(0);
  const [selTime, setSelTime]   = useState(1);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="relative pb-6"
        style={{ background: `linear-gradient(160deg, ${colors[colorIdx]} 0%, #0F172A 100%)` }}>

        <div className="flex items-center justify-between px-4 pt-4 mb-6">
          <button onClick={() => onNavigate('doctors')} className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <button onClick={() => setSaved(v => !v)} className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: saved ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.15)' }}>
            <Heart size={18} color={saved ? '#EF4444' : 'white'} strokeWidth={saved ? 2.5 : 1.8} />
          </button>
        </div>

        <div className="flex flex-col items-center px-4">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center text-white text-2xl font-bold mb-3 relative"
            style={{ background: colors[colorIdx], border: '4px solid rgba(255,255,255,0.3)' }}>
            {doc.img
              ? <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : doc.avatar
            }
          </div>
          <h2 className="text-white font-bold text-xl text-center" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {doc.name}
          </h2>
          <p className="text-white/70 text-sm mt-0.5">{doc.specialization}</p>

          <div className="flex items-center gap-1 mt-2">
            <MapPin size={13} color="rgba(255,255,255,0.6)" />
            <span className="text-white/60 text-sm">{doc.hospital}, {doc.city}</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {[
              { label: 'Rating', value: doc.rating, sub: `${doc.reviews} reviews` },
              { label: 'Experience', value: doc.experience, sub: 'years' },
              { label: 'Fee', value: doc.fee, sub: 'per consult' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <p className="text-white font-bold text-base">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5 flex flex-col gap-4">
        {/* About */}
        <div className="p-4" style={CARD_STYLE}>
          <h3 className="font-bold text-sm mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>About</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#7C7C7C' }}>
            {doc.name} is a leading {doc.specialization} at {doc.hospital} with {doc.experience} of expertise. Known for exceptional patient outcomes, international patient care, and minimally invasive techniques.
          </p>
        </div>

        {/* Languages */}
        <div className="p-4" style={CARD_STYLE}>
          <h3 className="font-bold text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>Languages</h3>
          <div className="flex gap-2 flex-wrap">
            {doc.languages.map(l => (
              <span key={l} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1B4FBF]">{l}</span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="p-4" style={CARD_STYLE}>
          <h3 className="font-bold text-sm mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>Available Slots</h3>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {['Mon Jan 20', 'Tue Jan 21', 'Wed Jan 22', 'Thu Jan 23'].map((d, i) => (
              <button key={d} onClick={() => setSelDate(i)}
                className="flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl border-2 transition-all"
                style={{
                  borderColor: selDate === i ? '#1B4FBF' : '#E2E8F0',
                  background: selDate === i ? '#EFF6FF' : 'white',
                  color: selDate === i ? '#1B4FBF' : '#475569',
                }}>
                <span className="text-xs font-semibold">{d.split(' ')[0]}</span>
                <span className="text-sm font-bold">{d.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {['9:00 AM', '10:30 AM', '2:00 PM', '4:30 PM'].map((slot, i) => (
              <button key={slot} onClick={() => setSelTime(i)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border-2 transition-all"
                style={{
                  borderColor: selTime === i ? '#1B4FBF' : '#E2E8F0',
                  background: selTime === i ? '#1B4FBF' : 'white',
                  color: selTime === i ? 'white' : '#475569',
                }}>
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Hospital */}
        <button onClick={() => onNavigate('hospitalDetail')}
          className="flex items-center gap-3 p-4 text-left transition-all active:scale-95"
          style={CARD_STYLE}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: '#1B4FBF' }}>
            AH
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm" style={{ color: '#313131' }}>{doc.hospital}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={11} color="#7C7C7C" />
              <span className="text-xs" style={{ color: '#7C7C7C' }}>{doc.city}</span>
            </div>
          </div>
          <span className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>View →</span>
        </button>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 flex gap-3">
        <button onClick={() => onNavigate('chat')}
          className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center flex-shrink-0">
          <MessageCircle size={20} color="#475569" />
        </button>
        <button onClick={() => onNavigate('contact')}
          className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center flex-shrink-0">
          <Phone size={20} color="#475569" />
        </button>
        <button onClick={() => onNavigate('freeQuote')}
          className="flex-1 py-3.5 rounded-full text-white font-semibold text-sm transition-all active:scale-95"
          style={{ background: `linear-gradient(135deg, ${colors[colorIdx]}, #0D9488)` }}>
          Book Consultation
        </button>
      </div>
    </div>
  );
}
