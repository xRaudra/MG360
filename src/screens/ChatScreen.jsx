import { useState } from 'react';
import BackButton from '../components/BackButton';

const CameraAddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 4H9.5L7.5 6.5H4.5C3.4 6.5 2.5 7.4 2.5 8.5V17.5C2.5 18.6 3.4 19.5 4.5 19.5H19.5C20.6 19.5 21.5 18.6 21.5 17.5V8.5C21.5 7.4 20.6 6.5 19.5 6.5H16.5L14.5 4Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M18.5 6.5V4.5M17.5 5.5H19.5" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="2" width="6" height="11" rx="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18V22" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DoctorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13v4M14 15h4" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="17" rx="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M3 9h18" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 2v3M16 2v3" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="1" fill="#7C7C7C"/>
    <circle cx="8" cy="14" r="1" fill="#7C7C7C"/>
    <circle cx="16" cy="14" r="1" fill="#7C7C7C"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M12 7v5l3 3" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6v6c0 4.42 3.36 8.57 8 9.93C16.64 20.57 20 16.42 20 12V6l-8-4z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SUGGESTIONS = [
  { icon: <DoctorIcon />,   text: 'How can I find best doctor?' },
  { icon: <CalendarIcon />, text: 'How do I check doctor availability?' },
  { icon: <ClockIcon />,    text: 'How to book an appointment faster?' },
  { icon: <ShieldIcon />,   text: 'Which doctors accept my insurance?' },
];

const CARD_STYLE = {
  flex: '0 0 calc(50% - 8px)',
  borderRadius: 16,
  background: 'rgba(255,255,255,0.82)',
  border: '1px solid rgba(198,198,198,0.6)',
  boxShadow: '0 12px 88px rgba(221,221,221,0.9)',
  backdropFilter: 'blur(5px)',
  padding: 16,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  transition: 'transform 0.15s ease, opacity 0.15s ease',
};

export default function ChatScreen({ onNavigate, isGuest = false }) {
  const [message, setMessage] = useState('');

  const handleSuggestion = (text) => {
    setMessage(text);
  };

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3">
          <BackButton onPress={() => onNavigate('home')} />
          <h2 className="font-bold text-lg" style={{ color: '#313131' }}>
            Care Co-ordinator
          </h2>
        </div>
      </div>

      {/* Spacer — pushes cards + input to bottom */}
      <div className="flex-1" />

      {/* Suggestion cards — 2×2 grid */}
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {SUGGESTIONS.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSuggestion(s.text)}
              className="active:scale-95 active:opacity-80"
              style={CARD_STYLE}
            >
              {/* Icon circle */}
              <div style={{
                width: 41, height: 41, borderRadius: '50%',
                background: '#fff',
                border: '1px solid #E8E8E8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              {/* Question text */}
              <p style={{
                fontSize: 14, fontWeight: 400,
                color: '#7C7C7C',
                fontFamily: 'DM Sans, sans-serif',
                lineHeight: '1.4',
                textAlign: 'left',
                margin: 0,
              }}>
                {s.text}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div style={{ padding: '0 16px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>

        {/* Camera button */}
        <button
          className="flex-shrink-0 flex items-center justify-center transition-all active:opacity-70"
          style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', border: '1px solid #C6C6C6', cursor: 'pointer' }}>
          <CameraAddIcon />
        </button>

        {/* Input pill */}
        <div style={{ flex: 1, height: 52, borderRadius: 40, background: 'rgba(241,241,241,0.8)', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8 }}>
          <input
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 16, fontWeight: 500, color: '#313131', fontFamily: 'DM Sans, sans-serif' }}
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MicIcon />
        </div>

      </div>

    </div>
  );
}
