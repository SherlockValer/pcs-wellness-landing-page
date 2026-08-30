import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { BOOKING_WHATSAPP_NUMBER } from "@/lib/site-data";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/i18n";

// Zod messages are translation keys; the component translates them on render.
const bookingSchema = z.object({
  name: z.string().min(2, "booking.form.errors.name"),
  phone: z.string().regex(/^(\+?91[\s-]?)?[6-9]\d{9}$/, "booking.form.errors.phone"),
  goal: z.string().min(1, "booking.form.errors.goal"),
  slot: z.string().min(1, "booking.form.errors.slot"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

// Zero-cost booking form: validates locally, then opens WhatsApp with the
// details pre-filled so the visitor only has to press Send. No backend needed.
export function BookingForm() {
  const { lang, t } = useLanguage();
  const form = translations[lang].booking.form;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", goal: "", slot: "", message: "" },
  });

  const onSubmit = (values: BookingFormValues) => {
    const lines = [
      "Hello PC's Wellness Club! 👋",
      "",
      "I'd like to book a free consultation.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Goal: ${values.goal}`,
      `Preferred slot: ${values.slot}`,
    ];
    if (values.message?.trim()) {
      lines.push("", `Message: ${values.message.trim()}`);
    }
    const url = `https://wa.me/${BOOKING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const labelClass = "text-sm font-medium text-foreground/80";
  const inputClass =
    "mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 text-left">
      <div>
        <label className={labelClass}>{t("booking.form.name")}</label>
        <input {...register("name")} placeholder={t("booking.form.name")} className={inputClass} />
        {errors.name?.message && (
          <p className="mt-1 text-xs text-red-600">{t(errors.name.message)}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>{t("booking.form.phone")}</label>
        <input
          {...register("phone")}
          inputMode="tel"
          placeholder="e.g. 7048378091"
          className={inputClass}
        />
        {errors.phone?.message && (
          <p className="mt-1 text-xs text-red-600">{t(errors.phone.message)}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t("booking.form.goal")}</label>
          <select {...register("goal")} className={inputClass}>
            <option value="">{t("booking.form.selectPlaceholder")}</option>
            {form.goals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
          {errors.goal?.message && (
            <p className="mt-1 text-xs text-red-600">{t(errors.goal.message)}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>{t("booking.form.slot")}</label>
          <select {...register("slot")} className={inputClass}>
            <option value="">{t("booking.form.selectPlaceholder")}</option>
            {form.slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.slot?.message && (
            <p className="mt-1 text-xs text-red-600">{t(errors.slot.message)}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t("booking.form.message")}</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder={t("booking.form.message")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
      >
        <MessageCircle className="h-5 w-5" /> {t("booking.form.submit")}
      </button>
      <p className="text-center text-xs text-muted-foreground">{t("booking.form.helper")}</p>
    </form>
  );
}
