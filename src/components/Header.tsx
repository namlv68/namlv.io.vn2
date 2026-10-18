import React from 'react';
import { Sparkles } from 'lucide-react';
import { VideoGrid } from './VideoGrid';
import { ViralShowcase } from './ViralShowcase';
import { ShopeeAffiliateResults } from './ShopeeAffiliateResults';
import { ProfileBanner } from './ProfileBanner';

interface Props {
  onEnrollClick: () => void;
}

export const Header: React.FC<Props> = ({ onEnrollClick }) => {
  return (
    <header className="relative text-center py-10 px-4 md:py-16 md:px-8 bg-gradient-to-b from-[#8b5cf6]/20 via-[#15102a] to-[#0a0814] rounded-2xl border border-[#3b2d54] mb-8 overflow-hidden shadow-2xl">
      {/* Glow effect background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/20 blur-3xl rounded-full -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/40 text-purple-200 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          <span>Video AI Affiliate Bán Hàng 2026</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]">
          TẠO VIDEO AI AFFILIATE BÁN HÀNG{' '}
          <span className="text-[#c084fc] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 block mt-2">
            TRIỆU VIEW RÚT ĐƠN HÀNG
          </span>
          <span className="block mt-3 text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse-subtle">
            Bằng chính khuôn mặt và giọng nói của chính bạn
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          Lộ trình từ con số 0 đến tạo video bán hàng triệu view cho TikTok Shop, Shopee Affiliate & Reels
        </p>

        {/* 4 YouTube Videos Embedded Direct Showcase Grid */}
        <VideoGrid />

        {/* 3 Viral Video Screenshots Showcase */}
        <ViralShowcase />

        {/* Shopee Affiliate Results from Video AI */}
        <ShopeeAffiliateResults />

        {/* Profile Info Banner (Kinh Nghiệm Thực Chiến) */}
        <ProfileBanner />
      </div>
    </header>
  );
};
