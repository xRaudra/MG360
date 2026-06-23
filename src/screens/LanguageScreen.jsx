import { useState } from 'react';
import { Check } from 'lucide-react';
import BackButton from '../components/BackButton';

const languages = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'French',  native: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'Arabic',  native: 'العربية',  flag: '🇸🇦' },
  { code: 'sw', label: 'Swahili', native: 'Kiswahili', flag: '🇰🇪' },
  { code: 'ha', label: 'Hausa',   native: 'Hausa',    flag: '🇳🇬' },
  { code: 'yo', label: 'Yoruba',  native: 'Yorùbá',   flag: '🇳🇬' },
];

const regions = ['West Africa', 'East Africa', 'North Africa', 'Middle East', 'Europe', 'Americas', 'Asia Pacific'];

const currencies = [
  { code: 'USD', label: 'US Dollar', symbol: '$' },
  { code: 'EUR', label: 'Euro',      symbol: '€' },
  { code: 'GBP', label: 'British Pound', symbol: '£' },
  { code: 'NGN', label: 'Nigerian Naira', symbol: '₦' },
  { code: 'KES', label: 'Kenyan Shilling', symbol: 'KSh' },
  { code: 'AED', label: 'UAE Dirham', symbol: 'AED' },
];

export default function LanguageScreen({ onNavigate }) {
  const [lang, setLang]     = useState('en');
  const [region, setRegion] = useState('West Africa');
  const [currency, setCurrency] = useState('USD');
  const [saved, setSaved]   = useState(false);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #7C3AED 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3">
          <BackButton onPress={() => onNavigate('profile')} />
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Language &amp; Region
            </h2>
            <p className="text-white/60 text-xs mt-0.5">Your content preferences</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-6">
        {/* Language */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">App Language</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {languages.map((l, i) => (
              <button key={l.code} onClick={() => setLang(l.code)}
                className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left"
                style={{ borderBottom: i < languages.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <span className="text-xl flex-shrink-0">{l.flag}</span>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-sm">{l.label}</p>
                  <p className="text-slate-400 text-xs">{l.native}</p>
                </div>
                {lang === l.code && <Check size={16} color="#1B4FBF" />}
              </button>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Region</p>
          <div className="flex flex-wrap gap-2">
            {regions.map(r => (
              <button key={r} onClick={() => setRegion(r)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: region === r ? '#7C3AED' : 'white',
                  color: region === r ? 'white' : '#475569',
                  borderColor: region === r ? '#7C3AED' : '#E2E8F0',
                }}>
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Currency */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Display Currency</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {currencies.map((c, i) => (
              <button key={c.code} onClick={() => setCurrency(c.code)}
                className="flex items-center gap-3 w-full px-4 py-3 transition-all active:bg-slate-50 text-left"
                style={{ borderBottom: i < currencies.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <span className="text-base font-bold text-slate-500 w-8 flex-shrink-0">{c.symbol}</span>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-sm">{c.code}</p>
                  <p className="text-slate-400 text-xs">{c.label}</p>
                </div>
                {currency === c.code && <Check size={16} color="#7C3AED" />}
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => { setSaved(true); setTimeout(() => { setSaved(false); onNavigate('profile'); }, 1200); }}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all active:scale-95 mb-2"
          style={{ background: saved ? '#059669' : 'linear-gradient(135deg, #7C3AED, #1B4FBF)' }}>
          {saved ? <><Check size={18} /> Saved!</> : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}
