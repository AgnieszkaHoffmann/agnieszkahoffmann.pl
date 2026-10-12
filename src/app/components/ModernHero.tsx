import { motion } from "motion/react";

export function ModernHero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-hairstyles.jpg"
          alt="Kobiety z różnymi fryzurami, widok z tyłu"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#EEEDE7]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EEEDE7] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 max-w-4xl mx-auto flex flex-col justify-center h-full pt-72 md:pt-96">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/logo-dark.svg"
            alt="Hairstyle by Agnieszka Hoffmann and Team"
            className="w-full max-w-2xl mx-auto mb-12 drop-shadow-sm opacity-90"
          />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <a
              href="#contact"
              className="px-10 py-4 bg-[#363C3F] text-[#EEEDE7] text-sm uppercase tracking-widest hover:bg-[#363C3F]/90 transition-transform hover:scale-105 duration-300 shadow-xl"
            >
              Umów wizytę
            </a>
            <a
              href="#services"
              className="px-10 py-4 border border-[#363C3F] text-[#363C3F] text-sm uppercase tracking-widest hover:bg-[#363C3F] hover:text-[#EEEDE7] transition-all duration-300 backdrop-blur-sm"
            >
              Zobacz usługi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}