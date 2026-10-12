import { X } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
          <h2 className="font-heading text-2xl font-medium text-[#363C3F]">Polityka Prywatności</h2>
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
            <h3 className="font-heading text-xl font-medium mb-3">1. Informacje ogólne</h3>
            <p className="text-sm leading-relaxed">
              Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych osób korzystających ze strony internetowej zakładu fryzjerskiego prowadzonego pod firmą Pracownia Agnieszka Hoffmann.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Administratorem danych osobowych jest Agnieszka Hoffmann, prowadząca jednoosobową działalność gospodarczą wpisaną do rejestru CEIDG.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Administrator przetwarza dane osobowe zgodnie z obowiązującymi przepisami prawa, w szczególności zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady UE 2016/679.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">2. Dane administratora</h3>
            <ul className="text-sm leading-relaxed space-y-1">
              <li><strong>Firma:</strong> Pracownia Agnieszka Hoffmann</li>
              <li><strong>Forma prawna:</strong> jednoosobowa działalność gospodarcza</li>
              <li><strong>NIP:</strong> 7861351288</li>
              <li><strong>REGON:</strong> 634217384</li>
              <li><strong>Adres zakładu:</strong> ul. Warszawska 4a/103, 62-025 Kostrzyn</li>
              <li><strong>Numer telefonu:</strong> 502 077 518</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">3. Zakres przetwarzanych danych</h3>
            <p className="text-sm leading-relaxed mb-2">
              Administrator przetwarza dane osobowe przekazywane dobrowolnie przez użytkownika, w szczególności:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>imię i nazwisko,</li>
              <li>numer telefonu,</li>
              <li>dane przekazane podczas kontaktu telefonicznego lub wizyty w zakładzie.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              Strona nie służy do sprzedaży online i nie przetwarza danych płatniczych.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">4. Cele przetwarzania danych</h3>
            <p className="text-sm leading-relaxed mb-2">
              Dane osobowe przetwarzane są w następujących celach:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>udzielenie odpowiedzi na zapytania kierowane telefonicznie lub w zakładzie,</li>
              <li>kontakt telefoniczny z klientem,</li>
              <li>umówienie wizyty stacjonarnej,</li>
              <li>realizacja usług fryzjerskich,</li>
              <li>prowadzenie dokumentacji księgowej,</li>
              <li>zapewnienie prawidłowego działania strony,</li>
              <li>cele statystyczne i analityczne.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">5. Podstawa prawna przetwarzania</h3>
            <p className="text-sm leading-relaxed mb-2">
              Podstawą przetwarzania danych osobowych jest:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>zgoda użytkownika,</li>
              <li>konieczność wykonania usługi,</li>
              <li>obowiązek prawny ciążący na Administratorze,</li>
              <li>prawnie uzasadniony interes Administratora.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">6. Okres przechowywania danych</h3>
            <p className="text-sm leading-relaxed mb-2">
              Dane osobowe przechowywane są:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>przez czas trwania korespondencji,</li>
              <li>przez okres realizacji usługi,</li>
              <li>przez okres wymagany przepisami prawa,</li>
              <li>do momentu cofnięcia zgody, jeśli dane przetwarzane są na jej podstawie.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">7. Odbiorcy danych</h3>
            <p className="text-sm leading-relaxed mb-2">
              Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem, w szczególności:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>firmom księgowym,</li>
              <li>dostawcom usług hostingowych,</li>
              <li>dostawcom narzędzi analitycznych.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              Dane nie są przekazywane osobom trzecim w celach marketingowych.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">8. Prawa osoby, której dane dotyczą</h3>
            <p className="text-sm leading-relaxed mb-2">
              Użytkownik ma prawo do:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>dostępu do danych,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>przenoszenia danych,</li>
              <li>cofnięcia zgody w dowolnym momencie,</li>
              <li>złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">9. Pliki cookies</h3>
            <p className="text-sm leading-relaxed mb-2">
              Strona wykorzystuje pliki cookies w celu:
            </p>
            <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>prawidłowego działania strony,</li>
              <li>prowadzenia statystyk,</li>
              <li>poprawy jakości funkcjonowania serwisu.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              Użytkownik ma możliwość zarządzania cookies poprzez ustawienia przeglądarki.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">10. Bezpieczeństwo danych</h3>
            <p className="text-sm leading-relaxed">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed utratą, nieuprawnionym dostępem lub modyfikacją.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-medium mb-3">11. Zmiany polityki prywatności</h3>
            <p className="text-sm leading-relaxed">
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce prywatności. Aktualna wersja dokumentu dostępna jest na stronie internetowej.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
