import { Home, Compass, Route, MessageCircle, User } from 'lucide-react';

const tabs = [
  { key: 'home',    label: 'Home',       Icon: Home          },
  { key: 'explore', label: 'Explore',    Icon: Compass       },
  { key: 'journey', label: 'My Journey', Icon: Route         },
  { key: 'chat',    label: 'Chat',       Icon: MessageCircle },
  { key: 'profile', label: 'Profile',    Icon: User          },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <div
      className="flex items-center justify-around px-2 pt-2 pb-3 sm:rounded-b-[44px]"
      style={{
        background: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.65)',
        boxShadow: '0 -1px 0 rgba(0,0,0,0.06), 0 -8px 32px rgba(0,0,0,0.04)',
        minHeight: 64,
        flexShrink: 0,
      }}
    >
      {tabs.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all active:scale-95"
            style={{ minWidth: 52 }}
          >
            <div className="relative">
              <Icon
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                color={isActive ? '#1B4FBF' : '#94A3B8'}
              />
              {key === 'chat' && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
              )}
            </div>
            <span
              className="text-caption font-medium"
              style={{ color: isActive ? '#1B4FBF' : '#94A3B8', fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
            </span>
            {isActive && (
              <div className="w-4 h-0.5 rounded-full mt-0.5" style={{ background: '#1B4FBF' }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
