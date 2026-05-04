import { Fragment } from 'react';
import { useState } from 'react';
import { ChevronLeft, Check, Zap, Clock, Calendar, BookOpen } from 'lucide-react';

const OPTIONS = [
  {
    id: 'urgent',
    icon: <Zap size={22} color="#56698F" />,
    label: 'As Soon As Possible',
    sub: 'I need treatment urgently within days',
  },
  {
    id: '1-3months',
    icon: <Clock size={22} color="#56698F" />,
    label: 'Within 1–3 Months',
    sub: 'I\'m ready to plan soon',
  },
  {
    id: '3-6months',
    icon: <Calendar size={22} color="#56698F" />,
    label: 'Within 3–6 Months',
    sub: 'I have time to compare options',
  },
  {
    id: 'researching',
    icon: <BookOpen size={22} color="#56698F" />,
    label: 'Just Researching',
    sub: 'Exploring options, no rush yet',
  },
];

function StepBar({ step }) {
  const labels = ['Country', 'Condition', 'Timeline'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 24 }}>
      {labels.map((label, i) => {
        const done = i < step - 1;
        const active = i === step - 1;
        return (
          <Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%',
                background: done || active ? '#56698F' : '#E2E8F0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: done || active ? 'white' : '#94A3B8',
                fontSize: done ? 13 : 12, fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s',
              }}>
                {done ? <Check size={14} strokeWidth={2.5} /> : i + 1}
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9, fontWeight: 600,
                color: active ? '#56698F' : done ? '#56698F' : '#CBD5E1',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div style={{
                width: 44, height: 2,
                background: done ? '#56698F' : '#E2E8F0',
                marginBottom: 18, flexShrink: 0,
                borderRadius: 1,
                transition: 'background 0.2s',
              }} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default function GuestTimelineScreen({ onNavigate, data }) {
  const [selected, setSelected] = useState(data?.timeline || null);

  return (
    <div className="flex flex-col h-full bg-app screen-enter">
      {/* Header */}
      <div style={{ padding: '52px 16px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => onNavigate('guestCondition', data)}
            type="button"
            style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', display: 'flex', marginLeft: -4 }}
          >
            <ChevronLeft size={22} color="#56698F" />
          </button>
        </div>

        <StepBar step={3} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 24, fontWeight: 800,
            color: '#23244D', margin: 0, letterSpacing: '-0.02em',
          }}>
            When do you need care?
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: '#7C7C7C', margin: 0, lineHeight: '160%',
          }}>
            This helps us prioritise the right options for you.
          </p>
        </div>
      </div>

      {/* Options */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 16px 0' }} className="hide-scrollbar">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 120 }}>
          {OPTIONS.map(opt => {
            const isSel = selected?.id === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt)}
                type="button"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '18px 18px',
                  background: isSel ? 'rgba(86,105,143,0.07)' : 'white',
                  border: isSel ? '1.5px solid #56698F' : '1px solid #ECEFF2',
                  borderRadius: 16, cursor: 'pointer', textAlign: 'left',
                  boxShadow: isSel ? '0 2px 8px rgba(86,105,143,0.12)' : '0 1px 3px rgba(228,229,232,0.3)',
                  transition: 'all 0.15s',
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                  background: isSel ? 'rgba(86,105,143,0.12)' : '#F8FAFC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {opt.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, fontWeight: 600, margin: 0,
                    color: isSel ? '#56698F' : '#23244D',
                  }}>
                    {opt.label}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, margin: '3px 0 0', lineHeight: '150%',
                    color: '#94A3B8',
                  }}>
                    {opt.sub}
                  </p>
                </div>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                  border: isSel ? '2px solid #56698F' : '2px solid #D1D9E0',
                  background: isSel ? '#56698F' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                }}>
                  {isSel && <Check size={11} color="white" strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 16px 40px',
        background: 'linear-gradient(to top, white 70%, transparent)',
      }}>
        <button
          onClick={() => selected && onNavigate('guestConfirm', { ...data, timeline: selected })}
          type="button"
          style={{
            width: '100%', height: 52,
            background: selected ? '#56698F' : '#CBD5E1',
            border: 'none', borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'white',
            cursor: selected ? 'pointer' : 'default',
            letterSpacing: '-0.01em',
            transition: 'background 0.2s',
          }}
        >
          {selected ? 'Continue' : 'Select a Timeline'}
        </button>
      </div>
    </div>
  );
}
