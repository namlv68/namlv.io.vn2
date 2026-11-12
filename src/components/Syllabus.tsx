import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import { SectionHeading, Mark } from './SectionHeading';

interface Props {
  onEnroll: () => void;
}

const STEPS = [
  {
    num: '1',
    title: 'Hiểu nền tảng',
    result: 'Chọn đúng ngách, đúng chủ đề',
    desc: 'Hiểu thuật toán phân phối của TikTok, Reels, Shorts và tư duy xây kênh.'
  },
  {
    num: '2',
    title: 'Tạo video AI đầu tiên',
    result: 'Có video đầu tay trong vài phút',
    desc: 'Cài đặt công cụ, làm quen giao diện, tự tay xuất bản video chuyển động AI.'
  },
  {
    num: '3',
    title: 'Hook 3 giây đầu',
    result: 'Người xem không lướt qua',
    desc: 'Tạo điểm nhấn hình ảnh & âm thanh 3 giây đầu, tối ưu chỉ số giữ chân.'
  },
  {
    num: '4',
    title: 'Công thức viết Prompt',
    result: 'Hình ảnh đẹp, không biến dạng',
    desc: 'Cấu trúc câu lệnh chuẩn cho hình ảnh, góc máy, nhân vật và kịch bản.'
  },
  {
    num: '5',
    title: 'Sản xuất video hoàn chỉnh',
    result: 'Video chất lượng theo chủ đề bạn chọn',
    desc: 'Quy trình khép kín: ý tưởng → kịch bản → âm thanh → dựng → xuất bản.'
  }
];

export const Syllabus: React.FC<Props> = ({ onEnroll }) => {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        step="2"
        eyebrow="Lộ trình"
        title={
          <>
            <Mark>5 bước</Mark> từ người mới đến video AI hoàn chỉnh
          </>
        }
      />

      <ol className="relative grid gap-4">
        {/* đường nối dọc */}
        <span className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-violet-100 hidden sm:block" aria-hidden="true" />
        {STEPS.map((step) => (
          <li
            key={step.num}
            className="relative bg-white border border-violet-100 rounded-2xl p-5 sm:p-6 sm:pl-16 flex flex-col sm:block gap-3"
          >
            <span className="sm:absolute sm:left-[13px] sm:top-6 w-10 h-10 sm:w-[30px] sm:h-[30px] rounded-full bg-violet-600 text-white font-bold text-base sm:text-sm flex items-center justify-center ring-4 ring-white">
              {step.num}
            </span>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-900">{step.title}</h3>
              <span className="text-sm font-semibold text-emerald-600 md:text-right">✓ {step.result}</span>
            </div>
            <p className="mt-1.5 text-sm md:text-base text-slate-500 leading-relaxed">{step.desc}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-violet-600 text-white rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Gift className="w-8 h-8 shrink-0 hidden md:block text-violet-200" />
          <p className="text-base md:text-lg">
            Toàn bộ lộ trình được hướng dẫn trực tiếp trong{' '}
            <strong className="font-extrabold">buổi Zoom miễn phí</strong>.
          </p>
        </div>
        <button
          onClick={onEnroll}
          className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-violet-700 hover:bg-violet-50 font-bold text-base px-6 py-3.5 rounded-2xl transition-colors cursor-pointer"
        >
          Giữ chỗ miễn phí
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
