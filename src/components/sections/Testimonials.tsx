"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Akmalov D.",
    role: "Logistika kompaniyasi rahbari",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "Ish sifatidan juda mamnun bo'ldik. Ustalar professional va ishlarini zo'r qilishadi. Flotimizdagi barcha furalarni ushbu servislarga olib kelamiz.",
  },
  {
    name: "Yusupov Jahongir",
    role: "Individual tadbirkor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Motorim to'liq ta'mirlandi va endi yangiday ishlayapti. Narxi adolatli, muddati o'z vaqtida. Albatta yana qaytib kelaman.",
  },
  {
    name: "Rahimov Sardor",
    role: "Transport kompaniyasi direktori",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    rating: 5,
    text: "10 yildan beri faqat shu servisda ta'mirlataman. Ishonchli, sifatli va narxi ma'qul. Hech qachon hafsalasi pir bo'lganim yo'q.",
  },
  {
    name: "Karimov Bobur",
    role: "Fura haydovchisi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    text: "Elektr tizimim bilan muammo bor edi, bir kunda topdilar va tuzatdilar. Kasbiy yondashuv va tez servis. Rahmat!",
  },
  {
    name: "Toshmatov Umid",
    role: "Yuk tashish sohibi",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&q=80",
    rating: 5,
    text: "Xodovoy ta'mirlash uchun keldim. Narxini aytdilar, muddatini tutdilar. Eng muhimi — sifat. Barcha do'stlarimga tavsiya qilaman.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <section id="testimonials" ref={ref} className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E53935]/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
              Mijozlar Fikri
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Mijozlarimiz biz haqimizda
            </h2>
            <p className="text-[#B5B5B5] text-lg leading-relaxed mb-8">
              Minglab mamnun mijozlarning fikrlarini o&apos;qing va bizning sifatimizga ishoning.
            </p>
            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "5.0", label: "O'rtacha reyting" },
                { value: "500+", label: "Sharh" },
                { value: "98%", label: "Mamnunlik" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-white">{s.value}</div>
                  <div className="text-sm text-[#B5B5B5]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-3xl p-8 relative"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E53935]/20" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#E53935] fill-[#E53935]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white text-lg leading-relaxed mb-8 font-light">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E53935]/30"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonials[current].name}</div>
                      <div className="text-sm text-[#B5B5B5]">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? "w-8 h-2 bg-[#E53935]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); }}
                  className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { setDirection(1); setCurrent((c) => (c + 1) % testimonials.length); }}
                  className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
