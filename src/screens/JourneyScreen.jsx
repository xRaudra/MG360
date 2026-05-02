import { useState } from 'react';
import { ArrowLeft, FileText, Calendar, Plane, Share2, ChevronRight } from 'lucide-react';
import { journeySteps } from '../data/mockData';

const tabs = ['Timeline', 'Documents', 'Travel'];

const docs = [
  { name: 'MRI Report', date: 'Jan 10, 2025', type: 'Medical', size: '4.2 MB', icon: '🧠' },
  { name: 'Blood Work Results', date: 'Jan 12, 2025', type: 'Medical', size: '1.1 MB', icon: '🩸' },
  { name: 'Passport Copy', date: 'Jan 8, 2025', type: 'Identity', size: '0.8 MB', icon: '🛂' },
  { name: 'Medical Visa', date: 'Jan 22, 2025', type: 'Travel', size: '0.5 MB', icon: '📑' },
  { name: 'Flight Ticket', date: 'Jan 25, 2025', type: 'Travel', size: '0.3 MB', icon: '✈️' },
  { name: 'Travel Insurance', date: 'Jan 25, 2025', type: 'Insurance', size: '1.2 MB', icon: '🛡️' },
];

const travelDetails = [
  { label: 'Departure', value: 'Lagos (LOS)', sub: 'Feb 1, 2025 · 08:45 AM', icon: '🛫' },
  { label: 'Arrival', value: 'Delhi (DEL)', sub: 'Feb 2, 2025 · 06:30 AM', icon: '🛬' },
  { label: 'Hotel', value: 'Leela Palace, Delhi', sub: 'Feb 2–14 · 12 nights', icon: '🏨' },
  { label: 'Airport Transfer', value: 'Car arranged', sub: 'Apollo Hospital', icon: '🚗' },
];

const statusColors = { done: '#10B981', active: '#1B4FBF', upcoming: '#94A3B8' };

export default function JourneyScreen({ onNavigate }) {
  const [tab, setTab] = useState('Timeline');

  const doneCount = journeySteps.filter(s => s.status === 'done').length;
  const progress = Math.round((doneCount / journeySteps.length) * 100);

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5"
        style={{ background: 'linear-gradient(160deg, #7C3AED 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-xs">Active Journey</p>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Cardiac Bypass
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => {}}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <Share2 size={16} color="white" />
            </button>
          </div>
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

      {/* Tabs */}
      <div className="flex bg-white px-4 border-b border-slate-100">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className="flex-1 py-3 text-sm font-semibold transition-all relative"
            style={{ color: tab === t ? '#1B4FBF' : '#94A3B8' }}>
            {t}
            {tab === t && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-[#1B4FBF]" />}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {tab === 'Timeline' && (
          <div className="px-4 py-4">
            {journeySteps.map((step, i) => (
              <div key={step.id} className="flex gap-3 mb-1">
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
                    style={{
                      background: step.status === 'done' ? '#10B981' : step.status === 'active' ? '#1B4FBF' : '#E2E8F0',
                    }}>
                    {step.status === 'done' ? '✓' : step.icon}
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="w-0.5 flex-1 my-1"
                      style={{ background: step.status === 'done' ? '#10B981' : '#E2E8F0', minHeight: 24 }} />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 mb-3">
                  <div className={`rounded-2xl p-3.5 ${step.status === 'active' ? 'bg-white border-2 border-[#1B4FBF]' : 'bg-white'}`}
                    style={{ boxShadow: step.status === 'active' ? '0 4px 16px rgba(27,79,191,0.15)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'Documents' && (
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-slate-500 font-medium">{docs.length} documents</p>
              <button className="text-xs text-[#1B4FBF] font-semibold px-3 py-1.5 rounded-full bg-blue-50">
                + Upload
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {docs.map(d => (
                <div key={d.name} className="flex items-center gap-3 bg-white rounded-2xl p-3.5"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {d.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 text-sm">{d.name}</p>
                    <p className="text-slate-400 text-xs">{d.date} · {d.size}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">{d.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'Travel' && (
          <div className="px-4 py-4 flex flex-col gap-3">
            {travelDetails.map(d => (
              <div key={d.label} className="flex items-center gap-4 bg-white rounded-2xl p-4"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {d.icon}
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-xs">{d.label}</p>
                  <p className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>{d.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{d.sub}</p>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </div>
            ))}

            <button className="w-full py-3.5 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-sm font-medium mt-1">
              + Add Travel Detail
            </button>

            {/* Share journey */}
            <div className="mt-2 rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #7C3AED, #1B4FBF)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Share2 size={16} color="white" />
                <h3 className="text-white font-semibold text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Share Journey
                </h3>
              </div>
              <p className="text-white/70 text-xs mb-3">Share your full journey timeline with family or a relative</p>
              <button className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-[#7C3AED]">
                Share Journey Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
