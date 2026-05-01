import { ArrowLeft, Clock, DollarSign, ChevronRight, Heart } from 'lucide-react';
import StarRating from '../components/StarRating';
import { doctors } from '../data/mockData';

export default function TreatmentDetailScreen({ data, onNavigate }) {
  const t = data || { name: 'Knee Replacement', category: 'Orthopedics', price: '$4,500', duration: '7–10 days', rating: 4.9, reviews: 342, icon: '🦴', popular: true };

  const relatedDocs = doctors.filter(d => d.specialization.toLowerCase().includes('ortho') || d.specialization.toLowerCase().includes('cardio')).slice(0, 3);

  return (
    <div className="flex flex-col h-full bg-[#F1F5F9] screen-enter overflow-y-auto hide-scrollbar">
      {/* Hero */}
      <div className="relative px-4 pt-5 pb-8"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)' }}>
        <div className="flex items-center justify-between mb-5">
          <button onClick={() => onNavigate('treatment')} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <Heart size={18} color="white" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-5xl">
            {t.icon}
          </div>
          <div>
            <h2 className="text-white font-bold text-xl leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {t.name}
            </h2>
            <p className="text-white/70 text-sm mt-1">{t.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1.5">
                <StarRating rating={t.rating} size={13} />
                <span className="text-white text-sm font-semibold">{t.rating}</span>
              </div>
              <span className="text-white/50 text-xs">({t.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mt-5">
          {[
            { icon: <DollarSign size={14} />, label: 'From', value: t.price },
            { icon: <Clock size={14} />, label: 'Duration', value: t.duration },
            { icon: '🏥', label: 'Hospitals', value: '12+', isEmoji: true },
          ].map((s, i) => (
            <div key={i} className="flex-1 rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div className="flex items-center gap-1 text-white/60 mb-0.5">
                {s.isEmoji ? <span className="text-xs">{s.icon}</span> : <span className="text-white/60">{s.icon}</span>}
                <span className="text-xs">{s.label}</span>
              </div>
              <p className="text-white font-bold text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5 flex flex-col gap-5">
        {/* Overview */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Overview</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {t.name} is a highly effective procedure performed by India's leading specialists. India offers world-class surgical outcomes at 60–80% less than Western countries, with JCI-accredited facilities and post-operative care support.
          </p>
        </div>

        {/* What's included */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>What's Included</h3>
          {['Pre-surgery consultation & tests', 'Surgical procedure + anaesthesia', 'Hospital stay (private room)', 'Post-op physiotherapy', 'Airport transfers & assistance', '24/7 care coordinator support'].map(item => (
            <div key={item} className="flex items-center gap-3 py-1.5">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="text-slate-600 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Cost breakdown */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Cost Estimate</h3>
          {[
            ['Surgery + Procedure', t.price],
            ['Hospital Stay (7 nights)', '$800'],
            ['Tests & Diagnostics', '$300'],
            ['Physiotherapy (5 sessions)', '$150'],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between items-center py-1.5">
              <span className="text-slate-500 text-sm">{label}</span>
              <span className="font-semibold text-slate-800 text-sm">{val}</span>
            </div>
          ))}
          <div className="border-t border-slate-100 pt-2 mt-1 flex justify-between items-center">
            <span className="font-bold text-slate-800 text-sm">Total Estimate</span>
            <span className="font-bold text-[#1B4FBF] text-base">{t.price}</span>
          </div>
        </div>

        {/* Related Doctors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>Recommended Doctors</h3>
            <button onClick={() => onNavigate('doctors')} className="text-xs text-[#1B4FBF] font-semibold flex items-center gap-1">
              See all <ChevronRight size={13} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {relatedDocs.map((d, i) => (
              <button key={d.id}
                onClick={() => onNavigate('doctorDetail', d)}
                className="flex items-center gap-3 bg-white rounded-xl p-3 text-left transition-all active:scale-95"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: ['#1B4FBF', '#059669', '#7C3AED'][i % 3] }}>
                  {d.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-xs">{d.name}</p>
                  <p className="text-slate-400 text-xs">{d.specialization}</p>
                </div>
                <div className="flex items-center gap-1">
                  <StarRating rating={d.rating} size={11} />
                  <span className="text-xs text-slate-600">{d.rating}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 flex gap-3">
        <button onClick={() => onNavigate('chat')}
          className="flex-1 py-3.5 rounded-2xl border-2 border-[#1B4FBF] text-[#1B4FBF] font-semibold text-sm">
          Ask Expert
        </button>
        <button onClick={() => onNavigate('journey')}
          className="flex-1 py-3.5 rounded-2xl text-white font-semibold text-sm"
          style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
          Start Journey ✈️
        </button>
      </div>
    </div>
  );
}
