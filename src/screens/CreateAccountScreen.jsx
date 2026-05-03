import { useState } from 'react';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';

export default function CreateAccountScreen({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const canSubmit = name && email && password && confirmPw && agreed;

  return (
    <div className="flex flex-col h-full bg-app overflow-y-auto hide-scrollbar screen-enter">

      {/* Header */}
      <div style={{ padding: 'max(52px, env(safe-area-inset-top, 52px)) 16px 0' }}>
        <button
          onClick={() => onNavigate('login')}
          type="button"
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            background: 'none', border: 'none', padding: '4px 0',
            cursor: 'pointer', marginLeft: -4,
          }}
        >
          <ChevronLeft size={22} color="#56698F" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: '#56698F' }}>
            Back to Login
          </span>
        </button>
      </div>

      <div style={{ padding: '24px 16px 44px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Logo + Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <img src="/logo.png" alt="MedGlobal360" style={{ width: 110, objectFit: 'contain' }} />
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 24, fontWeight: 800,
              color: '#23244D', margin: '0 0 6px',
              letterSpacing: '-0.02em',
            }}>
              Create Your Account
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: '#7C7C7C', margin: 0, lineHeight: '155%',
            }}>
              Join thousands getting care worldwide
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <InputField
            label="Full Name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type={showPw ? 'text' : 'password'}
            placeholder="Create a strong password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            iconRight={
              <button onClick={() => setShowPw(v => !v)} type="button" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}>
                {showPw ? <Eye size={16} color="#94A3B8" /> : <EyeOff size={16} color="#94A3B8" />}
              </button>
            }
          />
          <InputField
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repeat your password"
            value={confirmPw}
            onChange={e => setConfirmPw(e.target.value)}
            error={confirmPw && password !== confirmPw ? "Passwords don't match" : null}
            iconRight={
              <button onClick={() => setShowConfirm(v => !v)} type="button" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}>
                {showConfirm ? <Eye size={16} color="#94A3B8" /> : <EyeOff size={16} color="#94A3B8" />}
              </button>
            }
          />

          {/* Terms checkbox */}
          <button
            onClick={() => setAgreed(v => !v)}
            type="button"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
          >
            <Checkbox checked={agreed} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#7C7C7C', lineHeight: '160%', paddingTop: 1 }}>
              I agree to the{' '}
              <span style={{ color: '#56698F', fontWeight: 600 }}>Terms of Service</span>
              {' '}and{' '}
              <span style={{ color: '#56698F', fontWeight: 600 }}>Privacy Policy</span>
            </span>
          </button>
        </div>

        {/* Create Account CTA */}
        <button
          onClick={() => canSubmit && onNavigate('home')}
          type="button"
          style={{
            width: '100%', height: 52,
            background: canSubmit ? '#56698F' : '#CBD5E1',
            border: 'none', borderRadius: 14,
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'white',
            cursor: canSubmit ? 'pointer' : 'default',
            letterSpacing: '-0.01em',
            boxShadow: canSubmit ? '0 4px 16px rgba(86,105,143,0.28)' : 'none',
            transition: 'background 0.2s ease',
          }}
        >
          Create Account
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ flex: 1, height: 1, background: '#ECEFF2' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#94A3B8', whiteSpace: 'nowrap' }}>
            or sign up with
          </span>
          <div style={{ flex: 1, height: 1, background: '#ECEFF2' }} />
        </div>

        {/* Social buttons */}
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { key: 'google',   icon: <GoogleIcon /> },
            { key: 'apple',    icon: <AppleIcon /> },
            { key: 'facebook', icon: <FacebookIcon /> },
          ].map(({ key, icon }) => (
            <button
              key={key}
              type="button"
              style={{
                flex: 1, height: 48,
                background: 'white',
                border: '1px solid #E8ECF0',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Log in link */}
        <p style={{
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, color: '#7C7C7C',
          margin: 0,
        }}>
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('login')}
            type="button"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#56698F', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

function InputField({ label, type, placeholder, value, onChange, iconRight, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 12, fontWeight: 600,
        color: '#475569', letterSpacing: '-0.01em',
      }}>
        {label}
      </span>
      <div style={{
        background: 'white',
        border: `1px solid ${error ? '#FCA5A5' : '#ECEFF2'}`,
        borderRadius: 12, height: 48,
        display: 'flex', alignItems: 'center',
        paddingLeft: 14, paddingRight: 14, gap: 10,
        boxShadow: '0 1px 2px rgba(228,229,232,0.3)',
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
            fontSize: 14, color: '#313131',
          }}
        />
        {iconRight}
      </div>
      {error && (
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#EF4444', marginTop: 2 }}>
          {error}
        </span>
      )}
    </div>
  );
}

