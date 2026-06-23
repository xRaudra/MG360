import { useState } from 'react';
import { ArrowLeft, SlidersHorizontal, Heart, ArrowRight } from 'lucide-react';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.7502 18.7502L14.4072 14.4072M14.4072 14.4072C15.1501 13.6643 15.7394 12.7824 16.1414 11.8118C16.5435 10.8411 16.7504 9.80081 16.7504 8.75021C16.7504 7.6996 16.5435 6.65929 16.1414 5.68866C15.7394 4.71803 15.1501 3.83609 14.4072 3.09321C13.6643 2.35032 12.7824 1.76103 11.8118 1.35898C10.8411 0.956931 9.80081 0.75 8.75021 0.75C7.6996 0.75 6.65929 0.956931 5.68866 1.35898C4.71803 1.76103 3.83609 2.35032 3.09321 3.09321C1.59288 4.59354 0.75 6.62842 0.75 8.75021C0.75 10.872 1.59288 12.9069 3.09321 14.4072C4.59354 15.9075 6.62842 16.7504 8.75021 16.7504C10.872 16.7504 12.9069 15.9075 14.4072 14.4072Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
import { doctors } from '../data/mockData';

const StarIcon = () => (
  <svg width="13" height="12" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6491 0.246401C6.78574 -0.0821158 7.25112 -0.0821167 7.38776 0.2464L9.04063 4.22038C9.09824 4.35888 9.22848 4.45351 9.378 4.46549L13.6682 4.80944C14.0229 4.83787 14.1667 5.28048 13.8965 5.51194L10.6278 8.31195C10.5139 8.40953 10.4641 8.56264 10.4989 8.70854L11.4976 12.8951C11.5801 13.2412 11.2036 13.5147 10.9 13.3293L7.22693 11.0858C7.09893 11.0076 6.93794 11.0076 6.80993 11.0858L3.13688 13.3293C2.83324 13.5147 2.45674 13.2412 2.53929 12.8951L3.53794 8.70854C3.57274 8.56264 3.523 8.40953 3.40908 8.31195L0.140363 5.51194C-0.129851 5.28048 0.0139583 4.83787 0.36862 4.80944L4.65887 4.46549C4.80838 4.45351 4.93863 4.35888 4.99623 4.22038L6.6491 0.246401Z" fill="#FDB022"/>
  </svg>
);

const ExpIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.53906 0C10.5353 0 11.3438 0.8085 11.3438 1.80469V3.09375H13.4062C14.2268 3.09375 15.0137 3.4197 15.5939 3.99989C16.1741 4.58008 16.5 5.36699 16.5 6.1875V12.375C16.5 13.1955 16.1741 13.9824 15.5939 14.5626C15.0137 15.1428 14.2268 15.4688 13.4062 15.4688H3.09375C2.30074 15.4687 1.53801 15.1642 0.963056 14.618C0.388104 14.0719 0.0448329 13.3258 0.00412495 12.5338L0 12.375V6.1875C0 5.36699 0.325948 4.58008 0.906138 3.99989C1.48633 3.4197 2.27324 3.09375 3.09375 3.09375H5.15625V1.80469C5.15625 0.8085 5.96475 0 6.96094 0H9.53906ZM3.09375 4.125C2.54674 4.125 2.02214 4.3423 1.63534 4.72909C1.24855 5.11589 1.03125 5.64049 1.03125 6.1875V12.375L1.04156 12.5854C1.09365 13.0934 1.33234 13.564 1.71144 13.9061C2.09054 14.2483 2.58309 14.4376 3.09375 14.4375H13.4062C13.9533 14.4375 14.4779 14.2202 14.8647 13.8334C15.2515 13.4466 15.4688 12.922 15.4688 12.375V6.1875C15.4688 5.64049 15.2515 5.11589 14.8647 4.72909C14.4779 4.3423 13.9533 4.125 13.4062 4.125H3.09375ZM8.24588 6.19266C8.38263 6.19266 8.51378 6.24698 8.61048 6.34368C8.70718 6.44038 8.7615 6.57153 8.7615 6.70828V8.76562H10.8281C10.9649 8.76562 11.096 8.81995 11.1927 8.91665C11.2894 9.01335 11.3438 9.1445 11.3438 9.28125C11.3438 9.418 11.2894 9.54915 11.1927 9.64585C11.096 9.74255 10.9649 9.79688 10.8281 9.79688H8.7615V11.8645C8.7615 12.0013 8.70718 12.1324 8.61048 12.2291C8.51378 12.3258 8.38263 12.3802 8.24588 12.3802C8.10912 12.3802 7.97797 12.3258 7.88127 12.2291C7.78457 12.1324 7.73025 12.0013 7.73025 11.8645V9.79688H5.67188C5.53512 9.79688 5.40397 9.74255 5.30727 9.64585C5.21057 9.54915 5.15625 9.418 5.15625 9.28125C5.15625 9.1445 5.21057 9.01335 5.30727 8.91665C5.40397 8.81995 5.53512 8.76562 5.67188 8.76562H7.73025V6.70828C7.73025 6.57153 7.78457 6.44038 7.88127 6.34368C7.97797 6.24698 8.10912 6.19266 8.24588 6.19266ZM6.96094 1.03125C6.75581 1.03125 6.55908 1.11274 6.41403 1.25778C6.26899 1.40283 6.1875 1.59956 6.1875 1.80469V3.09375H10.3125V1.80469C10.3125 1.59956 10.231 1.40283 10.086 1.25778C9.94092 1.11274 9.74419 1.03125 9.53906 1.03125H6.96094Z" fill="#7C7C7C"/>
  </svg>
);

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
            style={{ width: 36, height: 36 }}>
            <SearchIcon />
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

                    {/* Rating row */}
                    <div className="flex items-center gap-3" style={{ marginTop: 14 }}>
                      <div className="flex items-center gap-1">
                        <StarIcon />
                        <span style={{ fontSize: 12, color: '#313131' }}>{doc.rating}</span>
                        <span style={{ fontSize: 12, color: '#7C7C7C' }}>({doc.reviews})</span>
                      </div>
                      <span style={{ fontSize: 12, color: '#C6C6C6' }}>·</span>
                      <div className="flex items-center gap-1">
                        <ExpIcon />
                        <span style={{ fontSize: 12, color: '#313131' }}>{doc.experience}</span>
                        <span style={{ fontSize: 12, color: '#7C7C7C' }}>Exp</span>
                      </div>
                    </div>
                  </div>

                  {/* Heart — top-aligned with name text */}
                  <button
                    onClick={e => toggleLike(doc.id, e)}
                    className="flex-shrink-0 transition-all active:scale-90"
                    style={{ padding: 0, lineHeight: 0, alignSelf: 'flex-start' }}>
                    <Heart
                      size={20}
                      color={liked[doc.id] ? '#EF4444' : '#C6C6C6'}
                      fill={liked[doc.id] ? '#EF4444' : 'none'}
                    />
                  </button>

                </div>
              </div>

              {/* ── Book Now CTA ───────────────────────────── */}
              <div style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: '1px solid rgba(198,198,198,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: 11, color: '#7C7C7C' }}>
                  {doc.available ? '✦ Available today' : 'Check availability'}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); onNavigate('doctorDetail', doc); }}
                  className="transition-all active:scale-95"
                  style={{
                    height: 32,
                    paddingLeft: 16,
                    paddingRight: 16,
                    borderRadius: 100,
                    border: 'none',
                    background: '#ABC4EB',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    boxShadow: '0 3px 10px rgba(171,196,235,0.55)',
                  }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>Book Now</span>
                  <ArrowRight size={13} color="#fff" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
