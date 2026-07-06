"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  /** Start counting from this value instead of 0 (useful for years). */
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

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08 * i }}
          className="text-center"
        >
          <p className="font-display text-4xl text-gold sm:text-5xl">
            <Counter stat={stat} />
          </p>
          <p className="mx-auto mt-3 max-w-[180px] text-sm leading-snug text-warmwhite/70">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
