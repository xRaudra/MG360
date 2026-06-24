import { useState, useRef, useEffect } from 'react';
import BackButton from '../components/BackButton';

// ─── Icons ────────────────────────────────────────────────────────────────────

const CameraAddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14.5 4H9.5L7.5 6.5H4.5C3.4 6.5 2.5 7.4 2.5 8.5V17.5C2.5 18.6 3.4 19.5 4.5 19.5H19.5C20.6 19.5 21.5 18.6 21.5 17.5V8.5C21.5 7.4 20.6 6.5 19.5 6.5H16.5L14.5 4Z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M18.5 6.5V4.5M17.5 5.5H19.5" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="2" width="6" height="11" rx="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M5 11C5 14.866 8.134 18 12 18C15.866 18 19 14.866 19 11" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18V22" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13" stroke="#ABC4EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#ABC4EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Suggestion card icons
const CostIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M12 6v1.5M12 16.5V18" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5s2.5.9 2.5 2c0 2.5-5 2-5 4.5 0 1.1 1.1 2 2.5 2s2.5-.9 2.5-2" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SpecialistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 13v3M15.5 14.5h3" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M8 13h8M8 17h5" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RecoveryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="17" rx="3" stroke="#7C7C7C" strokeWidth="1.5"/>
    <path d="M3 9h18" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 2v3M16 2v3" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 14h2v2H8zM11 14h2v2h-2zM14 14h2v2h-2z" fill="#7C7C7C"/>
  </svg>
);

// ─── Suggestion questions (UX-researched for medical tourism) ─────────────────

const SUGGESTIONS = [
  { icon: <CostIcon />,       text: 'How much will my treatment cost?' },
  { icon: <SpecialistIcon />, text: 'How do I find the right specialist?' },
  { icon: <DocumentIcon />,   text: 'What documents will I need?' },
  { icon: <RecoveryIcon />,   text: 'How long is the recovery stay?' },
];

// ─── AI mock responses ────────────────────────────────────────────────────────

