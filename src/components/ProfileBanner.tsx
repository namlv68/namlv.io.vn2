import React from 'react';
import { Sparkles, ExternalLink, CheckCircle2, User, Share2 } from 'lucide-react';

export const ProfileBanner: React.FC = () => {
  return (
    <section className="mt-8 pt-6 border-t border-[#3b2d54]/60">
      <div className="relative bg-gradient-to-br from-[#16102e] via-[#1a1236] to-[#120c24] border border-[#3d2e61] hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar / Icon Badge */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 p-[2px] shadow-lg shadow-purple-500/20">
                <div className="w-full h-full bg-[#15102a] rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-white bg-clip-text text-transparent">
                      LN
                    </span>
                    <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider mt-0.5">
                      Lê Nam
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-[#15102a] shadow-sm" title="Đã xác thực">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="text-[11px] text-gray-400 font-medium mt-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              Đang hoạt động
            </span>
          </div>

          {/* Core Content */}
          <div className="flex-1 text-center md:text-left space-y-3.5">
            <div className="inline-flex items-center gap-1.5 bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>TÔI LÀ AI?</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span>Lê Nam</span>
                <span className="text-xs sm:text-sm font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
                  Quản lý Vận hành TMĐT &amp; Ứng dụng AI
                </span>
              </h3>
            </div>

            {/* Concise and Complete Bio */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Hơn <strong className="text-white font-semibold">4 năm kinh nghiệm</strong> trực tiếp quản lý, chuẩn hóa quy trình SOP &amp; KPI cho doanh nghiệp TMĐT, từng vận hành doanh thu tiền tỷ. Hiện tại, tôi đang ứng dụng <strong className="text-purple-300 font-semibold">AI vào tự động hóa sản xuất video ngắn triệu view</strong>, xây dựng thương hiệu cá nhân và gia tăng đơn hàng và Affiliate đa kênh.
            </p>

            {/* 3 Key Punchy Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-gray-300">
              <div className="bg-[#110c24]/80 border border-[#2e2347] rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-base">📈</span>
                <span className="font-medium">Kinh nghiệm vận hành TMĐT thực chiến</span>
              </div>
              <div className="bg-[#110c24]/80 border border-[#2e2347] rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-base">🎬</span>
                <span className="font-medium">Tự động hóa Video AI triệu view</span>
              </div>
              <div className="bg-[#110c24]/80 border border-[#2e2347] rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-base">💡</span>
                <span className="font-medium">Chia sẻ &amp; chuyển giao quy trình từ 0</span>
              </div>
            </div>

            {/* Facebook Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://www.facebook.com/namlv68"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1877F2] to-[#0d65d9] hover:from-[#166fe5] hover:to-[#0b58be] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                {/* Facebook SVG Logo */}
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Xem Thêm Về Tôi Trên Facebook</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs text-gray-400 text-center sm:text-left">
                Bấm để xem thêm hành trình thực chiến &amp; bài viết chia sẻ mới nhất
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
