import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface Props {
  onEnroll: () => void;
}

const STEPS = [
  {
    num: '01',
    title: 'Tìm hiểu và hiểu nền tảng',
    desc: 'Hiểu rõ thuật toán phân phối nội dung của TikTok, Reels, Shorts và tư duy xây kênh, chọn chủ đề/ngách nội dung hiệu quả.',
    badge: 'Nền tảng'
  },
  {
    num: '02',
    title: 'Tạo video AI đầu tiên',
    desc: 'Cài đặt công cụ, làm quen giao diện và tự tay xuất bản thước phim chuyển động AI đầu tay chỉ trong vài phút.',
    badge: 'Thực hành ngay'
  },
  {
    num: '03',
    title: 'Hook 3s đầu',
    desc: 'Kỹ thuật tạo điểm nhấn hình ảnh & âm thanh 3 giây đầu để người xem không lướt qua, tối ưu chỉ số giữ chân (Retention).',
    badge: 'Giữ chân khán giả'
  },
  {
    num: '04',
    title: 'Công thức viết Prompt video',
    desc: 'Cấu trúc câu lệnh Prompt chuẩn xác tạo hình ảnh, chuyển động góc máy, nhân vật và kịch bản video AI không bị biến dạng.',
    badge: 'Prompt'
  },
  {
    num: '05',
    title: 'Sản xuất video hoàn chỉnh theo chủ đề mong muốn',
    desc: 'Quy trình khép kín từ ý tưởng, kịch bản, âm thanh đến cắt ghép và xuất bản video hoàn chỉnh chất lượng cao theo đúng chủ đề bạn chọn.',
    badge: 'Xuất bản'
  }
];

export const Syllabus: React.FC<Props> = ({ onEnroll }) => {
  return (
    <section className="mt-24">
      <SectionHeading
        align="left"
        eyebrow="2 · Lộ trình"
        title="Lộ trình làm video AI 5 bước"
        description="Đi từ người mới bắt đầu đến tự tay sản xuất video AI cuốn hút theo chủ đề mong muốn."
      />

      <ol className="bg-white border border-violet-100 rounded-2xl divide-y divide-violet-50">
        {STEPS.map((step) => (
          <li key={step.num} className="flex items-start gap-4 p-5 sm:p-6">
            <span className="shrink-0 w-10 h-10 rounded-xl bg-violet-50 text-violet-700 font-bold text-sm flex items-center justify-center">
              {step.num}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <span className="text-[11px] font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md">
                  {step.badge}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-violet-50 border border-violet-100 rounded-2xl p-5">
        <p className="text-sm text-slate-700 text-center sm:text-left">
          Toàn bộ lộ trình được hướng dẫn thực hành chi tiết trong{' '}
          <strong className="font-semibold text-slate-900">buổi Zoom chia sẻ AI miễn phí</strong>.
        </p>
        <button
          onClick={onEnroll}
          className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
        >
          Đăng ký tham gia miễn phí
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
