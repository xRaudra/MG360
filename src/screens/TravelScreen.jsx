import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import BackButton from '../components/BackButton';

const travelDetails = [
  { label: 'Departure',        value: 'Lagos (LOS)',         sub: 'Feb 1, 2025 · 08:45 AM', icon: '🛫', detail: 'Emirates EK 783 · Economy' },
  { label: 'Arrival',          value: 'Delhi (DEL)',         sub: 'Feb 2, 2025 · 06:30 AM', icon: '🛬', detail: 'T3 Indira Gandhi International' },
  { label: 'Hotel',            value: 'Leela Palace, Delhi', sub: 'Feb 2–14 · 12 nights',   icon: '🏨', detail: 'Diplomatic Enclave, Chanakyapuri' },
  { label: 'Airport Transfer', value: 'Car arranged',        sub: 'Apollo Hospital',         icon: '🚗', detail: 'Pick-up 07:00 AM · Coordinator arranged' },
];

export default function TravelScreen({ onNavigate, data }) {
  const backTo = data?.from || 'journey';
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BackButton onPress={() => onNavigate(backTo)} />
            <div>
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Travel Arrangements
              </h2>
              <p className="text-white/60 text-xs">Lagos → Delhi · Feb 1, 2025</p>
            </div>
          </div>
          <button onClick={handleShare}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-all active:bg-white/25">
            {copied ? <Check size={16} color="white" /> : <Share2 size={16} color="white" />}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-4">

        {/* Status banner */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
          <span className="text-xl">✅</span>
          <div>
            <p className="font-semibold text-green-700 text-sm">All arrangements confirmed</p>
            <p className="text-green-600 text-xs">Your coordinator Priya Nair has everything in place</p>
          </div>
        </div>

        {/* Travel details */}
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {travelDetails.map((d, i) => (
            <div key={d.label} className="flex items-start gap-4 px-4 py-4"
              style={{ borderTop: i > 0 ? '1px solid #F1F5F9' : 'none' }}>
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-2xl flex-shrink-0">
                {d.icon}
              </div>
              <div className="flex-1">
                <p className="text-slate-400 text-xs mb-0.5">{d.label}</p>
                <p className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {d.value}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">{d.sub}</p>
                <p className="text-slate-400 text-xs mt-1">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Request changes */}
        <button onClick={() => onNavigate('contact')}
          className="w-full py-3.5 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-sm font-medium transition-all active:bg-slate-50">
          + Request changes to travel
        </button>

        {/* Care coordinator card */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Your Care Coordinator</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
              PN
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 text-sm">Priya Nair</p>
              <p className="text-slate-400 text-xs">+91 98765 43210 · Available 9AM–6PM IST</p>
            </div>
            <button onClick={() => onNavigate('chat')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all active:scale-95"
              style={{ background: '#EFF6FF', color: '#1B4FBF' }}>
              Chat
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center pb-4">
          Need to make changes? Contact Priya at least 48 hours before your flight.
        </p>
      </div>
    </div>
  );
}
