import { motion } from "motion/react";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

// Opinie przepisane z wizytówki Google (imię, ocena, treść). Karuzela pojawi się, gdy lista nie będzie pusta.
const testimonials: Testimonial[] = [];

const GOOGLE_RATING = 4.7;
const GOOGLE_REVIEWS_URL = "https://share.google/AhtmhtqRTfpyYHWyF";

function RatingStars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} className="shrink-0 fill-current" />);
  return (
    <div className="relative w-max" aria-label={`Ocena ${String(rating).replace(".", ",")} na 5`}>
      <div className="flex gap-1 text-[#EEEDE7]/25">{stars}</div>
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(rating / 5) * 100}%` }}>
        <div className="flex gap-1 text-[#EEEDE7]">{stars}</div>
      </div>
    </div>
  );
}

export function ModernTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-[#363C3F]">
      <div className="max-w-6xl mx-auto">
        
        {/* Nagłówek */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#EEEDE7] mb-4">
            Opinie Klientów
          </h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 mb-6 group"
          >
            <span className="font-heading text-5xl font-medium text-[#EEEDE7]">
              {String(GOOGLE_RATING).replace(".", ",")}
            </span>
            <span className="flex flex-col items-start gap-1.5">
              <RatingStars rating={GOOGLE_RATING} />
              <span className="text-xs tracking-wide text-[#EEEDE7]/60 group-hover:text-[#EEEDE7] transition-colors">
                ponad 170 opinii w Google
              </span>
            </span>
          </a>
          <div className="w-24 h-[1px] bg-[#EEEDE7]/30 mx-auto"></div>
        </motion.div>

        {/* Karuzela */}
        {testimonials.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="testimonials-slider -mx-6 md:mx-0"
        >
          <style>{`
            @media (max-width: 768px) {
              .testimonials-slider .slick-slide {
                padding: 0 8px;
              }
              .testimonials-slider .slick-list {
                padding: 0 !important;
              }
            }
          `}</style>
          <Slider {...settings}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className="px-3">
                <div className="bg-[#EEEDE7] p-6 h-full min-h-[240px] flex flex-col relative">
                  
                  {/* Ikona cytatu */}
                  <Quote 
                    size={36} 
                    className="absolute top-5 right-5 text-[#363C3F]/10" 
                  />

                  {/* Gwiazdki */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#363C3F] text-[#363C3F]"
                      />
                    ))}
                  </div>

                  {/* Tekst opinii */}
                  <p className="text-[#363C3F]/80 font-light text-sm leading-relaxed mb-4 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Autor */}
                  <div className="pt-3 border-t border-[#363C3F]/10">
                    <p className="text-[#363C3F] font-medium text-sm">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        )}

        {/* Link do Google */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#EEEDE7]/60 hover:text-[#EEEDE7] transition-colors text-sm font-light"
          >
            <span>{testimonials.length > 0 ? "Zobacz więcej opinii na" : "Przeczytaj opinie na"}</span>
            <svg className="w-16 h-6" viewBox="0 0 272 92" fill="currentColor">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
              <path d="M225 3v65h-9.5V3h9.5z"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
              <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}