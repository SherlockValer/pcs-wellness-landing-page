import { gallery } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("gallery.heading")}</h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {gallery.map((g, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img
                src={g}
                alt={t("gallery.alt")}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
