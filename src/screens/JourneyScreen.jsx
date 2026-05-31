import { useState } from 'react';
import { Calendar, Share2, FileText, Plane, Check, ChevronRight, ChevronDown } from 'lucide-react';
import { journeySteps } from '../data/mockData';

const stageConfig = {
  Lead:       { label: 'Lead Stage',       color: '#1B4FBF', bg: '#EFF6FF' },
  Conversion: { label: 'Conversion Stage', color: '#7C3AED', bg: '#FAF5FF' },
  Treatment:  { label: 'Treatment Stage',  color: '#0D9488', bg: '#F0FDFA' },
  Recovery:   { label: 'Recovery Stage',   color: '#059669', bg: '#F0FDF4' },
};

const stageOrder = ['Lead', 'Conversion', 'Treatment', 'Recovery'];

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

const travelDetails = [
  { label: 'Departure',        value: 'Lagos (LOS)',         sub: 'Feb 1, 2025 · 08:45 AM', icon: '🛫' },
  { label: 'Arrival',          value: 'Delhi (DEL)',         sub: 'Feb 2, 2025 · 06:30 AM', icon: '🛬' },
  { label: 'Hotel',            value: 'Leela Palace, Delhi', sub: 'Feb 2–14 · 12 nights',   icon: '🏨' },
  { label: 'Airport Transfer', value: 'Car arranged',        sub: 'Apollo Hospital',         icon: '🚗' },
];

// Documents linked to each step id
const stepDocs = {
  2:  [{ name: 'MRI Report', icon: '🧠' }, { name: 'Blood Work Results', icon: '🩸' }],
  4:  [{ name: 'Passport Copy', icon: '🛂' }],
  5:  [{ name: 'Medical Visa', icon: '📑' }],
  6:  [{ name: 'Flight Ticket', icon: '✈️' }],
  7:  [{ name: 'Travel Insurance', icon: '🛡️' }],
};

