import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare, Copy, Check, X, Headphones } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = '0981028794';
  const formattedPhone = '098.102.8794';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end gap-3">
      {/* Contact Card Popup Modal / Tooltip */}
      {isContactOpen && (
        <div className="bg-[#15102a]/95 backdrop-blur-xl border border-pink-500/50 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(236,72,153,0.3)] w-72 text-left animate-slideUp relative mb-1">
          {/* Close button */}
          <button
            onClick={() => setIsContactOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold text-pink-400 tracking-wider">
                HỖ TRỢ TRỰC TIẾP 24/7
              </div>
              <div className="text-sm font-bold text-white">Thông Tin Liên Hệ</div>
            </div>
          </div>

          {/* Phone Display Box */}
          <div className="bg-[#0f0a21] border border-purple-500/30 rounded-xl p-3 mb-3">
            <div className="text-[11px] text-gray-400 mb-0.5">Số điện thoại / Hotline / Zalo:</div>
            <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-amber-200 tracking-wider">
              {formattedPhone}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-2">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi Ngay ({formattedPhone})</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://zalo.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Nhắn Zalo</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="py-2 px-2.5 bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-300">Đã chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Floating Button with Pulsing Wave */}
      <div className="relative group">
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 animate-pulse" />
        
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isContactOpen
              ? 'bg-rose-600 hover:bg-rose-500 rotate-90'
              : 'bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]'
          }`}
          title="Liên hệ tư vấn"
        >
          {isContactOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          )}
        </button>

        {/* Hover Label for Contact */}
        {!isContactOpen && (
          <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-[#15102a] border border-purple-500/40 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Liên hệ: {formattedPhone}
          </span>
        )}
      </div>

      {/* Scroll To Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1c1438]/90 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 hover:border-purple-400 shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer group"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
};
