import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ViralCard {
  id: number;
  driveId: string;
  title: string;
  category: string;
  stats: string[];
}

export const ViralShowcase: React.FC = () => {
  const showcases: ViralCard[] = [
    {
      id: 1,
      driveId: '103MU7OHGVcRccfzMF1YY9Eaf9_uTu5aV', 
      title: 'Phim Ngắn Hành Động & Kịch Tính',
      category: 'Viral Content Drama',
      stats: ['84M views', '27M views', '25M views']
    },
    {
      id: 2,
      driveId: '1_XAoDg2XF9o0IKjPxBvw28jUaEjqRo15',
      title: 'Review Đồ Ăn & Sốt Chấm Hải Sản',
      category: 'Food Review & Bán Hàng',
      stats: ['1,8M views', '1,3M views']
    },
    {
      id: 3,
      driveId: '1QeZpxtIzrU2Jy2noBj47hag4bgUPMZIl',
      title: 'Mukbang Bạch Tuộc Khổng Lồ',
      category: 'Food Mukbang & Chuyển Đổi',
      stats: ['12M views', '11M views']
    }
  ];

  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <div className="mt-10 pt-8 border-t border-[#3b2d54]/70">
      {/* Header Tag */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-blue-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>KẾT QUẢ VIDEO VIRAL TRIỆU VIEW THỰC TẾ</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Minh Chứng Hiệu Quả Triệu View Từ Hệ Thống
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
          Các dự án video kịch bản thu hút, đồ ăn &amp; sản phẩm bán hàng viral đạt từ hàng triệu đến hàng chục triệu lượt xem
        </p>
      </div>

      {/* 3 Showcase Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {showcases.map((card) => {
          const primarySrc = `https://lh3.googleusercontent.com/d/${card.driveId}`;
          const backupSrc = `https://drive.google.com/uc?export=view&id=${card.driveId}`;
          const currentSrc = imgErrors[card.id] ? backupSrc : primarySrc;

          return (
            <div
              key={card.id}
              className="group relative bg-[#130d2a]/80 border border-[#3b2d54] hover:border-pink-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Preview Container */}
              <div className="relative min-h-[220px] sm:min-h-[260px] bg-black/40 overflow-hidden flex items-center justify-center p-1.5">
                <img
                  src={currentSrc}
                  alt={card.title}
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={() => setImgErrors((prev) => ({ ...prev, [card.id]: true }))}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Info */}
              <div className="p-3.5 bg-[#0e0920] border-t border-[#221a38] text-left">
                <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                  {card.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-pink-300 transition-colors line-clamp-1">
                  {card.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                  {card.stats.map((stat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-purple-950/60 border border-purple-800/50 text-purple-200 px-2 py-0.5 rounded font-semibold"
                    >
                      🔥 {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
