import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  HeartPulse,
  ShieldCheck,
  Sprout,
  UserCheck,
  SlidersHorizontal,
  Scale,
  Heart,
  Zap,
  Baby,
  Leaf,
  Bone,
  Flower2,
  UsersRound,
  Calendar,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Plus,
  Minus,
  ArrowUp,
  Menu,
  X,
  Droplet,
  Moon,
  Smile,
  Activity,
  ClipboardList,
  User,
  CalendarDays,
  LifeBuoy,
  MapIcon,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import leavesBg from "@/assets/leaves-bg.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import logo from "@/assets/logo.png";
import pWeightloss from "@/assets/prog-weightloss.jpg";
import pWeightgain from "@/assets/prog-weightgain.jpg";
import pNutrition from "@/assets/prog-nutrition.jpg";
import pFitness from "@/assets/prog-fitness.jpg";
import pEval from "@/assets/prog-evaluation.jpg";
import pCoaching from "@/assets/prog-coaching.jpg";
import pChallenge from "@/assets/prog-challenge.jpg";
import sPriya from "@/assets/story-priya.jpg";
import sRahul from "@/assets/story-rahul.jpg";
import sNeha from "@/assets/story-neha.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({ component: Landing });

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#bmi", label: "BMI Calculator" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const trustCards = [
  { icon: Users, label: "Personalized Coaching" },
  { icon: HeartPulse, label: "Online & Offline Support" },
  { icon: ShieldCheck, label: "Evidence Based Guidance" },
  { icon: Sprout, label: "Positive Community" },
  { icon: UserCheck, label: "Individual Attention" },
  { icon: SlidersHorizontal, label: "Flexible Programs" },
];

