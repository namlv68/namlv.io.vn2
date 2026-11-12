import React from 'react';
import { ExternalLink } from 'lucide-react';

const HIGHLIGHTS = [
  'Kinh nghiệm vận hành TMĐT thực chiến',
  'Tự động hóa video AI triệu view',
  'Chia sẻ & chuyển giao quy trình từ 0'
];

export const ProfileBanner: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="bg-white border border-violet-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar chữ */}
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center text-2xl sm:text-3xl font-bold">
          LN
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-1">Tôi là ai?</div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Lê Nam</h3>
          <div className="text-sm text-slate-500 mt-0.5">Quản lý vận hành TMĐT &amp; ứng dụng AI</div>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hơn <strong className="font-semibold text-slate-800">4 năm kinh nghiệm</strong> trực tiếp quản lý, chuẩn hóa quy
            trình SOP &amp; KPI cho doanh nghiệp TMĐT, từng vận hành doanh thu tiền tỷ. Hiện tại, tôi đang ứng dụng{' '}
            <strong className="font-semibold text-violet-700">AI vào tự động hóa sản xuất video ngắn triệu view</strong>, xây
            dựng thương hiệu cá nhân, gia tăng đơn hàng và Affiliate đa kênh.
          </p>

          <ul className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="text-xs text-slate-600 bg-violet-50 px-3 py-1.5 rounded-lg">
                {h}
              </li>
            ))}
          </ul>

          <a
            href="https://www.facebook.com/namlv68"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-800 border border-violet-200 hover:border-violet-300 hover:bg-violet-50 px-4 py-2.5 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Xem thêm về tôi trên Facebook
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
