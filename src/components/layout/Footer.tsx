import { Phone, Send, MapPin, Clock, Mail, Video } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#pricing", label: "Narxlar" },
  { href: "#gallery", label: "Galereya" },
  { href: "#testimonials", label: "Mijozlar fikri" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Aloqa" },
];

const services = [
  "Motor Remont",
  "Korobka Ta'mirlash",
  "Xodovoy",
  "Kompyuter Diagnostika",
  "Elektrik Tizimi",
  "Shina Servis",
  "Payvandlash",
  "Tormoz Tizimi",
];

export default function Footer() {
  return (
    <footer className="bg-[#17181C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#E53935] rounded-xl rotate-45 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#E53935] rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#E53935] rounded-sm" />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">USTA</div>
                <div className="text-[#E53935] font-bold text-lg leading-none tracking-widest">XONASI</div>
              </div>
            </div>
            <p className="text-[#B5B5B5] text-sm leading-relaxed mb-6">
              Furalaringiz uchun ishonchli hamkor! Sifatli xizmat — bizning ustuvor maqsadimiz.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Send, href: "https://t.me/usta_xonasi", label: "Telegram" },
                { icon: Video, href: "#", label: "YouTube" },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                  href: "#",
                  label: "Instagram"
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  href: "#",
                  label: "Facebook"
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass-light rounded-xl flex items-center justify-center text-[#B5B5B5] hover:text-white hover:border-[#E53935]/30 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tezkor havolalar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#B5B5B5] hover:text-[#E53935] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Xizmatlar</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#B5B5B5] hover:text-[#E53935] text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Aloqa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <a href="tel:+998901234567" className="text-[#B5B5B5] hover:text-white text-sm transition-colors">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Send className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <a href="https://t.me/usta_xonasi" className="text-[#B5B5B5] hover:text-white text-sm transition-colors">
                  @usta_xonasi
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ustaxonasi.uz" className="text-[#B5B5B5] hover:text-white text-sm transition-colors">
                  info@ustaxonasi.uz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <span className="text-[#B5B5B5] text-sm">08:00 – 20:00, Har kuni</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E53935] mt-0.5 flex-shrink-0" />
                <span className="text-[#B5B5B5] text-sm">Farg&apos;ona viloyati, Oltiariq tumani</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#B5B5B5] text-sm">
            © 2024 Usta Xonasi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#B5B5B5] hover:text-white text-sm transition-colors">
              Maxfiylik siyosati
            </a>
            <a href="#" className="text-[#B5B5B5] hover:text-white text-sm transition-colors">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
