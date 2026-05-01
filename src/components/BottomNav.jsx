import { Home, Search, MapPin, MessageCircle, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', Icon: Home },
  { key: 'explore', label: 'Explore', Icon: Search },
  { key: 'journey', label: 'Journey', Icon: MapPin },
  { key: 'chat', label: 'Chat', Icon: MessageCircle },
  { key: 'profile', label: 'Profile', Icon: User },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <div className="flex items-center justify-around bg-white border-t border-slate-100 px-2 pb-2 pt-2"
      style={{ minHeight: 64 }}>
      {tabs.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all"
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
            <span className="text-caption font-medium"
              style={{ color: isActive ? '#1B4FBF' : '#94A3B8', fontFamily: "'Inter', sans-serif" }}>
              {label}
            </span>
            {isActive && (
              <div className="w-4 h-0.5 rounded-full bg-[#1B4FBF]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
