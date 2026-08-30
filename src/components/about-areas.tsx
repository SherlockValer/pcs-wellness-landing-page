import { ShieldCheck } from "lucide-react";
import { areas } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function AboutAreas() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="text-primary font-semibold text-sm">{t("about.eyebrow")}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
            {t("about.heading")}
          </h2>
          <div className="mt-3 h-1 w-16 bg-primary/40 rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.p1")}</p>
          <p className="mt-6 script text-3xl text-primary">{t("about.script")}</p>
        </div>
        <div>
          <div className="text-primary font-semibold text-sm">{t("about.areasEyebrow")}</div>
          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">{t("about.areasHeading")}</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {areas.map((a) => (
              <div
                key={a.labelKey}
                className={`${a.tint} rounded-2xl p-4 text-center border border-border/50`}
              >
                <div className="h-12 w-12 mx-auto rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <a.icon className={`h-6 w-6 ${a.iconColor ?? "text-primary"}`} />
                </div>
                <div className="mt-3 text-xs md:text-sm font-semibold leading-snug">
                  {t(a.labelKey)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3 items-start bg-secondary/60 border border-primary/20 rounded-xl p-4">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">{t("about.disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
