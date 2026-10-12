import { motion } from "motion/react";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const CONTACT_LINKS = [
  {
    label: "Telefon",
    value: "502 077 518",
    href: "tel:+48502077518",
    icon: Phone,
  },
  {
    label: "Lokalizacja",
    value: "Warszawska 4a/103, 62-025 Kostrzyn",
    href: "https://www.google.com/maps/search/?api=1&query=PRACOWNIA+AGNIESZKA+HOFFMANN%2C+Warszawska+4a%2C+62-025+Kostrzyn",
    icon: MapPin,
    external: true,
  },
];

const OPENING_HOURS = [
  { days: "Poniedziałek – Piątek", hours: "8:00 – 19:00" },
  { days: "Sobota", hours: "7:00 – 14:00" },
  { days: "Niedziela", hours: null },
];

export function ModernContact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#EEEDE7]">
      <div className="max-w-6xl mx-auto">

        {/* Nagłówek */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#363C3F] mb-4">Kontakt</h2>
          <p className="text-[#363C3F]/70 font-light max-w-2xl mx-auto mb-6">
            Umów wizytę telefonicznie lub odwiedź nas w salonie.
          </p>
          <div className="w-24 h-[1px] bg-[#363C3F]/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Lewa kolumna - Informacje kontaktowe */}
          <div className="flex flex-col gap-8">

            {/* Klikalne pozycje: telefon, lokalizacja */}
            <div className="flex flex-col gap-1">
              {CONTACT_LINKS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="group flex items-center gap-5 -mx-4 px-4 py-4 md:-mx-6 md:px-6 md:py-5 transition-colors duration-300 hover:bg-[#363C3F]/5 focus-visible:bg-[#363C3F]/5 focus-visible:outline-none"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full border border-[#363C3F]/20 flex items-center justify-center text-[#363C3F] transition-all duration-300 group-hover:bg-[#363C3F] group-hover:border-[#363C3F] group-hover:text-[#EEEDE7] group-hover:scale-110">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-[#363C3F]/50 mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg md:text-xl font-heading font-medium text-[#363C3F] break-words transition-transform duration-300 group-hover:translate-x-1">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#363C3F]/50 opacity-0 [@media(hover:none)]:opacity-100 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>
              ))}
            </div>

            {/* Godziny otwarcia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-8 border-t border-[#363C3F]/10"
            >
              <div className="flex items-center gap-3 mb-5">
                <Clock size={20} strokeWidth={1.5} className="text-[#363C3F]" />
                <h3 className="font-heading text-xl font-medium text-[#363C3F]">Godziny otwarcia</h3>
              </div>
              <div className="space-y-2 pl-8 max-w-sm font-light">
                {OPENING_HOURS.map(({ days, hours }) => (
                  <div
                    key={days}
                    className={clsx(
                      "flex justify-between gap-8",
                      hours ? "text-[#363C3F]/80" : "text-[#363C3F]/40"
                    )}
                  >
                    <span>{days}</span>
                    <span className={clsx(hours && "font-medium")}>{hours ?? "Zamknięte"}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Informacja o rezerwacji */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8 border-t border-[#363C3F]/10 text-sm text-[#363C3F]/60 font-light leading-relaxed"
            >
              Wizyty umawiamy telefonicznie lub osobiście w salonie. Jeśli nie możesz przyjść,
              odwołaj wizytę najpóźniej dzień przed umówionym terminem.
            </motion.p>

          </div>

          {/* Prawa kolumna - Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden shadow-xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=PRACOWNIA+AGNIESZKA+HOFFMANN,+Warszawska+4a,+62-025+Kostrzyn&hl=pl&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja salonu PRACOWNIA AGNIESZKA HOFFMANN"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
