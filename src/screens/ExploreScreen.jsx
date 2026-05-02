import { useState } from 'react';
import { Search, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import StarRating from '../components/StarRating';
import { treatments, categories } from '../data/mockData';

export default function ExploreScreen({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = treatments.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="bg-white px-4 pt-4 pb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
            <ArrowLeft size={18} color="#0F172A" />
          </button>
          <h2 className="font-bold text-slate-800 text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Find Treatment
          </h2>
          <div className="ml-auto">
            <button className="p-2 rounded-xl bg-[#EFF6FF]">
              <SlidersHorizontal size={18} color="#1B4FBF" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-3">
          <Search size={16} color="#94A3B8" />
          <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            placeholder="Knee replacement, cancer, spine…"
            value={query} onChange={e => setQuery(e.target.value)} autoFocus />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Categories */}
        {!query && (
          <div className="px-4 pt-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Browse by Specialty</p>
            <div className="grid grid-cols-4 gap-3 mb-5">
              {categories.map(c => (
                <button key={c.id}
                  onClick={() => setQuery(c.name)}
                  className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-white transition-all active:scale-95"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: c.color + '20' }}>
                    <span className="text-xl">{c.icon}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-600 text-center leading-tight">{c.name}</span>
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">All Treatments</p>
          </div>
        )}

        {/* Treatment list */}
        <div className="px-4 pb-6" style={{ paddingTop: query ? 16 : 0 }}>
          {query && (
            <p className="text-xs text-slate-500 mb-3">{filtered.length} results for "{query}"</p>
          )}
          <div className="flex flex-col gap-3">
            {filtered.map(t => (
              <button key={t.id}
                onClick={() => onNavigate('treatmentDetail', t)}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: '#EFF6FF' }}>
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs mb-1.5">{t.category} · {t.duration}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <StarRating rating={t.rating} size={11} />
                      <span className="text-xs text-slate-600 font-medium">{t.rating}</span>
                      <span className="text-xs text-slate-400">({t.reviews})</span>
                    </div>
                    {t.popular && (
                      <span className="text-xs bg-orange-50 text-orange-600 font-semibold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-[#1B4FBF] text-sm">{t.price}</p>
                  <p className="text-slate-400 text-xs">from</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
