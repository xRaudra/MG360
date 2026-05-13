import { ArrowLeft, Eye, Lock, Calendar } from 'lucide-react';
import { journeySteps } from '../data/mockData';

const permissionAccess = {
  view_only: [1, 2, 3, 4, 5],
  support:   [1, 2, 3, 4, 5, 6, 7],
  full:      [1, 2, 3, 4, 5, 6, 7, 8],
};

const permissionLabel = {
  view_only: 'View Only',
  support:   'Support Access',
  full:      'Full Caregiver',
};

export default function CaregiverJourneyScreen({ onNavigate, data: member }) {
  if (!member) return null;

  const accessSteps = permissionAccess[member.permission] || permissionAccess.view_only;
  const doneCount = journeySteps.filter(s => s.status === 'done').length;
  const progress  = Math.round((doneCount / journeySteps.length) * 100);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: 'linear-gradient(160deg, #7C3AED 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('memberDetail', member)}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Caregiver Preview
            </h2>
            <p className="text-white/60 text-xs">Viewing as {member.name.split(' ')[0]}</p>
          </div>
        </div>

        {/* Permission badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3"
          style={{ background: 'rgba(255,255,255,0.12)' }}>
          <Eye size={14} color="white" />
          <span className="text-white text-xs font-semibold">
            {permissionLabel[member.permission]} · {accessSteps.length} of {journeySteps.length} steps visible
          </span>
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

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-4">
        {journeySteps.map((step, i) => {
          const isVisible = accessSteps.includes(step.id);
          return (
            <div key={step.id} className="flex gap-3 mb-1">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
                  style={{
                    background: !isVisible
                      ? '#E2E8F0'
                      : step.status === 'done'   ? '#10B981'
                      : step.status === 'active' ? '#1B4FBF'
                      : '#E2E8F0',
                  }}>
                  {!isVisible
                    ? <Lock size={12} color="#94A3B8" />
                    : step.status === 'done' ? '✓' : step.icon}
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="w-0.5 flex-1 my-1"
                    style={{
                      background: step.status === 'done' && isVisible ? '#10B981' : '#E2E8F0',
                      minHeight: 24,
                    }} />
                )}
              </div>

              <div className="flex-1 mb-3">
                <div
                  className={`rounded-2xl p-3.5 ${step.status === 'active' && isVisible ? 'border-2 border-[#1B4FBF]' : ''}`}
                  style={{
                    background: !isVisible ? '#F8FAFC' : 'white',
                    boxShadow: step.status === 'active' && isVisible
                      ? '0 4px 16px rgba(27,79,191,0.15)'
                      : '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                  {!isVisible ? (
                    <div className="flex items-center gap-2">
                      <Lock size={14} color="#CBD5E1" />
                      <p className="text-slate-300 text-sm font-medium flex-1">{step.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">Restricted</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-slate-800 text-sm"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {step.title}
                          </p>
                          <p className="text-slate-500 text-xs mt-0.5">{step.desc}</p>
                        </div>
                        {step.status === 'active' && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-[#1B4FBF] flex-shrink-0 ml-2">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-slate-400 text-xs flex items-center gap-1">
                          <Calendar size={10} />{step.date}
                        </span>
                        {step.time !== '—' && (
                          <span className="text-slate-400 text-xs">{step.time}</span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
