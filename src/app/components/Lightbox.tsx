import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const showRelative = (step: number) => {
    if (index === null) return;
    onIndexChange((index + step + count) % count);
  };

  useEffect(() => {
    if (index === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, count, onClose, onIndexChange]);

  // Wczytaj sąsiednie zdjęcia z wyprzedzeniem, żeby przełączanie było płynne
  useEffect(() => {
    if (index === null || count < 2) return;
    [index + 1, index - 1].forEach((i) => {
      const img = new Image();
      img.src = images[(i + count) % count].src;
    });
  }, [index, images, count]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#202426]/95 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) showRelative(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              draggable={false}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl select-none"
            />
          </AnimatePresence>

          <button
            onClick={onClose}
            aria-label="Zamknij"
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-[#EEEDE7]/70 hover:text-[#EEEDE7] transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {count > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showRelative(-1);
                }}
                aria-label="Poprzednie zdjęcie"
                className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 p-2 text-[#EEEDE7]/60 hover:text-[#EEEDE7] transition-colors"
              >
                <ChevronLeft size={40} strokeWidth={1} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showRelative(1);
                }}
                aria-label="Następne zdjęcie"
                className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 p-2 text-[#EEEDE7]/60 hover:text-[#EEEDE7] transition-colors"
              >
                <ChevronRight size={40} strokeWidth={1} />
              </button>
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-[#EEEDE7]/70 tabular-nums">
                {index + 1} / {count}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
