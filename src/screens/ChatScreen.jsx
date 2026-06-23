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

export default function ChatScreen({ onNavigate, isGuest = false }) {
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

      {/* Content area — grows to fill */}
      <div className="flex-1" />

      {/* Input bar — pinned to bottom */}
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
            style={{ fontSize: 16, fontWeight: 500, color: '#313131' }}
            placeholder="Type a message..."
          />
          <MicIcon />
        </div>

      </div>

    </div>
  );
}
