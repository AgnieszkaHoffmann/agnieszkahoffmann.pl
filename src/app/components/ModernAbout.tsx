import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "./Lightbox";

const STATS = [
  { value: "31", label: "lat w zawodzie" },
  { value: "25", label: "lat pracowni" },
  { value: "Mistrz", label: "fryzjerski" },
];

const BRANDS = ["Wella Professionals", "Redken", "Kevin Murphy", "Medavita", "Brazilian Bond Builder"];

const SALON = Array.from({ length: 15 }, (_, i) => ({
  src: `/assets/salon/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Wnętrze pracowni AH Hairstyle – zdjęcie ${i + 1}`,
}));

const JUBILEE = Array.from({ length: 16 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const landscape = n === "05";
  return {
    thumb: `/assets/jubileusz/thumb/${n}.jpg`,
    src: `/assets/jubileusz/full/${n}.jpg`,
    alt: `Jubileusz 25-lecia pracowni – zdjęcie ${i + 1}`,
    width: landscape ? 680 : 453,
    height: landscape ? 453 : 680,
  };
});

const SLIDE_INTERVAL = 5000;

const pad = (n: number) => String(n).padStart(2, "0");

export function ModernAbout() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<{ set: "salon" | "jubilee"; index: number } | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const inView = useInView(slideshowRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();

  // Pokaz zdjęć salonu przewija się sam, ale tylko gdy jest widoczny na ekranie
  useEffect(() => {
    if (paused || lightbox || !inView || reduceMotion) return;
    const timer = setTimeout(() => setSlide((s) => (s + 1) % SALON.length), SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [slide, paused, lightbox, inView, reduceMotion]);

  useEffect(() => {
    if (!inView) return;
    const img = new Image();
    img.src = SALON[(slide + 1) % SALON.length].src;
  }, [slide, inView]);

  const changeSlide = (step: number) => setSlide((s) => (s + step + SALON.length) % SALON.length);

  const scrollStrip = (direction: number) => {
    const strip = stripRef.current;
    if (strip) strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#EEEDE7]">
      <div className="max-w-6xl mx-auto">

        {/* Nagłówek */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#363C3F] text-4xl md:text-5xl font-heading font-medium mb-4">O nas</h2>
          <p className="text-[#363C3F]/70 font-light max-w-2xl mx-auto mb-6">
            25 lat pasji, doświadczenia i troski o piękne, zdrowe włosy.
          </p>
          <div className="w-24 h-[1px] bg-[#363C3F]/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Tekst */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading text-xl md:text-2xl leading-snug text-[#363C3F] mb-8">
              Od 25 lat tworzymy miejsce zbudowane z miłości do fryzjerstwa i piękna – z pasją,
              zaangażowaniem i szacunkiem do każdej osoby, która siada na naszym fotelu.
            </p>
            <div className="space-y-4 text-[#363C3F]/75 font-light leading-relaxed">
              <p>
                Pracownię założyła Agnieszka Hoffmann – fryzjerka z tytułem mistrza fryzjerskiego
                i ponad 30-letnim doświadczeniem. Przez lata wyszkoliła kilkadziesiąt uczniów, a za
                zaangażowanie w kształcenie młodych fryzjerów została uhonorowana srebrną odznaką
                mistrza za szkolenie uczniów w rzemiośle.
              </p>
              <p>
                Stale się rozwijamy – szkolimy się w prestiżowych akademiach i na specjalistycznych
                seminariach. Specjalizujemy się w blondach, koloryzacji, pracy z włosami kręconymi
                oraz pielęgnacji zdrowych włosów.
              </p>
            </div>

            {/* Liczby */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#363C3F]/10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl md:text-4xl font-medium text-[#363C3F]">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#363C3F]/55">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Marki */}
            <p className="mt-8 text-xs leading-relaxed text-[#363C3F]/60">
              <span className="block mb-2 uppercase tracking-[0.2em] text-[#363C3F]/50">Pracujemy na kosmetykach</span>
              {BRANDS.join(" · ")}
            </p>
          </motion.div>

          {/* Pokaz zdjęć salonu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="relative max-w-md w-full mx-auto lg:max-w-none"
          >
            <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 w-full h-full border border-[#363C3F]/20 pointer-events-none" />
            <div
              ref={slideshowRef}
              className="relative aspect-[4/5] overflow-hidden bg-[#363C3F]/10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <button
                onClick={() => setLightbox({ set: "salon", index: slide })}
                aria-label="Powiększ zdjęcie salonu"
                className="absolute inset-0 cursor-zoom-in"
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={SALON[slide].src}
                    src={SALON[slide].src}
                    alt={SALON[slide].alt}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: "linear" } }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </button>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 bg-gradient-to-t from-black/55 to-transparent text-[#EEEDE7] pointer-events-none">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#EEEDE7]/80">Nasz salon</p>
                  <p className="text-sm font-light">Warszawska 4a, Kostrzyn</p>
                </div>
                <div className="flex items-center gap-1.5 pointer-events-auto">
                  <span className="hidden sm:inline mr-2 text-xs tracking-widest tabular-nums whitespace-nowrap">
                    {pad(slide + 1)} / {pad(SALON.length)}
                  </span>
                  <button
                    onClick={() => changeSlide(-1)}
                    aria-label="Poprzednie zdjęcie salonu"
                    className="p-1.5 rounded-full border border-[#EEEDE7]/40 hover:bg-[#EEEDE7]/15 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => changeSlide(1)}
                    aria-label="Następne zdjęcie salonu"
                    className="p-1.5 rounded-full border border-[#EEEDE7]/40 hover:bg-[#EEEDE7]/15 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Jubileusz 25-lecia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28"
        >
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#363C3F]/50">2001 – 2026</p>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#363C3F]">Jubileusz 25-lecia pracowni</h3>
            </div>
            <div className="hidden md:flex gap-2 shrink-0">
              <button
                onClick={() => scrollStrip(-1)}
                aria-label="Przewiń zdjęcia w lewo"
                className="p-3 rounded-full border border-[#363C3F]/20 text-[#363C3F] hover:bg-[#363C3F] hover:text-[#EEEDE7] transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollStrip(1)}
                aria-label="Przewiń zdjęcia w prawo"
                className="p-3 rounded-full border border-[#363C3F]/20 text-[#363C3F] hover:bg-[#363C3F] hover:text-[#EEEDE7] transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={stripRef}
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scroll-px-6 md:mx-0 md:px-0 md:scroll-px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {JUBILEE.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setLightbox({ set: "jubilee", index: i })}
                aria-label={`Powiększ: ${photo.alt}`}
                className="group relative shrink-0 snap-start h-60 md:h-80 overflow-hidden rounded-sm cursor-zoom-in"
              >
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto max-w-none transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
          <p className="md:hidden mt-4 text-center text-[11px] uppercase tracking-[0.25em] text-[#363C3F]/50">
            Przesuń, aby zobaczyć więcej
          </p>
        </motion.div>

      </div>

      <Lightbox
        images={lightbox?.set === "jubilee" ? JUBILEE : SALON}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onIndexChange={(index) => setLightbox((current) => current && { ...current, index })}
      />
    </section>
  );
}
