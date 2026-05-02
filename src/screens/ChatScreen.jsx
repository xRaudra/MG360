import { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Phone, Video } from 'lucide-react';
import { chatMessages } from '../data/mockData';

const quickReplies = [
  'What are the costs?',
  'How long is recovery?',
  'Which hospital is best?',
  'I need to share my reports',
];

export default function ChatScreen({ onNavigate }) {
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');
  const [showQuick, setShowQuick] = useState(true);

  const send = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { id: prev.length + 1, sender: 'user', text: msg, time: 'Now' }]);
    setInput('');
    setShowQuick(false);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 2, sender: 'support', name: 'Care Team',
        text: 'Thank you for your message. Our medical coordinator will respond shortly. In the meantime, feel free to share any documents or reports.',
        time: 'Now', avatar: 'CT',
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-transparent screen-enter">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-4 bg-white"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <button onClick={() => onNavigate('home')} className="p-2 rounded-xl bg-slate-100">
          <ArrowLeft size={18} color="#0F172A" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B4FBF] to-[#0D9488] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          CT
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Care Coordinator
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-green-600 font-medium">Online</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <Phone size={16} color="#475569" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
            <Video size={16} color="#475569" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-4 flex flex-col gap-3">
        {/* Date separator */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">Today</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {messages.map(msg => (
          <div key={msg.id} className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.sender === 'support' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B4FBF] to-[#0D9488] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-auto">
                {msg.avatar}
              </div>
            )}
            <div className={`max-w-[78%] ${msg.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
              <div className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                style={{
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #1B4FBF, #0D9488)' : 'white',
                  color: msg.sender === 'user' ? 'white' : '#0F172A',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  boxShadow: msg.sender === 'support' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                }}>
                {msg.text}
              </div>
              <span className="text-xs text-slate-400 px-1">{msg.time}</span>
            </div>
          </div>
        ))}

        {/* Quick replies */}
        {showQuick && (
          <div className="mt-2">
            <p className="text-xs text-slate-400 mb-2 text-center">Quick replies</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickReplies.map(q => (
                <button key={q} onClick={() => send(q)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 border-[#1B4FBF] text-[#1B4FBF] bg-blue-50 transition-all active:scale-95">
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-3 bg-white border-t border-slate-100">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
            <Paperclip size={18} color="#475569" />
          </button>
          <div className="flex-1 flex items-center gap-2 bg-slate-100 rounded-2xl px-4 py-2.5">
            <input
              className="flex-1 text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
              placeholder="Type a message…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
          </div>
          <button onClick={() => send()}
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1B4FBF, #0D9488)' }}>
            <Send size={16} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