function getAIResponse(text) {
  const q = text.toLowerCase();
  if (q.includes('cost') || q.includes('price') || q.includes('how much') || q.includes('save') || q.includes('afford')) {
    return "Treatment in India costs 60–80% less than in the US or UK. For example, a knee replacement that costs $40,000 in the US is typically $6,000–$9,000 here — with the same quality of care.\n\nShare your specific procedure and I'll get you a detailed estimate. 💙";
  }
  if (q.includes('specialist') || q.includes('doctor') || q.includes('find') || q.includes('right doctor')) {
    return "I can match you with the right specialist based on your condition, budget, and location preference.\n\nCould you tell me what condition you're seeking treatment for? I'll show you top-rated doctors with verified credentials and patient reviews. 🏥";
  }
  if (q.includes('document') || q.includes('visa') || q.includes('paperwork') || q.includes('need')) {
    return "For medical travel to India you'll typically need:\n✓ Medical visa (we'll help you apply)\n✓ Existing medical reports & test results\n✓ Passport valid for 6+ months\n✓ Travel insurance\n\nYour Care Co-ordinator will walk you through every step. 📋";
  }
  if (q.includes('recovery') || q.includes('long') || q.includes('stay') || q.includes('duration') || q.includes('how long')) {
    return "Recovery time depends on the procedure. For example:\n• Cardiac surgery: 7–14 days in-hospital, ~3 weeks post-op\n• Knee replacement: 3–5 days in-hospital, ~2 weeks post-op\n• IVF cycle: 14–18 days total\n\nTell me your procedure and I'll give you a personalised timeline. 🗓️";
  }
  if (q.includes('insurance')) {
    return "Several hospitals in our network work with international insurance providers. Share your insurer's name and I'll check compatibility.\n\nIf your insurance doesn't cover international treatment, we also have flexible financing options available. 🛡️";
  }
  if (q.includes('appointment') || q.includes('book') || q.includes('schedule')) {
    return "Booking is simple! Once you choose your doctor, I can schedule a free video consultation first — so you can speak with the specialist before you travel.\n\nDo you have a doctor or hospital in mind, or would you like me to recommend one? 📅";
  }
  if (q.includes('hospital') || q.includes('jci') || q.includes('accredited')) {
    return "All hospitals in our network are NABH or JCI accredited — the same international standards as top hospitals in the US and Europe.\n\nWould you like to see hospitals by city, specialty, or accreditation level? 🏨";
  }
  return "Thank you for reaching out! Your Care Co-ordinator will join this chat shortly.\n\nMeanwhile, feel free to ask me anything — costs, specialists, travel logistics, or paperwork. I'm here to help! 😊";
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CARD_STYLE = {
  flex: '0 0 calc(50% - 8px)',
  borderRadius: 16,
  background: 'rgba(255,255,255,0.25)',
  border: '1px solid rgba(255,255,255,0.55)',
  boxShadow: '0 8px 32px rgba(171,196,235,0.18), inset 0 1px 0 rgba(255,255,255,0.7)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  padding: 16,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  transition: 'transform 0.15s ease, opacity 0.15s ease',
  textAlign: 'left',
};

// ─── Typing indicator ─────────────────────────────────────────────────────────

const TypingIndicator = () => (
  <div style={{
    display: 'inline-flex', gap: 5, padding: '12px 16px',
    background: 'rgba(255,255,255,0.72)',
    borderRadius: '18px 18px 18px 4px',
    border: '1px solid rgba(198,198,198,0.35)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    alignItems: 'center',
  }}>
    {[0, 1, 2].map(i => (
      <span key={i} className="typing-dot" style={{
        width: 7, height: 7, borderRadius: '50%',
        background: '#ABC4EB', display: 'block',
        animationDelay: `${i * 0.18}s`,
      }} />
    ))}
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChatScreen({ onNavigate, isGuest = false, userName = 'User' }) {
  const [message, setMessage]     = useState('');
  const [messages, setMessages]   = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping]   = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const msgText = (text !== undefined ? text : message).trim();
    if (!msgText) return;

    setMessages(prev => [...prev, { role: 'user', text: msgText, id: Date.now() }]);
    setHasStarted(true);
    setMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: getAIResponse(msgText),
        id: Date.now() + 1,
      }]);
    }, 1400);
  };

  const displayName = isGuest ? 'Guest User' : userName;
  const hasInput    = message.trim().length > 0;

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* ── Header ── */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3">
          <BackButton onPress={() => onNavigate('home')} />
          <h2 className="font-bold text-lg" style={{ color: '#313131' }}>
            Care Co-ordinator
          </h2>
        </div>
      </div>

      {/* ── Pre-chat: greeting + suggestion cards ── */}
      {!hasStarted && (
        <>
          <div style={{ padding: '8px 16px 0' }}>
            <h1 style={{
              fontSize: 28, fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
              color: '#313131', lineHeight: 1.3, margin: 0,
            }}>
              Hi {displayName},
            </h1>
            <p style={{
              fontSize: 15, fontWeight: 400,
              fontFamily: 'DM Sans, sans-serif',
              color: '#7C7C7C', lineHeight: 1.6,
              margin: '10px 0 0',
            }}>
              I'm Med, your AI health assistant. I'm here to help while your Care Co-ordinator gets ready to join you.
            </p>
          </div>

          <div className="flex-1" />

          <div style={{ padding: '0 16px 12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s.text)}
                  className="active:scale-95 active:opacity-80"
                  style={CARD_STYLE}
                >
                  <div style={{
                    width: 41, height: 41, borderRadius: '50%',
                    background: '#fff', border: '1px solid #E8E8E8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>
                  <p style={{
                    fontSize: 13, fontWeight: 400,
                    color: '#7C7C7C', fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.45, margin: 0,
                  }}>
                    {s.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── Active chat: message bubbles ── */}
      {hasStarted && (
        <div
          className="flex-1 overflow-y-auto hide-scrollbar"
          style={{ padding: '4px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
            >
              {msg.role === 'user' ? (
                <div style={{
                  maxWidth: '76%',
                  background: 'linear-gradient(135deg, #ABC4EB, #8AAEE0)',
                  borderRadius: '18px 18px 4px 18px',
                  padding: '10px 14px',
                  boxShadow: '0 2px 12px rgba(171,196,235,0.4)',
                }}>
                  <p style={{
                    fontSize: 14, fontWeight: 500, color: '#fff',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.5, margin: 0, whiteSpace: 'pre-line',
                  }}>
                    {msg.text}
                  </p>
                </div>
              ) : (
                <div style={{
                  maxWidth: '82%',
                  background: 'rgba(255,255,255,0.72)',
                  borderRadius: '18px 18px 18px 4px',
                  padding: '10px 14px',
                  border: '1px solid rgba(198,198,198,0.35)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}>
                  <p style={{
                    fontSize: 14, fontWeight: 400, color: '#313131',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line',
                  }}>
                    {msg.text}
                  </p>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <TypingIndicator />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* ── Input bar ── */}
      <div style={{ padding: '0 16px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>

        <button
          className="flex-shrink-0 flex items-center justify-center transition-all active:opacity-70"
          style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', border: '1px solid #C6C6C6', cursor: 'pointer' }}
        >
          <CameraAddIcon />
        </button>

        <div style={{
          flex: 1, height: 52, borderRadius: 40,
          background: 'rgba(241,241,241,0.8)', border: '1px solid #C6C6C6',
          display: 'flex', alignItems: 'center', padding: '0 6px 0 16px', gap: 8,
        }}>
          <input
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 16, fontWeight: 400, color: '#313131', fontFamily: 'DM Sans, sans-serif' }}
            placeholder="Ask Med anything…"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={() => hasInput && sendMessage()}
            style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
              background: hasInput ? 'rgba(171,196,235,0.18)' : 'transparent',
              border: 'none', cursor: hasInput ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
          >
            {hasInput ? <SendIcon /> : <MicIcon />}
          </button>
        </div>

      </div>

    </div>
  );
}
