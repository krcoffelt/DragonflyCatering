"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  from?: number;
};

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const from = stat.from ?? 0;
  const [display, setDisplay] = useState(reduce ? stat.value : from);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (stat.value - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, stat.value, from]);

  return (
    <span ref={ref}>
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

type StatsImageSectionProps = {
  stats: Stat[];
  image: { src: string; alt: string };
};

export function StatsImageSection({ stats, image }: StatsImageSectionProps) {
  return (
    <section className="relative h-[703px] overflow-hidden">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/20" aria-hidden />

      <div className="eden-container relative flex h-full flex-col justify-end pb-[60px] pt-[500px]">
        <div className="flex flex-wrap gap-x-[80px] gap-y-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="flex flex-col gap-2.5"
            >
              <p className="font-display text-[80px] leading-[88px] text-warmwhite">
                <Counter stat={stat} />
              </p>
              <p className="max-w-[200px] text-base leading-[22.4px] text-warmwhite">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
