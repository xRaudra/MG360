import { ArrowLeft } from 'lucide-react';

export default function ChatScreen({ onNavigate, isGuest = false }) {
  return (
    <div className="flex flex-col h-full bg-transparent">

      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="rounded-full flex items-center justify-center flex-shrink-0 transition-all active:opacity-70"
            style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6' }}>
            <ArrowLeft size={18} color="#313131" />
          </button>
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#313131' }}>
            Care Co-ordinator
          </h2>
        </div>
      </div>

    </div>
  );
}
