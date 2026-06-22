import { useState } from 'react';
import { ArrowLeft, Heart, Star, Calendar, ArrowRight } from 'lucide-react';

const HERO_COLORS = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];

const DAYS = [
  { day: 'Mon', date: '01' },
  { day: 'Tue', date: '02' },
  { day: 'Wed', date: '03' },
  { day: 'Thu', date: '04', disabled: true },
  { day: 'Fri', date: '05' },
  { day: 'Sat', date: '06' },
  { day: 'Sun', date: '07' },
];

const TIMES = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'];

export default function DoctorDetailScreen({ data, onNavigate }) {
  const doc = data || {
    id: 1, name: 'Dr. Rajesh Sharma', specialization: 'Cardiothoracic Surgeon',
    hospital: 'Apollo Hospital', city: 'Delhi',
    experience: '22 yrs', rating: 4.9, reviews: 73, avatar: 'RS',
  };

  const colorIdx = (doc.id || 0) % HERO_COLORS.length;
  const [liked, setLiked]     = useState(false);
  const [selDay, setSelDay]   = useState(1);
  const [selTime, setSelTime] = useState(1);
  const [imgErr, setImgErr]   = useState(false);

  const hospitalLabel = doc.hospital && doc.city
    ? `${doc.hospital}, ${doc.city}`
    : doc.hospital || 'Apollo Hospital, Delhi';

  const bio = doc.bio ||
    `${doc.name} is a leading ${doc.specialization} at ${doc.hospital} with ${doc.experience} of expertise. Known for exceptional patient outcomes, international patient care, and minimally invasive techniques.`;

  return (
    <div className="flex flex-col h-full screen-enter overflow-y-auto hide-scrollbar" style={{ background: 'transparent' }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="relative flex-shrink-0" style={{ height: 300 }}>

        {/* Doctor photo or colour avatar */}
        {doc.img && !imgErr
          ? <img src={doc.img} alt={doc.name} onError={() => setImgErr(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          : <div style={{ width: '100%', height: '100%', background: HERO_COLORS[colorIdx], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 80, fontWeight: 700, color: 'rgba(255,255,255,0.22)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {doc.avatar}
              </span>
            </div>
        }

        {/* Soft fade at bottom so card blends into hero */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, rgba(235,235,235,0.6))' }} />

        {/* Back + Heart — absolute, top:56 matches Figma padT:60 */}
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => onNavigate('doctors')} className="transition-all active:scale-90"
            style={{ width: 48, height: 48, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ArrowLeft size={24} color="#313131" />
          </button>
          <button onClick={() => setLiked(v => !v)} className="transition-all active:scale-90"
            style={{ width: 48, height: 48, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Heart size={24} color={liked ? '#EF4444' : '#313131'} fill={liked ? '#EF4444' : 'none'} />
          </button>
        </div>
      </div>

      {/* ── Content Card ─────────────────────────────── */}
      {/* marginTop:-17 overlaps hero by 17px, matching Figma y=283 on a 299px hero */}
      <div style={{
        marginTop: -17,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: '30px 30px 0 0',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        border: '2px solid rgba(198,198,198,0.44)',
        borderBottom: 'none',
        boxShadow: '-11px 22px 44px rgba(221,221,221,0.7)',
        padding: '16px 16px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1,
      }}>

        {/* ① Name + Specialty (gap:6) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '23px', color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {doc.name}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, color: '#7C7C7C' }}>{doc.specialization}</span>
            <span style={{ fontSize: 14, color: '#7C7C7C' }}>|</span>
            <span style={{ fontSize: 14, color: '#4D81E7' }}>{hospitalLabel}</span>
            <span style={{ fontSize: 11, color: '#4D81E7', lineHeight: 1 }}>↗</span>
          </div>
        </div>

        {/* ② Rating + Experience (space-between) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Star size={16} fill="#F59E0B" color="#F59E0B" />
            <span style={{ fontSize: 12, color: '#313131' }}>{doc.rating}</span>
            <span style={{ fontSize: 12, color: '#313131' }}>({doc.reviews} Reviews)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 12, color: '#313131' }}>{doc.experience}</span>
            <span style={{ fontSize: 12, color: '#313131' }}>Experience</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#E8E8E8' }} />

        {/* ③ Bio */}
        <p style={{ margin: 0, fontSize: 14, lineHeight: '22px', color: '#7C7C7C' }}>{bio}</p>

        {/* Divider */}
        <div style={{ height: 1, background: '#E8E8E8' }} />

        {/* ④ Schedules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Header: Schedules label + May 2026 pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#313131' }}>Schedules</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 8px', border: '1px solid #C6C6C6', borderRadius: 100 }}>
              <Calendar size={13} color="#313131" />
              <span style={{ fontSize: 12, color: '#313131' }}>May 2026</span>
            </div>
          </div>

          {/* Day pills — 7 pills, flex:1 each, gap:8 */}
          <div style={{ display: 'flex', gap: 8 }}>
            {DAYS.map((d, i) => {
              const isSel = selDay === i;
              const isDis = d.disabled;
              return (
                <button key={i} onClick={() => !isDis && setSelDay(i)}
                  style={{
                    flex: 1,
                    height: 66,
                    borderRadius: 100,
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    cursor: isDis ? 'default' : 'pointer',
                    background: isSel
                      ? '#ABC4EB'
                      : isDis
                        ? 'rgba(49,49,49,0.24)'
                        : 'rgba(171,196,235,0.24)',
                    transition: 'all 0.15s',
                  }}>
                  <span style={{ fontSize: 12, lineHeight: '16px', color: isSel ? '#fff' : '#313131' }}>{d.day}</span>
                  <span style={{ fontSize: 12, lineHeight: '16px', color: isSel ? '#fff' : '#313131' }}>{d.date}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ⑤ Choose Time */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#313131' }}>Choose Time</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {TIMES.map((t, i) => {
              const isSel = selTime === i;
              return (
                <button key={i} onClick={() => setSelTime(i)}
                  style={{
                    flex: 1,
                    height: 32,
                    borderRadius: 100,
                    border: isSel ? 'none' : '1px solid #C6C6C6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    background: isSel ? '#ABC4EB' : 'transparent',
                    transition: 'all 0.15s',
                  }}>
                  <span style={{ fontSize: 13, color: isSel ? '#fff' : '#313131', whiteSpace: 'nowrap' }}>{t}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ⑥ Book Appointment CTA */}
        <div style={{ paddingTop: 10 }}>
          <button onClick={() => onNavigate('freeQuote')} className="transition-all active:scale-95"
            style={{
              width: '100%',
              height: 52,
              borderRadius: 50,
              border: 'none',
              background: '#ABC4EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
            }}>
            <span style={{ fontSize: 18, fontWeight: 400, color: '#fff' }}>Book Appointment</span>
            <ArrowRight size={18} color="#fff" />
          </button>
        </div>

      </div>
    </div>
  );
}
