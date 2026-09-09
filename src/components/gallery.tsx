import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

// Columns per breakpoint: 2 (mobile), 3 (tablet), 6 (desktop). We show exactly
// TWO rows initially, and reveal the rest with the "Show more" toggle.
const columnsFor = (width: number) => (width >= 1024 ? 6 : width >= 640 ? 3 : 2);

export function Gallery() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  // SSR/first paint assumes desktop (12 = 2 rows × 6); corrected to the real
  // viewport in the effect below so each breakpoint shows two tidy rows.
  const [visible, setVisible] = useState(12);

  useEffect(() => {
    const apply = () => setVisible(columnsFor(window.innerWidth) * 2);
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const collapsedCount = Math.min(visible, gallery.length);
  const shown = expanded ? gallery : gallery.slice(0, collapsedCount);
  const hasMore = gallery.length > collapsedCount;

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("gallery.heading")}</h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {shown.map((g, i) => (
            <div key={g} className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img
                src={g}
                alt={t("gallery.alt")}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white active:scale-95"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  {t("gallery.showLess")}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  {t("gallery.showMore")}
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
