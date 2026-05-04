import { useState, Fragment } from 'react';
import { ChevronLeft, Search, Check } from 'lucide-react';

const POPULAR = [
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇦🇪', name: 'United Arab Emirates' },
  { flag: '🇳🇬', name: 'Nigeria' },
  { flag: '🇧🇩', name: 'Bangladesh' },
  { flag: '🇵🇰', name: 'Pakistan' },
  { flag: '🇳🇵', name: 'Nepal' },
  { flag: '🇱🇰', name: 'Sri Lanka' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇰🇪', name: 'Kenya' },
  { flag: '🇲🇻', name: 'Maldives' },
];

const ALL_COUNTRIES = [
  { flag: '🇦🇫', name: 'Afghanistan' },
  { flag: '🇦🇱', name: 'Albania' },
  { flag: '🇩🇿', name: 'Algeria' },
  { flag: '🇦🇴', name: 'Angola' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇿', name: 'Azerbaijan' },
  { flag: '🇧🇭', name: 'Bahrain' },
  { flag: '🇧🇩', name: 'Bangladesh' },
  { flag: '🇧🇾', name: 'Belarus' },
  { flag: '🇧🇯', name: 'Benin' },
  { flag: '🇧🇹', name: 'Bhutan' },
  { flag: '🇧🇦', name: 'Bosnia & Herzegovina' },
  { flag: '🇧🇼', name: 'Botswana' },
  { flag: '🇧🇷', name: 'Brazil' },
  { flag: '🇨🇲', name: 'Cameroon' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇨🇫', name: 'Central African Republic' },
  { flag: '🇹🇩', name: 'Chad' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇨🇩', name: 'Congo (DRC)' },
  { flag: '🇪🇬', name: 'Egypt' },
  { flag: '🇪🇷', name: 'Eritrea' },
  { flag: '🇪🇹', name: 'Ethiopia' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇬🇳', name: 'Guinea' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇮🇩', name: 'Indonesia' },
  { flag: '🇮🇷', name: 'Iran' },
  { flag: '🇮🇶', name: 'Iraq' },
  { flag: '🇯🇴', name: 'Jordan' },
  { flag: '🇰🇿', name: 'Kazakhstan' },
  { flag: '🇰🇪', name: 'Kenya' },
  { flag: '🇰🇬', name: 'Kyrgyzstan' },
  { flag: '🇱🇧', name: 'Lebanon' },
  { flag: '🇱🇾', name: 'Libya' },
  { flag: '🇲🇲', name: 'Myanmar' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇲🇻', name: 'Maldives' },
  { flag: '🇲🇱', name: 'Mali' },
  { flag: '🇲🇷', name: 'Mauritania' },
  { flag: '🇲🇦', name: 'Morocco' },
  { flag: '🇲🇿', name: 'Mozambique' },
  { flag: '🇳🇵', name: 'Nepal' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇳🇪', name: 'Niger' },
  { flag: '🇳🇬', name: 'Nigeria' },
  { flag: '🇴🇲', name: 'Oman' },
  { flag: '🇵🇰', name: 'Pakistan' },
  { flag: '🇵🇸', name: 'Palestine' },
  { flag: '🇵🇭', name: 'Philippines' },
  { flag: '🇶🇦', name: 'Qatar' },
  { flag: '🇷🇺', name: 'Russia' },
  { flag: '🇷🇼', name: 'Rwanda' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇸🇳', name: 'Senegal' },
  { flag: '🇸🇱', name: 'Sierra Leone' },
  { flag: '🇸🇴', name: 'Somalia' },
  { flag: '🇿🇦', name: 'South Africa' },
  { flag: '🇸🇸', name: 'South Sudan' },
  { flag: '🇱🇰', name: 'Sri Lanka' },
  { flag: '🇸🇩', name: 'Sudan' },
  { flag: '🇸🇾', name: 'Syria' },
  { flag: '🇹🇯', name: 'Tajikistan' },
  { flag: '🇹🇿', name: 'Tanzania' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇹🇬', name: 'Togo' },
  { flag: '🇹🇳', name: 'Tunisia' },
  { flag: '🇹🇷', name: 'Turkey' },
  { flag: '🇹🇲', name: 'Turkmenistan' },
  { flag: '🇺🇬', name: 'Uganda' },
  { flag: '🇺🇦', name: 'Ukraine' },
  { flag: '🇦🇪', name: 'United Arab Emirates' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇺🇿', name: 'Uzbekistan' },
  { flag: '🇻🇳', name: 'Vietnam' },
  { flag: '🇾🇪', name: 'Yemen' },
  { flag: '🇿🇲', name: 'Zambia' },
  { flag: '🇿🇼', name: 'Zimbabwe' },
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

export default function GuestCountryScreen({ onNavigate, data }) {
  const [selected, setSelected] = useState(data?.country || null);
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? ALL_COUNTRIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : null;

  const isSelected = (name) => selected?.name === name;

  const select = (country) => setSelected(country);

  return (
    <div className="flex flex-col h-full bg-app screen-enter">
      {/* Header */}
      <div style={{ padding: '52px 16px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => onNavigate('welcome')}
            type="button"
            style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', display: 'flex', marginLeft: -4 }}
          >
            <ChevronLeft size={22} color="#56698F" />
          </button>
        </div>

        <StepBar step={1} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 24, fontWeight: 800,
            color: '#23244D', margin: 0, letterSpacing: '-0.02em',
          }}>
            Where are you from?
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: '#7C7C7C', margin: 0, lineHeight: '160%',
          }}>
            This helps us personalise your experience.
          </p>
        </div>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'white', border: '1px solid #ECEFF2',
          borderRadius: 12, height: 46,
          paddingLeft: 14, paddingRight: 14,
          boxShadow: '0 1px 2px rgba(228,229,232,0.24)',
        }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search country..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#313131',
            }}
          />
        </div>
      </div>

      {/* Country list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 0' }} className="hide-scrollbar">
        {!query && (
          <>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11, fontWeight: 600,
              color: '#94A3B8', letterSpacing: '0.07em',
              textTransform: 'uppercase', marginBottom: 10,
            }}>
              Popular
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
              {POPULAR.map(c => (
                <button
                  key={c.name}
                  onClick={() => select(c)}
                  type="button"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '11px 14px',
                    background: isSelected(c.name) ? 'rgba(86,105,143,0.08)' : 'white',
                    border: isSelected(c.name) ? '1.5px solid #56698F' : '1px solid #ECEFF2',
                    borderRadius: 12, cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(228,229,232,0.2)',
                    transition: 'all 0.15s',
                  }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{c.flag}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12, fontWeight: isSelected(c.name) ? 600 : 400,
                    color: isSelected(c.name) ? '#56698F' : '#313131',
                    textAlign: 'left',
                  }}>
                    {c.name}
                  </span>
                </button>
              ))}
            </div>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11, fontWeight: 600,
              color: '#94A3B8', letterSpacing: '0.07em',
              textTransform: 'uppercase', marginBottom: 10,
            }}>
              All Countries
            </p>
          </>
        )}

        {/* Filtered or full list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 120 }}>
          {(filtered || ALL_COUNTRIES).map(c => (
            <button
              key={c.name}
              onClick={() => select(c)}
              type="button"
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '13px 14px',
                background: isSelected(c.name) ? 'rgba(86,105,143,0.08)' : 'white',
                border: isSelected(c.name) ? '1.5px solid #56698F' : '1px solid #ECEFF2',
                borderRadius: 12, cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 22, lineHeight: 1 }}>{c.flag}</span>
              <span style={{
                flex: 1, fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 400,
                color: isSelected(c.name) ? '#56698F' : '#313131',
                textAlign: 'left',
              }}>
                {c.name}
              </span>
              {isSelected(c.name) && <Check size={16} color="#56698F" strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 16px 40px',
        background: 'linear-gradient(to top, white 70%, transparent)',
      }}>
        <button
          onClick={() => selected && onNavigate('guestCondition', { ...data, country: selected })}
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
          {selected ? `Continue with ${selected.name}` : 'Select a Country'}
        </button>
      </div>
    </div>
  );
}
