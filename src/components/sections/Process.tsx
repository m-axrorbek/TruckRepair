"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Murojaat",
    description: "Biz bilan bog'laning. Telefon, Telegram yoki shaxsan kelib bizga murojaat qiling.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnostika",
    description: "Muammoni aniqlaymiz. Zamonaviy uskunalar yordamida to'liq diagnostika o'tkazamiz.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Kelishuv",
    description: "Narv va muddatni kelishamiz. Shaffof va adolatli narx siyosati bilan xizmat qilamiz.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Ta'mirlash",
    description: "Sifatli ta'mirlash jarayoni. Tajribali ustalar eng yaxshi ehtiyot qismlar bilan ishlaydi.",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Tayyor",
    description: "Mashina tayyor, siz xursand. Kafolat bilan mashinangizni topshiramiz.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 industrial-grid opacity-15" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
            Ish Jarayoni
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Ish jarayoni</h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Bizning ish jarayonimiz bosqichma-bosqich va shaffof.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#E53935]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#E53935] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-900/40"
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#E53935]/30 animate-ping" style={{ animationDelay: `${i * 0.3}s` }} />
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#17181C] border border-[#E53935]/30 rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-black text-[#E53935]">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#B5B5B5] leading-relaxed">{step.description}</p>

                {/* Arrow for non-last items (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-4 text-[#E53935]/40 text-2xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-20"
        >
          <motion.a
            href="tel:+998906304008"
            className="inline-flex items-center gap-3 bg-[#E53935] hover:bg-[#C62828] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl shadow-red-900/30"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-5 h-5" />
            Hoziroq Boshlash
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
