import { pillars } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Pillars() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("pillars.heading")}</h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {pillars.map((p) => (
            <div
              key={p.titleKey}
              className={`${p.tint} rounded-2xl p-6 text-center border border-border/50 hover:shadow-md transition-shadow`}
            >
              <p.icon className={`h-10 w-10 mx-auto ${p.iconColor}`} strokeWidth={1.8} />
              <div className="mt-3 font-bold">{t(p.titleKey)}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t(p.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
