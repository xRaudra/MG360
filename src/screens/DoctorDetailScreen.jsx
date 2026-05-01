import { ArrowLeft, Star, MapPin, Clock, Heart, MessageCircle, Phone } from 'lucide-react';

const colors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

export default function DoctorDetailScreen({ data, onNavigate }) {
  const doc = data || {
    id: 1, name: 'Dr. Rajesh Sharma', specialization: 'Cardiothoracic Surgeon',
    hospital: 'Apollo Hospital', city: 'Delhi', experience: '22 yrs',
    rating: 4.9, reviews: 1240, fee: '$80', avatar: 'RS', available: true,
    languages: ['English', 'Hindi'],
  };

  const colorIdx = doc.id % colors.length;

  return (
    <div className="flex flex-col h-full bg-[#F1F5F9] screen-enter overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="relative pb-6"
        style={{ background: `linear-gradient(160deg, ${colors[colorIdx]} 0%, #0F172A 100%)` }}>

        <div className="flex items-center justify-between px-4 pt-4 mb-6">
          <button onClick={() => onNavigate('doctors')} className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <Heart size={18} color="white" />
          </button>
        </div>

        <div className="flex flex-col items-center px-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 relative"
            style={{ background: colors[colorIdx], border: '4px solid rgba(255,255,255,0.3)' }}>
            {doc.avatar}
            {doc.available && (
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white" />
            )}
          </div>
          <h2 className="text-white font-bold text-xl text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
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
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>About</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {doc.name} is a leading {doc.specialization} at {doc.hospital} with {doc.experience} of expertise. Known for exceptional patient outcomes, international patient care, and minimally invasive techniques.
          </p>
        </div>

        {/* Languages */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Languages</h3>
          <div className="flex gap-2 flex-wrap">
            {doc.languages.map(l => (
              <span key={l} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1B4FBF]">{l}</span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Available Slots</h3>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {['Mon Jan 20', 'Tue Jan 21', 'Wed Jan 22', 'Thu Jan 23'].map((d, i) => (
              <button key={d}
                className="flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl border-2 transition-all"
                style={{
                  borderColor: i === 0 ? '#1B4FBF' : '#E2E8F0',
                  background: i === 0 ? '#EFF6FF' : 'white',
                  color: i === 0 ? '#1B4FBF' : '#475569',
                }}>
                <span className="text-xs font-semibold">{d.split(' ')[0]}</span>
                <span className="text-sm font-bold">{d.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {['9:00 AM', '10:30 AM', '2:00 PM', '4:30 PM'].map((slot, i) => (
              <button key={slot}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border-2 transition-all"
                style={{
                  borderColor: i === 1 ? '#1B4FBF' : '#E2E8F0',
                  background: i === 1 ? '#1B4FBF' : 'white',
                  color: i === 1 ? 'white' : '#475569',
                }}>
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Hospital */}
        <button onClick={() => onNavigate('hospitalDetail')}
          className="flex items-center gap-3 bg-white rounded-2xl p-4 text-left transition-all active:scale-95"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: '#1B4FBF' }}>
            AH
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-800 text-sm">{doc.hospital}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={11} color="#94A3B8" />
              <span className="text-slate-400 text-xs">{doc.city}</span>
            </div>
          </div>
          <span className="text-xs text-[#1B4FBF] font-semibold">View →</span>
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
        <button
          className="flex-1 py-3.5 rounded-2xl text-white font-semibold text-sm"
          style={{ background: `linear-gradient(135deg, ${colors[colorIdx]}, #0D9488)` }}>
          Book Consultation
        </button>
      </div>
    </div>
  );
}
