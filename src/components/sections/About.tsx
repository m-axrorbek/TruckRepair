"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const features = [
  { icon: Award, title: "Sertifikatlangan Ustalar", desc: "Barcha ustalarimiz xalqaro sertifikatlarga ega" },
  { icon: Users, title: "Tajribali Jamoa", desc: "20+ yillik birgalikdagi ish tajribasi" },
  { icon: Clock, title: "24/7 Qo'llab-quvvatlash", desc: "Har qanday vaqtda sizga yordam beramiz" },
  { icon: CheckCircle, title: "Sifat Kafolati", desc: "Barcha xizmatlarimizga 6 oy kafolat beramiz" },
];

const checkpoints = [
  "Zamonaviy kompyuter diagnostika uskunalari",
  "Original ehtiyot qismlar bilan ishlash",
  "Tezkor va sifatli xizmat ko'rsatish",
  "Shaffof narx siyosati",
  "Barcha marka va model furalar",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E53935]/3 rounded-full blur-3xl" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase">Biz haqimizda</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 bg-[#17181C]">
                  <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=85"
                    alt="Truck workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40 bg-[#17181C]">
                  <img
                    src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=85"
                    alt="Engine repair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-40 bg-[#17181C]">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=85"
                    alt="Mechanic at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-[#17181C]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85"
                    alt="Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="text-3xl font-black text-white">10+</div>
                <div className="text-[#B5B5B5] text-sm">Yil tajriba</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Biz yuk mashinalarini professional darajada{" "}
                <span className="text-[#E53935]">ta&apos;mirlash</span> bilan shug&apos;ullanamiz.
              </h2>
              <p className="text-[#B5B5B5] text-lg leading-relaxed">
                Usta Xonasi — fura va yuk mashinalar uchun to&apos;liq servis xizmatini taklif etadi.
                Zamonaviy uskunalar va tajribali ustalar bilan sizga eng sifatli xizmatni kafolatlaymiz.
              </p>
            </motion.div>

            {/* Checkpoints */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {checkpoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                  <span className="text-sm text-[#B5B5B5]">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="card-premium p-5"
                >
                  <f.icon className="w-6 h-6 text-[#E53935] mb-3" />
                  <div className="text-sm font-bold text-white mb-1">{f.title}</div>
                  <div className="text-xs text-[#B5B5B5]">{f.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-4 rounded-xl font-bold transition-all duration-200"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Batafsil ma&apos;lumot
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
