
import React, { useState, useRef, useEffect } from 'react';
import { getMaDongSeokResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    const botResponse = await getMaDongSeokResponse(messages, userMessage);
    setMessages([...newMessages, { role: 'model', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="chat" className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-yellow-500 font-impact text-xl mb-2">INTERACTIVE</h2>
          <h3 className="text-4xl md:text-5xl font-impact uppercase mb-6">Ask Don Lee</h3>
          <p className="text-gray-400">마석도 형님에게 궁금한 걸 물어보세요. (진실의 방 주의)</p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-yellow-600 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full overflow-hidden border border-white/20">
              <img src="https://picsum.photos/seed/face/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-impact text-lg leading-tight">마동석 (Don Lee) AI</h4>
              <p className="text-xs text-yellow-100 opacity-80">현재 접속 중... (운동 중 아님)</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="h-[500px] overflow-y-auto p-6 space-y-4 bg-black/40"
          >
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-20 italic">
                "어이 동생, 뭐 물어보고 싶은 거 있냐?"
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  msg.role === 'user' 
                  ? 'bg-yellow-600 text-white rounded-tr-none' 
                  : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  <p className="text-sm md:text-base whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-400 px-5 py-3 rounded-2xl rounded-tl-none animate-pulse">
                  형이 생각 중이다... 좀만 기다려라...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-[#1a1a1a] flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="궁금한 걸 적어봐라 (예: 운동 루틴, 진실의 방)"
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-600 transition-colors text-white"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 px-6 py-3 rounded-lg font-impact transition-colors"
            >
              전송 🥊
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
