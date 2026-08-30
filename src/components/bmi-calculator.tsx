import { useCallback, useEffect, useState } from "react";
import { Scale } from "lucide-react";
import {
  bmiGaugeMax,
  bmiGaugeMin,
  bmiGaugeSegments,
  calculateBmi,
  convertHeightCmToFtIn,
  convertHeightFtInToCm,
  convertWeight,
  describeGaugeArc,
  getBmiBand,
  getGaugeAngle,
  type BmiUnit,
} from "@/lib/bmi";
import { useLanguage } from "@/lib/i18n";

export function BmiCalculator() {
  const { t } = useLanguage();
  const [bmiUnit, setBmiUnit] = useState<BmiUnit>("metric");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmiValue, setBmiValue] = useState<number | null>(null);
  const [bmiError, setBmiError] = useState<string | null>(null);

  const runBmiCalculation = useCallback(() => {
    const result = calculateBmi({ unit: bmiUnit, weight, heightCm, heightFt, heightIn });
    if (result.ok) {
      setBmiError(null);
      setBmiValue(result.bmi);
    } else {
      setBmiValue(null);
      // A silent result ("") means the inputs are simply incomplete — clear
      // without surfacing an error message.
      setBmiError(result.error === "" ? null : result.error);
    }
  }, [bmiUnit, weight, heightCm, heightFt, heightIn]);

  useEffect(() => {
    runBmiCalculation();
  }, [runBmiCalculation]);

  const handleBmiCalculate = () => {
    runBmiCalculation();
  };

  // Convert existing field values when toggling units instead of silently
  // reinterpreting them (e.g. 70 kg should become ~154 lb, not 70 lb).
  const handleUnitChange = (unit: BmiUnit) => {
    if (unit === bmiUnit) return;
    if (unit === "metric") {
      setWeight(convertWeight(weight, "imperial"));
      setHeightCm(convertHeightFtInToCm(heightFt, heightIn));
      setHeightFt("");
      setHeightIn("");
    } else {
      setWeight(convertWeight(weight, "metric"));
      const { ft, inch } = convertHeightCmToFtIn(heightCm);
      setHeightFt(ft);
      setHeightIn(inch);
      setHeightCm("");
    }
    setBmiUnit(unit);
  };

  const bmiBand = bmiValue ? getBmiBand(bmiValue) : null;
  const gaugeAngle = getGaugeAngle(bmiValue ?? 22);

  return (
    <section id="bmi" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">{t("bmi.heading")}</h2>
        <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t("bmi.subtext")}
        </p>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="bg-secondary/40 border border-border rounded-2xl p-5 md:p-6">
            <div className="text-sm font-semibold">{t("bmi.enterDetails")}</div>
            <div className="mt-4 inline-flex rounded-full border border-border p-1 bg-white">
              <button
                type="button"
                onClick={() => handleUnitChange("metric")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  bmiUnit === "metric"
                    ? "bg-primary text-white"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {t("bmi.metric")}
              </button>
              <button
                type="button"
                onClick={() => handleUnitChange("imperial")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  bmiUnit === "imperial"
                    ? "bg-primary text-white"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {t("bmi.imperial")}
              </button>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <label className="text-sm">
                <span className="font-medium">
                  {t("bmi.weight")} ({bmiUnit === "metric" ? "kg" : "lb"})
                </span>
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder={
                    bmiUnit === "metric"
                      ? t("bmi.weightPlaceholderMetric")
                      : t("bmi.weightPlaceholderImperial")
                  }
                />
              </label>

              {bmiUnit === "metric" ? (
                <label className="text-sm">
                  <span className="font-medium">{t("bmi.heightCm")}</span>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder={t("bmi.heightCmPlaceholder")}
                  />
                </label>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-sm">
                    <span className="font-medium">{t("bmi.heightFt")}</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder={t("bmi.heightFtPlaceholder")}
                    />
                  </label>
                  <label className="text-sm">
                    <span className="font-medium">{t("bmi.heightIn")}</span>
                    <input
                      type="number"
                      min="0"
                      max="11"
                      step="1"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder={t("bmi.heightInPlaceholder")}
                    />
                  </label>
                </div>
              )}
            </div>

            {bmiError && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {t(bmiError)}
              </p>
            )}

            <button
              type="button"
              onClick={handleBmiCalculate}
              className="mt-5 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              <Scale className="h-4 w-4" /> {t("bmi.calculate")}
            </button>
          </div>

          <div className="bg-(--color-cream) border border-border rounded-2xl p-5 md:p-6">
            <div className="text-sm font-semibold">{t("bmi.resultTitle")}</div>
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
                    const startAngle =
                      180 + ((segment.min - bmiGaugeMin) / (bmiGaugeMax - bmiGaugeMin)) * 180;
                    const endAngle =
                      180 + ((segment.max - bmiGaugeMin) / (bmiGaugeMax - bmiGaugeMin)) * 180;
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
              <div className="text-3xl font-extrabold">{bmiValue ? bmiValue.toFixed(1) : "--"}</div>
              <div className="text-xs text-muted-foreground">{t("bmi.bmiLabel")}</div>
            </div>

            <div
              className={`mt-3 rounded-xl border border-border px-4 py-3 ${
                bmiBand ? bmiBand.bg : "bg-white"
              }`}
            >
              <div className="text-xs text-muted-foreground">{t("bmi.category")}</div>
              <div className={`text-lg font-bold ${bmiBand ? bmiBand.color : "text-foreground"}`}>
                {bmiBand ? t(bmiBand.label) : t("bmi.calcCategory")}
              </div>
              <p className="mt-1 text-sm text-foreground/80">
                {bmiBand ? t(bmiBand.risk) : t("bmi.calcRisk")}
              </p>
            </div>

            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              {t("bmi.disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
