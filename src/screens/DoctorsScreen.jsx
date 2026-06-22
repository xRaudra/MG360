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
            <div key={doc.id}
              onClick={() => onNavigate('doctorDetail', doc)}
              className="rounded-2xl p-4 cursor-pointer transition-all active:scale-95"
              style={CARD_STYLE}>

              {/* ── Inner row: Avatar + right section ───────── */}
              <div className="flex items-start gap-4">

                {/* Avatar — 78×78 circular */}
                <div className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-white font-bold"
                  style={{ width: 78, height: 78, fontSize: 22, background: colors[i % colors.length] }}>
                  {doc.img
                    ? <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : doc.avatar}
                </div>

                {/* Right section: [name+spec+rating col] + [heart] */}
                <div className="flex-1 min-w-0 flex items-start gap-4">

                  {/* Name + Specialty + Rating — all inside one flex-1 column
                      so the rating row's right edge aligns with the name's right edge */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <p className="font-semibold truncate"
                      style={{ fontSize: 16, lineHeight: '20px', color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {doc.name}
                    </p>
                    <p className="truncate"
                      style={{ fontSize: 14, lineHeight: '18px', color: '#7C7C7C', marginTop: 6 }}>
                      {doc.specialization}
                    </p>

                    {/* Rating row — space-between within name column width */}
                    <div className="flex items-center justify-between" style={{ marginTop: 14 }}>
                      <div className="flex items-center gap-1">
                        <Star size={12} fill="#F59E0B" color="#F59E0B" />
                        <span style={{ fontSize: 12, color: '#313131' }}>{doc.rating}</span>
                        <span style={{ fontSize: 12, color: '#313131' }}>({doc.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span style={{ fontSize: 12, color: '#313131' }}>{doc.experience}</span>
                        <span style={{ fontSize: 12, color: '#313131' }}>Exp</span>
                      </div>
                    </div>
                  </div>

                  {/* Heart — flex-shrink-0, top-aligned */}
                  <button
                    onClick={e => toggleLike(doc.id, e)}
                    className="flex-shrink-0 transition-all active:scale-90">
                    <Heart
                      size={20}
                      color={liked[doc.id] ? '#EF4444' : '#C6C6C6'}
                      fill={liked[doc.id] ? '#EF4444' : 'none'}
                    />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
