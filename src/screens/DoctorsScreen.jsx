import { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal, Heart, Star } from 'lucide-react';
import { doctors } from '../data/mockData';

const colors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

export default function DoctorsScreen({ onNavigate }) {
  const [query, setQuery]   = useState('');
  const [filter, setFilter] = useState('All');
  const [liked, setLiked]   = useState({});

  const specialties = ['All', 'Cardiology', 'Orthopedics', 'Neurology', 'Oncology'];

  const filtered = doctors.filter(d =>
    (filter === 'All' || d.specialization.toLowerCase().includes(filter.toLowerCase())) &&
    (d.name.toLowerCase().includes(query.toLowerCase()) || d.specialization.toLowerCase().includes(query.toLowerCase()))
  );

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')}
            className="rounded-full flex items-center justify-center flex-shrink-0 transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}>
            <ArrowLeft size={18} color="#313131" />
          </button>
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
            Top Doctors
          </h2>
          <button className="ml-auto rounded-full flex items-center justify-center transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}>
            <SlidersHorizontal size={18} color="#313131" />
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center"
          style={{ height: 52, borderRadius: 40, border: '1px solid #C6C6C6', background: 'rgba(241,241,241,0.8)', padding: '0 12px 0 8px', gap: 10 }}>
          <div className="flex items-center justify-center flex-shrink-0"
            style={{ width: 36, height: 36, borderRadius: '100%', background: 'linear-gradient(135deg, rgba(170,196,235,0) 0%, rgba(170,196,235,1) 100%)', border: '1px solid #fff' }}>
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
      <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
        {specialties.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: filter === s ? 'rgba(171,196,235,0.55)' : 'rgba(255,255,255,0.85)',
              color:      filter === s ? '#1B4FBF' : '#7C7C7C',
              border:     filter === s ? '1px solid rgba(171,196,235,0.9)' : '1px solid #C6C6C6',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
            {s}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        <p className="text-xs mb-3" style={{ color: '#7C7C7C' }}>{filtered.length} doctors found</p>

        <div className="flex flex-col gap-4">
          {filtered.map((doc, i) => (
            <button key={doc.id}
              onClick={() => onNavigate('doctorDetail', doc)}
              className="flex gap-4 rounded-2xl p-4 text-left transition-all active:scale-95 relative"
              style={CARD_STYLE}>

              {/* Heart / favourite */}
              <button
                onClick={e => toggleLike(doc.id, e)}
                className="absolute top-3 right-3 flex items-center justify-center rounded-full transition-all active:scale-90"
                style={{ width: 30, height: 30, background: 'rgba(255,255,255,0.85)', border: '1px solid #E8E8E8' }}>
                <Heart
                  size={14}
                  color={liked[doc.id] ? '#EF4444' : '#C6C6C6'}
                  fill={liked[doc.id] ? '#EF4444' : 'none'}
                />
              </button>

              {/* Avatar — 78×78 circular, matches Figma */}
              <div className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                style={{ width: 78, height: 78, background: colors[i % colors.length] }}>
                {doc.img
                  ? <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : doc.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pr-6 flex flex-col justify-center">
                <p className="font-semibold mb-0.5"
                  style={{ fontSize: 16, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.3 }}>
                  {doc.name}
                </p>
                <p className="text-sm mb-2" style={{ color: '#7C7C7C' }}>
                  {doc.specialization}
                </p>
                {/* Rating row */}
                <div className="flex items-center gap-1 flex-wrap">
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <span className="text-xs font-semibold" style={{ color: '#313131' }}>{doc.rating}</span>
                  <span className="text-xs" style={{ color: '#313131' }}>({doc.reviews} Reviews)</span>
                  <span className="text-xs mx-1" style={{ color: '#C6C6C6' }}>·</span>
                  <span className="text-xs font-semibold" style={{ color: '#313131' }}>{doc.experience}</span>
                  <span className="text-xs" style={{ color: '#313131' }}>Experience</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
