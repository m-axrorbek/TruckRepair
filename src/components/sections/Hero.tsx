"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Send, Star, Truck, Wrench, Clock } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { icon: Star,  value: 10,   suffix: "+", label: "Yillik tajriba" },
  { icon: Truck, value: 3000, suffix: "+", label: "Ta'mirlangan yuk mashinalari" },
  { icon: Wrench,value: 0,    suffix: "",  label: "Malakali ustalar", text: "Professional" },
  { icon: Clock, value: 0,    suffix: "",  label: "Vaqtingizni qadrlaymiz", text: "Tezkor xizmat" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B0B0D]">

      {/* ── Background image with parallax ── */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="/hero.png"
          alt="Professional truck workshop"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* left gradient — text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
        {/* top-left dark corner */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D]/60 via-transparent to-transparent" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col justify-between min-h-screen max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10"
      >
        {/* Text block */}
        <div className="max-w-xl flex flex-col justify-center flex-1">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full mb-8 w-fit"
          >
            <span className="w-2 h-2 bg-[#E53935] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#B5B5B5]">
              Farg&apos;ona viloyatidagi №1 Servis
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            <span className="text-white block">Professional</span>
            <span className="text-white">Truck </span>
            <span className="text-[#E53935]">Service</span>
            <span className="text-white block">Center</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-[#B5B5B5] leading-relaxed mb-10 max-w-md"
          >
            Furalaringiz uchun tezkor va ishonchli ta&apos;mirlash xizmatini taqdim etamiz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="tel:+998901234567"
              className="flex items-center gap-2.5 bg-[#E53935] hover:bg-[#C62828] text-white px-7 py-4 rounded-xl font-bold text-base transition-colors duration-200 shadow-xl shadow-red-900/40"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              Qo&apos;ng&apos;iroq qilish
            </motion.a>

            <motion.a
              href="https://t.me/usta_xonasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white px-7 py-4 rounded-xl font-bold text-base transition-colors duration-200 border border-white/15 hover:border-white/30 hover:bg-white/5"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Telegram SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram orqali yozish
            </motion.a>
          </motion.div>
        </div>

        {/* ── Stats row — pinned to bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="glass-light rounded-2xl p-5"
            >
              <s.icon className="w-6 h-6 text-[#E53935] mb-3" />
              <div className="text-2xl lg:text-3xl font-black text-white leading-none mb-1">
                {s.text ?? <AnimatedCounter value={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-xs text-[#B5B5B5] font-medium leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
