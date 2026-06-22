import { useState } from 'react';
import { ArrowLeft, Search, MapPin, SlidersHorizontal } from 'lucide-react';
import StarRating from '../components/StarRating';
import { hospitals } from '../data/mockData';

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

const logoColors = ['#1B4FBF', '#EF4444', '#0F172A', '#7C3AED', '#059669', '#F59E0B'];

export default function HospitalsScreen({ onNavigate }) {
  const [query, setQuery] = useState('');

  const filtered = hospitals.filter(h =>
    h.name.toLowerCase().includes(query.toLowerCase()) ||
    h.city.toLowerCase().includes(query.toLowerCase()) ||
    h.specialties.some(s => s.toLowerCase().includes(query.toLowerCase()))
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
            Top Hospitals
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
          <div className="flex items-center justify-center flex-shrink-0" style={{ width: 36, height: 36 }}>
            <Search size={16} color="#7C7C7C" />
          </div>
          <input
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-[#7C7C7C]"
            style={{ color: '#313131' }}
            placeholder="Hospital name, city, specialty…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Accreditation badges */}
      {!query && (
        <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-xs font-medium flex-shrink-0" style={{ color: '#7C7C7C' }}>Showing:</span>
          {['JCI Accredited', 'NABH Certified', 'ISO'].map(b => (
            <span key={b} className="text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0"
              style={{ background: 'rgba(83,201,122,0.12)', color: '#059669', border: '1px solid rgba(83,201,122,0.3)' }}>
              ✓ {b}
            </span>
          ))}
        </div>
      )}

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6" style={{ paddingTop: query ? 12 : 0 }}>
        {query && <p className="text-xs mb-3" style={{ color: '#7C7C7C' }}>{filtered.length} hospitals found</p>}
        <div className="flex flex-col gap-3">
          {filtered.map((h, i) => (
            <button key={h.id}
              onClick={() => onNavigate('hospitalDetail', h)}
              className="rounded-2xl p-4 text-left transition-all active:scale-95"
              style={CARD_STYLE}>

              {/* Row 1: logo + name/city + accreditation */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: logoColors[i % logoColors.length] }}>
                  {h.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                    {h.name}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={11} color="#7C7C7C" />
                    <span className="text-xs" style={{ color: '#7C7C7C' }}>{h.city}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <StarRating rating={h.rating} size={11} />
                    <span className="text-xs font-semibold" style={{ color: '#313131' }}>{h.rating}</span>
                    <span className="text-xs" style={{ color: '#7C7C7C' }}>· Est. {h.founded}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {h.accreditation.map(a => (
                    <span key={a} className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: 'rgba(83,201,122,0.12)', color: '#059669', border: '1px solid rgba(83,201,122,0.3)' }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 2: specialty tags */}
              <div className="flex items-center gap-2 flex-wrap mb-3">
                {h.specialties.slice(0, 3).map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(83,201,122,0.10)', color: '#313131', border: '1px solid rgba(83,201,122,0.2)' }}>
                    {s}
                  </span>
                ))}
                {h.specialties.length > 3 && (
                  <span className="text-xs font-semibold" style={{ color: '#1B4FBF' }}>+{h.specialties.length - 3} more</span>
                )}
              </div>

              {/* Row 3: footer stats */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #F0F0F0' }}>
                <span className="text-xs" style={{ color: '#7C7C7C' }}>{h.beds.toLocaleString()} beds</span>
                <button className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: '#EFF6FF', color: '#1B4FBF', border: '1px solid #C6C6C6' }}>
                  View Details →
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
