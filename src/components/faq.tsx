import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Faq() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("faq.heading")}</h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.qKey} className="border border-border rounded-xl bg-secondary/30">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-sm md:text-base">{t(f.qKey)}</span>
                {openFaq === i ? (
                  <Minus className="h-5 w-5 text-primary shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">{t(f.aKey)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
