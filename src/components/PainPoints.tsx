import React from 'react';
import { CameraOff, DollarSign, Clock, FileText, Check } from 'lucide-react';
import { PAIN_POINTS } from '../data/courseData';
import { SectionHeading } from './SectionHeading';

const CONSEQUENCES = [
  'Trì hoãn mãi không dám bắt tay xây kênh',
  'Tốn hàng chục triệu nhưng không thu lại vốn',
  'Mất 5–7 tiếng/video, không duy trì được đều đặn',
  'Người xem lướt qua sau 3 giây, video 0 view'
];

const SOLUTIONS = [
  {
    title: 'Không cần lộ mặt hay nói trước máy quay',
    desc: 'AI tự động tạo hình ảnh nhân vật và giọng đọc truyền cảm xúc tự nhiên.'
  },
  {
    title: 'Tiết kiệm 100% chi phí máy móc & studio',
    desc: 'Chỉ cần chiếc điện thoại hoặc máy tính văn phòng có sẵn, không phải đầu tư tốn kém.'
  },
  {
    title: 'Sản xuất nhanh trong 10–15 phút',
    desc: 'Rút ngắn thời gian gấp 10 lần so với quay dựng thủ công, dễ dàng đăng video đều đặn mỗi ngày.'
  },
  {
    title: 'Làm chủ Hook 3s & công thức Prompt',
    desc: 'Kịch bản giữ chân người xem ngay từ 3 giây đầu giúp video dễ lên đề xuất.'
  }
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
    <section className="mt-24">
      {/* Câu hỏi mở */}
      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 sm:p-8 mb-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-2">
          Rào cản khi tự làm video truyền thống
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug tracking-tight">
          Bạn muốn làm video xây kênh nhưng đang mắc kẹt vì cách quay dựng thủ công?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          Ngại lên hình, không có studio, quay đi quay lại mất cả ngày mà video vẫn lẹt đẹt vài chục view?{' '}
          <strong className="font-semibold text-slate-900">
            Ứng dụng AI giúp bạn tự động hóa sản xuất video triệu view mà không cần lộ mặt và không cần thiết bị đắt tiền.
          </strong>
        </p>
      </div>

      <SectionHeading
        align="left"
        eyebrow="1 · Vấn đề"
        title="4 khó khăn lớn nhất khi tự làm video ngắn (không dùng AI)"
        description="Hầu hết người mới đều nản lòng ngay từ những ngày đầu vì vướng phải các rào cản này."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAIN_POINTS.map((pt, idx) => (
          <div key={idx} className="bg-white border border-violet-100 rounded-2xl p-5 sm:p-6 flex flex-col">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                {getIcon(pt.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug pt-1.5">{pt.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{pt.description}</p>
            <p className="mt-auto pt-4 text-xs text-rose-600">
              Hậu quả: {CONSEQUENCES[idx] ?? CONSEQUENCES[0]}
            </p>
          </div>
        ))}
      </div>

      {/* Giải pháp */}
      <div className="mt-16">
        <SectionHeading
          align="left"
          eyebrow="Giải pháp từ AI"
          title={
            <>
              Quy trình làm video AI giải quyết{' '}
              <span className="text-violet-600">mọi rào cản quay dựng truyền thống</span>
            </>
          }
        />

        <ul className="bg-white border border-violet-100 rounded-2xl divide-y divide-violet-50">
          {SOLUTIONS.map((s) => (
            <li key={s.title} className="flex items-start gap-3.5 p-5">
              <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                <strong className="font-semibold text-slate-900">{s.title}</strong> — {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
