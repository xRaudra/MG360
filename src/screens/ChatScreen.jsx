import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, SlidersHorizontal, Mic } from 'lucide-react';
import { chatMessages } from '../data/mockData';

// ── Inline SVG icons for suggestion cards ────────────────────────
const IconDoctor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.34 15.34 15 17 15H19C20.66 15 22 16.34 22 18Z" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 16.5V19.5" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 18H19.5" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconHospital = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 22V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V22" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 10H13" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9V11" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 22V13H4C2.9 13 2 13.9 2 15V22" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 22V15C22 13.9 21.1 13 20 13H17" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.69 13.7H15.7M15.69 16.7H15.7M11.99 13.7H12M11.99 16.7H12M8.29 13.7H8.3M8.29 16.7H8.3" stroke="#ABC4EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTravel = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3H9C7.05 8.84 7.05 15.16 9 21H8M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16M3 9C8.84 7.05 15.16 7.05 21 9" stroke="#ABC4EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SUGGESTIONS = [
  { icon: <IconDoctor />,   label: 'Find a Doctor',      sub: 'Top specialists for you',  prompt: 'Help me find a specialist doctor' },
  { icon: <IconHospital />, label: 'Top Hospitals',      sub: 'JCI & NABH accredited',    prompt: 'Show me the top hospitals in India' },
  { icon: <IconCalendar />, label: 'Book Appointment',   sub: 'Schedule a consultation',  prompt: 'I want to book an appointment' },
  { icon: <IconTravel />,   label: 'Travel & Visa',      sub: 'Plan your journey',        prompt: 'Help me plan my travel and visa' },
];

const CARD_BG = 'radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.56) 100%)';

