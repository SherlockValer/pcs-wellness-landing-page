import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videoStories, videoPosterUrl, videoEmbedUrl } from "@/lib/site-data";
import { getLiveVideoStories } from "@/lib/live-video-stories";
import { useLanguage } from "@/lib/i18n";

export function VideoTestimonials() {
  const { t } = useLanguage();
  // Static `videoStories` is the SSR/initial/fallback set; the live server
  // fetch below swaps in the playlist's current contents when available.
  const [videos, setVideos] = useState(videoStories);
  const [activeId, setActiveId] = useState<string | null>(null);
  const liveRequested = useRef(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeVideo = videos.find((v) => v.videoId === activeId) ?? null;

  const scrollByCards = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector("button");
    const step = firstCard ? firstCard.getBoundingClientRect().width + 20 : 320;
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (liveRequested.current) return;
    liveRequested.current = true;

    let cancelled = false;
    getLiveVideoStories()
      .then((live) => {
        if (!cancelled && live.length > 0) setVideos(live);
      })
      .catch(() => {
        // Keep the static fallback if the live sync fails.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="video-testimonials" className="py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-primary font-semibold">{t("videoTestimonials.eyebrow")}</h2>
        <p className="mt-1 text-center text-3xl md:text-4xl font-extrabold">
          {t("videoTestimonials.heading")}
        </p>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary/50 rounded-full" />
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {t("videoTestimonials.subtitle")}
        </p>

        {/* Mobile: snap-scroll carousel (like the photo stories). Desktop: grid. */}
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none"
        >
          {videos.map((v) => (
            <button
              key={v.videoId}
              type="button"
              onClick={() => setActiveId(v.videoId)}
              aria-label={`${t("videoTestimonials.watch")}: ${v.name}`}
              className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:w-auto md:shrink"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={videoPosterUrl(v.videoId)}
                  alt={v.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
                <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-current" />
                </span>
              </div>
              <div className="p-4">
                <span className="font-bold leading-snug">{v.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Arrow controls — mobile only, below the carousel so they never
            cover the fixed WhatsApp / scroll-to-top buttons */}
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

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t("videoTestimonials.disclaimer")}
        </p>
      </div>

      <Dialog open={activeId !== null} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-w-4xl sm:rounded-2xl">
          {activeVideo && (
            <>
              <DialogTitle className="pr-6">{activeVideo.name}</DialogTitle>
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black">
                <iframe
                  className="h-full w-full"
                  src={videoEmbedUrl(activeVideo.videoId)}
                  title={activeVideo.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
