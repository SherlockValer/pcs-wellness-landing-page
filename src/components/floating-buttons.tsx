import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { BOOKING_WHATSAPP_NUMBER } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile action bar — one-tap Call / WhatsApp for phone visitors */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden border-t border-border bg-white/95 backdrop-blur">
        <div className="flex gap-2 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <a
            href="tel:+917048378091"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 py-3 text-sm font-semibold text-primary transition-transform active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" /> {t("floating.call")}
          </a>
          <a
            href={`https://wa.me/${BOOKING_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" /> {t("floating.whatsapp")}
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp button */}
      <a
        href={`https://wa.me/${BOOKING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hi! I'm interested in learning more about PC's Wellness Club.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 h-11 w-11 rounded-full bg-primary text-white items-center justify-center shadow-2xl hover:bg-primary-dark hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Hover Tooltip */}
        <span className="absolute right-14 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-md">
          {t("floating.chatTooltip")}
        </span>

        {/* Pulsing indicator ring */}
        <span className="absolute -inset-1 rounded-full bg-primary/30 animate-ping -z-10" />

        {/* Official WhatsApp SVG Logo */}
        <svg
          className="h-5.5 w-5.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Desktop scroll-to-top */}
      <a
        href="#home"
        className="hidden lg:flex fixed bottom-24 right-6 h-11 w-11 rounded-full bg-primary text-white items-center justify-center shadow-lg hover:bg-primary-dark z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </>
  );
}
