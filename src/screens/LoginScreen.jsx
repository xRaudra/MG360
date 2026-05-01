import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginScreen({ onNavigate }) {
  const [mode, setMode] = useState('login'); // login | register | otp
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (val, i) => {
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  if (mode === 'otp') return (
    <div className="flex flex-col h-full bg-white screen-enter">
      <div className="px-4 pt-4">
        <button onClick={() => setMode('login')} className="p-2 rounded-full bg-slate-100">
          <ArrowLeft size={20} color="#0F172A" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 pb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📱</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Verify Your Email
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We sent a 6-digit code to<br />
            <strong className="text-slate-700">{email || 'your@email.com'}</strong>
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((v, i) => (
            <input key={i} id={`otp-${i}`}
              className="w-11 h-14 text-center text-xl font-bold border-2 rounded-xl outline-none transition-all"
              style={{ borderColor: v ? '#1B4FBF' : '#E2E8F0', color: '#0F172A', fontFamily: 'Nunito, sans-serif' }}
              maxLength={1} value={v}
              onChange={e => handleOtpChange(e.target.value, i)}
            />
          ))}
        </div>

        <button onClick={() => onNavigate('home')}
          className="w-full py-3 rounded-2xl font-semibold text-white text-base mb-4"
          style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
          Verify & Continue
        </button>

        <p className="text-center text-slate-500 text-sm">
          Didn't receive code?{' '}
          <button className="text-[#1B4FBF] font-semibold">Resend in 0:45</button>
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-white screen-enter overflow-y-auto hide-scrollbar">
      {/* Header gradient */}
      <div className="px-4 pt-6 pb-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)' }}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
          style={{ background: 'white', transform: 'translate(20%, -30%)' }} />
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="text-xl">🌐</span>
          </div>
          <span className="text-white font-bold text-xl" style={{ fontFamily: 'Nunito, sans-serif' }}>MG360</span>
        </div>
        <h2 className="text-2xl font-bold text-white relative z-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-white/70 text-sm mt-1 relative z-10">
          {mode === 'login' ? 'Sign in to continue your care journey' : 'Start your medical journey today'}
        </p>
      </div>

      <div className="flex-1 px-4 pt-6 pb-4">
        {/* Toggle */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
          {['login', 'register'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: mode === m ? 'white' : 'transparent',
                color: mode === m ? '#1B4FBF' : '#94A3B8',
                boxShadow: mode === m ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              }}>
              {m === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {/* Social logins */}
        <div className="flex flex-col gap-3 mb-5">
          <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl border-2 border-slate-200 font-medium text-slate-700 text-sm transition-all active:bg-slate-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#google-clip)">
                <path d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z" fill="#4285F4"/>
                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/>
                <path d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z" fill="#FBBC04"/>
                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
              </g>
              <defs><clipPath id="google-clip"><rect width="24" height="24" fill="white"/></clipPath></defs>
            </svg>
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl border-2 border-slate-200 font-medium text-slate-700 text-sm transition-all active:bg-slate-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.8428 17.1449C20.5101 17.9135 20.1163 18.6211 19.66 19.2715C19.0381 20.1583 18.5288 20.7721 18.1364 21.113C17.528 21.6724 16.8762 21.959 16.1782 21.9753C15.6771 21.9753 15.0728 21.8327 14.3693 21.5434C13.6636 21.2555 13.015 21.113 12.422 21.113C11.8 21.113 11.133 21.2555 10.4195 21.5434C9.70493 21.8327 9.12928 21.9834 8.68916 21.9984C8.01981 22.0269 7.35264 21.7322 6.68668 21.113C6.26164 20.7422 5.72999 20.1067 5.09309 19.2063C4.40976 18.2449 3.84796 17.13 3.40784 15.8589C2.93648 14.486 2.7002 13.1565 2.7002 11.8694C2.7002 10.3951 3.01878 9.12345 3.65689 8.05784C4.1584 7.20191 4.82557 6.52672 5.66059 6.03105C6.49562 5.53539 7.39786 5.2828 8.36949 5.26664C8.90114 5.26664 9.59833 5.43109 10.4647 5.75429C11.3287 6.07858 11.8834 6.24303 12.1266 6.24303C12.3085 6.24303 12.9247 6.05074 13.9694 5.66738C14.9573 5.31186 15.7911 5.16466 16.4742 5.22264C18.3251 5.37202 19.7157 6.10167 20.6405 7.41619C18.9851 8.4192 18.1662 9.82403 18.1825 11.6262C18.1975 13.03 18.7067 14.1981 19.7076 15.1256C20.1611 15.5561 20.6676 15.8888 21.2312 16.1251C21.109 16.4795 20.98 16.819 20.8428 17.1449ZM16.5978 0.440369C16.5978 1.54062 16.1958 2.56792 15.3946 3.51878C14.4277 4.64917 13.2582 5.30236 11.99 5.19929C11.9738 5.06729 11.9645 4.92837 11.9645 4.78239C11.9645 3.72615 12.4243 2.59576 13.2408 1.67152C13.6485 1.20356 14.167 0.814453 14.7957 0.504058C15.4231 0.198295 16.0166 0.0292007 16.5747 0.000244141C16.591 0.147331 16.5978 0.294426 16.5978 0.440355V0.440369Z" fill="black"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">or use email</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {mode === 'register' && (
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Full Name</label>
              <input className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all"
                placeholder="John Doe" />
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Email Address</label>
            <input className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all"
              type="email" placeholder="you@email.com"
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Password</label>
            <div className="relative">
              <input className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all pr-12"
                type={showPw ? 'text' : 'password'} placeholder="••••••••" />
              <button onClick={() => setShowPw(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Country</label>
              <select className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] bg-white">
                <option>Nigeria</option>
                <option>Kenya</option>
                <option>Ghana</option>
                <option>Ethiopia</option>
                <option>South Africa</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Other</option>
              </select>
            </div>
          )}
        </div>

        {mode === 'login' && (
          <div className="text-right mt-2">
            <button className="text-xs text-[#1B4FBF] font-semibold">Forgot Password?</button>
          </div>
        )}

        <button onClick={() => setMode('otp')}
          className="w-full py-3 rounded-2xl font-semibold text-white text-base mt-6 active:scale-95 transition-all"
          style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)', boxShadow: '0 6px 20px rgba(27,79,191,0.35)' }}>
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>

        <p className="text-center text-slate-400 text-xs mt-4 leading-relaxed">
          By continuing you agree to our{' '}
          <button className="text-[#1B4FBF]">Terms</button> &{' '}
          <button className="text-[#1B4FBF]">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
}
