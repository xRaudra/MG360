import { useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book a consultation with a doctor?',
    a: 'Once you complete onboarding, go to Explore → Find Treatment, choose your condition, and tap on a doctor to request a consultation. Your dedicated care coordinator, Priya Nair, will confirm the appointment within 24 hours.',
  },
  {
    q: 'What documents do I need for treatment in India?',
    a: 'You will need: a valid passport (6+ months validity), recent medical reports (MRI, blood work, ECG as applicable), a medical visa (we help you apply), and travel insurance. Upload them in My Journey → Documents.',
  },
  {
    q: 'How does the payment process work?',
    a: 'Payments are made in stages. A small advance secures your appointment and hospital bed. The balance is paid on arrival. We provide a full cost breakdown before you commit — no hidden fees.',
  },
  {
    q: 'Can I bring family members with me?',
    a: 'Absolutely. India\'s hospitals are accustomed to family caregivers. We help arrange accommodation for companions. You can also add them to your Care Circle so they receive real-time updates.',
  },
  {
    q: 'How do I apply for a medical visa to India?',
    a: 'We guide you through the entire e-Medical Visa process. Once your treatment is confirmed, your coordinator will send you a step-by-step guide. Most visas are approved within 3–5 business days.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'Contact your coordinator as early as possible. Cancellations made 7+ days before the appointment are typically free. Some hospitals may retain a small booking fee — your coordinator will advise on the specifics.',
  },
  {
    q: 'How does the Care Circle feature work?',
    a: 'Care Circle lets you share your journey with up to 3 trusted family members or friends. You control exactly what they can see — from journey-only updates to full document access. Invite them from Profile → Care Circle.',
  },
  {
    q: 'What is included in the Free Consultation?',
    a: 'Our medical team reviews your reports, shortlists the best hospitals and doctors for your condition, and prepares a detailed cost estimate — all within 2 business days, at no charge.',
  },
];

export default function HelpFaqScreen({ onNavigate }) {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #06B6D4 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Help &amp; FAQ
            </h2>
            <p className="text-white/60 text-xs">Answers to common questions</p>
          </div>
        </div>
        {/* Search */}
        <div className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2.5">
          <span className="text-white/50 text-sm">🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search questions…"
            className="flex-1 text-sm outline-none bg-transparent text-white placeholder:text-white/50" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-4">
        {/* FAQ Accordion */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Frequently Asked Questions {search && `— ${filtered.length} results`}
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="text-slate-500 text-sm font-medium">No results found</p>
                <p className="text-slate-400 text-xs mt-1">Try a different keyword or contact us below</p>
              </div>
            ) : filtered.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center gap-3 w-full px-4 py-4 text-left transition-all active:bg-slate-50">
                  <p className="flex-1 font-semibold text-slate-800 text-sm leading-snug">{faq.q}</p>
                  <ChevronDown size={16} color="#94A3B8"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                </button>
                {open === i && (
                  <div className="px-4 pb-4">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Still Need Help?</p>
          <div className="flex flex-col gap-2">
            {[
              { icon: MessageCircle, label: 'Chat with Care Team', sub: 'Usually responds within minutes', color: '#1B4FBF', bg: '#EFF6FF', action: () => onNavigate('chat') },
              { icon: Mail,          label: 'Email Us',            sub: 'support@medglobal360.com',       color: '#0D9488', bg: '#F0FDFA', action: () => {} },
              { icon: Phone,         label: 'Call Us',             sub: '+91 99999 00000 · Mon–Sat 9–6',  color: '#7C3AED', bg: '#FAF5FF', action: () => {} },
            ].map(c => {
              const Ic = c.icon;
              return (
                <button key={c.label} onClick={c.action}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 text-left transition-all active:scale-95"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.bg }}>
                    <Ic size={18} color={c.color} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{c.label}</p>
                    <p className="text-slate-400 text-xs">{c.sub}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center pb-4">
          Med Global 360 · v1.0.0 · <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
