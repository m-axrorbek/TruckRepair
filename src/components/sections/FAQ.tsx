"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Korobka remont qancha vaqt oladi?",
    a: "Korobka remont murakkabligiga qarab 1.5 - 2 kun  davom etishi mumkin. Biz har doim aniq muddatni belgilab, o'z vaqtida topshirishga harakat qilamiz. Diagnostika natijalariga qarab aniq muddat aytiladi.",
  },
  {
    q: "Kafolat berasizmi?",
    a: "Ha, barcha ta'mirlash ishlariga 8 oydan 1.5 yilgacha kafolat beramiz. Kafolat davomida biron-bir muammo yuzaga kelsa, bepul ta'mirlash xizmatini ko'rsatamiz.",
  },
  {
    q: "24/7 ishlaysis izmi?",
    a: "Bizning asosiy ish vaqtimiz 08:00 dan 20:00 gacha. Lekin favqulodda holatlarda, masalan, yo'lda qolib ketgan furalar uchun qo'shimcha yordam tashkil eta olamiz. Telegram orqali istalgan vaqtda bog'lanishingiz mumkin.",
  },
  {
    q: "Diagnostika narxi qancha?",
    a: "Asosiy kompyuter diagnostika xizmati ishiga qarab kelishiladi. Agar bizdagi ta'mirlash xizmatini tanlasangiz,ishimizga kafolat beramiz.",
  },
  {
    q: "Qanday marka furalar bilan ishlaysizlar?",
    a: "Biz barcha Yevropa markalari bilan ishlashimiz: Mercedes-Benz, Volvo, Scania, MAN, DAF, Iveco. Shuningdek, Xitoy va Rossiya markali yuk mashinalari ham ta'mirlanadi.",
  },
  {
    q: "Ehtiyot qismlarni o'zlarimiz olib kelsak bo'ladimi?",
    a: "Ha, albatta. O'z ehtiyot qismlaringizni olib kelishingiz mumkin. Lekin biz ham asl original va OEM ehtiyot qismlarini qo'yib beramiz va ular uchun qo'shimcha kafolat beramiz.",
  },
  {
    q: "Qaerdasizlar va qanday etib boraman?",
    a: "Biz Farg'ona viloyati, Oltiariq tumanida joylashganmiz. Aniq manzil uchun Aloqa bo'limiga qarang yoki bizga qo'ng'iroq qiling — yo'l ko'rsatamiz.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.07 }}
      className={`bg-[#0B0B0D] border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-[#E53935]/30" : "border-white/6"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${isOpen ? "text-[#E53935]" : "text-white group-hover:text-[#E53935]"}`}>
          {faq.q}
        </span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? "bg-[#E53935]" : "bg-[#E53935]/10"
        }`}>
          {isOpen
            ? <Minus className="w-3.5 h-3.5 text-white" />
            : <Plus className="w-3.5 h-3.5 text-[#E53935]" />
          }
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[#B5B5B5] leading-relaxed text-sm border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="py-32 bg-[#17181C] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Ko&apos;p beriladigan savollar
            </h2>
            <p className="text-[#B5B5B5] text-lg leading-relaxed mb-8">
              Bizga tez-tez beriladigan savollar va ularga javoblar. Qo&apos;shimcha savollaringiz bo&apos;lsa, bizga murojaat qiling.
            </p>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85"
                alt="Workshop"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
