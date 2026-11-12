import React from 'react';
import { CameraOff, DollarSign, Clock, FileText, X, Check, ArrowRight } from 'lucide-react';
import { PAIN_POINTS } from '../data/courseData';
import { SectionHeading, Mark } from './SectionHeading';

const CONSEQUENCES = [
  'Trì hoãn mãi, không dám bắt tay xây kênh',
  'Tốn hàng chục triệu nhưng không thu lại vốn',
  'Mất 5–7 tiếng/video, không duy trì được',
  'Người xem lướt qua sau 3 giây, video 0 view'
];

/** So sánh trực diện: làm thủ công vs làm bằng AI */
const COMPARE = [
  { topic: 'Lên hình', before: 'Phải lộ mặt, nói trước máy quay', after: 'Không cần lộ mặt — AI tạo nhân vật & giọng đọc' },
  { topic: 'Chi phí', before: 'Máy quay, đèn, micro, thuê KOL', after: 'Chỉ cần điện thoại hoặc máy tính có sẵn' },
  { topic: 'Thời gian', before: '5–7 tiếng cho 1 video', after: '10–15 phút cho 1 video' },
  { topic: 'Kịch bản', before: 'Bí ý tưởng, lướt qua sau 3 giây', after: 'Công thức Hook 3s & Prompt giữ chân người xem' }
];

const getIcon = (iconName: string) => {
  const cls = 'w-5 h-5';
  switch (iconName) {
    case 'DollarSign':
      return <DollarSign className={cls} />;
    case 'Clock':
      return <Clock className={cls} />;
    case 'FileText':
      return <FileText className={cls} />;
    case 'CameraOff':
    default:
      return <CameraOff className={cls} />;
  }
};

export const PainPoints: React.FC = () => {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        step="1"
        eyebrow="Vấn đề"
        title={
          <>
            Muốn xây kênh nhưng <Mark>mắc kẹt</Mark> vì quay dựng thủ công?
          </>
        }
        description="Hầu hết người mới bỏ cuộc ngay từ đầu vì 4 rào cản này."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PAIN_POINTS.map((pt, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 border-l-4 border-l-rose-400 rounded-2xl p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                {getIcon(pt.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{pt.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">{pt.description}</p>
            <p className="mt-auto pt-4 text-sm font-semibold text-rose-600 flex items-start gap-1.5">
              <X className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={3} />
              {CONSEQUENCES[idx] ?? CONSEQUENCES[0]}
            </p>
          </div>
        ))}
      </div>

      {/* Giải pháp: bảng so sánh */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Giải pháp"
          title={
            <>
              Làm video bằng AI: <Mark>nhanh hơn 10 lần</Mark>, gần như không tốn chi phí
            </>
          }
        />

        <div className="bg-white border border-violet-100 rounded-3xl overflow-hidden shadow-sm">
          {/* Tiêu đề cột */}
          <div className="hidden md:grid grid-cols-[140px_1fr_1fr] text-sm font-bold">
            <div className="p-4" />
            <div className="p-4 text-slate-500 bg-slate-50">Làm thủ công</div>
            <div className="p-4 text-white bg-violet-600">Làm bằng AI</div>
          </div>

          {COMPARE.map((row) => (
            <div
              key={row.topic}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] border-t border-violet-50 first:border-t-0 md:first:border-t"
            >
              <div className="px-4 pt-4 md:py-5 text-sm font-bold uppercase tracking-wide text-slate-400 md:text-slate-700 md:normal-case md:tracking-normal md:text-base">
                {row.topic}
              </div>
              <div className="px-4 py-2 md:py-5 md:bg-slate-50/60 text-sm md:text-base text-slate-500 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-1" strokeWidth={3} />
                <span className="line-through decoration-slate-300">{row.before}</span>
              </div>
              <div className="px-4 pb-4 pt-1 md:py-5 md:bg-violet-50/60 text-sm md:text-base font-semibold text-slate-900 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" strokeWidth={3.5} />
                <span>{row.after}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-base md:text-lg text-slate-700">
          <ArrowRight className="inline w-5 h-5 text-violet-600 -mt-0.5 mr-1" />
          Bạn chỉ cần <strong className="text-violet-700">5 bước</strong> dưới đây để làm được điều này.
        </p>
      </div>
    </section>
  );
};