export default function JourneyScreen({ onNavigate }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (id) => setExpandedStep(prev => prev === id ? null : id);

  const handleShareLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const doneCount = journeySteps.filter(s => s.status === 'done').length;
  const progress  = Math.round((doneCount / journeySteps.length) * 100);

  const grouped = stageOrder.map(stage => ({
    stage,
    ...stageConfig[stage],
    steps: journeySteps.filter(s => s.stage === stage),
  }));

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="px-4 pt-4 pb-5"
        style={{ background: 'linear-gradient(160deg, #7C3AED 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Active Journey</p>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Cardiac Bypass
            </h2>
          </div>
          <button onClick={() => onNavigate('careCircle')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <Share2 size={16} color="white" />
          </button>
        </div>

        {/* Progress */}
        <div className="mb-2">
          <div className="flex justify-between text-xs text-white/70 mb-1.5">
            <span>{doneCount} of {journeySteps.length} steps complete</span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/20">
            <div className="h-2 rounded-full bg-white transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Stage pills */}
        <div className="flex gap-1.5 mt-3">
          {stageOrder.map(s => {
            const cfg     = stageConfig[s];
            const steps   = journeySteps.filter(st => st.stage === s);
            const done    = steps.filter(st => st.status === 'done').length;
            const isActive = steps.some(st => st.status === 'active');
            const allDone  = done === steps.length;
            return (
              <div key={s} className="flex-1 rounded-lg py-1.5 px-1 text-center"
                style={{ background: allDone ? 'rgba(255,255,255,0.25)' : isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)' }}>
                <p className="text-white text-xs font-bold leading-none">
                  {allDone ? '✓' : isActive ? '●' : `${done}/${steps.length}`}
                </p>
                <p className="text-white/60 leading-tight mt-0.5" style={{ fontSize: 9 }}>{s}</p>
              </div>
            );
          })}
        </div>

        {/* Hospital + Date */}
        <div className="flex items-center justify-between mt-3 px-4 py-2.5 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.12)' }}>
          <div className="flex items-center gap-2">
            <span className="text-base">🏥</span>
            <span className="text-white text-xs font-semibold">Apollo Hospital, Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">📅</span>
            <span className="text-white text-xs font-semibold">Feb 3, 2025</span>
          </div>
        </div>
      </div>

      {/* ── Scrollable content ─────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">

        {/* ── Quick-access cards ─────────────────────────────── */}
        <div className="flex gap-3 px-4 pt-4 pb-2">
          <button onClick={() => onNavigate('journeyDocuments')}
            className="flex-1 flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-left transition-all active:scale-95 bg-white"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <FileText size={17} color="#1B4FBF" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 text-sm">Documents</p>
              <p className="text-slate-400 text-xs">
                {docSections.reduce((n, s) => n + s.docs.length, 0)} files
              </p>
            </div>
            <ChevronRight size={14} color="#CBD5E1" />
          </button>

          <button onClick={() => onNavigate('journeyTravel')}
            className="flex-1 flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-left transition-all active:scale-95 bg-white"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <Plane size={17} color="#0D9488" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 text-sm">Travel</p>
              <p className="text-slate-400 text-xs">Confirmed ✓</p>
            </div>
            <ChevronRight size={14} color="#CBD5E1" />
          </button>
        </div>

        {/* ── Timeline ───────────────────────────────────────── */}
        <div className="px-4 pt-2 pb-4">
          {grouped.map((group, gi) => {
            const isLastGroup = gi === grouped.length - 1;
            return (
              <div key={group.stage}>
                <div className="flex items-center gap-2 mb-3" style={{ marginTop: gi === 0 ? 4 : 8 }}>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: group.bg }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: group.color }} />
                    <span className="text-xs font-bold" style={{ color: group.color }}>{group.label}</span>
                  </div>
                  <div className="flex-1 h-px" style={{ background: group.color + '30' }} />
                </div>

                {group.steps.map((step, i) => {
                  const isLastOfAll   = isLastGroup && i === group.steps.length - 1;
                  const showConnector = !isLastOfAll;
                  const isExpanded    = expandedStep === step.id;
                  const linked        = stepDocs[step.id] || [];
                  const dotBg         = step.status === 'done' ? '#10B981' : step.status === 'active' ? '#1B4FBF' : '#E2E8F0';

                  return (
                    <div key={step.id} className="flex gap-3 mb-1">
                      {/* Dot + connector */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold"
                          style={{ background: dotBg, color: step.status === 'upcoming' ? '#94A3B8' : 'white' }}>
                          {step.status === 'done' ? '✓' : step.icon}
                        </div>
                        {showConnector && (
                          <div className="w-0.5 flex-1 my-1"
                            style={{ background: step.status === 'done' ? '#10B981' : '#E2E8F0', minHeight: 20 }} />
                        )}
                      </div>

                      {/* Accordion card */}
                      <div className="flex-1 mb-3">
                        <div className={`rounded-2xl overflow-hidden ${step.status === 'active' ? 'border-2 border-[#1B4FBF]' : ''}`}
                          style={{
                            background: 'white',
                            boxShadow: step.status === 'active' ? '0 4px 16px rgba(27,79,191,0.15)' : '0 1px 4px rgba(0,0,0,0.06)',
                          }}>

                          {/* Collapsed row — always visible */}
                          <button onClick={() => toggleStep(step.id)}
                            className="flex items-center gap-2 w-full px-3.5 py-3 text-left transition-all active:bg-slate-50">
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm leading-tight"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: step.status === 'upcoming' ? '#94A3B8' : '#1E293B' }}>
                                {step.title}
                              </p>
                              <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                                <Calendar size={10} />{step.date}
                                {step.time !== '—' && <span className="ml-1">{step.time}</span>}
                              </p>
                            </div>
                            {step.status === 'active' && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-[#1B4FBF] flex-shrink-0">Now</span>
                            )}
                            <ChevronDown size={15} color="#CBD5E1"
                              style={{ flexShrink: 0, marginLeft: 4, transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                          </button>

                          {/* Expanded detail */}
                          {isExpanded && (
                            <div className="px-3.5 pb-3.5" style={{ borderTop: '1px solid #F1F5F9' }}>
                              <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">{step.desc}</p>
                              {linked.length > 0 && (
                                <div className="mt-3">
                                  <p className="text-xs font-semibold text-slate-400 mb-2">Documents</p>
                                  <div className="flex flex-wrap gap-2">
                                    {linked.map(doc => (
                                      <button key={doc.name}
                                        onClick={() => onNavigate('journeyDocuments')}
                                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 transition-all active:scale-95">
                                        <span className="text-sm">{doc.icon}</span>
                                        <span className="text-xs font-medium text-slate-600">{doc.name}</span>
                                        <ChevronRight size={11} color="#CBD5E1" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* Share Journey */}
          <div className="mt-2 rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #7C3AED, #1B4FBF)' }}>
            <div className="flex items-center gap-2 mb-2">
              <Share2 size={16} color="white" />
              <h3 className="text-white font-semibold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Share Journey
              </h3>
            </div>
            <p className="text-white/70 text-xs mb-3">
              Share your full journey timeline with family or a relative
            </p>
            <button onClick={handleShareLink}
              className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 transition-all active:scale-95">
              {linkCopied ? <><Check size={12} /> Copied!</> : 'Share Journey Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
