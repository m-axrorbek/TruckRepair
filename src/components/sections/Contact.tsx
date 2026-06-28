"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Send, MapPin, Clock, Mail, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+998 90 630 40 08", href: "tel:+998906304008" },
  { icon: Send, label: "Telegram", value: "@mahammadov_a", href: "https://t.me/mahammadov_a" },
  { icon: Mail, label: "Email", value: "info@ustaxonasi.uz", href: "mailto:info@ustaxonasi.uz" },
  { icon: Clock, label: "Ish vaqti", value: "08:00 – 20:00", href: null },
  { icon: MapPin, label: "Manzil", value: "Farg'ona viloyati, Oltiariq tumani", href: null },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E53935]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#E53935] text-sm font-bold tracking-[4px] uppercase mb-4 block">
            Aloqa
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Biz bilan bog&apos;laning
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Savol yoki buyurtma uchun quyidagi kanallar orqali murojaat qiling.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact info */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="card-premium p-5 flex items-center gap-5"
                >
                  <div className="w-11 h-11 bg-[#E53935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#B5B5B5] font-medium mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:text-[#E53935] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-semibold">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl overflow-hidden h-72 border border-white/8"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d767.5150391839468!2d71.50691426963022!3d40.399765998215145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU5LjIiTiA3McKwMzAnMjcuMiJF!5e1!3m2!1suz!2sus!4v1782663725618!5m2!1suz!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Usta Xonasi location"
              />
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-black text-white mb-8">So&apos;rov yuborish</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-20"
                >
                  <CheckCircle className="w-16 h-16 text-[#E53935]" />
                  <div className="text-xl font-bold text-white">So&apos;rovingiz yuborildi!</div>
                  <div className="text-[#B5B5B5] text-center">Tez orada siz bilan bog&apos;lanamiz.</div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#B5B5B5] mb-2">Ismingiz</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0B0B0D] border border-white/10 text-white placeholder-[#B5B5B5]/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E53935]/50 transition-colors"
                      placeholder="Ism Familiya"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#B5B5B5] mb-2">Telefon raqam</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0B0B0D] border border-white/10 text-white placeholder-[#B5B5B5]/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E53935]/50 transition-colors"
                      placeholder="+998 90 630 40 08"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#B5B5B5] mb-2">Xabar</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#0B0B0D] border border-white/10 text-white placeholder-[#B5B5B5]/50 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E53935]/50 transition-colors resize-none"
                      placeholder="Muammoni qisqacha ta'riflang..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#E53935] hover:bg-[#C62828] text-white py-4 rounded-xl font-bold text-base transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    So&apos;rov Yuborish
                  </motion.button>

                  <p className="text-xs text-[#B5B5B5] text-center">
                    Yoki to&apos;g&apos;ridan-to&apos;g&apos;ri{" "}
                    <a href="tel:+998906304008" className="text-[#E53935] hover:underline font-semibold">
                      +998 90 630 40 08
                    </a>{" "}
                    ga qo&apos;ng&apos;iroq qiling
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