// ── Camera SVG (from Figma: fluent:camera-add-24-regular) ────────
const CameraIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 4H9.5L7 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7H17L14.5 4Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16.5C13.933 16.5 15.5 14.933 15.5 13C15.5 11.067 13.933 9.5 12 9.5C10.067 9.5 8.5 11.067 8.5 13C8.5 14.933 10.067 16.5 12 16.5Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 7V5M18 6H20" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function ChatScreen({ onNavigate, isGuest = false }) {
  const [messages, setMessages]     = useState(isGuest ? [] : chatMessages);
  const [input, setInput]           = useState('');
  const [hasStarted, setHasStarted] = useState(!isGuest && chatMessages.length > 0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (hasStarted) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, hasStarted]);

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setHasStarted(true);
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: msg, time: 'Now' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1, sender: 'support', name: 'Care Co-ordinator',
        text: 'Thank you for reaching out! Our medical coordinator will get back to you shortly. Feel free to share any reports or documents to help us assist you better.',
        time: 'Now', avatar: 'CC',
      }]);
    }, 1000);
  };

  // ── INITIAL STATE ────────────────────────────────────────────────
  if (!hasStarted) {
    return (
      <div className="flex flex-col h-full screen-enter" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Blue atmospheric blob — top-right */}
        <div style={{
          position: 'absolute',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'rgba(171,196,235,0.28)',
          top: -350, right: -250,
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Content */}
        <div className="flex flex-col h-full" style={{ position: 'relative', zIndex: 1, padding: '0 16px' }}>

          {/* Header */}
          <div style={{ paddingTop: 16, paddingBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <button onClick={() => onNavigate('home')} className="transition-all active:scale-90"
                style={{ width: 48, height: 48, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <ArrowLeft size={18} color="#7C7C7C" />
              </button>
              <div>
                <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '23px' }}>
                  Care Co-ordinator
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
                  <span style={{ fontSize: 11, color: '#22C55E', fontWeight: 500 }}>Online</span>
                </div>
              </div>
            </div>
            <button className="transition-all active:scale-90"
              style={{ width: 48, height: 48, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <SlidersHorizontal size={18} color="#7C7C7C" />
            </button>
          </div>

          {/* Welcome block */}
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
            <p style={{ margin: 0, fontSize: 28, fontWeight: 600, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '36px' }}>
              Hi Kwame Mensah,
            </p>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 400, color: '#7C7C7C', lineHeight: '22px', maxWidth: 280 }}>
              This is Med. I'll help you find doctors, book appointments and travel easily.
            </p>

            {/* Logo illustration */}
            <div style={{ position: 'absolute', right: -16, top: -20, width: 140, height: 140, borderRadius: '50%', background: 'rgba(171,196,235,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'rgba(171,196,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.png" alt="Med" style={{ width: 72, height: 72, objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          {/* 2×2 Suggestion cards */}
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
            {[SUGGESTIONS.slice(0, 2), SUGGESTIONS.slice(2, 4)].map((row, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex', gap: 12 }}>
                {row.map((s, i) => (
                  <button key={i} onClick={() => send(s.prompt)}
                    className="transition-all active:scale-95"
                    style={{
                      flex: 1, height: 118, borderRadius: 16, padding: 16, cursor: 'pointer',
                      background: CARD_BG,
                      border: '1px solid #C6C6C6',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
                      textAlign: 'left',
                    }}>
                    {/* Icon circle */}
                    <div style={{ width: 41, height: 41, borderRadius: 21, background: '#fff', border: '1px solid rgba(171,196,235,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(171,196,235,0.25)' }}>
                      {s.icon}
                    </div>
                    {/* Labels */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '17px' }}>{s.label}</span>
                      <span style={{ fontSize: 11, fontWeight: 400, color: '#7C7C7C', lineHeight: '14px' }}>{s.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div style={{ paddingBottom: 20, paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Camera button */}
            <button className="transition-all active:scale-90"
              style={{ width: 52, height: 52, borderRadius: '100%', background: '#fff', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <CameraIcon />
            </button>
            {/* Input pill */}
            <div style={{ flex: 1, height: 52, borderRadius: 40, background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8 }}>
              <input
                className="flex-1 text-sm outline-none bg-transparent"
                style={{ color: '#313131', fontSize: 14 }}
                placeholder="Type a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
              />
              {input.trim()
                ? <button onClick={() => send()} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
                    <Send size={18} color="#ABC4EB" />
                  </button>
                : <Mic size={18} color="#7C7C7C" />
              }
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ── ACTIVE CHAT STATE ────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 16px 12px' }}>
        <button onClick={() => onNavigate('home')} className="transition-all active:scale-90"
          style={{ width: 40, height: 40, borderRadius: '100%', background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <ArrowLeft size={18} color="#313131" />
        </button>
        <div style={{ width: 40, height: 40, borderRadius: '100%', background: 'linear-gradient(135deg, #ABC4EB, #1B4FBF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>CC</span>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Care Co-ordinator</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ fontSize: 11, color: '#22C55E', fontWeight: 500 }}>Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar" style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 8px' }}>
          <div style={{ flex: 1, height: 1, background: '#E8E8E8' }} />
          <span style={{ fontSize: 11, color: '#7C7C7C' }}>Today</span>
          <div style={{ flex: 1, height: 1, background: '#E8E8E8' }} />
        </div>

        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', gap: 8, flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end' }}>
            {msg.sender === 'support' && (
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #ABC4EB, #1B4FBF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>CC</span>
              </div>
            )}
            <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', gap: 4, alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                padding: '10px 14px', borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: msg.sender === 'user' ? '#ABC4EB' : '#fff',
                color: msg.sender === 'user' ? '#fff' : '#313131',
                fontSize: 14, lineHeight: '20px',
                boxShadow: msg.sender === 'support' ? '0 1px 4px rgba(0,0,0,0.06)' : '0 2px 8px rgba(171,196,235,0.4)',
              }}>
                {msg.text}
              </div>
              <span style={{ fontSize: 10, color: '#7C7C7C', paddingLeft: 4, paddingRight: 4 }}>{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <div style={{ padding: '10px 16px 16px', borderTop: '1px solid #E8E8E8', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button className="transition-all active:scale-90"
          style={{ width: 44, height: 44, borderRadius: '100%', background: '#fff', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <CameraIcon />
        </button>
        <div style={{ flex: 1, height: 44, borderRadius: 40, background: '#F1F1F1', border: '1px solid #C6C6C6', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8 }}>
          <input
            className="flex-1 outline-none bg-transparent"
            style={{ color: '#313131', fontSize: 14 }}
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
          />
          {input.trim()
            ? <button onClick={() => send()} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
                <Send size={16} color="#ABC4EB" />
              </button>
            : <Mic size={16} color="#7C7C7C" />
          }
        </div>
      </div>
    </div>
  );
}
