import React from 'react';
import { ArrowRight } from 'lucide-react';
import { VideoGrid } from './VideoGrid';
import { ViralShowcase } from './ViralShowcase';
import { ShopeeAffiliateResults } from './ShopeeAffiliateResults';
import { ProfileBanner } from './ProfileBanner';

interface Props {
  onEnrollClick: () => void;
}

export const Header: React.FC<Props> = ({ onEnrollClick }) => {
  return (
    <header className="pt-14 md:pt-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full mb-6">
          Video AI Affiliate bán hàng 2026
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          Tạo video AI Affiliate bán hàng{' '}
          <span className="text-violet-600">triệu view, ra đơn đều</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-700 font-medium">
          Bằng chính khuôn mặt và giọng nói của bạn
        </p>

        <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
          Lộ trình từ con số 0 đến tạo video bán hàng triệu view cho TikTok Shop, Shopee Affiliate &amp; Reels.
        </p>

        <button
          onClick={onEnrollClick}
          className="mt-8 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-xl transition-colors cursor-pointer"
        >
          Đăng ký Zoom miễn phí
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <VideoGrid />
      <ViralShowcase />
      <ShopeeAffiliateResults />
      <ProfileBanner />
    </header>
  );
};
