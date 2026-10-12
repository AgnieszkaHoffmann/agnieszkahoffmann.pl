import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const STYLISTS = [
  {
    name: "Małgorzata Wojtkowiak",
    role: "Starszy Stylista",
    image: "/assets/team-malgosia.jpg",
    bio: "Jestem fryzjerką z 26-letnim doświadczeniem zawodowym. Specjalizuję się w strzyżeniach damskich, koloryzacji oraz stylizacji, zawsze dbając o indywidualne potrzeby klientek. Na bieżąco śledzę najnowsze trendy i techniki w branży fryzjerskiej, regularnie uczestnicząc w szkoleniach z zakresu strzyżeń i koloryzacji. W pracy szczególną wagę przykładam do dobrej komunikacji i budowania relacji, dzięki czemu każda wizyta przebiega w komfortowej i przyjaznej atmosferze."
  },
  {
    name: "Julia",
    role: "Młodszy Stylista",
    image: "/assets/team-julia.jpg",
    bio: "Nazywam się Julia i jestem świeżo po ukończeniu 3-letniej szkoły fryzjerskiej (2025 rok). W zawodzie pracuję od niedawna, ale z ogromnym zaangażowaniem i pasją do rozwijania swoich umiejętności.\n\nMoją największą pasją jest koloryzacja włosów – fascynuje mnie możliwość przekształcania wyglądu i tworzenia pięknych, harmonijnych odcieni. Na bieżąco śledzę najnowsze techniki oraz trendy w branży, aby oferować klientkom nowoczesne i świeże rozwiązania.\n\nBardzo lubię pracę z drugim człowiekiem – kontakt z klientkami, możliwość poznawania ich potrzeb i wspólnego tworzenia wyjątkowych efektów sprawia mi ogromną radość. Każda wizyta to dla mnie okazja do nauki i doskonalenia warsztatu, a zadowolenie klientek jest moją największą motywacją."
  },
  {
    name: "Weronika Żeleńska",
    role: "Specjalista Koloryzacji",
    image: "/assets/team-weronika.jpg",
    bio: "Nazywam się Weronika i od 12 lat pracuję w zawodzie fryzjera, łącząc praktykę z nieustannym rozwojem i edukacją. Jestem fryzjerką damską, a moją największą pasją jest koloryzacja włosów – od subtelnych, naturalnych przejść po bardziej wyraziste metamorfozy.\n\nPracuję różnorodnymi technikami farbowania, zawsze traktując każdy kolor indywidualnie, z dbałością o detale, kondycję włosów oraz dopasowanie do urody i stylu klientki. Szczególne miejsce w mojej pracy zajmują blondy – naturalne, jasne, wielowymiarowe i pełne blasku. To właśnie w nich czuję się najlepiej i mogę w pełni wykorzystać swoją kreatywność oraz doświadczenie.\n\nUkończyłam liczne szkolenia z zakresu koloryzacji, strzyżeń oraz pielęgnacji włosów i skóry głowy, co pozwala mi patrzeć na fryzjerstwo całościowo i świadomie. Bardzo cenię sobie pracę z ludźmi – relację, zaufanie i wspólne tworzenie efektu, w którym klientka czuje się pięknie i komfortowo."
  }
];

