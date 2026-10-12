import { X } from "lucide-react";
import { useEffect } from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-[#EEEDE7] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-[#EEEDE7] border-b border-[#363C3F]/10 px-6 py-4 flex justify-between items-center">
          <h2 className="font-heading text-2xl font-medium text-[#363C3F]">Regulamin Zakładu Fryzjerskiego</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#363C3F]/5 rounded-full transition-colors"
            aria-label="Zamknij"
          >
            <X size={24} className="text-[#363C3F]" />
          </button>
        </div>
        
        <div className="px-6 py-8 space-y-6 text-[#363C3F]">
          <section>
            <h3 className="font-heading text-xl font-medium mb-3">1. Postanowienia ogólne</h3>
            <p className="text-sm leading-relaxed">
              Regulamin określa zasady korzystania z usług fryzjerskich oraz zakupu produktów i voucherów w zakładzie Pracownia Agnieszka Hoffmann.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Regulamin obowiązuje wszystkich klientów korzystających z usług zakładu.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Skorzystanie z usług oznacza akceptację niniejszego regulaminu.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">2. Dane przedsiębiorcy</h3>
            <ul className="text-sm leading-relaxed space-y-1">
              <li><strong>Nazwa:</strong> Pracownia Agnieszka Hoffmann</li>
              <li><strong>Właściciel:</strong> Agnieszka Hoffmann</li>
              <li><strong>Forma prawna:</strong> jednoosobowa działalność gospodarcza</li>
              <li><strong>NIP:</strong> 7861351288</li>
              <li><strong>REGON:</strong> 634217384</li>
              <li><strong>Adres zakładu:</strong> ul. Warszawska 4a/103, 62-025 Kostrzyn</li>
              <li><strong>Telefon:</strong> 502 077 518</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">3. Zakres działalności</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Zakład świadczy usługi fryzjerskie wyłącznie stacjonarnie.</li>
              <li>Zakład prowadzi sprzedaż produktów oraz voucherów wyłącznie w lokalu.</li>
              <li>Zakład nie prowadzi sprzedaży internetowej, płatności online ani rezerwacji online.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">4. Rezerwacja wizyt</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Rezerwacja wizyt odbywa się telefonicznie lub osobiście w zakładzie.</li>
              <li>Rezerwacja jest wiążąca.</li>
              <li>Klient zobowiązany jest do punktualnego przybycia na wizytę.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">5. Odwoływanie wizyt</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Klient ma prawo anulować wizytę najpóźniej jeden dzień przed umówionym terminem.</li>
              <li>Nieodwołanie wizyty w tym terminie lub niepojawienie się w zakładzie może skutkować odmową kolejnych rezerwacji.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">6. Realizacja usług</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Usługi wykonywane są zgodnie z aktualnym cennikiem.</li>
              <li>Ceny podane w cenniku są cenami orientacyjnymi.</li>
              <li>Ostateczna cena zależy od długości włosów, ich gęstości, zużycia produktów oraz czasu pracy.</li>
              <li>Klient zostaje poinformowany o cenie przed rozpoczęciem usługi.</li>
              <li>Klient ma obowiązek poinformować o stanie zdrowia oraz przeciwwskazaniach.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">7. Sprzedaż produktów</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Sprzedaż produktów odbywa się wyłącznie stacjonarnie.</li>
              <li>Produkty podlegają reklamacji zgodnie z przepisami prawa.</li>
              <li>Produkty otwarte lub używane nie podlegają zwrotowi.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">8. Vouchery</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Zakład oferuje wyłącznie fizyczne vouchery.</li>
              <li>Voucher posiada określony termin ważności.</li>
              <li>Voucher nie podlega zwrotowi ani wymianie na gotówkę.</li>
              <li>Niewykorzystanie vouchera w terminie skutkuje jego wygaśnięciem.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">9. Reklamacje</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Reklamacje dotyczące usług należy zgłaszać niezwłocznie po ich wykonaniu.</li>
              <li>Reklamacje rozpatrywane są indywidualnie.</li>
              <li>Zakład nie odpowiada za efekt usługi, jeśli klient zataił istotne informacje.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">10. Odpowiedzialność</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Zakład nie ponosi odpowiedzialności za rzeczy osobiste pozostawione bez nadzoru.</li>
              <li>Klient odpowiada za szkody wyrządzone z własnej winy.</li>
              <li>Zakład może odmówić wykonania usługi w przypadku zagrożenia zdrowia.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">11. Dane osobowe</h3>
            <p className="text-sm leading-relaxed">
              Dane osobowe przetwarzane są zgodnie z Polityką prywatności dostępną na stronie internetowej.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">12. Postanowienia końcowe</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li>Regulamin obowiązuje od dnia publikacji.</li>
              <li>Zakład zastrzega sobie prawo do jego zmiany.</li>
              <li>W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
