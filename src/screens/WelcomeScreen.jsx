export default function WelcomeScreen({ onNavigate }) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/welcome-bg.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
        />
        {/* Gradient: transparent at top → white at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 28%, rgba(255,255,255,0.50) 50%, white 66%)',
        }} />
      </div>

      {/* Logo — top center, safe area aware */}
      <div style={{
        position: 'relative', zIndex: 2,
        paddingTop: 'max(52px, env(safe-area-inset-top, 52px))',
        display: 'flex', justifyContent: 'center',
      }}>
        <img src="/logo.png" alt="MedGlobal360" style={{ width: 120, objectFit: 'contain' }} />
      </div>

      <div style={{ flex: 1 }} />

      {/* Bottom content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '28px 16px 44px',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h1 style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 30, fontWeight: 800,
            color: '#1C1C1E',
            letterSpacing: '-0.03em',
            lineHeight: '118%',
            margin: 0,
          }}>
            Your Health Journey<br />Starts Here
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, fontWeight: 400,
            color: '#6B7280',
            lineHeight: '160%',
            margin: 0,
          }}>
            Top doctors. Trusted hospitals. Full support — from first consultation to recovery.
          </p>
        </div>

        {/* Trust badges row */}
        <div style={{ display: 'flex', gap: 8 }}>
          {['JCI Accredited', '50+ Countries', '10K+ Patients'].map(badge => (
            <div
              key={badge}
              style={{
                flex: 1,
                padding: '7px 4px',
                background: 'rgba(86,105,143,0.07)',
                border: '1px solid rgba(86,105,143,0.15)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10, fontWeight: 600,
                color: '#56698F', textAlign: 'center',
                lineHeight: '140%',
              }}>
                {badge}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Get Started — primary */}
          <button
            onClick={() => onNavigate('login')}
            type="button"
            style={{
              width: '100%', height: 52,
              background: '#56698F',
              border: 'none', borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 16px rgba(86,105,143,0.32)',
            }}
          >
            Get Started
          </button>

          {/* Continue as Guest — outlined */}
          <button
            onClick={() => onNavigate('guestCountry')}
            type="button"
            style={{
              width: '100%', height: 48,
              background: 'transparent',
              border: '1.5px solid #56698F',
              borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 500,
              color: '#56698F',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
