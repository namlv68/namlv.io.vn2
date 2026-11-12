import React from 'react';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  as?: 'h2' | 'h3';
}

/** Tiêu đề mục dùng chung: nhãn nhỏ + tiêu đề + mô tả ngắn */
export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  as = 'h2',
}) => {
  const Tag = as;
  const isCenter = align === 'center';
  return (
    <div className={`mb-8 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-2">
          {eyebrow}
        </div>
      )}
      <Tag
        className={`font-bold text-slate-900 tracking-tight leading-snug ${
          as === 'h2' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        }`}
      >
        {title}
      </Tag>
      {description && <p className="mt-2 text-sm md:text-base text-slate-500">{description}</p>}
    </div>
  );
};
