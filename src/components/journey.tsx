import { steps } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Journey() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("journey.heading")}</h2>
        <p className="text-center text-muted-foreground mt-2">{t("journey.subtitle")}</p>
        <div className="mt-12 relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-primary/40" />
          {steps.map((s, i) => (
            <div key={s.titleKey} className="relative flex flex-col items-center text-center">
              <div className="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                <s.icon className="h-7 w-7 text-white" />
                <span className="absolute -top-1 -right-1 h-6 w-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary">
                  {i + 1}
                </span>
              </div>
              <div className="mt-4 font-bold">{t(s.titleKey)}</div>
              <p className="mt-1 text-xs text-muted-foreground max-w-[180px]">{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