const OWNER = {
  name: "Agnieszka Hoffmann",
  role: "Założycielka & Mistrz Stylizacji",
  image: "/assets/agnieszka-hoffmann.jpg",
  bio: "Od 31 lat zawodowo zajmuję się fryzjerstwem — z pasją, zaangażowaniem i ogromnym szacunkiem do ludzi oraz ich wizerunku. W 2026 roku świętuję 25-lecie otwarcia mojej pracowni, miejsca stworzonego z miłości do fryzjerstwa i piękna.\n\nUkończyłam technikum fryzjerskie oraz zdobyłam tytuł mistrza fryzjerskiego. Przez lata wyszkoliłam kilkadziesiąt uczniów. Za zaangażowanie w kształcenie młodych fryzjerów zostałam uhonorowana srebrną odznaką mistrza za szkolenie uczniów w rzemiośle.\n\nNieustannie się rozwijam — ukończyłam liczne szkolenia z zakresu strzyżeń damskich, pracy z włosami kręconymi, pielęgnacji włosów i skóry głowy, a także koloryzacji i rozjaśniania włosów najnowszymi technikami. Szkolę się i szkoliłam w prestiżowych akademiach oraz na specjalistycznych seminariach. Jestem ekspertem włosów kręconych, a blond i zdrowe włosy to jedna z moich największych specjalizacji — pracuję na produktach najwyższej jakości.\n\nMoja praca jest moją pasją. Kocham ludzi i uwielbiam uszczęśliwiać ich, upiększać oraz dbać o ich wizerunek. Wierzę, że wiedza, doświadczenie i serce są fundamentem prawdziwego profesjonalizmu.\n\nStawiam na ciągły rozwój — zarówno swój, jak i moich pracowników oraz uczniów. Do biznesu i codziennej pracy podchodzę z sercem i autentycznością. Innowacyjność, profesjonalizm i odpowiedzialność za wizerunek moich klientów są dla mnie kluczowe.\n\nPracuję wyłącznie na wysokiej klasy kosmetykach profesjonalnych: Wella Professionals, Redken, Brazilian Bond Builder, Kevin Murphy, Medavita. Uwielbiam budować relacje z klientami i być częścią ich codziennego piękna."
};

export function ModernStylists() {
  const [selectedPerson, setSelectedPerson] = useState<typeof OWNER | typeof STYLISTS[0] | null>(null);

  useEffect(() => {
    if (!selectedPerson) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPerson(null);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPerson]);

  return (
    <section id="stylists" className="py-24 px-6 md:px-12 bg-[#EEEDE7]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-[#363C3F] text-4xl md:text-5xl font-medium mb-6">Poznaj Zespół</h2>
        <p className="text-[#363C3F]/70 max-w-2xl mx-auto mb-20 font-light">
          Nasz zespół dedykowanych profesjonalistów z pasją dba o Twój najlepszy wygląd z precyzją i troską. Kliknij na dowolnego członka zespołu, aby poznać jego historię.
        </p>

        {/* Owner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-24 relative"
        >
          <div className="relative group cursor-pointer" onClick={() => setSelectedPerson(OWNER)}>
            <div className="w-80 h-80 rounded-full overflow-hidden mb-8 border-2 border-[#363C3F]/20 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img
                src={OWNER.image}
                alt={OWNER.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_5%] transition-all duration-700"
              />
            </div>
            {/* Decorative circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#363C3F]/10 rounded-full -z-0 group-hover:border-[#363C3F]/30 transition-colors" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm pointer-events-none">
              Zobacz Bio
            </div>
          </div>
          
          <h3 className="font-heading text-[#363C3F] text-4xl font-medium mb-3">{OWNER.name}</h3>
          <p className="text-[#363C3F] text-sm uppercase tracking-[0.2em] mb-6 font-medium border-b border-[#363C3F]/30 pb-2">
            {OWNER.role}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#363C3F]/10 pt-16">
          {STYLISTS.map((stylist, index) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setSelectedPerson(stylist)}
            >
              <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border border-[#363C3F]/10 group-hover:border-[#363C3F]/30 transition-colors shadow-sm relative">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-all duration-700 ${index === 0 ? 'object-[center_20%]' : ''} ${index === 1 ? 'object-[center_20%]' : ''} ${index === 2 ? 'object-[center_35%]' : ''}`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm">Bio</span>
                </div>
              </div>
              <h3 className="font-heading text-[#363C3F] text-xl font-medium mb-2">{stylist.name}</h3>
              <p className="text-[#363C3F]/60 text-xs uppercase tracking-widest">{stylist.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay */}
      <AnimatePresence>
        {selectedPerson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="absolute inset-0 bg-[#363C3F]/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#EEEDE7] w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedPerson(null)}
                aria-label="Zamknij"
                className="absolute top-4 right-4 p-2 text-[#363C3F] hover:bg-[#363C3F]/10 rounded-full transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative md:min-h-[500px]">
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover object-[center_25%] md:object-center"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-start text-left overflow-y-auto">
                <h3 className="font-heading text-[#363C3F] text-3xl font-medium mb-2">{selectedPerson.name}</h3>
                <p className="text-[#363C3F]/60 text-xs uppercase tracking-widest mb-6 pb-4 border-b border-[#363C3F]/20">
                  {selectedPerson.role}
                </p>
                <p className="text-[#363C3F] font-light leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {selectedPerson.bio}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}