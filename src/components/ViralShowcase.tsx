import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';

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
    <section className="mt-14">
      <SectionHeading
        as="h3"
        title="Minh chứng triệu view từ hệ thống"
        description="Video kịch bản, đồ ăn và sản phẩm bán hàng đạt từ hàng triệu đến hàng chục triệu lượt xem."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {showcases.map((card) => {
          const primarySrc = `https://lh3.googleusercontent.com/d/${card.driveId}`;
          const backupSrc = `https://drive.google.com/uc?export=view&id=${card.driveId}`;
          const currentSrc = imgErrors[card.id] ? backupSrc : primarySrc;

          return (
            <div
              key={card.id}
              className="bg-white border border-violet-100 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-slate-50 flex items-center justify-center p-2 min-h-[220px]">
                <img
                  src={currentSrc}
                  alt={card.title}
                  className="w-full h-auto max-h-[380px] object-contain rounded-lg"
                  onError={() => setImgErrors((prev) => ({ ...prev, [card.id]: true }))}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="p-4 text-left">
                <div className="text-xs text-slate-500">{card.category}</div>
                <h4 className="text-sm font-semibold text-slate-800 mt-0.5">{card.title}</h4>
                <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                  {card.stats.map((stat, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm font-bold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-lg"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
