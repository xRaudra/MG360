import { useState } from 'react';
import { ChevronRight, Fingerprint, Bell, Shield, Trash2, Star, FileText, LogOut } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function AppSettingsScreen({ onNavigate }) {
  const [biometric, setBiometric] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const Toggle = ({ value, onChange, color = '#1B4FBF' }) => (
    <button onClick={() => onChange(!value)}
      className="flex-shrink-0 w-11 h-6 rounded-full transition-all duration-200 relative"
      style={{ background: value ? color : '#E2E8F0' }}>
      <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200"
        style={{ left: value ? '22px' : '2px' }} />
    </button>
  );

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="px-4 pt-4 pb-5 flex-shrink-0"
        style={{ background: 'linear-gradient(160deg, #475569 0%, #1B4FBF 100%)' }}>
        <div className="flex items-center gap-3">
          <BackButton onPress={() => onNavigate('profile')} />
          <div>
            <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              App Settings
            </h2>
            <p className="text-white/60 text-xs">Customise your experience</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 flex flex-col gap-5">

        {/* Security */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Security</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Fingerprint size={18} color="#1B4FBF" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Biometric Login</p>
                <p className="text-slate-400 text-xs">Face ID / Fingerprint</p>
              </div>
              <Toggle value={biometric} onChange={setBiometric} />
            </div>
            <button onClick={() => alert('A password reset link has been sent to kwame@email.com')}
              className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left">
              <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                <Shield size={18} color="#475569" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Change Password</p>
                <p className="text-slate-400 text-xs">Update your login credentials</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Notifications</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Bell size={18} color="#F59E0B" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Push Notifications</p>
                <p className="text-slate-400 text-xs">Allow alerts from MedGlobal360</p>
              </div>
              <Toggle value={pushEnabled} onChange={setPushEnabled} color="#F59E0B" />
            </div>
            <button onClick={() => onNavigate('notifications')}
              className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left">
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Bell size={18} color="#F59E0B" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Notification Preferences</p>
                <p className="text-slate-400 text-xs">Choose what alerts you receive</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
          </div>
        </div>

        {/* Privacy */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Privacy</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <Shield size={18} color="#059669" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Anonymous Data Sharing</p>
                <p className="text-slate-400 text-xs">Help improve our service (no personal data)</p>
              </div>
              <Toggle value={dataSharing} onChange={setDataSharing} color="#059669" />
            </div>
            <button onClick={() => window.open('https://medglobal360.com/', '_blank')}
              className="flex items-center gap-3 w-full px-4 py-3.5 transition-all active:bg-slate-50 text-left">
              <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                <FileText size={18} color="#475569" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Privacy Policy</p>
                <p className="text-slate-400 text-xs">How we protect your data</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
          </div>
        </div>

        {/* About */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">About</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <button onClick={() => window.open('https://medglobal360.com/', '_blank')}
              className="flex items-center gap-3 w-full px-4 py-3.5 border-b border-slate-100 transition-all active:bg-slate-50 text-left">
              <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                <Star size={18} color="#F59E0B" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">Rate the App</p>
                <p className="text-slate-400 text-xs">Tell us what you think</p>
              </div>
              <ChevronRight size={16} color="#CBD5E1" />
            </button>
            <div className="flex items-center justify-between px-4 py-3.5">
              <p className="text-sm text-slate-500">Version</p>
              <p className="text-sm font-semibold text-slate-700">1.0.0</p>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        {!showDeleteConfirm ? (
          <button onClick={() => setShowDeleteConfirm(true)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border-2 border-red-100 bg-red-50 text-red-500 font-semibold text-sm transition-all active:scale-95">
            <Trash2 size={16} />
            Delete My Account
          </button>
        ) : (
          <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
            <p className="text-red-700 font-semibold text-sm mb-1">Delete your account?</p>
            <p className="text-red-500 text-xs mb-3">All your journey data, documents and settings will be permanently deleted. This cannot be undone.</p>
            <div className="flex gap-2">
              <button onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-white border border-red-200 text-slate-600 text-sm font-semibold">
                Cancel
              </button>
              <button onClick={() => onNavigate('login')}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold">
                Delete
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-slate-400 text-center pb-4">MedGlobal360 · All rights reserved</p>
      </div>
    </div>
  );
}