function Checkbox({ checked }) {
  return (
    <div style={{
      width: 18, height: 18, flexShrink: 0, marginTop: 2,
      border: checked ? 'none' : '1.5px solid #CBD5E1',
      borderRadius: 5,
      background: checked ? '#56698F' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#gc2)">
        <path d="M23.77 12.28c0-.82-.07-1.64-.21-2.44H12.24v4.62h6.48c-.27 1.49-1.13 2.81-2.4 3.65v3h3.87c2.27-2.09 3.58-5.17 3.58-8.83z" fill="#4285F4" />
        <path d="M12.24 24c3.24 0 5.97-1.06 7.95-2.9l-3.87-3c-1.08.73-2.47 1.14-4.08 1.14-3.13 0-5.78-2.11-6.73-4.95H1.52v3.09C3.55 21.44 7.7 24 12.24 24z" fill="#34A853" />
        <path d="M5.5 14.3A7.3 7.3 0 0 1 5.5 9.7V6.61H1.52a12 12 0 0 0 0 10.78L5.5 14.3z" fill="#FBBC04" />
        <path d="M12.24 4.75a6.6 6.6 0 0 1 4.6 1.8l3.43-3.43C18.1 1.09 15.22-.03 12.24 0 7.7 0 3.55 2.56 1.52 6.61l3.98 3.1C6.45 6.86 9.11 4.75 12.24 4.75z" fill="#EA4335" />
      </g>
      <defs><clipPath id="gc2"><rect width="24" height="24" fill="white" /></clipPath></defs>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 17.14c-.33.77-.73 1.48-1.18 2.13-.62.89-1.13 1.5-1.52 1.84-.6.56-1.25.85-1.95.86-.5 0-1.1-.14-1.81-.43-.71-.29-1.36-.43-1.95-.43-.62 0-1.29.14-2.01.43-.72.29-1.3.44-1.74.45-.67.03-1.34-.27-2-.86-.43-.37-.96-1-1.6-1.9-.69-.96-1.25-2.07-1.7-3.35-.47-1.37-.71-2.7-.71-3.98 0-1.47.32-2.74.95-3.8.5-.86 1.17-1.53 2-2.03.84-.5 1.74-.76 2.72-.77.53 0 1.23.16 2.09.48.86.32 1.41.48 1.65.48.18 0 .8-.19 1.85-.56.99-.35 1.82-.49 2.51-.44 1.85.15 3.24.88 4.16 2.2-1.66 1-2.48 2.41-2.46 4.2.01 1.4.52 2.57 1.51 3.49.45.43.95.76 1.51.99-.12.34-.25.68-.41 1zm-4.24-16.7c0 1.1-.4 2.13-1.2 3.07-.96 1.13-2.12 1.78-3.38 1.68-.01-.13-.02-.26-.02-.4 0-1.06.46-2.19 1.28-3.12.41-.47.93-.86 1.57-1.16.63-.3 1.23-.47 1.79-.49.01.14.01.28-.04.42z" fill="#000" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 5.99 4.39 10.96 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.07 24 12.07z" fill="#1877F2" />
    </svg>
  );
}
