import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface Props {
  onEnrollClick: () => void;
}

export const FloatingCTA: React.FC<Props> = ({ onEnrollClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hiện sau khi cuộn qua phần đầu, ẩn khi đang ở khu vực form đăng ký
      const form = document.getElementById('registration-section');
      let nearForm = false;
      if (form) {
        const r = form.getBoundingClientRect();
        nearForm = r.top < window.innerHeight && r.bottom > 0;
      }
      setIsVisible(window.scrollY > 400 && !nearForm);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto bg-white/95 backdrop-blur border border-violet-100 rounded-2xl p-3 pl-4 shadow-lg shadow-violet-900/5 flex items-center justify-between gap-3 animate-slide-up">
      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-900 truncate">Zoom chia sẻ AI cho người mới</div>
        <div className="text-xs text-slate-500 truncate">Tặng SKILL tạo ảnh khuôn mặt &amp; tài liệu AI</div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href="https://zalo.me/0981028794"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-xl transition-colors"
          title="Tư vấn Zalo"
          aria-label="Tư vấn Zalo"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
        <button
          onClick={onEnrollClick}
          className="py-2.5 px-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          Nhận vé
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
