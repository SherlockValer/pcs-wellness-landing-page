import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { stories } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector("figure");
    const step = firstCard ? firstCard.getBoundingClientRect().width + 20 : 320;
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-primary font-semibold">{t("testimonials.eyebrow")}</h2>
        <p className="text-center text-2xl md:text-3xl font-extrabold mt-1">
          {t("testimonials.heading")}
        </p>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {t("testimonials.subtitle")}
        </p>

        <div
          ref={scrollerRef}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none"
        >
          {stories.map((s) => (
            <figure
              key={s.name}
              className="w-full snap-start shrink-0 bg-secondary/40 rounded-2xl border border-border overflow-hidden flex flex-col md:w-auto md:shrink"
            >
              {/* Before / After photo */}
              <div className="relative">
                <img
                  src={s.img}
                  srcSet={`${s.imgMobile} 700w, ${s.img} 2000w`}
                  sizes="(max-width: 1024px) 92vw, 33vw"
                  alt={t("testimonials.imgAlt").replace("{name}", s.name)}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>

              <figcaption className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold">{s.name}</span>
                  <div className="flex text-amber-400" aria-label={t("testimonials.rated")}>
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                {s.resultKey && (
                  <span className="self-start rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    {t(s.resultKey)}
                  </span>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">“{t(s.quoteKey)}”</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Arrow controls — centered below the carousel (mobile only) so the
            fixed WhatsApp / scroll-to-top buttons never cover them */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-md transition-all hover:bg-primary hover:text-white hover:shadow-lg active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-md transition-all hover:bg-primary hover:text-white hover:shadow-lg active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          {t("testimonials.disclaimer")}
        </p>
      </div>
    </section>
  );
}
