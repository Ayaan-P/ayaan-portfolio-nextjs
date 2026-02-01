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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      });

      if (!res.ok) {
        setIsOffline(true);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: 'maya is offline right now. reach ayaan at ayaansp@gmail.com', streaming: false }
              : m
          )
        );
        setIsStreaming(false);
        return;
      }

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

            if (parsed.type === 'response.output_text.delta') {
              accumulated += parsed.delta || '';
              const current = accumulated;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: current } : m
                )
              );
            } else if (parsed.type === 'response.completed' || parsed.type === 'response.failed') {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, streaming: false } : m
                )
              );
            }
          } catch {
            // skip malformed JSON — also handle non-streaming response
          }
        }
      }

      // If we got no streaming events, try parsing as regular JSON
      if (!accumulated) {
        try {
          const text = decoder.decode();
          if (buffer) {
            const json = JSON.parse(buffer);
            const outputText = json?.output?.[0]?.content?.[0]?.text || '';
            if (outputText) {
              accumulated = outputText;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: outputText, streaming: false } : m
                )
              );
            }
          }
        } catch {
          // ignore
        }
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, streaming: false } : m
        )
      );
    } catch {
      setIsOffline(true);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: 'maya is offline right now. reach ayaan at ayaansp@gmail.com', streaming: false }
            : m
        )
      );
    } finally {
      setIsStreaming(false);
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
      {/* Chat Button — uses CSS class to match nav menu-button alignment */}
      <button
        className="maya-chat-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat' : 'Chat with Maya'}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span style={{ color: 'rgba(197, 165, 114, 0.9)' }}>Maya</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="maya-chat-window">

          {/* Header */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(197, 165, 114, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(197, 165, 114, 0.4), rgba(197, 165, 114, 0.1))',
                border: '1px solid rgba(197, 165, 114, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(197, 165, 114, 0.9)',
              }}
            >
              M
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>Maya</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
                {isOffline ? 'offline' : 'AI Assistant'}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '10px',
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: msg.role === 'user' ? '#fff' : 'rgba(255,255,255,0.85)',
                    background:
                      msg.role === 'user'
                        ? 'linear-gradient(135deg, rgba(197, 165, 114, 0.3), rgba(197, 165, 114, 0.15))'
                        : 'rgba(255,255,255,0.06)',
                    border: msg.role === 'user'
                      ? '1px solid rgba(197, 165, 114, 0.2)'
                      : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {msg.content || (
                    <span style={{ display: 'inline-flex', gap: '4px', padding: '4px 0' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(197,165,114,0.5)', animation: 'chatDot 1.4s infinite ease-in-out' }} />
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(197,165,114,0.5)', animation: 'chatDot 1.4s infinite ease-in-out 0.2s' }} />
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(197,165,114,0.5)', animation: 'chatDot 1.4s infinite ease-in-out 0.4s' }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input / Offline State */}
          {isOffline ? (
            <div className="maya-offline-banner">
              <div className="maya-offline-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div className="maya-offline-text">
                <span className="maya-offline-label">maya is offline right now</span>
                <a href="mailto:ayaansp@gmail.com" className="maya-offline-email">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                  ayaansp@gmail.com
                </a>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '12px',
                borderTop: '1px solid rgba(197, 165, 114, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(197, 165, 114, 0.15)',
                  borderRadius: '12px',
                  padding: '8px 12px',
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Maya anything..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isStreaming}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(197, 165, 114, 0.2)',
                    color: 'rgba(197, 165, 114, 0.9)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: !input.trim() || isStreaming ? 0.3 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* Maya Chat Button — mirrors .menu-button positioning */
        .maya-chat-button {
          position: fixed;
          top: 10px;
          right: 10px;
          background: rgba(26, 26, 26, 0.9);
          border: 1px solid rgba(197, 165, 114, 0.3);
          border-radius: 12px;
          padding: 12px;
          color: white;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-family: inherit;
        }
        .maya-chat-button svg {
          width: 24px;
          height: 24px;
        }
        .maya-chat-button:hover {
          background: rgba(197, 165, 114, 0.2);
          border-color: rgba(197, 165, 114, 0.5);
          transform: scale(1.05);
        }

        /* Chat Window */
        .maya-chat-window {
          position: fixed;
          top: 60px;
          right: 10px;
          width: 380px;
          max-width: calc(100vw - 20px);
          height: 500px;
          max-height: calc(100vh - 80px);
          background: rgba(16, 16, 16, 0.95);
          border: 1px solid rgba(197, 165, 114, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chatFadeIn 0.2s ease-out;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        /* Offline Banner */
        .maya-offline-banner {
          padding: 14px 16px;
          border-top: 1px solid rgba(197, 165, 114, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(197, 165, 114, 0.05);
        }
        .maya-offline-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.35);
          flex-shrink: 0;
        }
        .maya-offline-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .maya-offline-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          font-style: italic;
        }
        .maya-offline-email {
          font-size: 13px;
          color: rgba(197, 165, 114, 0.85);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .maya-offline-email:hover {
          color: rgba(197, 165, 114, 1);
          text-decoration: underline;
        }

        /* Mobile: match menu-button's mobile position */
        @media (max-width: 768px) {
          .maya-chat-button {
            top: 20px;
            right: 20px;
            padding: 16px;
            border-radius: 16px;
          }
          .maya-chat-button svg {
            width: 20px;
            height: 20px;
          }
          .maya-chat-button span {
            display: none;
          }
          .maya-chat-window {
            position: fixed;
            top: 78px;
            right: 10px;
            left: 10px;
            bottom: auto;
            width: auto;
            max-width: none;
            height: 55vh;
            max-height: calc(100vh - 100px);
            border-radius: 14px;
          }
        }
      `}</style>
    </>
  );
}
