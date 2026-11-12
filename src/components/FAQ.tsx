import React, { useState } from 'react';
import { FAQS } from '../data/courseData';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mt-24 max-w-3xl mx-auto">
      <SectionHeading
        eyebrow="Hỏi đáp"
        title="Câu hỏi thường gặp"
        description="Dành cho người mới: cách tạo ảnh chuẩn theo khuôn mặt của mình và hoàn thiện video AI đầu tiên trong buổi Zoom."
      />

      <div className="bg-white border border-violet-100 rounded-2xl divide-y divide-violet-50">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx}>
              <button
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 cursor-pointer group"
              >
                <span className="text-sm md:text-base font-semibold text-slate-800 group-hover:text-violet-700 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-violet-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 md:px-6 -mt-1 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
