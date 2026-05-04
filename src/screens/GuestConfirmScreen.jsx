import { MapPin, Stethoscope, Clock, CheckCircle, Pencil } from 'lucide-react';

export default function GuestConfirmScreen({ onNavigate, data }) {
  const { country, condition, timeline } = data || {};

  const rows = [
    {
      icon: <MapPin size={18} color="#56698F" />,
      label: 'Country',
      value: country ? `${country.flag}  ${country.name}` : '—',
      editScreen: 'guestCountry',
    },
    {
      icon: <Stethoscope size={18} color="#56698F" />,
      label: 'Condition',
      value: condition ? `${condition.condition}` : '—',
      sub: condition?.category,
      editScreen: 'guestCondition',
    },
    {
      icon: <Clock size={18} color="#56698F" />,
      label: 'Timeline',
      value: timeline?.label || '—',
      editScreen: 'guestTimeline',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-app screen-enter">
      {/* Header area */}
      <div style={{ padding: '52px 16px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Success badge */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(86,105,143,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <CheckCircle size={38} color="#56698F" strokeWidth={1.8} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 24, fontWeight: 800,
            color: '#23244D', margin: 0, letterSpacing: '-0.02em',
          }}>
            All Set!
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: '#7C7C7C', margin: 0, lineHeight: '160%',
            maxWidth: 260,
          }}>
            Here's your personalised profile. You can update these any time from your settings.
          </p>
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '28px 16px 0' }} className="hide-scrollbar">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 140 }}>
          {rows.map(row => (
            <div
              key={row.label}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 16px',
                background: 'white',
                border: '1px solid #ECEFF2',
                borderRadius: 16,
                boxShadow: '0 1px 3px rgba(228,229,232,0.3)',
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: 'rgba(86,105,143,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {row.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, fontWeight: 600, margin: 0,
                  color: '#94A3B8', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  {row.label}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, fontWeight: 600, margin: '3px 0 0',
                  color: '#23244D',
                }}>
                  {row.value}
                </p>
                {row.sub && (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, margin: '1px 0 0',
                    color: '#94A3B8',
                  }}>
                    {row.sub}
                  </p>
                )}
              </div>
              <button
                onClick={() => onNavigate(row.editScreen, data)}
                type="button"
                style={{
                  background: 'none', border: 'none', padding: 6, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8,
                }}
              >
                <Pencil size={15} color="#94A3B8" />
              </button>
            </div>
          ))}

          {/* Info note */}
          <div style={{
            padding: '14px 16px',
            background: 'rgba(86,105,143,0.06)',
            border: '1px solid rgba(86,105,143,0.15)',
            borderRadius: 14, marginTop: 4,
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, color: '#56698F', margin: 0, lineHeight: '160%',
            }}>
              You're exploring as a <strong>Guest</strong>. Create an account to save your journey, get doctor recommendations, and schedule consultations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 16px 40px',
        background: 'linear-gradient(to top, white 70%, transparent)',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        <button
          onClick={() => onNavigate('home', data)}
          type="button"
          style={{
            width: '100%', height: 52,
            background: '#56698F',
            border: 'none', borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'white',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            boxShadow: '0 4px 16px rgba(86,105,143,0.28)',
          }}
        >
          Start Exploring
        </button>
        <button
          onClick={() => onNavigate('login')}
          type="button"
          style={{
            width: '100%', height: 44,
            background: 'transparent',
            border: '1.5px solid #56698F',
            borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14, fontWeight: 500, color: '#56698F',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
