import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import StarRating from '../components/StarRating';
import { treatments, categories } from '../data/mockData';

const CARD_STYLE = {
  borderRadius: 16,
  background: 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)',
  border: '1px solid #C6C6C6',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
};

export default function ExploreScreen({ onNavigate }) {
  const [query,   setQuery]   = useState('');
  const [showAll, setShowAll] = useState(false);

  const filtered = treatments.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <BackButton onPress={() => onNavigate('home')} />
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
            Find Treatment
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
            placeholder="Knee replacement, cancer, spine…"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowAll(false); }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs font-medium flex-shrink-0" style={{ color: '#7C7C7C' }}>
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">

        {/* Default view */}
        {!query && (
          <>
            {/* Browse by Specialty */}
            <div className="mb-5 mt-4">
              <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                  Browse by Specialty
                </h3>
                <button onClick={() => setShowAll(true)} className="flex items-center gap-0.5 text-xs font-semibold" style={{ color: '#1B4FBF' }}>
                  See all <ChevronRight size={14} />
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-1">
                {categories.map(c => (
                  <button key={c.id}
                    onClick={() => setQuery(c.name)}
                    className="flex-shrink-0 flex flex-col items-center gap-2 w-[76px] py-3.5 rounded-2xl transition-all active:scale-95"
                    style={CARD_STYLE}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: c.color + '20' }}>
                      <span className="text-xl">{c.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-center leading-tight px-1" style={{ color: '#313131' }}>
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* All Treatments */}
            <div className="mb-6">
              <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                  All Treatments
                </h3>
                <button onClick={() => setShowAll(v => !v)} className="flex items-center gap-0.5 text-xs font-semibold" style={{ color: '#1B4FBF' }}>
                  {showAll ? 'See less' : 'See all'}
                  <ChevronRight size={14} style={{ transition: 'transform 0.2s', transform: showAll ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </button>
              </div>

              {/* Horizontal carousel */}
              <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-1">
                {treatments.map(t => (
                  <button key={t.id}
                    onClick={() => onNavigate('treatmentDetail', t)}
                    className="flex-shrink-0 w-40 rounded-2xl p-3 text-left transition-all active:scale-95"
                    style={CARD_STYLE}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2.5 flex-shrink-0"
                      style={{ background: '#EFF6FF' }}>
                      {t.icon}
                    </div>
                    <p className="font-semibold text-xs leading-tight mb-0.5"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131',
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {t.name}
                    </p>
                    <p className="text-xs mb-2 truncate" style={{ color: '#7C7C7C' }}>{t.category}</p>
                    <p className="font-bold text-sm mb-1" style={{ color: '#1B4FBF' }}>{t.price}</p>
                    <div className="flex items-center gap-1">
                      <StarRating rating={t.rating} size={11} />
                      <span className="text-xs font-medium" style={{ color: '#313131' }}>{t.rating}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Expanded vertical list */}
              {showAll && (
                <div className="flex flex-col gap-3 px-4 mt-4">
                  {treatments.map(t => (
                    <button key={t.id}
                      onClick={() => onNavigate('treatmentDetail', t)}
                      className="flex items-center gap-4 rounded-2xl p-4 text-left transition-all active:scale-95"
                      style={CARD_STYLE}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: '#EFF6FF' }}>
                        {t.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm mb-0.5"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                          {t.name}
                        </p>
                        <p className="text-xs mb-1.5" style={{ color: '#7C7C7C' }}>{t.category} · {t.duration}</p>
                        <div className="flex items-center gap-2">
                          <StarRating rating={t.rating} size={11} />
                          <span className="text-xs font-medium" style={{ color: '#313131' }}>{t.rating}</span>
                          <span className="text-xs" style={{ color: '#7C7C7C' }}>({t.reviews})</span>
                          {t.popular && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316' }}>
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-sm" style={{ color: '#1B4FBF' }}>{t.price}</p>
                        <p className="text-xs" style={{ color: '#7C7C7C' }}>from</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Search results */}
        {query && (
          <div className="px-4 pt-4 pb-6">
            <p className="text-xs mb-3" style={{ color: '#7C7C7C' }}>
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
            </p>
            <div className="flex flex-col gap-3">
              {filtered.map(t => (
                <button key={t.id}
                  onClick={() => onNavigate('treatmentDetail', t)}
                  className="flex items-center gap-4 rounded-2xl p-4 text-left transition-all active:scale-95"
                  style={CARD_STYLE}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: '#EFF6FF' }}>
                    {t.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm mb-0.5"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
                      {t.name}
                    </p>
                    <p className="text-xs mb-1.5" style={{ color: '#7C7C7C' }}>{t.category} · {t.duration}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <StarRating rating={t.rating} size={11} />
                        <span className="text-xs font-medium" style={{ color: '#313131' }}>{t.rating}</span>
                        <span className="text-xs" style={{ color: '#7C7C7C' }}>({t.reviews})</span>
                      </div>
                      {t.popular && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316' }}>
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color: '#1B4FBF' }}>{t.price}</p>
                    <p className="text-xs" style={{ color: '#7C7C7C' }}>from</p>
                  </div>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="flex flex-col items-center py-16 gap-3">
                  <span className="text-4xl">🔍</span>
                  <p className="font-semibold text-sm" style={{ color: '#313131' }}>No results found</p>
                  <p className="text-xs text-center" style={{ color: '#7C7C7C' }}>Try a different treatment name or specialty</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
