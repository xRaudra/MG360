import { ArrowLeft } from 'lucide-react';

export default function BackButton({ onPress }) {
  return (
    <button
      onClick={onPress}
      className="rounded-full flex items-center justify-center flex-shrink-0 transition-all active:opacity-70"
      style={{ width: 40, height: 40, background: '#F1F1F1', border: '1px solid #C6C6C6', cursor: 'pointer' }}>
      <ArrowLeft size={18} color="#313131" />
    </button>
  );
}
