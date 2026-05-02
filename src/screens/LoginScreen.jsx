import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginScreen({ onNavigate }) {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar screen-enter">
      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '68px 32px 0', gap: 24 }}>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="MedGlobal360" style={{ width: 131, height: 29, objectFit: 'contain' }} />
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <h1 style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 32, fontWeight: 700,
            color: '#313131', textAlign: 'center',
            letterSpacing: '-0.02em', lineHeight: '130%',
            margin: 0,
          }}>
            Get Started now
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, fontWeight: 400,
            color: '#7C7C7C', textAlign: 'center',
            letterSpacing: '-0.01em', lineHeight: '150%',
            margin: 0, maxWidth: 222,
          }}>
            Create an account or log in to explore about our app
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{
          background: '#F5F6F9',
          borderRadius: 7,
          padding: 2,
          display: 'flex',
          boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.02)',
        }}>
          {[['login', 'Log In'], ['signup', 'Sign Up']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => key === 'signup' ? onNavigate('onboarding') : setTab('login')}
              type="button"
              style={{
                flex: 1,
                padding: '12px 14px',
                borderRadius: 6,
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14, fontWeight: 500,
                letterSpacing: '-0.02em',
                border: tab === key ? '1px solid rgba(238,238,246,0.5)' : '1px solid transparent',
                background: tab === key ? 'white' : 'transparent',
                color: tab === key ? '#23244D' : '#7C7C7C',
                boxShadow: tab === key
                  ? '0 1px 2px rgba(228,229,232,0.24), inset 0 -2px 2px rgba(0,0,0,0.03)'
                  : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Input fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Email */}
          <InputField
            label="Email"
            type="email"
            placeholder="saurabh@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          {/* Password */}
          <InputField
            label="Password"
            type={showPw ? 'text' : 'password'}
            placeholder="*******"
            value={password}
            onChange={e => setPassword(e.target.value)}
            iconRight={
              <button onClick={() => setShowPw(v => !v)} type="button" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}>
                {showPw
                  ? <Eye size={16} color="#94A3B8" />
                  : <EyeOff size={16} color="#94A3B8" />}
              </button>
            }
          />

          {/* Remember me + Forgot password */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setRememberMe(v => !v)}
              type="button"
              style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <Checkbox checked={rememberMe} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: '#7C7C7C', letterSpacing: '-0.01em' }}>
                Remember me
              </span>
            </button>
            <button
              type="button"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: '#4D82E7', letterSpacing: '-0.01em', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              Forgot Password ?
            </button>
          </div>
        </div>

        {/* CTA + Social */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Log In button */}
          <button
            onClick={() => onNavigate('home')}
            type="button"
            style={{
              width: '100%', height: 48,
              background: '#ABBDE9',
              border: 'none', borderRadius: 10,
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 500,
              color: 'white', letterSpacing: '-0.01em',
              cursor: 'pointer',
              boxShadow: '0 0 0 1px #BC89ED, 0 1px 2px rgba(188,137,237,0.48)',
            }}
          >
            Log In
          </button>

          {/* Or login with divider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1, height: 1, background: '#ECEFF2' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: '#7C7C7C', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                Or login with
              </span>
              <div style={{ flex: 1, height: 1, background: '#ECEFF2' }} />
            </div>

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: 15 }}>
              {[
                { key: 'google',   icon: <GoogleIcon /> },
                { key: 'facebook', icon: <FacebookIcon /> },
                { key: 'apple',    icon: <AppleIcon /> },
                { key: 'phone',    icon: <PhoneIcon /> },
              ].map(({ key, icon }) => (
                <button
                  key={key}
                  type="button"
                  style={{
                    flex: 1, height: 48,
                    background: 'white',
                    border: '1px solid #EFF0F6',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'inset 0 -3px 6px rgba(242,244,250,0.6)',
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terms text */}
      <p style={{
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: 11, color: '#7C7C7C',
        padding: '24px 46px 44px',
        margin: 0,
        letterSpacing: '-0.01em',
        lineHeight: '160%',
      }}>
        By signing up, you agree to the{' '}
        <strong style={{ color: '#313131', fontWeight: 600 }}>Terms of Service</strong>
        {' '}and{' '}
        <strong style={{ color: '#313131', fontWeight: 600 }}>Data Processing Agreement</strong>
      </p>
    </div>
  );
}

