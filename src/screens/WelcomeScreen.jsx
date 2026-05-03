export default function WelcomeScreen({ onNavigate }) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Background photo — full bleed from top edge */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/welcome-bg.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.55) 52%, white 68%)',
        }} />
      </div>

      {/* Logo — centered, safe area aware */}
      <div style={{
        position: 'relative', zIndex: 2,
        paddingTop: 'max(52px, env(safe-area-inset-top, 52px))',
        display: 'flex', justifyContent: 'center',
      }}>
        <img src="/logo.png" alt="MedGlobal360" style={{ width: 120, objectFit: 'contain' }} />
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bottom content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '32px 16px 44px',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h1 style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 32, fontWeight: 800,
            color: '#1C1C1E',
            letterSpacing: '-0.03em',
            lineHeight: '120%',
            margin: 0,
          }}>
            Let's Personalise<br />Your Care Journey!
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, fontWeight: 400,
            color: '#7C7C7C',
            lineHeight: '160%',
            margin: 0,
          }}>
            Discover top doctors and hospitals, and get complete support for your treatment journey in India.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Get Started */}
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
              boxShadow: '0 4px 16px rgba(86,105,143,0.3)',
            }}
          >
            Get Started
          </button>

          {/* Continue with Guest — outlined */}
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
            Continue with Guest
          </button>
        </div>
      </div>
    </div>
  );
}
