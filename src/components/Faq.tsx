"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type FaqItem = { question: string; answer: string };

export function Faq({
  items,
  eyebrow,
  title,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`flex flex-col ${eyebrow && title ? "items-center" : ""}`}>
      {eyebrow && title && (
        <div className="w-full max-w-[650px] text-center">
          <p className="eden-eyebrow">{eyebrow}</p>
          <h2 className="eden-h2 mt-5 text-plum">{title}</h2>
        </div>
      )}

      <div
        className={`w-full bg-warmwhite ${eyebrow && title ? "mt-[60px] max-w-[750px]" : ""}`}
      >
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.question} className="border-b border-plum/15 first:border-t">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center gap-3 px-0 py-5 text-left sm:gap-4 sm:py-[20px]"
              >
                <span className="w-10 shrink-0 text-[18px] text-plum/70 sm:w-14">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="min-w-0 flex-1 text-[18px] font-medium leading-[25.2px] text-plum [overflow-wrap:anywhere]">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`w-6 shrink-0 text-right text-2xl font-light text-plum transition-transform duration-300 sm:w-10 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-12 pr-4 text-base leading-[22.4px] text-body sm:pl-14">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
