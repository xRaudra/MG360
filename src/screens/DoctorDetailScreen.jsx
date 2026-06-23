import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Heart, Star, ArrowRight, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { hospitals } from '../data/mockData';

const HERO_COLORS = ['#1B4FBF', '#059669', '#7C3AED', '#F59E0B', '#EF4444', '#06B6D4'];
const TIMES = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const SEL_SHADOW = '0 4px 14px rgba(171,196,235,0.65)';

// Returns midnight of today so comparisons are date-only
function getToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function buildDays(year, month) {
  const today = getToday();
  const count = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(year, month, i + 1);
    if (d < today) return null;
    return {
      day:     DAY_SHORT[d.getDay()],
      date:    String(i + 1).padStart(2, '0'),
      isToday: d.getTime() === today.getTime(),
    };
  }).filter(Boolean);
}

export default function DoctorDetailScreen({ data, onNavigate }) {
  const doc = data || {
    id: 1, name: 'Dr. Rajesh Sharma', specialization: 'Cardiothoracic Surgeon',
    hospital: 'Apollo Hospital', city: 'Delhi',
    experience: '22 yrs', rating: 4.9, reviews: 73, avatar: 'RS',
  };

  const TODAY      = getToday();
  const colorIdx   = (doc.id || 0) % HERO_COLORS.length;

  const [liked,    setLiked]    = useState(false);
  const [selDay,   setSelDay]   = useState(null);   // index into days array
  const [selTime,  setSelTime]  = useState(null);
  const [imgErr,   setImgErr]   = useState(false);
  const [viewYear, setViewYear] = useState(TODAY.getFullYear());
  const [viewMonth,setViewMonth]= useState(TODAY.getMonth());

  const dayRowRef = useRef(null);

  const days = buildDays(viewYear, viewMonth);

  const isCurrentMonth = viewYear === TODAY.getFullYear() && viewMonth === TODAY.getMonth();

  // Reset selection when month changes
  useEffect(() => { setSelDay(null); }, [viewMonth, viewYear]);

  // Auto-scroll: on current month, scroll to today; on future months, scroll to start
  useEffect(() => {
    if (!dayRowRef.current) return;
    if (isCurrentMonth) {
      const todayIdx = days.findIndex(d => d.isToday);
      if (todayIdx !== -1) {
        // Each pill is 44px wide + 8px gap
        dayRowRef.current.scrollLeft = Math.max(0, todayIdx * 52 - 16);
      }
    } else {
      dayRowRef.current.scrollLeft = 0;
    }
  }, [viewMonth, viewYear]);

  const prevMonth = () => {
    if (isCurrentMonth) return;
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const hospitalLabel = doc.hospital && doc.city
    ? `${doc.hospital}, ${doc.city}`
    : doc.hospital || 'Apollo Hospital, Delhi';

  const hospitalData = hospitals.find(h =>
    h.name.toLowerCase().includes((doc.hospital || '').toLowerCase()) ||
    (doc.hospital || '').toLowerCase().includes(h.name.toLowerCase().split(' ')[0])
  ) || hospitals[0];

  const bio = doc.bio ||
    `${doc.name} is a leading ${doc.specialization} at ${doc.hospital} with ${doc.experience} of expertise. Known for exceptional patient outcomes, international patient care, and minimally invasive techniques.`;

  // Calendar SVG (inline — same as before)
  const CalSVG = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.08337 6.49996C1.08337 4.45733 1.08337 3.43575 1.71821 2.80146C2.35304 2.16717 3.37408 2.16663 5.41671 2.16663H7.58337C9.626 2.16663 10.6476 2.16663 11.2819 2.80146C11.9162 3.43629 11.9167 4.45733 11.9167 6.49996V7.58329C11.9167 9.62592 11.9167 10.6475 11.2819 11.2818C10.647 11.9161 9.626 11.9166 7.58337 11.9166H5.41671C3.37408 11.9166 2.3525 11.9166 1.71821 11.2818C1.08392 10.647 1.08337 9.62592 1.08337 7.58329V6.49996Z" stroke="#364153" strokeWidth="0.8125"/>
      <path d="M3.79175 2.16663V1.35413M9.20841 2.16663V1.35413M1.35425 4.87496H11.6459" stroke="#364153" strokeWidth="0.8125" strokeLinecap="round"/>
      <path d="M9.75006 9.20833C9.75006 9.35199 9.69299 9.48977 9.59141 9.59135C9.48983 9.69293 9.35205 9.75 9.20839 9.75C9.06474 9.75 8.92696 9.69293 8.82538 9.59135C8.7238 9.48977 8.66673 9.35199 8.66673 9.20833C8.66673 9.06467 8.7238 8.9269 8.82538 8.82532C8.92696 8.72373 9.06474 8.66667 9.20839 8.66667C9.35205 8.66667 9.48983 8.72373 9.59141 8.82532C9.69299 8.9269 9.75006 9.06467 9.75006 9.20833ZM9.75006 7.04167C9.75006 7.18533 9.69299 7.3231 9.59141 7.42468C9.48983 7.52626 9.35205 7.58333 9.20839 7.58333C9.06474 7.58333 8.92696 7.52626 8.82538 7.42468C8.7238 7.3231 8.66673 7.18533 8.66673 7.04167C8.66673 6.89801 8.7238 6.76023 8.82538 6.65865C8.92696 6.55707 9.06474 6.5 9.20839 6.5C9.35205 6.5 9.48983 6.55707 9.59141 6.65865C9.69299 6.76023 9.75006 6.89801 9.75006 7.04167ZM7.04173 9.20833C7.04173 9.35199 6.98466 9.48977 6.88308 9.59135C6.7815 9.69293 6.64372 9.75 6.50006 9.75C6.3564 9.75 6.21863 9.69293 6.11705 9.59135C6.01546 9.48977 5.95839 9.35199 5.95839 9.20833C5.95839 9.06467 6.01546 8.9269 6.11705 8.82532C6.21863 8.72373 6.3564 8.66667 6.50006 8.66667C6.64372 8.66667 6.7815 8.72373 6.88308 8.82532C6.98466 8.9269 7.04173 9.06467 7.04173 9.20833ZM7.04173 7.04167C7.04173 7.18533 6.98466 7.3231 6.88308 7.42468C6.7815 7.52626 6.64372 7.58333 6.50006 7.58333C6.3564 7.58333 6.21863 7.52626 6.11705 7.42468C6.01546 7.3231 5.95839 7.18533 5.95839 7.04167C5.95839 6.89801 6.01546 6.76023 6.11705 6.65865C6.21863 6.55707 6.3564 6.5 6.50006 6.5C6.64372 6.5 6.7815 6.55707 6.88308 6.65865C6.98466 6.76023 7.04173 6.89801 7.04173 7.04167ZM4.33339 9.20833C4.33339 9.35199 4.27633 9.48977 4.17474 9.59135C4.07316 9.69293 3.93539 9.75 3.79173 9.75C3.64807 9.75 3.51029 9.69293 3.40871 9.59135C3.30713 9.48977 3.25006 9.35199 3.25006 9.20833C3.25006 9.06467 3.30713 8.9269 3.40871 8.82532C3.51029 8.72373 3.64807 8.66667 3.79173 8.66667C3.93539 8.66667 4.07316 8.72373 4.17474 8.82532C4.27633 8.9269 4.33339 9.06467 4.33339 9.20833ZM4.33339 7.04167C4.33339 7.18533 4.27633 7.3231 4.17474 7.42468C4.07316 7.52626 3.93539 7.58333 3.79173 7.58333C3.64807 7.58333 3.51029 7.52626 3.40871 7.42468C3.30713 7.3231 3.25006 7.18533 3.25006 7.04167C3.25006 6.89801 3.30713 6.76023 3.40871 6.65865C3.51029 6.55707 3.64807 6.5 3.79173 6.5C3.93539 6.5 4.07316 6.55707 4.17474 6.65865C4.27633 6.76023 4.33339 6.89801 4.33339 7.04167Z" fill="#364153"/>
    </svg>
  );

  return (
    <div className="flex flex-col h-full screen-enter" style={{ overflow: 'hidden' }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="relative flex-shrink-0" style={{ height: 300 }}>
        {doc.img && !imgErr
          ? <img src={doc.img} alt={doc.name} onError={() => setImgErr(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          : <div style={{ width: '100%', height: '100%', background: HERO_COLORS[colorIdx], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 80, fontWeight: 700, color: 'rgba(255,255,255,0.22)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {doc.avatar}
              </span>
            </div>
        }
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, rgba(235,235,235,0.6))' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => onNavigate('doctors')} className="transition-all active:scale-90"
            style={{ width: 40, height: 40, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ArrowLeft size={18} color="#313131" />
          </button>
          <button onClick={() => setLiked(v => !v)} className="transition-all active:scale-90"
            style={{ width: 40, height: 40, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Heart size={18} color={liked ? '#EF4444' : '#313131'} fill={liked ? '#EF4444' : 'none'} />
          </button>
        </div>
      </div>

      {/* ── Card ─────────────────────────────────────── */}
      <div style={{ flex: 1, minHeight: 0, marginTop: -17, marginLeft: 16, marginRight: 16, marginBottom: 16 }}>
        <div className="hide-scrollbar" style={{
          height: '100%', overflowY: 'auto', borderRadius: 30,
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
          border: '2px solid rgba(198,198,198,0.44)',
          boxShadow: '-11px 22px 44px rgba(221,221,221,0.7)',
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '16px 16px 32px' }}>

          {/* ① Name + Specialty */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '23px', color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {doc.name}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, color: '#7C7C7C' }}>{doc.specialization}</span>
              <span style={{ fontSize: 14, color: '#7C7C7C' }}>|</span>
              <button onClick={() => onNavigate('hospitalDetail', { ...hospitalData, from: 'doctorDetail', doctorData: doc })}
                style={{ display: 'flex', alignItems: 'center', gap: 3, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <span style={{ fontSize: 14, color: '#4D81E7' }}>{hospitalLabel}</span>
                <svg width="11" height="11" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.70128 2.43714C8.83888 2.42548 8.97552 2.46864 9.08146 2.55721C9.18741 2.64578 9.2541 2.7726 9.26702 2.91009L9.70468 7.80959C9.71337 7.87911 9.70797 7.94967 9.6888 8.01707C9.66963 8.08446 9.63708 8.1473 9.5931 8.20184C9.54911 8.25638 9.49459 8.3015 9.43279 8.33451C9.37099 8.36752 9.30318 8.38775 9.23339 8.39398C9.1636 8.40022 9.09327 8.39233 9.0266 8.37079C8.95993 8.34926 8.89827 8.31451 8.84532 8.26863C8.79237 8.22275 8.7492 8.16668 8.71838 8.10375C8.68757 8.04082 8.66975 7.97234 8.66598 7.90237L8.34036 4.25715L3.79375 9.69571C3.705 9.80187 3.57771 9.86843 3.43989 9.88074C3.30206 9.89305 3.16499 9.85011 3.05883 9.76136C2.95267 9.67261 2.88611 9.54532 2.8738 9.40749C2.86149 9.26967 2.90443 9.1326 2.99318 9.02643L7.53979 3.58787L3.89457 3.91349C3.75957 3.92076 3.62703 3.87535 3.52486 3.78683C3.42269 3.69831 3.35886 3.57358 3.34684 3.43893C3.33481 3.30428 3.37551 3.17021 3.46038 3.06498C3.54524 2.95975 3.66764 2.89157 3.80178 2.8748L8.70128 2.43714Z" fill="#4D81E7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ② Stat cards */}
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'rgba(253,253,253,0.92)', borderRadius: 14, border: '1px solid rgba(198,198,198,0.35)', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ width: 34, height: 34, borderRadius: 17, flexShrink: 0, background: '#F8F8F8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={15} fill="#FBB022" color="#FBB022" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
                <span style={{ fontSize: 16, fontWeight: 600, lineHeight: '20px', color: '#313131' }}>{doc.rating}</span>
                <span style={{ fontSize: 11, lineHeight: '15px', color: '#313131', whiteSpace: 'nowrap' }}>{doc.reviews} Reviews</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'rgba(253,253,253,0.92)', borderRadius: 14, border: '1px solid rgba(198,198,198,0.35)', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ width: 34, height: 34, borderRadius: 17, flexShrink: 0, background: '#F8F8F8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={15} color="#7C7C7C" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
                <span style={{ fontSize: 16, fontWeight: 600, lineHeight: '20px', color: '#313131' }}>{doc.experience}</span>
                <span style={{ fontSize: 11, lineHeight: '15px', color: '#313131', whiteSpace: 'nowrap' }}>Experience</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: '#D4D4D4' }} />

          {/* ③ Bio */}
          <p style={{ margin: 0, fontSize: 14, lineHeight: '22px', color: '#7C7C7C' }}>{bio}</p>

          {/* Divider */}
          <div style={{ height: 1, background: '#D4D4D4' }} />

          {/* ④ Schedules — live calendar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Month navigation row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#313131' }}>Schedules</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* Prev month */}
                <button onClick={prevMonth}
                  style={{
                    width: 26, height: 26, borderRadius: '50%', border: 'none',
                    background: isCurrentMonth ? 'rgba(198,198,198,0.2)' : 'rgba(171,196,235,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: isCurrentMonth ? 'default' : 'pointer',
                    opacity: isCurrentMonth ? 0.35 : 1,
                    transition: 'all 0.15s',
                  }}>
                  <ChevronLeft size={13} color="#313131" />
                </button>

                {/* Month + year pill */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px', border: '1px solid #C6C6C6', borderRadius: 100 }}>
                  <CalSVG />
                  <span style={{ fontSize: 12, color: '#313131', fontWeight: 500 }}>
                    {MONTH_NAMES[viewMonth].slice(0, 3)} {viewYear}
                  </span>
                </div>

                {/* Next month */}
                <button onClick={nextMonth}
                  style={{
                    width: 26, height: 26, borderRadius: '50%', border: 'none',
                    background: 'rgba(171,196,235,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}>
                  <ChevronRight size={13} color="#313131" />
                </button>
              </div>
            </div>

            {/* Scrollable day strip */}
            <div ref={dayRowRef} className="hide-scrollbar"
              style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
              {days.map((d, i) => {
                const isSel = selDay === i;
                return (
                  <button key={i} onClick={() => setSelDay(i)}
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 66,
                      borderRadius: 100,
                      border: d.isToday && !isSel ? '1.5px solid rgba(171,196,235,0.7)' : 'none',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      gap: 4,
                      cursor: 'pointer',
                      background: isSel ? '#ABC4EB' : 'rgba(171,196,235,0.2)',
                      boxShadow: isSel ? SEL_SHADOW : 'none',
                      transition: 'all 0.15s',
                      position: 'relative',
                    }}>
                    <span style={{ fontSize: 11, lineHeight: '14px', color: isSel ? '#fff' : '#7C7C7C', fontWeight: 500 }}>{d.day}</span>
                    <span style={{ fontSize: 13, lineHeight: '16px', color: isSel ? '#fff' : '#313131', fontWeight: 600 }}>{d.date}</span>
                    {/* Today dot */}
                    {d.isToday && (
                      <div style={{
                        width: 4, height: 4, borderRadius: '50%',
                        background: isSel ? 'rgba(255,255,255,0.8)' : '#ABC4EB',
                      }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ⑤ Choose Time */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#313131' }}>Choose Time</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TIMES.map((t, i) => {
                const isSel = selTime === i;
                return (
                  <button key={i} onClick={() => setSelTime(i)}
                    style={{
                      height: 34,
                      paddingLeft: 14, paddingRight: 14,
                      borderRadius: 100,
                      border: isSel ? 'none' : '1px solid #C6C6C6',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer',
                      background: isSel ? '#ABC4EB' : 'transparent',
                      boxShadow: isSel ? SEL_SHADOW : 'none',
                      transition: 'all 0.15s',
                    }}>
                    <span style={{ fontSize: 12, color: isSel ? '#fff' : '#313131', whiteSpace: 'nowrap', fontWeight: isSel ? 600 : 400 }}>{t}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ⑥ Book Appointment */}
          <div style={{ paddingTop: 6 }}>
            <button onClick={() => onNavigate('freeQuote')} className="transition-all active:scale-95"
              style={{
                width: '100%', height: 52, borderRadius: 50, border: 'none',
                background: '#ABC4EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, cursor: 'pointer', boxShadow: SEL_SHADOW,
              }}>
              <span style={{ fontSize: 18, fontWeight: 400, color: '#fff' }}>Book Appointment</span>
              <ArrowRight size={18} color="#fff" />
            </button>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
