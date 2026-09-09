import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutAreas } from "@/components/about-areas";
import { BmiCalculator } from "@/components/bmi-calculator";
import { Pillars } from "@/components/pillars";
import { Journey } from "@/components/journey";
import { WhyUs } from "@/components/why-us";
import { Testimonials } from "@/components/testimonials";
import { VideoTestimonials } from "@/components/video-testimonials";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-foreground pb-24 lg:pb-0">
      <Navbar />
      <Hero />
      <AboutAreas />
      <BmiCalculator />
      <Pillars />
      <Journey />
      <WhyUs />
      <Testimonials />
      <VideoTestimonials />
      <Gallery />
      <Faq />
      <Booking />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
