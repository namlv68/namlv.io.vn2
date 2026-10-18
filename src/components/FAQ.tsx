import React, { useState } from 'react';
import { FAQS } from '../data/courseData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#c084fc] flex items-center justify-center gap-2">
          <HelpCircle className="w-7 h-7 text-purple-400" />
          Câu Hỏi Thường Gặp (FAQ)
        </h2>
        <p className="text-gray-300 text-sm mt-1">
          Mọi thắc mắc phổ biến trước khi đăng ký chia sẻ cách làm video AI Affiliate & Thương hiệu
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#15102a] border border-[#3b2d54] rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 md:p-5 font-bold text-white text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer hover:text-purple-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-purple-400 font-mono">Q{idx + 1}.</span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 pt-1 md:px-5 border-t border-[#3b2d54]/60 text-sm text-gray-300 leading-relaxed bg-[#0a0814]/50">
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
