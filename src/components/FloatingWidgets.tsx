import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare, Copy, Check, X } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = '0981028794';
  const formattedPhone = '098.102.8794';

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 z-40 flex flex-col items-end gap-2.5">
      {isContactOpen && (
        <div className="bg-white border border-violet-100 rounded-2xl p-4 shadow-xl shadow-violet-900/10 w-72 text-left animate-slide-up">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-xs text-slate-500">Hotline / Zalo</div>
              <div className="text-lg font-bold text-slate-900 tracking-wide">{formattedPhone}</div>
            </div>
            <button
              onClick={() => setIsContactOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href={`tel:${phoneNumber}`}
            className="w-full py-2.5 px-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Gọi ngay
          </a>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href={`https://zalo.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Nhắn Zalo
            </a>
            <button
              onClick={handleCopyPhone}
              className="py-2 px-2.5 border border-slate-200 hover:border-violet-300 text-slate-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Đã chép' : 'Sao chép'}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsContactOpen(!isContactOpen)}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer ${
          isContactOpen
            ? 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            : 'bg-violet-600 text-white hover:bg-violet-700 shadow-violet-600/25'
        }`}
        title={isContactOpen ? 'Đóng' : `Liên hệ: ${formattedPhone}`}
        aria-label="Liên hệ tư vấn"
      >
        {isContactOpen ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white text-slate-500 hover:text-violet-700 border border-slate-200 hover:border-violet-300 shadow-md flex items-center justify-center transition-colors cursor-pointer"
          title="Lên đầu trang"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
