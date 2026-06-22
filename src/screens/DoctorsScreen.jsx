import { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import StarRating from '../components/StarRating';
import { doctors } from '../data/mockData';

const colors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

function Avatar({ initials, idx, img }) {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-base flex-shrink-0"
      style={{ background: colors[idx % colors.length] }}>
      {img ? <img src={img} alt={initials} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </div>
  );
}

export default function DoctorsScreen({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const specialties = ['All', 'Cardiology', 'Orthopedics', 'Neurology', 'Oncology'];

  const filtered = doctors.filter(d =>
    (filter === 'All' || d.specialization.toLowerCase().includes(filter.toLowerCase())) &&
    (d.name.toLowerCase().includes(query.toLowerCase()) || d.specialization.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => onNavigate('home')}
            className="rounded-full flex items-center justify-center flex-shrink-0 transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}
          >
            <ArrowLeft size={18} color="#313131" />
          </button>
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
            Top Doctors
          </h2>
          <button
            className="ml-auto rounded-full flex items-center justify-center transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#EFF6FF', border: '1px solid #C6C6C6' }}
          >
            <SlidersHorizontal size={18} color="#1B4FBF" />
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center" style={{ height: 52, borderRadius: 40, border: '1px solid #C6C6C6', background: 'rgba(241,241,241,0.8)', padding: '0 12px 0 8px', gap: 10 }}>
          <div className="flex items-center justify-center flex-shrink-0" style={{ width: 36, height: 36, borderRadius: '100%', background: 'linear-gradient(135deg, rgba(170,196,235,0) 0%, rgba(170,196,235,1) 100%)', border: '1px solid #fff' }}>
            <Search size={16} color="#7C7C7C" />
          </div>
          <input
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-[#7C7C7C]"
            style={{ color: '#313131' }}
            placeholder="Search doctors, specialties…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
        {specialties.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: filter === s ? '#1B4FBF' : 'rgba(255,255,255,0.85)',
              color: filter === s ? 'white' : '#7C7C7C',
              border: filter === s ? 'none' : '1px solid #C6C6C6',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
            {s}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        <p className="text-xs mb-3" style={{ color: '#7C7C7C' }}>{filtered.length} doctors found</p>
        <div className="flex flex-col gap-3">
          {filtered.map((doc, i) => (
            <button key={doc.id}
              onClick={() => onNavigate('doctorDetail', doc)}
              className="flex gap-4 rounded-2xl p-4 text-left transition-all active:scale-95"
              style={CARD_STYLE}>
              <div className="relative">
                <Avatar initials={doc.avatar} idx={i} img={doc.img} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                  {doc.name}
                </p>
                <p className="text-xs mb-1" style={{ color: '#7C7C7C' }}>{doc.specialization}</p>
                <p className="text-xs mb-2" style={{ color: '#7C7C7C' }}>{doc.hospital} · {doc.city}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <StarRating rating={doc.rating} size={11} />
                    <span className="text-xs font-semibold" style={{ color: '#313131' }}>{doc.rating}</span>
                    <span className="text-xs" style={{ color: '#7C7C7C' }}>({doc.reviews})</span>
                  </div>
                  <span className="text-xs" style={{ color: '#7C7C7C' }}>{doc.experience} exp</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0 flex flex-col items-end justify-between">
                <span className="font-bold text-sm" style={{ color: '#1B4FBF' }}>{doc.fee}</span>
                <span className="text-xs" style={{ color: '#7C7C7C' }}>per consult</span>
                <button className="mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: doc.available ? '#EFF6FF' : '#F8FAFC', color: doc.available ? '#1B4FBF' : '#94A3B8', border: '1px solid #C6C6C6' }}>
                  {doc.available ? 'Book' : 'Unavailable'}
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
