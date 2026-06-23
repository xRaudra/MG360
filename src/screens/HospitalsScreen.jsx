import { useState } from 'react';
import { Search, SlidersHorizontal, BedDouble } from 'lucide-react';
import { hospitals } from '../data/mockData';
import BackButton from '../components/BackButton';

const CARD_STYLE = {
  padding: 16,
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  border: '1px solid #C6C6C6',
  textAlign: 'left',
  cursor: 'pointer',
  width: '100%',
};

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
          <BackButton onPress={() => onNavigate('home')} />
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
            Top Hospitals
          </h2>
          <button
            className="ml-auto rounded-full flex items-center justify-center transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}
          >
            <SlidersHorizontal size={18} color="#313131" />
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

      {/* Accreditation filter chips */}
      {!query && (
        <div className="px-4 pb-3 flex items-center gap-2 overflow-x-auto hide-scrollbar">
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
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {query && <p className="text-xs mb-3" style={{ color: '#7C7C7C' }}>{filtered.length} hospitals found</p>}

        <div className="flex flex-col gap-3">
          {filtered.map(h => (
            <button
              key={h.id}
              onClick={() => onNavigate('hospitalDetail', h)}
              className="transition-all active:scale-95"
              style={CARD_STYLE}
            >
              {/* Row 1: icon + name/city — no arrow */}
              <div className="flex items-center" style={{ gap: 16, marginBottom: 14 }}>
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(83,201,122,0.24)' }}
                >
                  <img src="/icon-hospital.png" alt="Hospital" style={{ width: 26, height: 26, objectFit: 'contain' }} />
                </div>
                <div className="flex flex-col" style={{ gap: 4, flex: 1, minWidth: 0 }}>
                  <p className="font-bold leading-tight truncate" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131', fontSize: 16 }}>
                    {h.name}
                  </p>
                  <p style={{ fontSize: 13, color: '#7C7C7C' }}>{h.city}</p>
                </div>
              </div>

              {/* Row 2: specialty tags */}
              <div className="flex items-center flex-wrap" style={{ gap: 5, marginBottom: 14 }}>
                {h.specialties.slice(0, 4).map(s => (
                  <span key={s} style={{ background: 'rgba(83,201,122,0.10)', borderRadius: 20, padding: '3px 10px', fontSize: 12, color: '#313131', border: '1px solid rgba(83,201,122,0.2)' }}>
                    {s}
                  </span>
                ))}
                {h.specialties.length > 4 && (
                  <span style={{ fontSize: 12, color: '#1B4FBF', fontWeight: 600 }}>+{h.specialties.length - 4} more</span>
                )}
              </div>

              {/* Row 3: rating | founded | accreditation */}
              <div className="flex items-center" style={{ gap: 20, marginBottom: 14 }}>
                <div className="flex items-center" style={{ gap: 4 }}>
                  <span style={{ color: '#FDB022', fontSize: 15, lineHeight: 1 }}>★</span>
                  <span className="font-bold" style={{ fontSize: 15, color: '#313131', lineHeight: 1 }}>{h.rating}</span>
                  <span style={{ fontSize: 10, color: '#7C7C7C', lineHeight: 1 }}>Reviews</span>
                </div>
                <div className="flex items-center" style={{ gap: 4 }}>
                  <span className="font-bold" style={{ fontSize: 15, color: '#313131', lineHeight: 1 }}>{h.founded}</span>
                  <span style={{ fontSize: 10, color: '#7C7C7C', lineHeight: 1 }}>Estd.</span>
                </div>
                <span className="font-bold" style={{ fontSize: 14, color: '#059669', lineHeight: 1 }}>
                  {h.accreditation.join(' / ')}
                </span>
              </div>

              {/* Row 4: beds + View Details */}
              <div className="flex items-center justify-between" style={{ borderTop: '1px solid rgba(198,198,198,0.5)', paddingTop: 12 }}>
                <div className="flex items-center" style={{ gap: 5 }}>
                  <BedDouble size={13} color="#7C7C7C" />
                  <span style={{ fontSize: 12, color: '#7C7C7C' }}>
                    <span style={{ fontWeight: 600, color: '#313131' }}>{h.beds.toLocaleString()}</span> Beds
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 12, fontWeight: 600,
                    color: '#fff',
                    background: '#ABC4EB',
                    borderRadius: 100,
                    padding: '5px 14px',
                    letterSpacing: '-0.01em',
                    boxShadow: '0 3px 10px rgba(171,196,235,0.5)',
                  }}
                >
                  View Details →
                </span>
              </div>

            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
