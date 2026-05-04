import { useState, Fragment } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, Check } from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Heart & Vascular',
    icon: '🫀',
    conditions: [
      'Coronary Artery Disease',
      'Heart Valve Replacement',
      'Angioplasty & Stenting',
      'Bypass Surgery (CABG)',
      'Aortic Aneurysm Repair',
      'Pacemaker Implantation',
    ],
  },
  {
    name: 'Oncology',
    icon: '🎗️',
    conditions: [
      'Breast Cancer',
      'Lung Cancer',
      'Prostate Cancer',
      'Colon Cancer',
      'Blood Cancer (Leukemia)',
      'Cervical Cancer',
      'Brain Tumor',
    ],
  },
  {
    name: 'Orthopedics',
    icon: '🦴',
    conditions: [
      'Hip Replacement',
      'Knee Replacement',
      'Spine Surgery',
      'Shoulder Replacement',
      'ACL Reconstruction',
      'Fracture Treatment',
    ],
  },
  {
    name: 'Neurology',
    icon: '🧠',
    conditions: [
      'Brain Surgery',
      'Stroke Treatment',
      'Epilepsy Treatment',
      'Spinal Cord Injury',
      "Parkinson's Treatment",
      'Deep Brain Stimulation',
    ],
  },
  {
    name: 'Transplants',
    icon: '🫁',
    conditions: [
      'Kidney Transplant',
      'Liver Transplant',
      'Heart Transplant',
      'Lung Transplant',
      'Bone Marrow Transplant',
      'Cornea Transplant',
    ],
  },
  {
    name: "Fertility & Women's Health",
    icon: '🌸',
    conditions: [
      'IVF Treatment',
      'Egg Freezing',
      'Surrogacy Support',
      'Hysterectomy',
      'PCOS Treatment',
      'Endometriosis Surgery',
    ],
  },
  {
    name: 'Bariatric & Digestive',
    icon: '🏥',
    conditions: [
      'Gastric Bypass',
      'Sleeve Gastrectomy',
      'Gallbladder Surgery',
      'Hernia Repair',
      'Appendectomy',
      'Liver Disease Treatment',
    ],
  },
  {
    name: 'Cosmetic & Reconstructive',
    icon: '✨',
    conditions: [
      'Rhinoplasty',
      'Facelift',
      'Liposuction',
      'Breast Augmentation',
      'Hair Transplant',
      'Skin Grafting',
    ],
  },
];

function StepBar({ step }) {
  const labels = ['Country', 'Condition', 'Timeline'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 24 }}>
      {labels.map((label, i) => {
        const done = i < step - 1;
        const active = i === step - 1;
        return (
          <Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%',
                background: done || active ? '#56698F' : '#E2E8F0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: done || active ? 'white' : '#94A3B8',
                fontSize: done ? 13 : 12, fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s',
              }}>
                {done ? <Check size={14} strokeWidth={2.5} /> : i + 1}
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9, fontWeight: 600,
                color: active ? '#56698F' : done ? '#56698F' : '#CBD5E1',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div style={{
                width: 44, height: 2,
                background: done ? '#56698F' : '#E2E8F0',
                marginBottom: 18, flexShrink: 0,
                borderRadius: 1,
                transition: 'background 0.2s',
              }} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default function GuestConditionScreen({ onNavigate, data }) {
  const [selected, setSelected] = useState(data?.condition || null);
  const [openCategory, setOpenCategory] = useState(null);

  const toggle = (name) => setOpenCategory(prev => prev === name ? null : name);

  return (
    <div className="flex flex-col h-full bg-app screen-enter">
      {/* Header */}
      <div style={{ padding: '52px 16px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => onNavigate('guestCountry', data)}
            type="button"
            style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', display: 'flex', marginLeft: -4 }}
          >
            <ChevronLeft size={22} color="#56698F" />
          </button>
        </div>

        <StepBar step={2} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 24, fontWeight: 800,
            color: '#23244D', margin: 0, letterSpacing: '-0.02em',
          }}>
            What treatment do you need?
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: '#7C7C7C', margin: 0, lineHeight: '160%',
          }}>
            Select the medical condition you're seeking care for.
          </p>
        </div>
      </div>

      {/* Accordion list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 0' }} className="hide-scrollbar">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 120 }}>
          {CATEGORIES.map(cat => {
            const isOpen = openCategory === cat.name;
            const catSelected = cat.conditions.find(c => c === selected?.condition && selected?.category === cat.name);
            return (
              <div key={cat.name} style={{
                background: 'white',
                border: catSelected ? '1.5px solid #56698F' : '1px solid #ECEFF2',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(228,229,232,0.3)',
              }}>
                {/* Category header */}
                <button
                  onClick={() => toggle(cat.name)}
                  type="button"
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                    padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{cat.icon}</span>
                  <span style={{
                    flex: 1, fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, fontWeight: 600, color: '#23244D', textAlign: 'left',
                  }}>
                    {cat.name}
                  </span>
                  {catSelected && (
                    <span style={{
                      fontSize: 10, fontWeight: 600, color: '#56698F',
                      fontFamily: "'DM Sans', sans-serif",
                      background: 'rgba(86,105,143,0.08)', borderRadius: 6,
                      padding: '2px 7px', marginRight: 4,
                    }}>
                      Selected
                    </span>
                  )}
                  {isOpen
                    ? <ChevronUp size={16} color="#94A3B8" />
                    : <ChevronDown size={16} color="#94A3B8" />
                  }
                </button>

                {/* Conditions */}
                {isOpen && (
                  <div style={{ borderTop: '1px solid #F1F5F9', padding: '8px 0' }}>
                    {cat.conditions.map(condition => {
                      const isSel = selected?.condition === condition && selected?.category === cat.name;
                      return (
                        <button
                          key={condition}
                          onClick={() => setSelected({ category: cat.name, condition })}
                          type="button"
                          style={{
                            width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                            padding: '11px 16px',
                            background: isSel ? 'rgba(86,105,143,0.06)' : 'transparent',
                            border: 'none', cursor: 'pointer',
                          }}
                        >
                          <div style={{
                            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                            border: isSel ? '2px solid #56698F' : '2px solid #D1D9E0',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: isSel ? '#56698F' : 'transparent',
                            transition: 'all 0.15s',
                          }}>
                            {isSel && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />}
                          </div>
                          <span style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13, fontWeight: isSel ? 500 : 400,
                            color: isSel ? '#56698F' : '#475569',
                            textAlign: 'left',
                          }}>
                            {condition}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 16px 40px',
        background: 'linear-gradient(to top, white 70%, transparent)',
      }}>
        <button
          onClick={() => selected && onNavigate('guestTimeline', { ...data, condition: selected })}
          type="button"
          style={{
            width: '100%', height: 52,
            background: selected ? '#56698F' : '#CBD5E1',
            border: 'none', borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'white',
            cursor: selected ? 'pointer' : 'default',
            letterSpacing: '-0.01em',
            transition: 'background 0.2s',
          }}
        >
          {selected ? `Continue with ${selected.condition}` : 'Select a Condition'}
        </button>
      </div>
    </div>
  );
}
