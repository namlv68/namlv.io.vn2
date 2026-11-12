import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

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
  const initial = current.name.trim().charAt(0);

  return (
    <div
      className={`hidden md:block fixed bottom-6 left-4 z-40 max-w-sm transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-3 opacity-0 pointer-events-none'
      }`}
      aria-live="polite"
    >
      <div className="relative bg-white border border-violet-100 rounded-2xl py-3 pl-3 pr-9 shadow-lg shadow-violet-900/5 flex items-center gap-3">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-slate-300 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="relative w-9 h-9 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm flex items-center justify-center shrink-0">
          {initial}
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </span>
        </div>

        <div className="text-left min-w-0">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-800">{current.name}</span> · {current.location} · {current.time}
          </div>
          <div className="text-xs text-slate-600 mt-0.5 truncate">
            Đã đăng ký <span className="font-medium text-violet-700">{current.package}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