const areas = [
  { icon: Scale, title: "Weight Management", tint: "bg-emerald-50" },
  { icon: Heart, title: "Heart Health Support", tint: "bg-rose-50", iconColor: "text-rose-500" },
  { icon: Zap, title: "Energy & Active Lifestyle", tint: "bg-emerald-50" },
  {
    icon: Baby,
    title: "Child Nutrition Guidance",
    tint: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  { icon: Leaf, title: "Digestive Wellness", tint: "bg-violet-50", iconColor: "text-violet-500" },
  { icon: Bone, title: "Bone & Joint Health", tint: "bg-sky-50", iconColor: "text-sky-500" },
  {
    icon: Flower2,
    title: "Stress Management & Well-being",
    tint: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: UsersRound,
    title: "Men's & Women's Wellness",
    tint: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

const programs = [
  { img: pWeightloss, title: "Weight Loss Program" },
  { img: pWeightgain, title: "Healthy Weight Gain Program" },
  { img: pNutrition, title: "Daily Nutrition Club" },
  { img: pFitness, title: "Fitness & Active Lifestyle" },
  { img: pEval, title: "Wellness Evaluation" },
  { img: pCoaching, title: "One-on-One Coaching" },
  { img: pChallenge, title: "Wellness Challenges" },
];

const pillars = [
  {
    icon: Activity,
    title: "Exercise",
    desc: "Stay active daily and build a stronger body.",
    tint: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Leaf,
    title: "Balanced Nutrition",
    desc: "Fuel your body with the right nutrients.",
    tint: "bg-lime-50",
    iconColor: "text-lime-600",
  },
  {
    icon: Droplet,
    title: "Hydration",
    desc: "Drink water, stay refreshed, stay healthy.",
    tint: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: Moon,
    title: "Quality Sleep",
    desc: "Good sleep rejuvenates your body and mind.",
    tint: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Smile,
    title: "Positive Mindset",
    desc: "Think positive, stay motivated, live happy.",
    tint: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

const steps = [
  {
    icon: CalendarDays,
    title: "Book Your Free Consultation",
    desc: "Choose a time that suits you.",
  },
  { icon: User, title: "Wellness Evaluation", desc: "We assess your lifestyle & goals." },
  { icon: ClipboardList, title: "Personalized Plan", desc: "Get a plan made just for you." },
  {
    icon: LifeBuoy,
    title: "Continuous Support & Tracking",
    desc: "Mon – Sat: motivate & track your progress.",
  },
];

const whyUs = [
  "Personalized Attention",
  "Friendly Community",
  "Practical Daily Habits",
  "Sustainable Lifestyle Changes",
  "Regular Follow-ups",
  "Online & Offline Guidance",
];

const stories = [
  {
    img: sPriya,
    quote:
      "I lost 12 kgs in 4 months with the right guidance and support. I feel more energetic than ever!",
    name: "Priya S.",
  },
  {
    img: sRahul,
    quote: "My energy levels improved a lot and I feel healthier & happier every day.",
    name: "Rahul M.",
  },
  { img: sNeha, quote: "The community here keeps me motivated and consistent.", name: "Neha K." },
];

const gallery = [g1, g2, g3, g4, g5, g6];

const faqs = [
  {
    q: "Who can join PC's Wellness Club?",
    a: "Anyone above 15 looking to improve their health, energy, nutrition, or lifestyle is welcome — beginners included.",
  },
  {
    q: "Is this only for weight loss?",
    a: "No. We support weight loss, weight gain, active lifestyle, child nutrition, stress management, and overall wellness.",
  },
  {
    q: "Do I need gym experience?",
    a: "Not at all. Our plans start at your current level and progress gradually with easy daily practices.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes. You can join us online, offline, or a mix of both — whatever fits your schedule.",
  },
  {
    q: "How do I begin?",
    a: "Book a free wellness evaluation. We'll understand your goals and share a personalized plan.",
  },
];

type BmiUnit = "metric" | "imperial";

const bmiMin = 10;
const bmiMax = 40;

const bmiBands = [
  {
    min: 0,
    max: 18.5,
    label: "Underweight",
    risk: "Possible associated conditions: iron deficiency anemia, vitamin deficiencies, and lower immunity.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    min: 18.5,
    max: 25,
    label: "Healthy",
    risk: "No specific disease signal from BMI alone; continue regular habits and routine checkups.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    min: 25,
    max: 30,
    label: "Overweight",
    risk: "Possible associated conditions: prediabetes, high blood pressure, high cholesterol, and fatty liver.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    min: 30,
    max: 35,
    label: "Obesity Class I",
    risk: "Possible associated conditions: type 2 diabetes, sleep apnea, joint pain, and fatty liver.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    min: 35,
    max: 40,
    label: "Obesity Class II",
    risk: "Possible associated conditions: heart disease, stroke risk, insulin resistance, and osteoarthritis.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    min: 40,
    max: Number.POSITIVE_INFINITY,
    label: "Obesity Class III",
    risk: "Possible associated conditions: severe sleep apnea, cardiovascular disease, metabolic syndrome, and mobility issues.",
    color: "text-red-700",
    bg: "bg-red-50",
  },
] as const;

const bmiGaugeSegments = [
  { min: 10, max: 18.5, color: "#38bdf8" },
  { min: 18.5, max: 25, color: "#22c55e" },
  { min: 25, max: 30, color: "#f59e0b" },
  { min: 30, max: 35, color: "#f97316" },
  { min: 35, max: 40, color: "#ef4444" },
] as const;

function getBmiBand(bmi: number) {
  return (
    bmiBands.find((band) => bmi >= band.min && bmi < band.max) ?? bmiBands[bmiBands.length - 1]
  );
}

function getGaugeAngle(bmi: number) {
  const clamped = Math.min(bmiMax, Math.max(bmiMin, bmi));
  const ratio = (clamped - bmiMin) / (bmiMax - bmiMin);
  return -90 + ratio * 180;
}

function getGaugeGradient() {
  const stops = bmiGaugeSegments
    .map((segment) => {
      const start = ((segment.min - bmiMin) / (bmiMax - bmiMin)) * 180;
      const end = ((segment.max - bmiMin) / (bmiMax - bmiMin)) * 180;
      return `${segment.color} ${start}deg ${end}deg`;
    })
    .join(", ");

  return `conic-gradient(from 180deg, ${stops})`;
}

function describeGaugeArc(startAngle: number, endAngle: number, radius = 82) {
  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;
  const startX = 100 + radius * Math.cos(startRadians);
  const startY = 100 + radius * Math.sin(startRadians);
  const endX = 100 + radius * Math.cos(endRadians);
  const endY = 100 + radius * Math.sin(endRadians);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}

function Landing() {
  const [storyIdx, setStoryIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [bmiUnit, setBmiUnit] = useState<BmiUnit>("metric");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmiValue, setBmiValue] = useState<number | null>(null);
  const [bmiError, setBmiError] = useState<string | null>(null);
  const scrollLockRef = useRef(false);
  const clickTargetRef = useRef<string | null>(null);
  const clickTimeoutRef = useRef<number | null>(null);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    clickTargetRef.current = href;
    scrollLockRef.current = true;
    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      scrollLockRef.current = false;
      clickTargetRef.current = null;
      clickTimeoutRef.current = null;
    }, 1200);
  };

  useEffect(() => {
    const updateHash = () => setActiveSection(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href);
    const elements = sectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const headerEl = document.querySelector("header");
      const headerOffset = headerEl ? headerEl.getBoundingClientRect().height + 16 : 120;
      const visibleSection = elements
        .map((element) => ({ href: `#${element.id}`, top: element.getBoundingClientRect().top }))
        .filter((section) => section.top <= headerOffset)
        .sort((a, b) => b.top - a.top)[0];

      if (clickTargetRef.current) {
        // if target not yet reached, keep the clicked link active
        if (visibleSection && visibleSection.href === clickTargetRef.current) {
          clickTargetRef.current = null;
          scrollLockRef.current = false;
        } else {
          return;
        }
      }

      if (visibleSection) {
        setActiveSection(visibleSection.href);
      } else {
        setActiveSection(elements[0] ? `#${elements[0].id}` : "#home");
      }
    };

    const onScroll = () => {
      if (scrollLockRef.current || ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const calculateBmi = () => {
    const parsedWeight = Number.parseFloat(weight);

    const hasMetricInputs = bmiUnit === "metric" && weight.trim() && heightCm.trim();
    const hasImperialInputs =
      bmiUnit === "imperial" && weight.trim() && heightFt.trim() && heightIn.trim();

    if (!hasMetricInputs && !hasImperialInputs) {
      setBmiError(null);
      setBmiValue(null);
      return;
    }

    if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) {
      setBmiError("Please enter a valid weight greater than 0.");
      setBmiValue(null);
      return;
    }

    let calculatedBmi = 0;

    if (bmiUnit === "metric") {
      const parsedHeightCm = Number.parseFloat(heightCm);
      if (!Number.isFinite(parsedHeightCm) || parsedHeightCm <= 0) {
        setBmiError("Please enter a valid height in centimeters.");
        setBmiValue(null);
        return;
      }
      if (parsedHeightCm < 80 || parsedHeightCm > 260) {
        setBmiError("Height looks out of expected adult range. Please verify your entry.");
        setBmiValue(null);
        return;
      }
      const heightInMeters = parsedHeightCm / 100;
      calculatedBmi = parsedWeight / (heightInMeters * heightInMeters);
    } else {
      const parsedFeet = Number.parseFloat(heightFt || "0");
      const parsedInches = Number.parseFloat(heightIn || "0");

      if (!Number.isFinite(parsedFeet) || !Number.isFinite(parsedInches)) {
        setBmiError("Please enter valid feet and inches values.");
        setBmiValue(null);
        return;
      }
      if (parsedFeet < 0 || parsedInches < 0 || parsedInches >= 12) {
        setBmiError("Use valid height values. Inches should be between 0 and 11.");
        setBmiValue(null);
        return;
      }

      const totalInches = parsedFeet * 12 + parsedInches;
      if (totalInches <= 0) {
        setBmiError("Please enter a valid height in feet and inches.");
        setBmiValue(null);
        return;
      }

      calculatedBmi = (703 * parsedWeight) / (totalInches * totalInches);
    }

    if (!Number.isFinite(calculatedBmi) || calculatedBmi <= 0) {
      setBmiError("Unable to calculate BMI with these values. Please check your inputs.");
      setBmiValue(null);
      return;
    }

    setBmiError(null);
    setBmiValue(calculatedBmi);
  };

  useEffect(() => {
    calculateBmi();
  }, [bmiUnit, weight, heightCm, heightFt, heightIn]);

  const handleBmiCalculate = () => {
    calculateBmi();
  };

  const bmiBand = bmiValue ? getBmiBand(bmiValue) : null;
  const gaugeAngle = getGaugeAngle(bmiValue ?? 22);

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="PC's Wellness Club" className="h-11 w-11" />
            <div className="leading-tight">
              <div className="text-[11px] tracking-widest text-muted-foreground">PC's</div>
              <div className="text-lg font-extrabold text-primary-dark">WELLNESS CLUB</div>
              <div className="text-[10px] text-muted-foreground -mt-0.5">
                Together Towards Better Health
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => handleNavClick(n.href)}
                className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === n.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <Calendar className="h-4 w-4" /> Book Free Consultation
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-3 space-y-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => {
                  handleNavClick(n.href);
                  setMenuOpen(false);
                }}
                className={`block py-2 text-sm font-medium ${activeSection === n.href ? "text-primary" : "text-foreground/80"}`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#book"
              className="block bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold text-center mt-2"
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={leavesBg} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-[var(--color-cream)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Transform Your <span className="text-primary">Health</span>, Transform Your{" "}
                <span className="text-primary">Life.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
                Personalized nutrition guidance, healthy lifestyle coaching, and a supportive
                community to help you achieve lasting results.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="h-5 w-5" /> Book Free Wellness Evaluation
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white border border-border hover:border-primary text-foreground rounded-full px-6 py-3.5 font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-primary" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-9 grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { icon: Users, num: "500+", label: "Happy Members" },
                  { icon: HeartPulse, num: "1000+", label: "Wellness Sessions" },
                  { icon: ShieldCheck, num: "6+", label: "Years of Experience" },
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
                  alt="Happy healthy family"
                  width={1200}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust cards floating */}
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 -mt-14">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustCards.map((t) => (
              <div key={t.label} className="flex flex-col items-center text-center gap-2">
                <t.icon className="h-8 w-8 text-primary" />
                <span className="text-xs md:text-sm font-semibold text-foreground/80">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + AREAS */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="text-primary font-semibold text-sm">About PC's Wellness Club</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
              Your Partner in <br />
              Lifelong Wellness
            </h2>
            <div className="mt-3 h-1 w-16 bg-primary/40 rounded-full" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At PC's Wellness Club, we believe that true wellness comes from balanced nutrition,
              regular activity, positive habits, and a strong mindset. Our mission is to educate,
              motivate, and support you at every step of your journey.
            </p>
            <p className="mt-6 script text-3xl text-primary">
              Together Towards Better Health <span className="text-heart">♥</span>
            </p>
          </div>
          <div>
            <div className="text-primary font-semibold text-sm">Areas We Support</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">
              Your Health Goals, Our Guidance
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {areas.map((a) => (
                <div
                  key={a.title}
                  className={`${a.tint} rounded-2xl p-4 text-center border border-border/50`}
                >
                  <div className="h-12 w-12 mx-auto rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <a.icon className={`h-6 w-6 ${a.iconColor ?? "text-primary"}`} />
                  </div>
                  <div className="mt-3 text-xs md:text-sm font-semibold leading-snug">
                    {a.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-3 items-start bg-secondary/60 border border-primary/20 rounded-xl p-4">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our programs focus on nutrition, healthy habits, and lifestyle coaching. Individual
                results vary and our services are not intended to diagnose, treat, cure, or prevent
                any disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BMI CALCULATOR */}
      <section id="bmi" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">BMI Risk Meter</h2>
          <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
            Check your Body Mass Index and understand possible health risk levels with a
            speedometer-style visual.
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-secondary/40 border border-border rounded-2xl p-5 md:p-6">
              <div className="text-sm font-semibold">Enter Your Details</div>
              <div className="mt-4 inline-flex rounded-full border border-border p-1 bg-white">
                <button
                  type="button"
                  onClick={() => setBmiUnit("metric")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${bmiUnit === "metric" ? "bg-primary text-white" : "text-foreground/80 hover:text-foreground"}`}
                >
                  Metric
                </button>
                <button
                  type="button"
                  onClick={() => setBmiUnit("imperial")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${bmiUnit === "imperial" ? "bg-primary text-white" : "text-foreground/80 hover:text-foreground"}`}
                >
                  Imperial
                </button>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <label className="text-sm">
                  <span className="font-medium">Weight ({bmiUnit === "metric" ? "kg" : "lb"})</span>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder={bmiUnit === "metric" ? "e.g. 70" : "e.g. 154"}
                  />
                </label>

                {bmiUnit === "metric" ? (
                  <label className="text-sm">
                    <span className="font-medium">Height (cm)</span>
                    <input
                      type="number"
                      min="1"
                      step="0.1"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="e.g. 170"
                    />
                  </label>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <label className="text-sm">
                      <span className="font-medium">Height (ft)</span>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="5"
                      />
                    </label>
                    <label className="text-sm">
                      <span className="font-medium">Height (in)</span>
                      <input
                        type="number"
                        min="0"
                        max="11"
                        step="1"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="7"
                      />
                    </label>
                  </div>
                )}
              </div>

              {bmiError && (
                <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {bmiError}
                </p>
              )}

              <button
                type="button"
                onClick={handleBmiCalculate}
                className="mt-5 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                <Scale className="h-4 w-4" /> Calculate BMI
              </button>
            </div>

            <div className="bg-(--color-cream) border border-border rounded-2xl p-5 md:p-6">
              <div className="text-sm font-semibold">Your Speedometer Result</div>
              <div className="relative mt-4 mx-auto h-40 w-full max-w-[22rem] overflow-hidden">
                <svg
                  viewBox="0 0 200 120"
                  className="absolute inset-x-0 top-0 h-44 w-full overflow-visible"
                  aria-hidden="true"
                >
                  <defs>
                    <clipPath id="bmiGaugeClip">
                      <path d="M 20 100 A 80 80 0 0 1 180 100 L 180 120 L 20 120 Z" />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#bmiGaugeClip)">
                    {bmiGaugeSegments.map((segment) => {
                      const startAngle = 180 + ((segment.min - bmiMin) / (bmiMax - bmiMin)) * 180;
                      const endAngle = 180 + ((segment.max - bmiMin) / (bmiMax - bmiMin)) * 180;
                      return (
                        <path
                          key={`${segment.min}-${segment.max}`}
                          d={describeGaugeArc(startAngle, endAngle)}
                          fill="none"
                          stroke={segment.color}
                          strokeWidth="18"
                          strokeLinecap="butt"
                        />
                      );
                    })}
                  </g>

                  <circle cx="100" cy="100" r="48" fill="var(--color-cream)" />
                </svg>

                <div
                  className="absolute bottom-0 left-1/2 h-28 w-1 origin-bottom rounded-full bg-foreground transition-transform duration-500"
                  style={{ transform: `translateX(-50%) rotate(${gaugeAngle}deg)` }}
                />
                <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-foreground" />
              </div>

              <div className="mt-2 text-center">
                <div className="text-3xl font-extrabold">
                  {bmiValue ? bmiValue.toFixed(1) : "--"}
                </div>
                <div className="text-xs text-muted-foreground">BMI</div>
              </div>

              <div
                className={`mt-3 rounded-xl border border-border px-4 py-3 ${bmiBand ? bmiBand.bg : "bg-white"}`}
              >
                <div className="text-xs text-muted-foreground">Category</div>
                <div className={`text-lg font-bold ${bmiBand ? bmiBand.color : "text-foreground"}`}>
                  {bmiBand ? bmiBand.label : "Calculate to view your category"}
                </div>
                <p className="mt-1 text-sm text-foreground/80">
                  {bmiBand
                    ? bmiBand.risk
                    : "This meter helps you quickly understand possible lifestyle-related risk levels."}
                </p>
              </div>

              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                BMI is a screening indicator for adults, not a diagnosis. These examples are for
                general guidance only. Athletes, pregnant women, and individuals with specific
                medical conditions may need more detailed clinical assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Our Wellness Programs</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary/50 rounded-full" />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {programs.map((p) => (
              <div key={p.title} className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-sm">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-primary flex items-center justify-center ring-4 ring-white">
                    <Sprout className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center text-sm font-semibold leading-tight">
                  {p.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">
            Our Five Pillars of Health
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary/50 rounded-full" />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`${p.tint} rounded-2xl p-6 text-center border border-border/50 hover:shadow-md transition-shadow`}
              >
                <p.icon className={`h-10 w-10 mx-auto ${p.iconColor}`} strokeWidth={1.8} />
                <div className="mt-3 font-bold">{p.title}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / STEPS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Your Wellness Journey</h2>
          <p className="text-center text-muted-foreground mt-2">Simple Steps to a Healthier You</p>
          <div className="mt-12 relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-primary/40" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <div className="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <s.icon className="h-7 w-7 text-white" />
                  <span className="absolute -top-1 -right-1 h-6 w-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-4 font-bold">{s.title}</div>
                <p className="mt-1 text-xs text-muted-foreground max-w-[180px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Why People Choose Us</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary/50 rounded-full" />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {whyUs.map((w) => (
              <div
                key={w}
                className="bg-white rounded-xl border border-border p-5 flex items-center gap-3 hover:border-primary transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-primary font-semibold">Success Stories</h2>
          <p className="text-center text-2xl md:text-3xl font-extrabold mt-1">
            Real People, Real Results
          </p>
          <div className="mt-10 relative">
            <div className="grid md:grid-cols-3 gap-5">
              {stories.map((s, i) => (
                <div
                  key={i}
                  className={`bg-secondary/40 rounded-2xl p-5 border border-border ${i === storyIdx ? "ring-2 ring-primary/40" : ""}`}
                >
                  <div className="flex gap-4">
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      className="h-24 w-24 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-5xl leading-none text-primary/40 font-serif">"</div>
                      <p className="text-sm text-foreground/80 -mt-4">{s.quote}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-semibold text-sm">— {s.name}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStoryIdx((storyIdx - 1 + stories.length) % stories.length)}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-white items-center justify-center shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setStoryIdx((storyIdx + 1) % stories.length)}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-white items-center justify-center shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Individual experiences and results vary.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Moments That Inspire</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary/50 rounded-full" />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {gallery.map((g, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src={g}
                  alt="Wellness community"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-primary/50 rounded-full" />
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border rounded-xl bg-secondary/30">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-sm md:text-base">{f.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-5 w-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="book" className="relative">
        <img src={ctaBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-5xl mx-auto px-4 lg:px-8 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Your Healthiest Future Starts Today!
          </h2>
          <p className="mt-3 text-white/90">
            Take the first step. Book your free wellness evaluation now.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/95 rounded-full px-6 py-3.5 font-semibold shadow-lg"
            >
              <Calendar className="h-5 w-5" /> Book Free Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-3.5 font-semibold"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-white pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-11 w-11" />
              <div className="leading-tight">
                <div className="text-[11px] tracking-widest text-muted-foreground">PC's</div>
                <div className="text-lg font-extrabold text-primary-dark">WELLNESS CLUB</div>
                <div className="text-[10px] text-muted-foreground">
                  Together Towards Better Health
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, MessageCircle].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                9373434917
                <br />
                7048378091
                <br />
                9834379826
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>pcwellnessclub@gmail.com</span>
            </div>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>
                Your Address Here,
                <br />
                City, State – 000000
              </span>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                Mon – Sat: 6:00 AM – 9:00 PM
                <br />
                Sunday: 7:00 AM – 1:00 PM
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "BMI Calculator", href: "#bmi" },
                { label: "Our Programs", href: "#programs" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold mb-4">Locate Us</div>
            <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,var(--color-border)_49%,var(--color-border)_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,var(--color-border)_49%,var(--color-border)_51%,transparent_52%)] bg-[length:24px_24px] opacity-40" />
              <MapPin className="h-8 w-8 text-heart relative" fill="currentColor" />
            </div>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-semibold"
            >
              <MapIcon className="h-4 w-4" /> Find us on Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-muted-foreground">
            <p className="max-w-4xl">
              Disclaimer: PC's Wellness Club provides wellness education, nutrition guidance, and
              lifestyle coaching to support overall well-being. Our programs are not intended to
              diagnose, treat, cure, or prevent any disease. Individual results vary. Consult your
              physician for medical advice.
            </p>
            <p>© 2026 PC's Wellness Club. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-6 right-6 h-11 w-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
