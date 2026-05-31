import { useState } from 'react';
import { ArrowLeft, Check, Camera } from 'lucide-react';

const genders      = ['Male', 'Female', 'Other', 'Prefer not to say'];
const nationalities = ['Nigerian', 'Kenyan', 'Ghanaian', 'South African', 'British', 'French', 'Emirati', 'Other'];

export default function PersonalInfoScreen({ onNavigate }) {
  const [form, setForm] = useState({
    name: 'Kwame Mensah',
    email: 'kwame@email.com',
    phone: '+234 801 234 5678',
    dob: '15 March 1986',
    gender: 'Male',
    nationality: 'Nigerian',
    passport: 'A12345678',
  });
  const [saved, setSaved] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const fields = [
    { key: 'name',        label: 'Full Name',        placeholder: 'Your full name' },
    { key: 'email',       label: 'Email Address',    placeholder: 'your@email.com', type: 'email' },
    { key: 'phone',       label: 'Phone Number',     placeholder: '+234 ...' },
    { key: 'dob',         label: 'Date of Birth',    placeholder: 'DD Month YYYY' },
    { key: 'passport',    label: 'Passport Number',  placeholder: 'Optional' },
  ];

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1B4FBF 0%, #0D9488 100%)' }}>
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'white', transform: 'translate(30%,-30%)' }} />
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <ArrowLeft size={18} color="white" />
          </button>
          <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Personal Information
          </h2>
        </div>
        {/* Avatar with edit */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold border-4 border-white/30"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              KM
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white flex items-center justify-center"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
              <Camera size={13} color="#1B4FBF" />
            </button>
          </div>
          <p className="text-white/60 text-xs mt-2">Tap to update photo</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-5">
        {/* Text fields */}
        <div className="flex flex-col gap-4">
          {fields.map(f => (
            <div key={f.key}>
              <p className="text-xs font-semibold text-slate-600 mb-1.5">{f.label}</p>
              <input
                value={form[f.key]}
                onChange={e => set(f.key, e.target.value)}
                placeholder={f.placeholder}
                type={f.type || 'text'}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none bg-white focus:border-blue-400" />
            </div>
          ))}
        </div>

        {/* Gender */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-2">Gender</p>
          <div className="flex flex-wrap gap-2">
            {genders.map(g => (
              <button key={g} onClick={() => set('gender', g)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: form.gender === g ? '#1B4FBF' : 'white',
                  color: form.gender === g ? 'white' : '#475569',
                  borderColor: form.gender === g ? '#1B4FBF' : '#E2E8F0',
                }}>
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Nationality */}
        <div>
          <p className="text-xs font-semibold text-slate-600 mb-2">Nationality</p>
          <div className="flex flex-wrap gap-2">
            {nationalities.map(n => (
              <button key={n} onClick={() => set('nationality', n)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: form.nationality === n ? '#1B4FBF' : 'white',
                  color: form.nationality === n ? 'white' : '#475569',
                  borderColor: form.nationality === n ? '#1B4FBF' : '#E2E8F0',
                }}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleSave}
          className="w-full py-4 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all active:scale-95 mt-1 mb-2"
          style={{ background: saved ? '#059669' : 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
          {saved ? <><Check size={18} /> Saved!</> : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
