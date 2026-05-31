import { ArrowLeft } from 'lucide-react';

const docSections = [
  {
    title: 'Medical Records',
    color: '#1B4FBF',
    bg: '#EFF6FF',
    docs: [
      { name: 'MRI Report',         date: 'Jan 10, 2025', size: '4.2 MB', icon: '🧠' },
      { name: 'Blood Work Results', date: 'Jan 12, 2025', size: '1.1 MB', icon: '🩸' },
    ],
  },
  {
    title: 'Identity & Visa',
    color: '#7C3AED',
    bg: '#FAF5FF',
    docs: [
      { name: 'Passport Copy', date: 'Jan 8, 2025',  size: '0.8 MB', icon: '🛂' },
      { name: 'Medical Visa',  date: 'Jan 22, 2025', size: '0.5 MB', icon: '📑' },
    ],
  },
  {
    title: 'Travel Documents',
    color: '#0D9488',
    bg: '#F0FDFA',
    docs: [
      { name: 'Flight Ticket',    date: 'Jan 25, 2025', size: '0.3 MB', icon: '✈️' },
      { name: 'Travel Insurance', date: 'Jan 25, 2025', size: '1.2 MB', icon: '🛡️' },
    ],
  },
];

const totalDocs = docSections.reduce((n, s) => n + s.docs.length, 0);

export default function DocumentsScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #7C3AED 100%)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('journey')}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <ArrowLeft size={18} color="white" />
            </button>
            <div>
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                My Documents
              </h2>
              <p className="text-white/60 text-xs">{totalDocs} files · Cardiac Bypass Journey</p>
            </div>
          </div>
          <label className="text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer transition-all active:opacity-80"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            + Upload
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
          </label>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-5">
        {docSections.map(section => (
          <div key={section.title}>
            {/* Section header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{ background: section.bg }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: section.color }} />
                <span className="text-xs font-bold" style={{ color: section.color }}>
                  {section.title}
                </span>
              </div>
              <div className="flex-1 h-px" style={{ background: section.color + '30' }} />
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {section.docs.map((d, i) => (
                <div key={d.name} className="flex items-center gap-3 px-4 py-3.5"
                  style={{ borderTop: i > 0 ? '1px solid #F1F5F9' : 'none' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: section.bg }}>
                    {d.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 text-sm">{d.name}</p>
                    <p className="text-slate-400 text-xs">{d.date} · {d.size}</p>
                  </div>
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all active:scale-95"
                    style={{ background: section.bg, color: section.color }}>
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-slate-400 text-center pb-4">
          Accepted formats: PDF, JPG, PNG · Max 5MB per file
        </p>
      </div>
    </div>
  );
}
