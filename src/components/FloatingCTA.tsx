import React, { useState, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';

interface Props {
  onEnrollClick: () => void;
}

export const FloatingCTA: React.FC<Props> = ({ onEnrollClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto bg-[#15102a]/95 backdrop-blur-md border border-purple-500/40 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3 animate-slideUp">
      <div>
        <div className="text-xs font-bold text-white">Zoom Chia Sẻ AI Cho Người Mới</div>
        <div className="text-[11px] text-pink-400 font-semibold">Tặng SKILL tạo ảnh khuôn mặt &amp; Tài liệu AI</div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://zalo.me/0981028794"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/40 rounded-xl transition-all"
          title="Tư vấn Zalo"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <button
          onClick={onEnrollClick}
          className="py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-600/40 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
        >
          <span>Đăng ký nhận vé</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
