// Static site content and contact constants. Section components import from
// here so the landing route stays thin and the data is reusable.
import {
  Activity,
  Baby,
  Bone,
  CalendarDays,
  ClipboardList,
  Droplet,
  Facebook,
  Flower2,
  Heart,
  Instagram,
  Leaf,
  LifeBuoy,
  MessageCircle,
  Moon,
  Scale,
  Smile,
  User,
  UsersRound,
  Youtube,
  Zap,
  type LucideIcon,
} from "lucide-react";
import sGanesh from "@/assets/story-ganesh.jpg";
import sGanesh700 from "@/assets/story-ganesh-700.jpg";
import sKaushallya from "@/assets/story-kaushallya.jpg";
import sKaushallya700 from "@/assets/story-kaushallya-700.jpg";
import sNiraj from "@/assets/story-niraj.jpg";
import sNiraj700 from "@/assets/story-niraj-700.jpg";
import sPushpa from "@/assets/story-pushpa.jpg";
import sPushpa700 from "@/assets/story-pushpa-700.jpg";
import sRamrao from "@/assets/story-ramrao.jpg";
import sRamrao700 from "@/assets/story-ramrao-700.jpg";
import sUttamrao from "@/assets/story-uttamrao.jpg";
import sUttamrao700 from "@/assets/story-uttamrao-700.jpg";
import sSantosh from "@/assets/story-santosh.jpg";
import sSantosh700 from "@/assets/story-santosh-700.jpg";

// --- Contact constants ---
// Canonical deployed URL (no trailing slash) — used for social/OG sharing,
// JSON-LD structured data and the sitemap. Replace with your real domain.
export const SITE_URL = "https://pcswellbeingworld.in";

export const CLUB_ADDRESS =
  "Shop No 105, First Floor, Biz Square, Beed Bypass Rd, above Ratnaprabha Motors, near Bajaj Hospital, Disha Nagari, Chhatrapati Sambhajinagar, Maharashtra 431005";

// Google Maps embed for the club (exact pin).
export const CLUB_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7177432846406!2d75.31420237424419!3d19.851892381519097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb995ced7332c3%3A0x94fc241d36723288!2sPC's%20Wellness%20Club!5e0!3m2!1sen!2sin!4v1787646384706!5m2!1sen!2sin";

// Official Google Maps listing for the club (resolves to the exact pin).
export const CLUB_MAPS_SHARE_URL = "https://share.google/apc1CCrswdfAEQop2";

// WhatsApp number for booking enquiries (country code + number, digits only).
export const BOOKING_WHATSAPP_NUMBER = "917048378091";

// Phone numbers shown in the footer.
export const CLUB_PHONES = ["9373434917", "7048378091", "9834379826"];

// --- Social media links (footer icons) ---
// Fill in each real profile URL below. Remove any entry your club doesn't use
// and the icon disappears automatically. To change an icon, swap it for any
// lucide-react icon (e.g. import { Linkedin } from "lucide-react").
export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  // { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/pcs_wellbeing_world", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@pcswellbeingworld", icon: Youtube },
];

// --- Nav ---
export const nav = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#bmi", labelKey: "nav.bmi" },
  { href: "#testimonials", labelKey: "nav.testimonials" },
  { href: "#gallery", labelKey: "nav.gallery" },
  { href: "#contact", labelKey: "nav.contact" },
];

