import React from 'react';
import { 
  Compass, 
  Video, 
  Zap, 
  Terminal, 
  Film, 
  Sparkles, 
  ArrowRight,
  Gift
} from 'lucide-react';

interface Props {
  onEnroll: () => void;
}

export const Syllabus: React.FC<Props> = ({ onEnroll }) => {
  const steps = [
    {
      num: '01',
      title: 'Tìm hiểu và hiểu nền tảng',
      desc: 'Hiểu rõ thuật toán phân phối nội dung của TikTok, Reels, Shorts và tư duy xây kênh, chọn chủ đề/ngách nội dung hiệu quả.',
      badge: 'Nền Tảng',
      badgeColor: 'text-blue-300 bg-blue-950/60 border-blue-500/30',
      icon: Compass,
      iconColor: 'text-blue-400'
    },
    {
      num: '02',
      title: 'Tạo Video AI đầu tiên',
      desc: 'Cài đặt công cụ, làm quen giao diện và tự tay xuất bản thước phim chuyển động AI đầu tay chỉ trong vài phút.',
      badge: 'Thực Hành Ngay',
      badgeColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30',
      icon: Video,
      iconColor: 'text-emerald-400'
    },
    {
      num: '03',
      title: 'Hook 3s đầu',
      desc: 'Kỹ thuật giật tít, tạo điểm nhấn thị giác & âm thanh 3 giây đầu để ngăn người xem lướt qua, tối ưu chỉ số giữ chân (Retention).',
      badge: 'Giữ Chân Khán Giả',
      badgeColor: 'text-amber-300 bg-amber-950/60 border-amber-500/30',
      icon: Zap,
      iconColor: 'text-amber-400'
    },
    {
      num: '04',
      title: 'Công thức viết Prompt video',
      desc: 'Cấu trúc câu lệnh Prompt chuẩn xác tạo hình ảnh, chuyển động góc máy, nhân vật và kịch bản video AI không bị biến dạng.',
      badge: 'Prompt Master',
      badgeColor: 'text-pink-300 bg-pink-950/60 border-pink-500/30',
      icon: Terminal,
      iconColor: 'text-pink-400'
    },
    {
      num: '05',
      title: 'Sản xuất video hoàn chỉnh theo chủ đề mong muốn',
      desc: 'Quy trình khép kín từ ý tưởng, kịch bản, âm thanh đến cắt ghép và xuất bản video hoàn chỉnh chất lượng cao theo đúng chủ đề bạn chọn.',
      badge: 'Xuất Bản Hoàn Chỉnh',
      badgeColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30',
      icon: Film,
      iconColor: 'text-cyan-400'
    }
  ];

  return (
    <section className="my-12">
      {/* Header Lộ trình */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>QUY TRÌNH TINH GỌN</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
            2. Lộ Trình Làm Video AI
          </h2>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl">
            Lộ trình 5 bước thực chiến giúp bạn đi từ người mới bắt đầu đến tự tay sản xuất video AI cuốn hút theo chủ đề mong muốn.
          </p>
        </div>
        <span className="text-xs bg-purple-900/40 text-purple-200 border border-purple-500/40 px-3.5 py-1.5 rounded-full font-bold shrink-0 self-start md:self-auto">
          5 Bước Thực Chiến
        </span>
      </div>

      {/* Condensed 5-Step Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isFullWidthLast = index === steps.length - 1 && steps.length % 2 !== 0;
          return (
            <div
              key={step.num}
              className={`bg-[#140e2b] border border-[#2d2244] hover:border-purple-500/50 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-start gap-3.5 ${
                isFullWidthLast ? 'md:col-span-2 bg-gradient-to-r from-[#140e2b] via-[#1a1138] to-[#140e2b]' : ''
              }`}
            >
              {/* Step Number with Gradient */}
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1b143a] border border-[#3c2d5c] flex flex-col items-center justify-center text-center shadow-inner">
                <span className="text-[10px] font-bold text-gray-400 uppercase leading-none">BƯỚC</span>
                <span className="text-sm font-black text-white leading-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {step.num}
                </span>
              </div>

              {/* Step Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${step.iconColor}`} />
                    <span className="truncate">{step.title}</span>
                  </h4>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border shrink-0 ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concise Bottom Callout / Banner */}
      <div className="mt-5 bg-gradient-to-r from-purple-950/60 via-[#181133] to-pink-950/50 border border-purple-500/30 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-gray-300">
          <Gift className="w-5 h-5 text-pink-400 shrink-0" />
          <span>
            Toàn bộ lộ trình này sẽ được hướng dẫn thực hành chi tiết trong <strong>buổi Zoom chia sẻ AI miễn phí</strong>.
          </span>
        </div>
        <button
          onClick={onEnroll}
          className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <span>Đăng Ký Tham Gia Miễn Phí</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
