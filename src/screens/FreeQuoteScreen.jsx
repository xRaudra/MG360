import { useState } from 'react';
import { ArrowLeft, Upload, Check } from 'lucide-react';

const genders    = ['Male', 'Female', 'Other'];
const countries  = ['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'UAE', 'UK', 'USA', 'France', 'Other'];
const conditions = ['Cardiac / Heart', 'Orthopedics', 'Oncology / Cancer', 'Neurology', 'Transplant', 'Fertility', 'Spine', 'Eye Care', 'Dental', 'Other'];

export default function FreeQuoteScreen({ onNavigate }) {
  const [form, setForm] = useState({
    name: '', age: '', gender: '', country: '', city: '',
    phone: '', email: '', condition: '', description: '', file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const canSubmit = form.name && form.phone && form.email && form.description;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-transparent screen-enter gap-4 px-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: '#F0FDF4' }}>
          <Check size={36} color="#059669" strokeWidth={2.5} />
        </div>
        <h2 className="font-bold text-slate-800 text-xl text-center"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Request Submitted!
        </h2>
        <p className="text-slate-500 text-sm text-center leading-relaxed">
          Our team will review your case and send you a detailed treatment plan and cost estimate within <strong>2 business days</strong>.
        </p>
        <div className="w-full bg-white rounded-2xl p-4 mt-2" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="text-xs text-slate-400 text-center">What happens next?</p>
          {[
            'Medical team reviews your case',
            'Hospital & doctor shortlist prepared',
            'Cost estimate sent to your email',
            'Free consultation call scheduled',
          ].map((s, i) => (
            <div key={s} className="flex items-center gap-3 mt-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: '#0D9488' }}>{i + 1}</div>
              <p className="text-slate-600 text-sm">{s}</p>
            </div>
          ))}
        </div>
        <button onClick={() => onNavigate('home')}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white mt-2 transition-all active:scale-95"
          style={{ background: 'linear-gradient(135deg, #0D9488, #1B4FBF)' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">

      {/* Header */}
      <div className="flex-shrink-0 px-4 pt-4 pb-5 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0D9488 0%, #1B4FBF 100%)' }}>
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'white', transform: 'translate(30%,-30%)' }} />

        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white font-bold text-lg leading-none"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Get a Free Consultation
            </h2>
            <p className="text-white/60 text-xs mt-0.5">Treatment plan & quote within 2 days</p>
          </div>
          <div className="ml-auto px-2.5 py-1 rounded-full font-bold text-xs"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            FREE
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-4">

        {/* Patient Name */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1.5">Patient Name *</p>
          <input value={form.name} onChange={e => set('name', e.target.value)}
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-teal-400" />
        </div>

        {/* Age + Gender */}
        <div className="flex gap-3">
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-600 mb-1.5">Age *</p>
            <input value={form.age} onChange={e => set('age', e.target.value)}
              placeholder="e.g. 45" type="number"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-teal-400" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-600 mb-1.5">Gender</p>
            <select value={form.gender} onChange={e => set('gender', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 outline-none bg-white focus:border-teal-400 appearance-none">
              <option value="">Select</option>
              {genders.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* Country + City */}
        <div className="flex gap-3">
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-600 mb-1.5">Country</p>
            <select value={form.country} onChange={e => set('country', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 outline-none bg-white focus:border-teal-400 appearance-none">
              <option value="">Select</option>
              {countries.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-600 mb-1.5">City</p>
            <input value={form.city} onChange={e => set('city', e.target.value)}
              placeholder="Your city"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-teal-400" />
          </div>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</p>
          <div className="flex gap-2">
            <div className="px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500 font-medium flex-shrink-0">
              +91
            </div>
            <input value={form.phone} onChange={e => set('phone', e.target.value)}
              placeholder="Enter phone number" type="tel"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-teal-400" />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1.5">Email Address *</p>
          <input value={form.email} onChange={e => set('email', e.target.value)}
            placeholder="your@email.com" type="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-teal-400" />
        </div>

        {/* Condition */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-2">Medical Condition</p>
          <div className="flex flex-wrap gap-2">
            {conditions.map(c => (
              <button key={c} onClick={() => set('condition', c)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: form.condition === c ? '#0D9488' : 'white',
                  color: form.condition === c ? 'white' : '#475569',
                  borderColor: form.condition === c ? '#0D9488' : '#E2E8F0',
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1.5">Describe Your Medical Problem *</p>
          <textarea value={form.description} onChange={e => set('description', e.target.value)}
            placeholder="Briefly describe your current medical condition, diagnosis, and any treatments already received…"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white resize-none focus:border-teal-400" />
        </div>

        {/* File upload */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-1.5">Upload Medical Documents</p>
          <label className="flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-dashed border-slate-200 bg-white cursor-pointer transition-all active:bg-slate-50">
            <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <Upload size={16} color="#0D9488" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">
                {form.file ? form.file.name : 'Choose files'}
              </p>
              <p className="text-xs text-slate-400">PDF, JPG, PNG · Max 5MB</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"
              onChange={e => set('file', e.target.files?.[0] || null)} />
          </label>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit} disabled={!canSubmit}
          className="w-full py-4 rounded-2xl font-semibold text-sm transition-all active:scale-95 mt-1"
          style={{
            background: canSubmit ? 'linear-gradient(135deg, #0D9488, #1B4FBF)' : '#E2E8F0',
            color: canSubmit ? 'white' : '#94A3B8',
          }}>
          Contact Us Now
        </button>

        <p className="text-xs text-slate-400 text-center pb-4">
          By submitting I agree to the{' '}
          <span className="text-slate-500 underline underline-offset-2">Terms & Conditions</span>
          {' '}and{' '}
          <span className="text-slate-500 underline underline-offset-2">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
