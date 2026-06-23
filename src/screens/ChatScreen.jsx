import { ArrowLeft } from 'lucide-react';

export default function ChatScreen({ onNavigate, isGuest = false }) {
  return (
    <div className="flex flex-col h-full bg-transparent">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 16px 0' }}>
        <button
          onClick={() => onNavigate('home')}
          className="transition-all active:scale-90"
          style={{
            width: 48, height: 48, borderRadius: '100%',
            background: '#F1F1F1', border: '1px solid #C6C6C6',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexShrink: 0,
          }}>
          <ArrowLeft size={20} color="#313131" />
        </button>
        <span style={{ fontSize: 18, fontWeight: 700, color: '#313131', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Care Co-ordinator
        </span>
      </div>

    </div>
  );
}
