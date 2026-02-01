'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  streaming?: boolean;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "hey! i'm maya, ayaan's AI assistant. ask me anything about his work, projects, or experience 🖤",
};

function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('maya-visitor-id');
  if (!id) {
    id = 'visitor-' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    localStorage.setItem('maya-visitor-id', id);
  }
  return id;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [hasCheckedStatus, setHasCheckedStatus] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmed,
    };

    const assistantId = (Date.now() + 1).toString();
    const assistantMsg: Message = {
      id: assistantId,
      role: 'assistant',
      content: '',
      streaming: true,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
    setIsStreaming(true);

    const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL;
    const gatewayToken = process.env.NEXT_PUBLIC_GATEWAY_TOKEN;

    if (!gatewayUrl || !gatewayToken) {
      setIsOffline(true);
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      setIsStreaming(false);
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(`${gatewayUrl}/v1/responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${gatewayToken}`,
          'x-clawdbot-agent-id': 'concierge',
        },
        body: JSON.stringify({
          model: 'clawdbot:concierge',
          input: trimmed,
          user: getVisitorId(),
          stream: true,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        if (!hasCheckedStatus) {
          setIsOffline(true);
          setHasCheckedStatus(true);
        }
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: 'sorry, something went wrong. try again later!', streaming: false }
              : m
          )
        );
        setIsStreaming(false);
        return;
      }

      if (!hasCheckedStatus) setHasCheckedStatus(true);

      const reader = res.body?.getReader();
      if (!reader) throw new Error('No reader');

      const decoder = new TextDecoder();
      let accumulated = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (!data || data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            const eventType = parsed.type;

            if (eventType === 'response.output_text.delta') {
              accumulated += parsed.delta || '';
              const current = accumulated;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: current } : m
                )
              );
            } else if (eventType === 'response.completed') {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, streaming: false } : m
                )
              );
            } else if (eventType === 'response.failed') {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: 'sorry, something went wrong. try again later!', streaming: false }
                    : m
                )
              );
            }
          } catch {
            // skip malformed JSON
          }
        }
      }

      // Finalize
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, streaming: false } : m
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        // User cancelled
      } else {
        if (!hasCheckedStatus) {
          setIsOffline(true);
          setHasCheckedStatus(true);
        }
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: 'sorry, something went wrong. try again later!', streaming: false }
              : m
          )
        );
      }
    } finally {
      setIsStreaming(false);
      abortRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes chatSlideDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }
        @keyframes chatBubblePop {
          0% {
            transform: scale(0);
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes chatMsgFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes chatPulse {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .chat-window-enter {
          animation: chatSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .chat-msg-enter {
          animation: chatMsgFade 0.3s ease-out forwards;
        }
        .chat-bubble-pop {
          animation: chatBubblePop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end max-sm:bottom-4 max-sm:right-4">
        {/* Chat Window */}
        {isOpen && (
          <div
            className="chat-window-enter mb-4 flex flex-col overflow-hidden rounded-2xl border border-slate-500/20 bg-gradient-to-b from-slate-900/98 via-slate-900/99 to-black/98 shadow-2xl shadow-purple-500/10 backdrop-blur-xl max-sm:fixed max-sm:inset-2 max-sm:mb-0 max-sm:rounded-xl sm:h-[500px] sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-500/20 bg-slate-800/50 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-semibold text-white">
                  M
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-800 bg-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Maya</p>
                  <p className="text-xs text-slate-400">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-700/50 hover:text-white"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-thin" style={{ scrollbarWidth: 'thin', scrollbarColor: '#475569 transparent' }}>
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-msg-enter flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                          : 'bg-slate-800/80 text-slate-200'
                      }`}
                    >
                      {msg.content || (
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animation: 'chatPulse 1.4s infinite ease-in-out' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animation: 'chatPulse 1.4s infinite ease-in-out 0.2s' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animation: 'chatPulse 1.4s infinite ease-in-out 0.4s' }} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {isOffline && (
                  <div className="chat-msg-enter flex justify-start">
                    <div className="max-w-[85%] rounded-2xl bg-slate-800/80 px-3.5 py-2.5 text-sm leading-relaxed text-slate-300">
                      Maya is offline right now. Reach Ayaan at{' '}
                      <a
                        href="mailto:ayaansp@gmail.com"
                        className="text-purple-400 underline decoration-purple-400/30 hover:decoration-purple-400"
                      >
                        ayaansp@gmail.com
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-500/20 bg-slate-800/30 px-3 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-500/20 bg-slate-800/60 px-3 py-2 transition-colors focus-within:border-purple-500/40">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isOffline ? 'Maya is offline...' : 'Ask Maya anything...'}
                  disabled={isOffline}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isStreaming || isOffline}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all hover:from-purple-500 hover:to-indigo-500 disabled:opacity-30 disabled:hover:from-purple-600 disabled:hover:to-indigo-600"
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Bubble */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`chat-bubble-pop flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 ${
            isOpen ? 'rotate-0' : ''
          }`}
          aria-label={isOpen ? 'Close chat' : 'Open chat with Maya'}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
