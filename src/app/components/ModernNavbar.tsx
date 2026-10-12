import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

export function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", href: "#" },
    { name: "O nas", href: "#about" },
    { name: "Usługi", href: "#services" },
    { name: "Zespół", href: "#stylists" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-[#EEEDE7]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/assets/logo-dark.svg"
              alt="Hairstyle by Agnieszka Hoffmann and Team"
              className="w-54 lg:w-52 xl:w-68 h-auto max-w-none"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#363C3F] text-[13px] xl:text-sm uppercase tracking-wider whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 xl:px-6 py-2 border border-[#363C3F] text-[#363C3F] text-[13px] xl:text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#363C3F] hover:text-[#EEEDE7] transition-colors"
            >
              Umów wizytę
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#363C3F]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#EEEDE7] border-t border-[#363C3F]/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#363C3F] text-lg uppercase tracking-widest hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-8 py-3 border border-[#363C3F] text-[#363C3F] text-sm uppercase tracking-widest hover:bg-[#363C3F] hover:text-[#EEEDE7] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Umów wizytę
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}