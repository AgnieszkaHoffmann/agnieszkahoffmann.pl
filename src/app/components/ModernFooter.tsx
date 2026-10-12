import { Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";
import { TermsModal } from "./TermsModal";

export function ModernFooter() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#363C3F] text-[#EEEDE7] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            
            {/* Logo i opis */}
            <div>
              <img
                src="/assets/logo-light.svg"
                alt="Hairstyle by Agnieszka Hoffmann and Team"
                className="w-full max-w-xs h-auto mb-4"
              />
              <p className="text-[#EEEDE7]/70 font-light text-sm leading-relaxed">
              Pracownia to efekt pasji do fryzjerstwa, piękna i indywidualnego podejścia do każdego klienta. Miejsce, w którym doświadczenie, wiedza i nieustanny rozwój łączą się z profesjonalizmem oraz autentycznym zaangażowaniem w pracę.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-heading text-lg font-medium mb-4">Śledź nas</h4>
              <p className="text-[#EEEDE7]/70 font-light text-sm mb-4">
                Bądź na bieżąco z naszymi najnowszymi realizacjami.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/pracownia_agnieszka_hoffmann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#EEEDE7]/10 hover:bg-[#EEEDE7]/20 transition-colors rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/pracownia.fryzjerska.agnieszka.hoffmann/?locale=pl_PL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#EEEDE7]/10 hover:bg-[#EEEDE7]/20 transition-colors rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright i linki */}
          <div className="pt-8 border-t border-[#EEEDE7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#EEEDE7]/40 font-light">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>2026 © Wszystkie prawa zastrzeżone Pracownia fryzjerska Agnieszka Hoffmann</p>
              <p className="text-[10px] text-[#EEEDE7]/30">
                projekt i realizacja{" "}
                <a 
                  href="https://vizustudio.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#EEEDE7]/50 transition-colors"
                >
                  vizustudio.pl
                </a>
              </p>
            </div>
            <div className="flex gap-6 uppercase tracking-wide">
              <button 
                onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }} 
                className="hover:text-[#EEEDE7]/60 transition-colors cursor-pointer"
              >
                Polityka Prywatności
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); setIsTermsModalOpen(true); }} 
                className="hover:text-[#EEEDE7]/60 transition-colors cursor-pointer"
              >
                Regulamin
              </button>
            </div>
          </div>

        </div>
      </footer>
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  );
}