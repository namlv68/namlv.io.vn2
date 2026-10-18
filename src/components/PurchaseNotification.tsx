import React, { useState, useEffect } from 'react';
import { Video, CheckCircle, Sparkles, X, Gift } from 'lucide-react';

interface PurchaseItem {
  name: string;
  location: string;
  package: string;
  time: string;
  avatarBg: string;
}

const PURCHASES: PurchaseItem[] = [
  {
    name: 'Nguyễn V. H***',
    location: 'Hà Nội',
    package: 'Vé Zoom & SKILL tạo ảnh khuôn mặt',
    time: 'Vừa xong',
    avatarBg: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Trần Thị M. T***',
    location: 'TP. Hồ Chí Minh',
    package: 'SKILL tạo ảnh khuôn mặt & Tài liệu AI',
    time: '1 phút trước',
    avatarBg: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Lê Quốc B***',
    location: 'Đà Nẵng',
    package: 'Vé Zoom AI cho người mới (Gia dụng)',
    time: 'Vừa xong',
    avatarBg: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Phạm Hoàng N***',
    location: 'Hải Phòng',
    package: 'Bộ Prompt AI bán hàng (Bất động sản)',
    time: '2 phút trước',
    avatarBg: 'from-orange-500 to-amber-600'
  },
  {
    name: 'Đỗ Quỳnh C***',
    location: 'Cần Thơ',
    package: 'Vé Zoom thực chiến AI (F&B / Ăn uống)',
    time: 'Vừa xong',
    avatarBg: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Vũ Đức T***',
    location: 'Bình Dương',
    package: 'Tham gia nhóm Zalo & Nhận tài liệu',
    time: '3 phút trước',
    avatarBg: 'from-rose-500 to-pink-600'
  },
  {
    name: 'Hoàng Thu H***',
    location: 'Bắc Ninh',
    package: 'Vé Zoom AI & Kịch bản Affiliate (Phụ kiện)',
    time: 'Vừa xong',
    avatarBg: 'from-violet-500 to-fuchsia-600'
  },
  {
    name: 'Bùi Minh K***',
    location: 'Đồng Nai',
    package: 'Trọn bộ Tool AI & Vé Zoom (Mới bắt đầu)',
    time: '4 phút trước',
    avatarBg: 'from-emerald-600 to-green-600'
  }
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // Interval to cycle notifications: show for 4s, hide for 2.5s, then show next
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASES.length);
        setIsVisible(true);
      }, 2000);
    }, 6500);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = PURCHASES[currentIndex];

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-4 z-40 max-w-[320px] sm:max-w-sm transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative bg-[#15102a]/95 backdrop-blur-md border border-purple-500/40 hover:border-pink-500/60 rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(139,92,246,0.25)] flex items-start gap-3">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          title="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Animated Avatar Icon */}
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${current.avatarBg} text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-900/40 relative mt-0.5`}
        >
          <Video className="w-5 h-5" />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#15102a] flex items-center justify-center">
            <CheckCircle className="w-2.5 h-2.5 text-white" />
          </span>
        </div>

        {/* Content */}
        <div className="pr-4 text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white leading-tight">
              {current.name}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">
              ({current.location})
            </span>
          </div>

          <div className="text-[11px] text-purple-300 font-medium mt-0.5 flex items-center gap-1">
            <span>Đã đăng ký</span>
            <strong className="text-pink-300 font-bold">{current.package}</strong>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/50 px-1.5 py-0.2 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              {current.time}
            </span>
            <span className="text-[10px] text-gray-400">Đã kích hoạt thành công</span>
          </div>
        </div>
      </div>
    </div>
  );
};
