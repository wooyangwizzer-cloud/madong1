
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
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const botResponse = await getMaDongSeokResponse(messages, userMessage);
      setMessages([...newMessages, { role: 'model', text: botResponse }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'model', text: "야, 통신 상태가 왜 이래? 다시 말해봐." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Gritty background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-600/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-600/10 border border-yellow-600/30 text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 rounded-full">
            Interrogation Room
          </div>
          <h3 className="text-5xl md:text-6xl font-impact uppercase mb-6 tracking-tighter">진실의 방으로</h3>
          <p className="text-gray-500 max-w-xl mx-auto">
            마석도 형사님과의 1:1 대화. <br/>
            조심해라, 말 한마디 잘못하면 바로 진실의 방이다.
          </p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Chat Header */}
          <div className="bg-[#1a1a1a] px-8 py-5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center font-impact text-xl overflow-hidden border-2 border-yellow-500">
                  <span className="mt-1">M</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-impact text-lg text-white">마동석 (Don Lee)</h4>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Active Now</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-500">🥊</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-500">🔒</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="h-[550px] overflow-y-auto p-8 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-4xl mb-2 opacity-20">
                  🥊
                </div>
                <p className="text-gray-600 font-medium italic">
                  "어이, 동생. 거기 서서 뭐 하냐? <br/> 할 말 있으면 들어와서 앉아."
                </p>
                <div className="flex gap-2">
                  {['"운동 비법 좀 알려주세요"', '"진실의 방이 뭐예요?"', '"형님 팬입니다!"'].map(suggestion => (
                    <button 
                      key={suggestion}
                      onClick={() => setInput(suggestion.replace(/"/g, ''))}
                      className="text-[10px] bg-white/5 hover:bg-yellow-600/20 border border-white/10 px-3 py-1.5 rounded-full transition-colors text-gray-400 hover:text-yellow-500"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] group ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-5 py-3 rounded-2xl shadow-lg transition-all ${
                    msg.role === 'user' 
                    ? 'bg-yellow-600 text-black font-bold rounded-tr-none' 
                    : 'bg-[#222] text-gray-200 rounded-tl-none border border-white/5'
                  }`}>
                    <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                  <div className="mt-1 text-[9px] text-gray-600 font-bold uppercase tracking-tighter">
                    {msg.role === 'user' ? 'Suspect' : 'Officer Don'} • Just now
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#222] border border-white/5 text-gray-400 px-5 py-3 rounded-2xl rounded-tl-none flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">Writing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-6 bg-[#1a1a1a] border-t border-white/5">
            <div className="relative flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="마석도 형사에게 질문하기..."
                className="flex-1 bg-black border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600/50 transition-all text-white placeholder:text-gray-700 font-medium"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-impact text-black transition-all active:scale-95 shadow-lg flex items-center gap-2 group"
              >
                <span>질문하기</span>
                <span className="group-hover:rotate-12 transition-transform">🥊</span>
              </button>
            </div>
            <p className="mt-4 text-[10px] text-gray-600 text-center uppercase tracking-[0.2em] font-bold">
              주의: 무례한 질문 시 진실의 방으로 소환될 수 있음
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
