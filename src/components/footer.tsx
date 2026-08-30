import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapIcon,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo.png";
import {
  CLUB_ADDRESS,
  CLUB_MAPS_EMBED_URL,
  CLUB_MAPS_SHARE_URL,
  CLUB_PHONES,
} from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

const socialLinks = [Facebook, Instagram, Youtube, MessageCircle];

const quickLinks = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#bmi", labelKey: "nav.bmi" },
  { href: "#gallery", labelKey: "nav.gallery" },
  { href: "#testimonials", labelKey: "nav.testimonials" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-11 w-11" />
            <div className="leading-tight">
              <div className="text-base md:text-lg font-extrabold text-primary-dark whitespace-nowrap">
                PC's Wellness Club
              </div>
              <div className="text-[10px] text-muted-foreground">{t("footer.tagline")}</div>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((I, i) => (
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
              {CLUB_PHONES.map((phone) => (
                <span key={phone} className="block">
                  {phone}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <span>pcwellnessclub@gmail.com</span>
          </div>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <span className="leading-relaxed">{CLUB_ADDRESS}</span>
          </div>
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <div>
              {t("footer.days")}
              <br />
              {t("footer.morning")}
              <br />
              {t("footer.evening")}
            </div>
          </div>
        </div>

        <div>
          <div className="font-bold mb-4">{t("footer.quickLinks")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-primary">
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-bold mb-4">{t("footer.locate")}</div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary/30">
            <iframe
              src={CLUB_MAPS_EMBED_URL}
              title="PC's Wellness Club location on Google Maps"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={CLUB_MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-semibold"
          >
            <MapIcon className="h-4 w-4" /> {t("footer.findMap")}
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p className="max-w-4xl">{t("footer.disclaimer")}</p>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
