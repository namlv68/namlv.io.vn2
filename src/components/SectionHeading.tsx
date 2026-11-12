import React from 'react';

interface Props {
  eyebrow?: string;
  /** Số thứ tự mục, hiển thị trong ô tròn tím */
  step?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  as?: 'h2' | 'h3';
}

/** Tiêu đề mục dùng chung: nhãn + tiêu đề lớn + mô tả ngắn */
export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  step,
  title,
  description,
  align = 'center',
  as = 'h2',
}) => {
  const Tag = as;
  const isCenter = align === 'center';
  return (
    <div className={`mb-10 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {(eyebrow || step) && (
        <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          {step && (
            <span className="w-7 h-7 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
              {step}
            </span>
          )}
          {eyebrow && (
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-violet-600">{eyebrow}</span>
          )}
        </div>
      )}
      <Tag
        className={`font-extrabold text-slate-900 tracking-tight leading-tight ${
          as === 'h2' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        }`}
      >
        {title}
      </Tag>
      {description && <p className="mt-3 text-base md:text-lg text-slate-500 leading-relaxed">{description}</p>}
    </div>
  );
};

/** Từ khóa được tô nổi bật kiểu bút dạ quang tím */
export const Mark: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-violet-700 bg-[linear-gradient(transparent_60%,#ede9fe_60%)] px-0.5">{children}</span>
);
