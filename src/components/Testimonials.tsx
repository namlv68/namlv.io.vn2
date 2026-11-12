import React from 'react';
import { TESTIMONIALS } from '../data/courseData';
import { Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Testimonials: React.FC = () => {
  return (
    <section className="mt-24">
      <SectionHeading
        eyebrow="Góc chia sẻ"
        title="Những người từng tham gia buổi chia sẻ video AI"
        description="Cảm nhận thực tế từ cộng đồng sau khi áp dụng quy trình tạo video AI bán hàng."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((item, idx) => (
          <figure key={idx} className="bg-white border border-violet-100 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-0.5 text-amber-400 mb-3" aria-label="5 sao">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm text-slate-600 leading-relaxed flex-1">“{item.quote}”</blockquote>
            <figcaption className="mt-5 pt-4 border-t border-violet-50">
              <div className="text-sm font-semibold text-slate-900">{item.name}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.channel}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
