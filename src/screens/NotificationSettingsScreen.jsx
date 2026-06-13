import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const groups = [
  {
    title: 'Journey Updates',
    desc: 'Stay on top of your medical travel',
    color: '#1B4FBF',
    items: [
      { key: 'appointment',  label: 'Appointment Reminders',   desc: 'Upcoming consultations and surgery dates', default: true },
      { key: 'journey_step', label: 'Journey Milestones',      desc: 'When a step is completed or needs action',  default: true },
      { key: 'discharge',    label: 'Discharge & Return',      desc: 'Post-treatment and travel updates',         default: true },
    ],
  },
  {
    title: 'Medical & Documents',
    desc: 'Reports, prescriptions, and records',
    color: '#059669',
    items: [
      { key: 'doc_upload',   label: 'Document Uploads',   desc: 'When new files are added to your records', default: true },
      { key: 'report_ready', label: 'Report Reviews',     desc: 'When your doctor has reviewed a report',   default: true },
    ],
  },
  {
    title: 'Care Circle',
    desc: 'Family and caregiver activity',
    color: '#0D9488',
    items: [
      { key: 'circle_join',  label: 'Member Activity',  desc: 'When a member views your journey',       default: false },
      { key: 'circle_invite', label: 'Invite Accepted', desc: 'When someone joins your Care Circle',   default: true },
    ],
  },
  {
    title: 'Messages',
    desc: 'Chat and coordinator updates',
    color: '#7C3AED',
    items: [
      { key: 'chat_msg',    label: 'New Messages',         desc: 'Messages from your care team',            default: true },
      { key: 'coordinator', label: 'Coordinator Updates',  desc: 'Direct updates from Priya Nair',          default: true },
    ],
  },
  {
    title: 'Promotions',
    desc: 'Offers and newsletters',
    color: '#F59E0B',
    items: [
      { key: 'offers',    label: 'Special Offers',   desc: 'Treatment packages and discounts', default: false },
      { key: 'news',      label: 'Health Newsletter', desc: 'Monthly updates from MedGlobal360', default: false },
    ],
  },
];

const allKeys = groups.flatMap(g => g.items.map(i => i.key));
const defaults = Object.fromEntries(groups.flatMap(g => g.items.map(i => [i.key, i.default])));

export default function NotificationSettingsScreen({ onNavigate }) {
  const [enabled, setEnabled] = useState(defaults);
  const toggle = (key) => setEnabled(e => ({ ...e, [key]: !e[key] }));
  const enabledCount = Object.values(enabled).filter(Boolean).length;

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #F59E0B 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-1">
          <button onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Notifications
            </h2>
            <p className="text-white/60 text-xs">{enabledCount} of {allKeys.length} enabled</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-5">
        {groups.map(group => (
          <div key={group.title}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: group.color }} />
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{group.title}</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {group.items.map((item, i) => (
                <div key={item.key}
                  className="flex items-center gap-3 px-4 py-3.5"
                  style={{ borderBottom: i < group.items.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800 text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                  {/* Toggle */}
                  <button onClick={() => toggle(item.key)}
                    className="flex-shrink-0 w-11 h-6 rounded-full transition-all duration-200 relative"
                    style={{ background: enabled[item.key] ? group.color : '#E2E8F0' }}>
                    <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200"
                      style={{ left: enabled[item.key] ? '22px' : '2px' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-slate-400 text-center pb-4">
          You can change these preferences at any time. Critical journey alerts are always on.
        </p>
      </div>
    </div>
  );
}