function InputField({ label, type, placeholder, value, onChange, iconRight }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 12, fontWeight: 500,
        color: '#6C727A',
        letterSpacing: '-0.02em', lineHeight: '160%',
      }}>
        {label}
      </span>
      <div style={{
        background: 'white',
        border: '1px solid #ECEFF2',
        borderRadius: 10,
        height: 46,
        display: 'flex', alignItems: 'center',
        paddingLeft: 14, paddingRight: 14,
        gap: 10,
        boxShadow: '0 1px 2px rgba(228,229,232,0.24)',
      }}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            flex: 1, border: 'none', outline: 'none',
            background: 'transparent',
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, fontWeight: 400,
            color: '#313131',
            letterSpacing: '-0.02em',
          }}
        />
        {iconRight}
      </div>
    </div>
  );
}

function Checkbox({ checked }) {
  return (
    <div style={{
      width: 19, height: 19,
      border: checked ? 'none' : '1.5px solid #CBD5E1',
      borderRadius: 4,
      background: checked ? '#4D82E7' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {checked && (
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
          <path d="M1 4.5L3.8 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#gc)">
        <path d="M23.77 12.28c0-.82-.07-1.64-.21-2.44H12.24v4.62h6.48c-.27 1.49-1.13 2.81-2.4 3.65v3h3.87c2.27-2.09 3.58-5.17 3.58-8.83z" fill="#4285F4" />
        <path d="M12.24 24c3.24 0 5.97-1.06 7.95-2.9l-3.87-3c-1.08.73-2.47 1.14-4.08 1.14-3.13 0-5.78-2.11-6.73-4.95H1.52v3.09C3.55 21.44 7.7 24 12.24 24z" fill="#34A853" />
        <path d="M5.5 14.3A7.3 7.3 0 0 1 5.5 9.7V6.61H1.52a12 12 0 0 0 0 10.78L5.5 14.3z" fill="#FBBC04" />
        <path d="M12.24 4.75a6.6 6.6 0 0 1 4.6 1.8l3.43-3.43C18.1 1.09 15.22-.03 12.24 0 7.7 0 3.55 2.56 1.52 6.61l3.98 3.1C6.45 6.86 9.11 4.75 12.24 4.75z" fill="#EA4335" />
      </g>
      <defs><clipPath id="gc"><rect width="24" height="24" fill="white" /></clipPath></defs>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 5.99 4.39 10.96 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.07 24 12.07z" fill="#1877F2" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 17.14c-.33.77-.73 1.48-1.18 2.13-.62.89-1.13 1.5-1.52 1.84-.6.56-1.25.85-1.95.86-.5 0-1.1-.14-1.81-.43-.71-.29-1.36-.43-1.95-.43-.62 0-1.29.14-2.01.43-.72.29-1.3.44-1.74.45-.67.03-1.34-.27-2-.86-.43-.37-.96-1-1.6-1.9-.69-.96-1.25-2.07-1.7-3.35-.47-1.37-.71-2.7-.71-3.98 0-1.47.32-2.74.95-3.8.5-.86 1.17-1.53 2-2.03.84-.5 1.74-.76 2.72-.77.53 0 1.23.16 2.09.48.86.32 1.41.48 1.65.48.18 0 .8-.19 1.85-.56.99-.35 1.82-.49 2.51-.44 1.85.15 3.24.88 4.16 2.2-1.66 1-2.48 2.41-2.46 4.2.01 1.4.52 2.57 1.51 3.49.45.43.95.76 1.51.99-.12.34-.25.68-.41 1zm-4.24-16.7c0 1.1-.4 2.13-1.2 3.07-.96 1.13-2.12 1.78-3.38 1.68-.01-.13-.02-.26-.02-.4 0-1.06.46-2.19 1.28-3.12.41-.47.93-.86 1.57-1.16.63-.3 1.23-.47 1.79-.49.01.14.01.28-.04.42z" fill="#000" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#475569" strokeWidth="1.8" />
      <circle cx="12" cy="18" r="1" fill="#475569" />
    </svg>
  );
}
