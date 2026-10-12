import { useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const services = [
  {
    category: "Strzyżenia",
    items: [
      { name: "Strzyżenie damskie", price: "od 200 zł", description: "dobór fryzury, mycie i pielęgnacja, strzyżenie, modelowanie" },
      { name: "Strzyżenie damskie +", price: "od 350 zł", description: "dobór fryzury, mycie, rekonstrukcja, strzyżenie, modelowanie" },
      { name: "Strzyżenie męskie", price: "od 100 zł", description: "dobór fryzury, mycie, strzyżenie, modelowanie" },
      { name: "Combo", price: "od 150 zł", description: "strzyżenie włosów, strzyżenie brody lub odsiwianie, modelowanie" },
      { name: "Combo Premium", price: "od 200 zł", description: "strzyżenie włosów, strzyżenie brody, odsiwianie, modelowanie" },
      { name: "Strzyżenie metamorfoza", price: "od 500 zł", description: "konsultacja, dobór fryzury, doradztwo pielęgnacyjne i stylizacyjne, rekonstrukcja włosów, modelowanie" },
    ]
  },
  {
    category: "Koloryzacje",
    items: [
      { name: "Koloryzacja jednotonowa", price: "od 450 zł", description: "koloryzacja, tonowanie, strzyżenie lub rekonstrukcja, modelowanie" },
      { name: "Koloryzacja z refleksem", price: "od 600 zł", description: "koloryzacja odrostów, refleksy, tonowanie, strzyżenie lub rekonstrukcja, modelowanie" },
      { name: "Tonowanie", price: "od 400 zł", description: "tonowanie, mycie, strzyżenie lub rekonstrukcja, modelowanie" },
      { name: "Full metamorfoza", price: "od 2000 zł", description: "konsultacja z analizą kolorystyczną, dobór kształtu fryzury, koloryzacja ze zmianą koloru, rekonstrukcja włosów, strzyżenie, modelowanie" },
    ]
  },
  {
    category: "Rozjaśnianie",
    items: [
      { name: "Airtouch 50%", price: "od 1000 zł", description: "rozjaśnianie z dodatkiem ochronnym, tonowanie, strzyżenie, modelowanie" },
      { name: "Full Airtouch", price: "od 1500 zł", description: "airtouch 100% rozjaśnienia lub airtouch 50% z przyciemnieniem warstw pomiędzy" },
      { name: "Bright Blonde", price: "od 1500 zł", description: "rozjaśnianie z dodatkiem ochronnym, technika USA, tonowanie, strzyżenie, modelowanie" },
      { name: "Soft Refleks", price: "od 700 zł", description: "refleksy z dodatkiem ochronnym, tonowanie, strzyżenie, modelowanie" },
      { name: "Globalny Blond", price: "od 500 zł", description: "rozjaśnienie, tonowanie, strzyżenie, modelowanie" },
    ]
  },
  {
    category: "Dekoloryzacja",
    items: [
      { name: "Dekoloryzacja kwasowa", price: "od 2500 zł", description: "wywiad, zabieg dekoloryzacji, koloryzacja, tonowanie, strzyżenie, modelowanie" },
      { name: "Dekoloryzacja kwasowa premium", price: "od 3000 zł", description: "konsultacja, analiza kolorystyczna, zabieg, koloryzacja, tonowanie, strzyżenie, modelowanie" },
    ]
  },
  {
    category: "Trwałe przekształcanie włosów",
    items: [
      { name: "Ultra Glow", price: "cena indywidualna", description: "wywiad, zabieg, rekonstrukcja, strzyżenie, suszenie" },
      { name: "Botox na ciepło", price: "od 500 zł", description: "wywiad, zabieg, rekonstrukcja, strzyżenie, suszenie" },
      { name: "Trwała ondulacja", price: "od 600 zł", description: "wywiad, zabieg, strzyżenie, suszenie na dyfuzor" },
    ]
  },
  {
    category: "Zabiegi pielęgnacyjne",
    items: [
      { name: "Infuzja tlenowa", price: "od 200 zł", description: "wywiad, zabieg, rekonstrukcja, strzyżenie, suszenie" },
      { name: "Rekonstrukcja", price: "od 250 zł", description: "wywiad, zabieg, rekonstrukcja, suszenie" },
      { name: "Botox na zimno", price: "od 500 zł", description: "dla włosów kręconych, wywiad, zabieg, strzyżenie, stylizacja, suszenie na dyfuzor" },
    ]
  },
  {
    category: "Stylizacja",
    items: [
      { name: "Modelowanie włosów", price: "od 150 zł", description: "wywiad, mycie i pielęgnacja, modelowanie na szczotkę" },
      { name: "Fale", price: "od 200 zł", description: "wywiad, kręcenie włosów, stylizacja" },
    ]
  },
  {
    category: "Analiza kolorystyczna",
    items: [
      { name: "Analiza kolorystyczna 12 stopniowa", price: "od 799 zł", description: "konsultacja, analiza, doradztwo" },
    ]
  }
];

export function ModernServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#EEEDE7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#363C3F] text-4xl md:text-5xl font-heading font-medium mb-6">Usługi & Cennik</h2>
          <div className="w-24 h-[1px] bg-[#363C3F]/30 mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Kategorie */}
          <div
            role="tablist"
            aria-label="Kategorie usług"
            className="flex gap-2 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center mb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((section, index) => (
              <button
                key={section.category}
                id={`services-tab-${index}`}
                role="tab"
                aria-selected={index === active}
                aria-controls={`services-panel-${index}`}
                onClick={(e) => {
                  setActive(index);
                  e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }}
                className={clsx(
                  "shrink-0 px-5 py-2.5 border text-xs uppercase tracking-widest whitespace-nowrap transition-colors duration-300",
                  index === active
                    ? "bg-[#363C3F] border-[#363C3F] text-[#EEEDE7]"
                    : "border-[#363C3F]/20 text-[#363C3F] hover:border-[#363C3F]/60"
                )}
              >
                {section.category}
              </button>
            ))}
          </div>

          {/* Wszystkie listy leżą w jednej komórce siatki, więc sekcja ma stałą wysokość najdłuższej kategorii */}
          <div className="grid max-w-5xl mx-auto">
            {services.map((section, index) => (
              <div
                key={section.category}
                id={`services-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`services-tab-${index}`}
                className={clsx(
                  "[grid-area:1/1] transition-[opacity,translate,visibility] duration-500",
                  index === active ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
                )}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                  {section.items.map((item) => (
                    <li key={item.name} className="group cursor-default">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[#363C3F] font-medium tracking-wide group-hover:text-[#363C3F]/70 transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-grow mx-4 border-b border-dotted border-[#363C3F]/30 relative -top-1"></span>
                        <span className="text-[#363C3F] font-light text-sm whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[#363C3F]/60 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
