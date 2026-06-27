"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Settings, Activity, Zap, ArrowRight, CheckCircle } from "lucide-react";

const plans = [
  {
    icon: Cpu,
    title: "Diagnostika",
    subtitle: "Kompyuter diagnostika",
    price: "200 000",
    unit: "so'm",
    features: ["Bortovoy kompyuter skaneri", "Xato kodlarini o'qish", "Texnik hisobot", "Maslahat xizmati"],
    featured: false,
    cta: "Buyurtma berish",
  },
  {
    icon: Settings,
    title: "Motor Remont",
    subtitle: "Dvigatel ta'mirlash",
    price: "Kelishiladi",
    unit: "",
    features: ["To'liq diagnostika", "Ehtiyot qismlar", "Kapital ta'mirlash", "6 oy kafolat", "Bepul diagnostika"],
    featured: true,
    cta: "Buyurtma berish",
  },
  {
    icon: Activity,
    title: "Xodovoy",
    subtitle: "Yurish qismi ta'mirlash",
    price: "300 000",
    unit: "dan",
    features: ["Amortizatorlar", "Rul mexanizmi", "Podshipniklar", "Shakvashak"],
    featured: false,
    cta: "Buyurtma berish",
  },
  {
    icon: Zap,
    title: "Elektrik",
    subtitle: "Elektr tizimlari",
    price: "150 000",
    unit: "dan",
    features: ["Generator ta'mirlash", "Starter ta'mirlash", "Provodka", "Bortovoy kompyuter"],
    featured: false,
    cta: "Buyurtma berish",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 bg-[#17181C] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E53935]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
            Narxlar
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Narxlar</h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Xizmatlarimiz uchun taxminiy narxlar bilan tanishing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? "bg-[#E53935] glow-red"
                  : "bg-[#0B0B0D] border border-white/8"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#E53935] text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase">
                  Eng Mashhur
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                plan.featured ? "bg-white/20" : "bg-[#E53935]/10"
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.featured ? "text-white" : "text-[#E53935]"}`} />
              </div>

              {/* Title */}
              <div className={`text-sm font-medium mb-1 ${plan.featured ? "text-red-200" : "text-[#B5B5B5]"}`}>
                {plan.subtitle}
              </div>
              <h3 className={`text-xl font-black mb-4 ${plan.featured ? "text-white" : "text-white"}`}>
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className={`text-3xl font-black ${plan.featured ? "text-white" : "text-white"}`}>
                  {plan.price}
                </div>
                {plan.unit && (
                  <div className={`text-sm ${plan.featured ? "text-red-200" : "text-[#B5B5B5]"}`}>
                    {plan.unit}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.featured ? "text-white/80" : "text-[#E53935]"}`} />
                    <span className={`text-sm ${plan.featured ? "text-white/90" : "text-[#B5B5B5]"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="tel:+998901234567"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.featured
                    ? "bg-white text-[#E53935] hover:bg-gray-100"
                    : "bg-[#E53935] text-white hover:bg-[#C62828]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[#B5B5B5] text-sm mt-10"
        >
          * Narxlar taxminiy bo&apos;lib, aniq narx diagnostika natijalari asosida belgilanadi.
          Bepul maslahat olish uchun{" "}
          <a href="tel:+998901234567" className="text-[#E53935] hover:underline">
            +998 90 123 45 67
          </a>{" "}
          ga qo&apos;ng&apos;iroq qiling.
        </motion.p>
      </div>
    </section>
  );
}
