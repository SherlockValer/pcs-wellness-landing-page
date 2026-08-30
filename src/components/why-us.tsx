import { ShieldCheck } from "lucide-react";
import { whyUs } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("whyUs.heading")}</h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyUs.map((w) => (
            <div
              key={w}
              className="bg-white rounded-xl border border-border p-5 flex items-center gap-3 hover:border-primary transition-colors"
            >
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-sm leading-snug">{t(w)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
