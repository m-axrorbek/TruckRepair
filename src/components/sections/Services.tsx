"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Settings, Zap, Cpu, Activity, RotateCcw, Shield, Circle, Flame } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Motor Remont",
    description: "Dvigatel ta'mirlash, kapital ta'mirlash, silindr bloklari, porshenlar va boshqa barcha motor tizimlarini xizmat ko'rsatish.",
    tag: null,
  },
  {
    icon: RotateCcw,
    title: "Korobka",
    description: "Uzatuvchi qutilar diagnostika va ta'mirlash. Avtomatik va mexanik uzatish qutilari bilan ishlash.",
    tag: null,
  },
  {
    icon: Activity,
    title: "Xodovoy",
    description: "Yurish qismi va rame tizimi ta'mirlash. Amortizatorlar, rul mexanizmi va qo'shimcha tizimlar.",
    tag: "Eng mashhur",
  },
  {
    icon: Cpu,
    title: "Diagnostika",
    description: "Kompyuter diagnostika xizmatlari. Barcha marka va model furalar uchun zamonaviy uskunalar.",
    tag: "Bepul",
  },
  {
    icon: Zap,
    title: "Elektrik",
    description: "Elektr tizimlari diagnostika va ta'mirlash. Generator, starter, akomalator va bortovoy kompyuter.",
    tag: null,
  },
  {
    icon: Circle,
    title: "Shina Servis",
    description: "Shina almashtirish va balanslashtirish. Barcha o'lchamdagi shinalarga xizmat ko'rsatish.",
    tag: null,
  },
  {
    icon: Flame,
    title: "Payvandlash",
    description: "Turli xil payvandlash xizmatlari. Rama ta'mirlash, metall konstruktsiyalar va boshqalar.",
    tag: null,
  },
  {
    icon: Shield,
    title: "Tormoz Tizimi",
    description: "Tormoz tizimi diagnostika va ta'mirlash. Baraban, disk, ABS tizimi va pnevmatik tizim.",
    tag: null,
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32 bg-[#0B0B0D] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 industrial-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
            Bizning Xizmatlar
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Xizmatlarimiz
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto leading-relaxed">
            Yuk mashinalaringiz uchun barcha turdagi ta&apos;mirlash va texnik xizmatlar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative card-premium p-6 cursor-pointer overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/0 to-[#E53935]/0 group-hover:from-[#E53935]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              {/* Tag */}
              {service.tag && (
                <div className="absolute top-4 right-4 bg-[#E53935]/20 text-[#E53935] text-xs font-bold px-2.5 py-1 rounded-full">
                  {service.tag}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-[#E53935]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E53935]/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#E53935]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-[#B5B5B5] leading-relaxed mb-6">{service.description}</p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-[#E53935] text-sm font-semibold">
                <span>Batafsil</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
