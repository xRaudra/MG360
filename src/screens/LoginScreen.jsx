import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginScreen({ onNavigate }) {
  const [tab, setTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [staySignedIn, setStaySignedIn] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar screen-enter">
      {/* Logo area */}
      <div className="flex flex-col items-center pt-12 pb-6 px-4">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #1B4FBF 0%, #0D9488 100%)' }}
        >
          <GlobeIcon />
        </div>
        <h1
          className="text-2xl font-bold text-slate-900 tracking-tight"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          MedGlobal360
        </h1>
        <p className="text-sm text-slate-500 mt-1">Your Global Care Partner</p>
      </div>

      {/* Tab switcher */}
      <div className="mx-4 mb-6">
        <div className="flex bg-slate-100 rounded-full p-1">
          <button
            onClick={() => onNavigate('onboarding')}
            className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{
              background: tab === 'getstarted' ? 'white' : 'transparent',
              color: tab === 'getstarted' ? '#1B4FBF' : '#94A3B8',
              boxShadow: tab === 'getstarted' ? '0 1px 6px rgba(0,0,0,0.12)' : 'none',
            }}
          >
            Get Started
          </button>
          <button
            onClick={() => setTab('login')}
            className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{
              background: tab === 'login' ? 'white' : 'transparent',
              color: tab === 'login' ? '#1B4FBF' : '#94A3B8',
              boxShadow: tab === 'login' ? '0 1px 6px rgba(0,0,0,0.12)' : 'none',
            }}
          >
            Log in
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 flex flex-col gap-4">
        {/* Username with Login prefix */}
        <div
          className="flex items-center bg-white rounded-2xl overflow-hidden"
          style={{ border: '1.5px solid #E2E8F0' }}
        >
          <span className="px-4 py-4 text-sm font-semibold text-slate-400 border-r border-slate-200 whitespace-nowrap select-none">
            Login
          </span>
          <input
            className="flex-1 px-4 py-4 text-sm text-slate-800 outline-none bg-transparent placeholder-slate-400"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>

        {/* Password */}
        <div
          className="relative bg-white rounded-2xl overflow-hidden"
          style={{ border: '1.5px solid #E2E8F0' }}
        >
          <input
            className="w-full px-4 py-4 text-sm text-slate-800 outline-none bg-transparent placeholder-slate-400 pr-12"
            type={showPw ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            onClick={() => setShowPw(v => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            type="button"
          >
            {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Stay signed in + Forgot password */}
        <div className="flex items-center justify-between px-0.5">
          <button
            onClick={() => setStaySignedIn(v => !v)}
            className="flex items-center gap-2"
            type="button"
          >
            <div
              className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
              style={{
                borderColor: staySignedIn ? '#1B4FBF' : '#CBD5E1',
                background: staySignedIn ? '#1B4FBF' : 'transparent',
              }}
            >
              {staySignedIn && (
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L3.8 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm text-slate-600">Stay signed in</span>
          </button>
          <button className="text-sm font-semibold text-[#1B4FBF]" type="button">
            Forgot password?
          </button>
        </div>

        {/* Log in button */}
        <button
          onClick={() => onNavigate('home')}
          className="w-full py-4 rounded-2xl font-bold text-white text-base active:scale-95 transition-all mt-1"
          style={{
            background: 'linear-gradient(135deg, #1B4FBF 0%, #1a5ae0 100%)',
            boxShadow: '0 6px 24px rgba(27,79,191,0.38)',
          }}
          type="button"
        >
          Log in
        </button>

        {/* OR divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">Or sign in with</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Social icon buttons */}
        <div className="flex justify-center gap-3 pb-8">
          {[
            { label: 'Google', icon: <GoogleIcon /> },
            { label: 'Facebook', icon: <FacebookIcon /> },
            { label: 'Apple', icon: <AppleIcon /> },
            { label: 'Phone', icon: <PhoneCallIcon /> },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className="w-[72px] h-14 rounded-2xl bg-white flex items-center justify-center active:scale-95 transition-all"
              style={{ border: '1.5px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              type="button"
              aria-label={`Sign in with ${label}`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#gc)">
        <path d="M23.77 12.28C23.77 11.46 23.7 10.64 23.56 9.84H12.24V14.46H18.72C18.45 15.95 17.59 17.27 16.32 18.11V21.1H20.19C22.46 19.01 23.77 15.93 23.77 12.28Z" fill="#4285F4" />
        <path d="M12.24 24C15.48 24 18.21 22.94 20.19 21.1L16.33 18.11C15.25 18.84 13.86 19.25 12.24 19.25C9.11 19.25 6.46 17.14 5.51 14.3H1.52V17.39C3.55 21.44 7.7 24 12.24 24Z" fill="#34A853" />
        <path d="M5.5 14.3C5 12.81 5 11.2 5.5 9.71V6.61H1.52C-0.19 10.01 -0.19 14 1.52 17.39L5.5 14.3Z" fill="#FBBC04" />
        <path d="M12.24 4.75C13.95 4.72 15.6 5.37 16.84 6.55L20.27 3.12C18.1 1.09 15.22 -0.03 12.24 0C7.7 0 3.55 2.56 1.52 6.61L5.5 9.71C6.45 6.86 9.11 4.75 12.24 4.75Z" fill="#EA4335" />
      </g>
      <defs><clipPath id="gc"><rect width="24" height="24" fill="white" /></clipPath></defs>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 5.99 4.39 10.96 10.13 11.85v-8.39H7.08v-3.46h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.46h-2.8v8.39C19.61 23.03 24 18.07 24 12.07Z" fill="#1877F2" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 17.14c-.33.77-.73 1.48-1.18 2.13-.62.89-1.13 1.5-1.52 1.84-.6.56-1.25.85-1.95.86-.5 0-1.1-.14-1.81-.43-.71-.29-1.36-.43-1.95-.43-.62 0-1.29.14-2.01.43-.72.29-1.3.44-1.74.45-.67.03-1.34-.27-2-.86-.43-.37-.96-1-1.6-1.9-.69-.96-1.25-2.07-1.7-3.35-.47-1.37-.71-2.7-.71-3.98 0-1.47.32-2.74.95-3.8.5-.86 1.17-1.53 2-2.03.84-.5 1.74-.76 2.72-.77.53 0 1.23.16 2.09.48.86.32 1.41.48 1.65.48.18 0 .8-.19 1.85-.56.99-.35 1.82-.49 2.51-.44 1.85.15 3.24.88 4.16 2.2-1.66 1-2.48 2.41-2.46 4.2.01 1.4.52 2.57 1.51 3.49.45.43.95.76 1.51.99-.12.34-.25.68-.41 1ZM16.6.44c0 1.1-.4 2.13-1.2 3.07-.96 1.13-2.12 1.78-3.38 1.68-.02-.13-.02-.26-.02-.4 0-1.06.46-2.19 1.28-3.12.41-.47.93-.86 1.57-1.16.63-.3 1.23-.47 1.79-.49.01.14.01.28-.04.42Z" fill="#000000" />
    </svg>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
