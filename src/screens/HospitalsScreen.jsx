import { useState } from 'react';
import { ArrowLeft, Search, MapPin, SlidersHorizontal } from 'lucide-react';
import StarRating from '../components/StarRating';
import { hospitals } from '../data/mockData';

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
      <div className="bg-white px-4 pt-4 pb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
            <ArrowLeft size={18} color="#0F172A" />
          </button>
          <h2 className="font-bold text-slate-800 text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Top Hospitals
          </h2>
          <button className="ml-auto p-2 rounded-xl bg-[#EFF6FF]">
            <SlidersHorizontal size={18} color="#1B4FBF" />
          </button>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-3">
          <Search size={16} color="#94A3B8" />
          <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            placeholder="Hospital name, city, specialty…"
            value={query} onChange={e => setQuery(e.target.value)} />
        </div>
      </div>

      {/* Accreditation strip */}
      {!query && (
        <div className="px-4 py-3 flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Showing:</span>
          {['JCI Accredited', 'NABH Certified', 'NABL'].map(b => (
            <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#1B4FBF] font-semibold">
              ✓ {b}
            </span>
          ))}
        </div>
      )}

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6" style={{ paddingTop: query ? 12 : 0 }}>
        {query && <p className="text-xs text-slate-500 mb-3">{filtered.length} hospitals found</p>}
        <div className="flex flex-col gap-4">
          {filtered.map((h, i) => (
            <button key={h.id}
              onClick={() => onNavigate('hospitalDetail', h)}
              className="bg-white rounded-2xl overflow-hidden text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>

              {/* Top color strip */}
              <div className="h-2 w-full" style={{ background: logoColors[i % logoColors.length] }} />

              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: logoColors[i % logoColors.length] }}>
                    {h.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-800 text-sm leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {h.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} color="#94A3B8" />
                      <span className="text-slate-400 text-xs">{h.city}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <StarRating rating={h.rating} size={11} />
                      <span className="text-xs font-semibold text-slate-700">{h.rating}</span>
                      <span className="text-xs text-slate-400">· Est. {h.founded}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {h.accreditation.map(a => (
                      <span key={a} className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: '#F0FDF4', color: '#059669' }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {h.specialties.slice(0, 3).map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                      {s}
                    </span>
                  ))}
                  {h.specialties.length > 3 && (
                    <span className="text-xs text-[#1B4FBF] font-semibold">+{h.specialties.length - 3} more</span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-500">{h.beds.toLocaleString()} beds</span>
                  <button className="text-xs font-semibold text-[#1B4FBF] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    View Details →
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
