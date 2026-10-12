import { useState } from "react";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import clsx from "clsx";
import { Lightbox } from "./Lightbox";

const PORTFOLIO = [
  "Długie, miedziane włosy ułożone w fale",
  "Blond balayage na długich, falowanych włosach",
  "Długie, proste, ciemne włosy z połyskiem",
  "Miodowy blond w miękkich falach",
  "Kasztanowe, długie włosy ułożone w fale",
  "Jasny blond z cieniowanym odrostem",
  "Rudy odcień na włosach do ramion",
  "Brąz z rozświetleniami, ułożony w fale",
  "Długie, proste, czarne włosy",
  "Złocisty blond na długich włosach",
  "Ciepły brąz w miękkich falach",
  "Blond na krótszych, falowanych włosach",
  "Ciepły blond ułożony w fale",
].map((alt, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { thumb: `/assets/portfolio/thumb/${n}.jpg`, src: `/assets/portfolio/full/${n}.jpg`, alt };
});

export function ModernGallery() {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#EEEDE7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[#363C3F] text-4xl md:text-5xl font-heading font-medium mb-4">Nasze prace</h2>
          <p className="text-[#363C3F]/70 font-light max-w-2xl mx-auto mb-6">
            Fryzury wykonane w naszej pracowni. Kliknij zdjęcie, aby je powiększyć.
          </p>
          <div className="w-24 h-[1px] bg-[#363C3F]/30 mx-auto"></div>
        </motion.div>

        {/* Komputer: panele rozwijane po najechaniu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="hidden lg:flex gap-2 h-[460px] xl:h-[520px]"
        >
          {PORTFOLIO.map((photo, i) => (
            <button
              key={photo.src}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Powiększ zdjęcie: ${photo.alt}`}
              className={clsx(
                "relative basis-0 min-w-0 overflow-hidden rounded-sm cursor-zoom-in transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#363C3F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEEDE7]",
                i === active ? "grow-[7]" : "grow"
              )}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={clsx(
                  "absolute inset-0 bg-[#363C3F]/35 transition-opacity duration-700",
                  i === active ? "opacity-0" : "opacity-100"
                )}
              />
              <div
                className={clsx(
                  "absolute inset-x-0 bottom-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/45 to-transparent text-[#EEEDE7] transition-opacity duration-500",
                  i === active ? "opacity-100 delay-200" : "opacity-0"
                )}
              >
                <span className="text-xs tracking-[0.25em] tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {PORTFOLIO.length}
                </span>
                <Maximize2 size={18} strokeWidth={1.5} />
              </div>
            </button>
          ))}
        </motion.div>

        {/* Telefon i tablet: karuzela przesuwana palcem */}
        <div className="lg:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scroll-px-6 md:-mx-12 md:px-12 md:scroll-px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PORTFOLIO.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Powiększ zdjęcie: ${photo.alt}`}
              className="relative shrink-0 snap-start w-[72%] sm:w-[44%] md:w-[31%] aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <p className="lg:hidden mt-5 text-center text-[11px] uppercase tracking-[0.25em] text-[#363C3F]/50">
          Przesuń, aby zobaczyć więcej
        </p>
      </div>

      <Lightbox
        images={PORTFOLIO}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
