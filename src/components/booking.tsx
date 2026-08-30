import { Calendar, MessageCircle } from "lucide-react";
import ctaBanner from "@/assets/cta-banner.jpg";
import ctaBanner1024 from "@/assets/cta-banner-1024.jpg";
import { BookingForm } from "@/components/booking-form";
import { BOOKING_WHATSAPP_NUMBER } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Booking() {
  const { t } = useLanguage();

  return (
    <section id="book" className="relative">
      <img
        src={ctaBanner}
        srcSet={`${ctaBanner1024} 1024w, ${ctaBanner} 1600w`}
        sizes="100vw"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t("booking.ctaHeading")}</h2>
            <p className="mt-3 text-white/90">{t("booking.ctaSubtitle")}</p>
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/95 rounded-full px-6 py-3.5 font-semibold shadow-lg"
              >
                <Calendar className="h-5 w-5" /> {t("booking.ctaBook")}
              </a>
              <a
                href={`https://wa.me/${BOOKING_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-3.5 font-semibold"
              >
                <MessageCircle className="h-5 w-5" /> {t("booking.ctaWhatsapp")}
              </a>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-8">
            <h3 className="text-2xl font-extrabold text-primary-dark">{t("booking.heading")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("booking.subtitle")}</p>
            <div className="mt-5">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
