"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#pricing", label: "Narxlar" },
  { href: "#gallery", label: "Galereya" },
  { href: "#testimonials", label: "Mijozlar" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Aloqa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              className="flex items-center gap-3"
              onClick={() => handleNavClick("#home")}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo.png"
                alt="Usta Xonasi logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
              <div className="leading-none">
                <span className="text-white font-black text-xl tracking-tight">A</span>
                <span className="text-[#E53935] font-black text-xl tracking-tight">T</span>
                <span className="text-white font-black text-xl tracking-tight">S</span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-[#B5B5B5] hover:text-white transition-colors duration-200 relative group font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E53935] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="tel:+998901234567"
                className="flex items-center gap-2 bg-[#E53935] hover:bg-[#C62828] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-200 shadow-lg shadow-red-900/30"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                +998 90 123 45 67
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-white hover:text-[#E53935] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+998901234567"
                className="flex items-center gap-2 bg-[#E53935] text-white px-8 py-4 rounded-xl font-bold text-lg mt-4"
              >
                <Phone className="w-5 h-5" />
                Qo&apos;ng&apos;iroq qilish
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
