import { ArrowLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    name: 'Emmanuel O.',
    age: 58,
    country: '🇳🇬 Nigeria',
    treatment: 'Cardiac Bypass Surgery',
    hospital: 'Apollo Hospital, Delhi',
    hospitalIcon: '🏥',
    costIndia: '$9,500',
    costHome: '$120,000',
    duration: '21 days',
    avatar: 'EO',
    avatarColor: '#1B4FBF',
    quote: '"I was told I needed urgent surgery. My local hospital quoted $120,000. Med Global 360 arranged everything — flight, hotel, and full treatment — for $9,500. I came home a new man."',
    outcome: 'Full recovery. Back home in 21 days.',
    outcomeColor: '#059669',
    tags: ['Cardiology', 'Apollo Delhi'],
  },
  {
    id: 2,
    name: 'Amina K.',
    age: 44,
    country: '🇰🇪 Kenya',
    treatment: 'Knee Replacement',
    hospital: 'Fortis Hospital, Mumbai',
    hospitalIcon: '🏥',
    costIndia: '$5,100',
    costHome: '$38,000',
    duration: '12 days',
    avatar: 'AK',
    avatarColor: '#0D9488',
    quote: '"The surgeon spoke English perfectly and explained every step. The care felt genuinely personal — not like a production line. I was walking without pain on day 10."',
    outcome: 'Walking without pain after 10 days.',
    outcomeColor: '#059669',
    tags: ['Orthopedics', 'Fortis Mumbai'],
  },
  {
    id: 3,
    name: 'Jean-Pierre M.',
    age: 62,
    country: '🇫🇷 France',
    treatment: 'Liver Transplant',
    hospital: 'Max Hospital, Delhi',
    hospitalIcon: '🏥',
    costIndia: '$28,000',
    costHome: '$200,000',
    duration: '35 days',
    avatar: 'JP',
    avatarColor: '#7C3AED',
    quote: '"The 6-month waiting list in France was not an option for me. Med Global 360 found me a matched donor and a world-class surgical team in India. Three weeks later, I had a new liver."',
    outcome: 'Successful transplant. 2-year follow-up clear.',
    outcomeColor: '#059669',
    tags: ['Transplant', 'Max Delhi'],
  },
  {
    id: 4,
    name: 'Fatima A.',
    age: 35,
    country: '🇦🇪 UAE',
    treatment: 'Cancer Treatment',
    hospital: 'Tata Memorial, Mumbai',
    hospitalIcon: '🏥',
    costIndia: '$14,000',
    costHome: '$110,000',
    duration: '56 days',
    avatar: 'FA',
    avatarColor: '#EC4899',
    quote: '"World-leading oncologists, the same treatment protocol as the top US hospitals, at 15% of the cost. My family was with me. The team at Med Global 360 treated us like family too."',
    outcome: 'Complete remission after 8 weeks of treatment.',
    outcomeColor: '#059669',
    tags: ['Oncology', 'Tata Memorial'],
  },
];

export default function CaseStudiesScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #7C3AED 0%, #1B4FBF 100%)' }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
          style={{ background: 'white', transform: 'translate(30%, -30%)' }} />

        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowLeft size={18} color="white" />
          </button>
          <span className="text-white/70 text-xs">About Us</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
          style={{ background: 'rgba(255,255,255,0.15)' }}>
          <span className="text-sm">📖</span>
          <span className="text-white text-xs font-semibold">Case Studies</span>
        </div>

        <h1 className="text-white font-bold text-2xl leading-tight mb-2"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Real patients.<br />Real outcomes.
        </h1>
        <p className="text-white/75 text-sm leading-relaxed">
          From cardiac surgery to cancer treatment — here are the stories of patients who trusted us with their journey.
        </p>

        {/* Summary stats */}
        <div className="flex gap-3 mt-4">
          {[
            { value: '500+', label: 'Patients helped' },
            { value: '50+',  label: 'Countries'       },
            { value: '98%',  label: 'Satisfied'       },
          ].map(s => (
            <div key={s.label} className="flex-1 rounded-xl py-2 text-center"
              style={{ background: 'rgba(255,255,255,0.12)' }}>
              <p className="text-white font-bold text-base">{s.value}</p>
              <p className="text-white/60 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-4">

        {/* Case cards */}
        {cases.map(c => (
          <div key={c.id} className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>

            {/* Card header */}
            <div className="px-4 pt-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: c.avatarColor }}>
                  {c.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-800 text-sm"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {c.name}, {c.age}
                    </p>
                  </div>
                  <p className="text-slate-400 text-xs">{c.country}</p>
                </div>
                <div className="flex gap-1">
                  {c.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: '#F1F5F9', color: '#475569' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Treatment + cost */}
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{c.hospitalIcon}</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{c.treatment}</p>
                  <p className="text-slate-400 text-xs">{c.hospital} · {c.duration}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-xl px-3 py-2" style={{ background: '#F0FDF4' }}>
                  <p className="text-xs text-slate-500">India cost</p>
                  <p className="font-bold text-sm" style={{ color: '#059669' }}>{c.costIndia}</p>
                </div>
                <div className="flex-1 rounded-xl px-3 py-2 bg-slate-50">
                  <p className="text-xs text-slate-400">Home country</p>
                  <p className="font-bold text-sm text-slate-400 line-through">{c.costHome}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="px-4 py-3 border-b border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed italic">{c.quote}</p>
            </div>

            {/* Outcome */}
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.outcomeColor }} />
              <p className="text-sm font-semibold" style={{ color: c.outcomeColor }}>{c.outcome}</p>
            </div>
          </div>
        ))}

        {/* Cross links */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Learn More</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => onNavigate('whyMedGlobal')}
              className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <span className="text-2xl">🌟</span>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 text-sm">Why Med Global 360?</p>
                <p className="text-slate-400 text-xs">Your end-to-end medical travel partner</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
            <button onClick={() => onNavigate('whyIndia')}
              className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <span className="text-2xl">🇮🇳</span>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 text-sm">Why India?</p>
                <p className="text-slate-400 text-xs">The world's leading medical tourism destination</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
          </div>
        </div>

        <button onClick={() => onNavigate('contact')}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white transition-all active:scale-95 mb-2"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #1B4FBF)' }}>
          Start Your Journey
        </button>
      </div>
    </div>
  );
}
