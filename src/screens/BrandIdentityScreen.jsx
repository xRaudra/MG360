import { ArrowLeft } from 'lucide-react';

export default function BrandIdentityScreen({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F8FAFC' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '52px 16px 14px',
        background: 'white',
        borderBottom: '1px solid #F1F5F9',
        flexShrink: 0,
      }}>
        <button
          onClick={() => onNavigate('profile')}
          type="button"
          style={{
            width: 36, height: 36,
            borderRadius: 999,
            background: '#F1F5F9',
            border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} color="#475569" />
        </button>
        <span style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 17, fontWeight: 700,
          color: '#1E293B',
        }}>
          Brand &amp; Identity
        </span>
      </div>

      {/* iframe */}
      <iframe
        src="/brand-identity.html"
        title="Brand & Identity"
        style={{ flex: 1, border: 'none', width: '100%', display: 'block' }}
      />
    </div>
  );
}
