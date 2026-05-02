import { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import StarRating from '../components/StarRating';
import { doctors } from '../data/mockData';

const colors = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

function Avatar({ initials, idx }) {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
      style={{ background: colors[idx % colors.length] }}>
      {initials}
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
      <div className="bg-white px-4 pt-4 pb-4" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
            <ArrowLeft size={18} color="#0F172A" />
          </button>
          <h2 className="font-bold text-slate-800 text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Top Doctors
          </h2>
          <button className="ml-auto p-2 rounded-xl bg-[#EFF6FF]">
            <SlidersHorizontal size={18} color="#1B4FBF" />
          </button>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-3">
          <Search size={16} color="#94A3B8" />
          <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            placeholder="Search doctors, specialties…"
            value={query} onChange={e => setQuery(e.target.value)} />
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
        {specialties.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: filter === s ? '#1B4FBF' : 'white',
              color: filter === s ? 'white' : '#475569',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
            {s}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        <p className="text-xs text-slate-500 mb-3">{filtered.length} doctors found</p>
        <div className="flex flex-col gap-3">
          {filtered.map((doc, i) => (
            <button key={doc.id}
              onClick={() => onNavigate('doctorDetail', doc)}
              className="flex gap-4 bg-white rounded-2xl p-4 text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="relative">
                <Avatar initials={doc.avatar} idx={i} />
                {doc.available && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm mb-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {doc.name}
                </p>
                <p className="text-slate-500 text-xs mb-1">{doc.specialization}</p>
                <p className="text-slate-400 text-xs mb-2">{doc.hospital} · {doc.city}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <StarRating rating={doc.rating} size={11} />
                    <span className="text-xs font-semibold text-slate-700">{doc.rating}</span>
                    <span className="text-xs text-slate-400">({doc.reviews})</span>
                  </div>
                  <span className="text-xs text-slate-400">{doc.experience} exp</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0 flex flex-col items-end justify-between">
                <span className="font-bold text-[#1B4FBF] text-sm">{doc.fee}</span>
                <span className="text-xs text-slate-400">per consult</span>
                <button className="mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: doc.available ? '#EFF6FF' : '#F8FAFC', color: doc.available ? '#1B4FBF' : '#94A3B8' }}>
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
