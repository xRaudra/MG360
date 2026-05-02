import { ArrowLeft, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const contactOptions = [
  { icon: <Phone size={22} />, label: 'Call Us', sub: '+91 98765 43210', color: '#059669', bg: '#F0FDF4' },
  { icon: <Mail size={22} />, label: 'Email', sub: 'care@mg360.com', color: '#1B4FBF', bg: '#EFF6FF' },
  { icon: <MessageCircle size={22} />, label: 'WhatsApp', sub: 'Chat instantly', color: '#25D366', bg: '#F0FDF4' },
];

export default function ContactScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-transparent screen-enter overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="px-4 pt-4 pb-8"
        style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 100%)' }}>
        <button onClick={() => onNavigate('home')} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-5">
          <ArrowLeft size={18} color="white" />
        </button>
        <h2 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Contact Us
        </h2>
        <p className="text-white/60 text-sm">We're here 24/7 to support your journey</p>
      </div>

      <div className="px-4 py-5 flex flex-col gap-5">
        {/* Quick contact options */}
        <div className="grid grid-cols-3 gap-3">
          {contactOptions.map(opt => (
            <button key={opt.label}
              className="flex flex-col items-center gap-2 bg-white rounded-2xl py-4 px-2 transition-all active:scale-95"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: opt.bg, color: opt.color }}>
                {opt.icon}
              </div>
              <div className="text-center">
                <p className="font-semibold text-slate-800 text-xs">{opt.label}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-tight">{opt.sub}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Enquiry form */}
        <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-base mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Send an Enquiry
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Your Name</label>
              <input className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all bg-white"
                placeholder="Kwame Mensah" defaultValue="Kwame Mensah" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Topic</label>
              <select className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all bg-white">
                <option>Treatment Enquiry</option>
                <option>Doctor Consultation</option>
                <option>Hospital Information</option>
                <option>Visa & Travel</option>
                <option>Payment & Costs</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Message</label>
              <textarea
                className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-sm outline-none focus:border-[#1B4FBF] transition-all resize-none bg-white"
                rows={4}
                placeholder="Describe your medical needs or questions…"
              />
            </div>
            <button
              className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
              <Send size={16} />
              Send Enquiry
            </button>
          </div>
        </div>

        {/* Office info */}
        <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-slate-800 text-sm mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Our Offices
          </h3>
          {[
            { flag: '🇮🇳', city: 'Mumbai, India', desc: 'Main Operations Centre', detail: 'Apollo House, BKC' },
            { flag: '🇳🇬', city: 'Lagos, Nigeria', desc: 'West Africa Patient Hub', detail: 'Victoria Island' },
            { flag: '🇬🇧', city: 'London, UK', desc: 'International Enquiries', detail: 'Harley Street' },
          ].map(o => (
            <div key={o.city} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
              <span className="text-2xl">{o.flag}</span>
              <div>
                <p className="font-semibold text-slate-700 text-sm">{o.city}</p>
                <p className="text-slate-400 text-xs">{o.desc} · {o.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
