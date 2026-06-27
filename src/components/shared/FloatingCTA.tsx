"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, X, Send } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="flex flex-col gap-3"
              >
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-3 glass text-white px-5 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-colors shadow-2xl"
                >
                  <Phone className="w-4 h-4 text-[#E53935]" />
                  <span className="text-sm">Qo&apos;ng&apos;iroq</span>
                </a>
                <a
                  href="https://t.me/usta_xonasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass text-white px-5 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-colors shadow-2xl"
                >
                  <Send className="w-4 h-4 text-[#E53935]" />
                  <span className="text-sm">Telegram</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <div className="flex items-center gap-3">
            {expanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setExpanded(false)}
                className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-[#B5B5B5] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="w-14 h-14 bg-[#E53935] rounded-2xl flex items-center justify-center shadow-2xl shadow-red-900/50 animate-pulse-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
