import { Calendar, HeartPulse, MessageCircle, ShieldCheck, Users } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import heroFamily1024 from "@/assets/hero-family-1024.jpg";
import leavesBg from "@/assets/leaves-bg.jpg";
import leavesBg1024 from "@/assets/leaves-bg-1024.jpg";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { lang, t } = useLanguage();
  const titleSegments = translations[lang].hero.title;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={leavesBg}
          srcSet={`${leavesBg1024} 1024w, ${leavesBg} 1600w`}
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-[var(--color-cream)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              {titleSegments.map((seg, i) =>
                "highlight" in seg && seg.highlight ? (
                  <span key={i} className="text-primary">
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="h-5 w-5" /> {t("hero.ctaBook")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white border border-border hover:border-primary text-foreground rounded-full px-6 py-3.5 font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" /> {t("hero.ctaWhatsapp")}
              </a>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: Users, num: "50+", label: t("hero.statMembers") },
                { icon: HeartPulse, num: "1000+", label: t("hero.statSessions") },
                { icon: ShieldCheck, num: "5+", label: t("hero.statYears") },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className="h-6 w-6 mx-auto text-primary" />
                  <div className="mt-1 text-xl font-extrabold">{s.num}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden ring-8 ring-white shadow-2xl">
              <img
                src={heroFamily}
                srcSet={`${heroFamily1024} 1024w, ${heroFamily} 1373w`}
                sizes="(max-width: 1024px) 92vw, 45vw"
                alt={t("hero.familyAlt")}
                width={1200}
                height={1000}
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