// --- Sections ---
export const areas = [
  { icon: Scale, labelKey: "areas.weight", tint: "bg-emerald-50" },
  {
    icon: Heart,
    labelKey: "areas.heart",
    tint: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  { icon: Zap, labelKey: "areas.energy", tint: "bg-emerald-50" },
  {
    icon: Baby,
    labelKey: "areas.child",
    tint: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Leaf,
    labelKey: "areas.digestive",
    tint: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: Bone,
    labelKey: "areas.bone",
    tint: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: Flower2,
    labelKey: "areas.stress",
    tint: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: UsersRound,
    labelKey: "areas.menWomen",
    tint: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

export const pillars = [
  {
    icon: Activity,
    titleKey: "pillars.exercise.title",
    descKey: "pillars.exercise.desc",
    tint: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Leaf,
    titleKey: "pillars.nutrition.title",
    descKey: "pillars.nutrition.desc",
    tint: "bg-lime-50",
    iconColor: "text-lime-600",
  },
  {
    icon: Droplet,
    titleKey: "pillars.hydration.title",
    descKey: "pillars.hydration.desc",
    tint: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    icon: Moon,
    titleKey: "pillars.sleep.title",
    descKey: "pillars.sleep.desc",
    tint: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Smile,
    titleKey: "pillars.mindset.title",
    descKey: "pillars.mindset.desc",
    tint: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

export const steps = [
  {
    icon: CalendarDays,
    titleKey: "journey.book.title",
    descKey: "journey.book.desc",
  },
  {
    icon: User,
    titleKey: "journey.eval.title",
    descKey: "journey.eval.desc",
  },
  {
    icon: ClipboardList,
    titleKey: "journey.plan.title",
    descKey: "journey.plan.desc",
  },
  {
    icon: LifeBuoy,
    titleKey: "journey.support.title",
    descKey: "journey.support.desc",
  },
];

export const whyUs = [
  "whyUs.items.0",
  "whyUs.items.1",
  "whyUs.items.2",
  "whyUs.items.3",
  "whyUs.items.4",
  "whyUs.items.5",
];

// NOTE: quotes/results are SAMPLE placeholders — replace with the real member
// testimonials when available.
export const stories = [
  {
    img: sPushpa,
    imgMobile: sPushpa700,
    quoteKey: "stories.pushpa.quote",
    resultKey: "stories.pushpa.result",
    name: "Pushpa Chopade",
  },
  {
    img: sNiraj,
    imgMobile: sNiraj700,
    quoteKey: "stories.niraj.quote",
    resultKey: "stories.niraj.result",
    name: "Niraj Patni",
  },
  {
    img: sKaushallya,
    imgMobile: sKaushallya700,
    quoteKey: "stories.kaushallya.quote",
    resultKey: "stories.kaushallya.result",
    name: "Kaushallya Rathod",
  },
  {
    img: sRamrao,
    imgMobile: sRamrao700,
    quoteKey: "stories.ramrao.quote",
    resultKey: "stories.ramrao.result",
    name: "Ramrao Pawar",
  },
  {
    img: sUttamrao,
    imgMobile: sUttamrao700,
    quoteKey: "stories.uttamrao.quote",
    resultKey: "stories.uttamrao.result",
    name: "Uttamrao Rathod",
  },
  {
    img: sGanesh,
    imgMobile: sGanesh700,
    quoteKey: "stories.ganesh.quote",
    resultKey: "stories.ganesh.result",
    name: "Ganesh Shinde",
  },
  {
    img: sSantosh,
    imgMobile: sSantosh700,
    quoteKey: "stories.santosh.quote",
    resultKey: "stories.santosh.result",
    name: "Santosh Chavan",
  },
];

// --- Video testimonials (YouTube, unlisted) ---
// Full unlisted playlist:
// https://www.youtube.com/playlist?list=PLXm6bqKm0qOk
// This is the SSR/no-JS fallback and the source used before the live server
// fetch (src/lib/live-video-stories.ts) refreshes the cards. To update it
// manually, run `npm run sync:videos` (names come from the video titles).
export const videoStories = [
  { videoId: "8yMjGQCttpU", name: "Niraj Patni" },
  { videoId: "a7xbA77hKJc", name: "Ashroba Khating" },
  { videoId: "bNQ0-HJojM4", name: "Mahesh Shinde" },
  { videoId: "FnjO16Z6jEU", name: "Manchak Ghadge" },
];

// High-res 16:9 poster thumbnails are available for all the unlisted videos.
export const videoPosterUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

// Privacy-enhanced embed (no cookies / tracking) used in the lightbox player.
export const videoEmbedUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}`;

// --- Gallery (community photos) ---
// Every image inside src/assets/gallery/ is included automatically. To manage
// the gallery, just drop images into that folder or delete them — no code
// changes needed. Files are ordered by their leading number, so `.jpg` and
// `.jpeg` mix freely (e.g. 1.jpg, 2.jpg, ..., 10.jpeg, 11.jpeg). Files without
// a numeric prefix sort last.
const galleryImports = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
) as Record<string, string>;

const leadingNumber = (key: string) => {
  const base = key.split("/").pop() ?? key;
  const match = base.match(/^(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

export const gallery = Object.keys(galleryImports)
  .sort((a, b) => leadingNumber(a) - leadingNumber(b) || a.localeCompare(b))
  .map((key) => galleryImports[key]);

export const faqs = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
];
