import React from 'react';
import { ArrowRight, Check, Gift } from 'lucide-react';
import { Mark } from './SectionHeading';

interface Props {
  onEnrollClick: () => void;
}

const STATS = [
  { value: '84 triệu', label: 'view video cao nhất' },
  { value: '12 triệu', label: 'view video Affiliate Shopee' },
  { value: '4+ năm', label: 'vận hành TMĐT thực chiến' },
  { value: '100%', label: 'miễn phí buổi Zoom' }
];

const KEY_POINTS = ['Không cần lộ mặt', 'Không cần máy quay, studio', 'Chỉ 10–15 phút / video'];

export const Header: React.FC<Props> = ({ onEnrollClick }) => {
  return (
    <header className="pt-12 md:pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-700 bg-white border border-violet-200 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
          Video AI Affiliate bán hàng 2026
        </span>

        <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Tạo video AI bán hàng <br className="hidden sm:block" />
          <Mark>triệu view</Mark>, <Mark>ra đơn đều</Mark>
        </h1>

        <p className="mt-5 text-lg md:text-2xl text-slate-700 font-semibold">
          Bằng chính <span className="text-violet-700">khuôn mặt</span> và{' '}
          <span className="text-violet-700">giọng nói</span> của bạn
        </p>

        <p className="mt-3 text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Lộ trình từ con số 0 cho TikTok Shop, Shopee Affiliate &amp; Reels.
        </p>

        {/* 3 ý chính */}
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {KEY_POINTS.map((p) => (
            <li
              key={p}
              className="inline-flex items-center gap-2 bg-white border border-violet-100 text-slate-800 text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <Check className="w-3 h-3" strokeWidth={3.5} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onEnrollClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-base md:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-violet-600/25 transition-colors cursor-pointer"
          >
            Đăng ký Zoom miễn phí
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
            <Gift className="w-4 h-4 text-violet-600" />
            Tặng <strong className="text-slate-900">SKILL tạo ảnh theo khuôn mặt</strong>
          </span>
        </div>
      </div>

      {/* Dải số liệu */}
      <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-violet-100 border border-violet-100 rounded-3xl shadow-sm overflow-hidden">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white p-5 md:p-6 text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-2xl md:text-4xl font-extrabold text-violet-700 tracking-tight">{s.value}</dd>
            <dd className="mt-1 text-xs md:text-sm text-slate-500">{s.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
};
