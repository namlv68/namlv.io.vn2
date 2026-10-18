import React from 'react';
import { AlertOctagon, CameraOff, DollarSign, Clock, FileText, Check, Zap, TrendingDown } from 'lucide-react';
import { PAIN_POINTS } from '../data/courseData';

export const PainPoints: React.FC = () => {
  const painPointMeta = [
    {
      tag: 'Sợ Ống Kính & Giọng Nói',
      tagColor: 'text-rose-400 bg-rose-950/60 border-rose-800/60',
      iconBg: 'bg-rose-500/20 border-rose-500/40 text-rose-400',
      accentBorder: 'hover:border-rose-500/60 hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      highlightText: 'trì hoãn mãi không dám bắt tay xây kênh'
    },
    {
      tag: 'Chi Phí Đắt Đỏ',
      tagColor: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
      iconBg: 'bg-amber-500/20 border-amber-500/40 text-amber-400',
      accentBorder: 'hover:border-amber-500/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]',
      highlightText: 'tốn hàng chục triệu nhưng không thu lại vốn'
    },
    {
      tag: 'Kiệt Sức & Tốn Thời Gian',
      tagColor: 'text-orange-400 bg-orange-950/60 border-orange-800/60',
      iconBg: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
      accentBorder: 'hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]',
      highlightText: 'mất 5–7 tiếng/video, không duy trì được đều đặn'
    },
    {
      tag: 'Bí Kịch Bản & Flop View',
      tagColor: 'text-pink-400 bg-pink-950/60 border-pink-800/60',
      iconBg: 'bg-pink-500/20 border-pink-500/40 text-pink-400',
      accentBorder: 'hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]',
      highlightText: 'người xem lướt qua sau 3 giây, video 0 view'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CameraOff':
        return <CameraOff className="w-6 h-6" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      default:
        return <CameraOff className="w-6 h-6" />;
    }
  };

  return (
    <section className="my-12">
      {/* Warning & Core Root-Cause Callout (Traditional Non-AI Video Obstacles) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#240b1e] via-[#180d28] to-[#120822] border-2 border-rose-500/60 p-6 sm:p-8 shadow-[0_0_40px_rgba(244,63,94,0.25)] mb-12">
        {/* Decorative background glow circles */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Top Tag Alert */}
          <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full shadow-inner mb-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span className="tracking-wide uppercase">RÀO CẢN KHI TỰ LÀM VIDEO TRUYỀN THỐNG (KHÔNG DÙNG AI)</span>
          </div>

          {/* Core Question Headline */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200 tracking-tight leading-tight mb-4">
            BẠN MUỐN LÀM VIDEO XÂY KÊNH NHƯNG ĐANG BỊ MẮC KẸT VÌ CÁCH QUAY DỰNG THỦ CÔNG?
          </h3>

          {/* Root-Cause High-Impact Answer Box */}
          <div className="bg-[#0f071d]/90 border border-rose-500/30 rounded-xl p-4 sm:p-5 shadow-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-xl shadow-md shrink-0 mt-0.5">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
                <span className="text-gray-300 font-medium">Ngại lên hình, không có studio, quay đi quay lại mất cả ngày mà video vẫn lẹt đẹt vài chục view? — </span>
                <span className="text-white font-black text-base sm:text-lg md:text-xl block sm:inline mt-1 sm:mt-0">
                  <span className="text-pink-300 font-black">Ứng dụng AI</span> giúp bạn tự động hóa sản xuất video triệu view mà <span className="text-amber-300 font-black">KHÔNG CẦN LỘ MẶT &amp; KHÔNG CẦN THIẾT BỊ ĐẮT TIỀN!</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 Title: Các Rào Cản Khi Làm Video Truyền Thống */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-md mb-2">
          <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
          <span>PHÂN TÍCH RÀO CẢN THỰC TẾ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b-2 border-[#3b2d54]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300">
            1. Vấn Đề Bạn Đang Gặp Phải Khi Tự Làm Video Ngắn (Không Dùng AI)
          </span>
          <span className="text-xs text-rose-300 bg-rose-950/70 border border-rose-500/40 px-3.5 py-1.5 rounded-full font-extrabold tracking-wide uppercase self-start sm:self-auto">
            4 Khó Khăn Lớn Nhất
          </span>
        </h2>
        <p className="text-sm text-gray-300 mt-2">
          Hầu hết người mới bắt đầu đều nản lòng và bỏ cuộc ngay từ những ngày đầu vì vướng phải 4 rào cản này khi làm video thủ công:
        </p>
      </div>

      {/* 4 Super Highlighted Pain Points Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
        {PAIN_POINTS.map((pt, idx) => {
          const meta = painPointMeta[idx] || painPointMeta[0];

          return (
            <div
              key={idx}
              className={`relative bg-[#15102a]/95 border-2 border-[#3b2d54] ${meta.accentBorder} rounded-2xl p-6 transition-all duration-300 shadow-xl group flex flex-col justify-between overflow-hidden`}
            >
              <div>
                {/* Header with Tag and Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 ${meta.iconBg} rounded-xl border shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(pt.icon)}
                    </div>
                    <div>
                      <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded border ${meta.tagColor} tracking-wider`}>
                        {meta.tag}
                      </span>
                      <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-pink-300 transition-colors mt-1">
                        {pt.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed pl-1">
                  {pt.description}
                </p>
              </div>

              {/* Bottom Warning Alert Line */}
              <div className="mt-4 pt-3 border-t border-[#2a2044] flex items-center gap-2 text-xs font-semibold text-rose-300/90">
                <AlertOctagon className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                <span className="italic">Hậu quả: {meta.highlightText}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Solution Section */}
      <div className="mt-14 pt-10 border-t border-[#2d2244]">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <span className="text-xs uppercase tracking-[0.25em] font-black text-purple-400">
            GIẢI PHÁP ĐỘT PHÁ TỪ AI
          </span>
        </div>

        {/* Big Highlighted Headline */}
        <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-8">
          Toàn bộ quy trình làm Video AI — giải quyết triệt để <span className="text-[#60a5fa] font-black drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">mọi rào cản quay dựng truyền thống</span>
        </h3>

        {/* 4 Solution Cards Stack */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-[#130e2a] border border-[#231a3d] hover:border-emerald-500/50 hover:bg-[#181235] rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-md group">
            <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                <strong className="text-white font-bold text-base block sm:inline mr-1">Không cần lộ mặt hay nói trước máy quay</strong>
                — AI tự động tạo hình ảnh nhân vật ảo và giọng đọc truyền cảm xúc tự nhiên.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#130e2a] border border-[#231a3d] hover:border-emerald-500/50 hover:bg-[#181235] rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-md group">
            <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                <strong className="text-white font-bold text-base block sm:inline mr-1">Tiết kiệm 100% chi phí máy móc &amp; studio</strong>
                — chỉ cần chiếc điện thoại hoặc máy tính văn phòng có sẵn, không phải đầu tư tốn kém.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#130e2a] border border-[#231a3d] hover:border-emerald-500/50 hover:bg-[#181235] rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-md group">
            <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                <strong className="text-white font-bold text-base block sm:inline mr-1">Sản xuất thần tốc trong 10–15 phút</strong>
                — rút ngắn thời gian gấp 10 lần so với quay dựng thủ công, dễ dàng duy trì đăng video đều đặn mỗi ngày.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#130e2a] border border-[#231a3d] hover:border-emerald-500/50 hover:bg-[#181235] rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-md group">
            <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                <strong className="text-white font-bold text-base block sm:inline mr-1">Làm chủ Hook 3s &amp; công thức Prompt</strong>
                — kịch bản thu hút, giữ chân người xem ngay từ 3 giây đầu tiên giúp video dễ cắn đề xuất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
