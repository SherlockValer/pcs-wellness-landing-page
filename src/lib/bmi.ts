// Pure BMI logic and unit conversions, extracted from the landing page so it
// can be unit-tested independently of the React component.

export type BmiUnit = "metric" | "imperial";

// Gauge display range — BMI values outside this range clamp to the ends.
export const bmiGaugeMin = 10;
export const bmiGaugeMax = 50;

export const bmiBands = [
  {
    min: 0,
    max: 18.5,
    label: "bmi.bands.underweight.label",
    risk: "bmi.bands.underweight.risk",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    min: 18.5,
    max: 25,
    label: "bmi.bands.healthy.label",
    risk: "bmi.bands.healthy.risk",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    min: 25,
    max: 30,
    label: "bmi.bands.overweight.label",
    risk: "bmi.bands.overweight.risk",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    min: 30,
    max: 35,
    label: "bmi.bands.obesity1.label",
    risk: "bmi.bands.obesity1.risk",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    min: 35,
    max: 40,
    label: "bmi.bands.obesity2.label",
    risk: "bmi.bands.obesity2.risk",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    min: 40,
    max: Number.POSITIVE_INFINITY,
    label: "bmi.bands.obesity3.label",
    risk: "bmi.bands.obesity3.risk",
    color: "text-red-700",
    bg: "bg-red-50",
  },
] as const;

// The gauge arc segments mirror bmiBands but only cover the visual range
// [bmiGaugeMin, bmiGaugeMax]. The final dark-red segment represents
// Obesity Class III so the needle can move instead of pinning at the edge.
export const bmiGaugeSegments = [
  { min: 10, max: 18.5, color: "#38bdf8" },
  { min: 18.5, max: 25, color: "#22c55e" },
  { min: 25, max: 30, color: "#f59e0b" },
  { min: 30, max: 35, color: "#f97316" },
  { min: 35, max: 40, color: "#ef4444" },
  { min: 40, max: 50, color: "#dc2626" },
] as const;

export function getBmiBand(bmi: number) {
  return (
    bmiBands.find((band) => bmi >= band.min && bmi < band.max) ?? bmiBands[bmiBands.length - 1]
  );
}

export function getGaugeAngle(bmi: number) {
  const clamped = Math.min(bmiGaugeMax, Math.max(bmiGaugeMin, bmi));
  const ratio = (clamped - bmiGaugeMin) / (bmiGaugeMax - bmiGaugeMin);
  return -90 + ratio * 180;
}

export function describeGaugeArc(startAngle: number, endAngle: number, radius = 82) {
  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;
  const startX = 100 + radius * Math.cos(startRadians);
  const startY = 100 + radius * Math.sin(startRadians);
  const endX = 100 + radius * Math.cos(endRadians);
  const endY = 100 + radius * Math.sin(endRadians);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}

export type BmiInput = {
  unit: BmiUnit;
  weight: string;
  heightCm: string;
  heightFt: string;
  heightIn: string;
};

export type BmiResult = { ok: true; bmi: number } | { ok: false; error: string };

/**
 * Validates the raw input fields and computes the BMI.
 *
 * - Metric:   bmi = weight(kg) / height(m)^2
 * - Imperial: bmi = 703 * weight(lb) / height(in)^2
 *
 * Returns `{ ok: false, error: "" }` (a "silent" result) when the inputs are
 * simply incomplete, so the UI can clear the result without showing an error.
 */
export function calculateBmi({ unit, weight, heightCm, heightFt, heightIn }: BmiInput): BmiResult {
  const parsedWeight = Number.parseFloat(weight);

  const hasMetricInputs = unit === "metric" && weight.trim() && heightCm.trim();
  const hasImperialInputs =
    unit === "imperial" && weight.trim() && heightFt.trim() && heightIn.trim();

  if (!hasMetricInputs && !hasImperialInputs) {
    return { ok: false, error: "" };
  }

  if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) {
    return { ok: false, error: "bmi.errors.weight" };
  }

  let calculatedBmi = 0;

  if (unit === "metric") {
    const parsedHeightCm = Number.parseFloat(heightCm);
    if (!Number.isFinite(parsedHeightCm) || parsedHeightCm <= 0) {
      return { ok: false, error: "bmi.errors.heightCm" };
    }
    if (parsedHeightCm < 80 || parsedHeightCm > 260) {
      return {
        ok: false,
        error: "bmi.errors.heightRange",
      };
    }
    const heightInMeters = parsedHeightCm / 100;
    calculatedBmi = parsedWeight / (heightInMeters * heightInMeters);
  } else {
    const parsedFeet = Number.parseFloat(heightFt || "0");
    const parsedInches = Number.parseFloat(heightIn || "0");

    if (!Number.isFinite(parsedFeet) || !Number.isFinite(parsedInches)) {
      return { ok: false, error: "bmi.errors.heightFtIn" };
    }
    if (parsedFeet < 0 || parsedInches < 0 || parsedInches >= 12) {
      return {
        ok: false,
        error: "bmi.errors.inchesRange",
      };
    }

    const totalInches = parsedFeet * 12 + parsedInches;
    if (totalInches <= 0) {
      return { ok: false, error: "bmi.errors.totalHeight" };
    }

    calculatedBmi = (703 * parsedWeight) / (totalInches * totalInches);
  }

  if (!Number.isFinite(calculatedBmi) || calculatedBmi <= 0) {
    return {
      ok: false,
      error: "bmi.errors.generic",
    };
  }

  return { ok: true, bmi: calculatedBmi };
}

const KG_PER_LB = 0.45359237;
const CM_PER_INCH = 2.54;

function round(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/**
 * Converts a weight field to the opposite unit system.
 * `from` is the unit the value is currently in:
 *   metric → kg → lb, imperial → lb → kg.
 * Unparseable/empty values are returned unchanged.
 */
export function convertWeight(value: string, from: BmiUnit): string {
  if (value.trim() === "") return value;
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return value;
  const converted = from === "metric" ? parsed / KG_PER_LB : parsed * KG_PER_LB;
  return String(round(converted, 1));
}

/** Converts feet + inches to centimeters. Empty input yields "" (not "0"). */
export function convertHeightFtInToCm(heightFt: string, heightIn: string): string {
  if (heightFt.trim() === "" && heightIn.trim() === "") return "";
  const parsedFeet = Number.parseFloat(heightFt || "0");
  const parsedInches = Number.parseFloat(heightIn || "0");
  if (!Number.isFinite(parsedFeet) || !Number.isFinite(parsedInches)) return "";
  const cm = (parsedFeet * 12 + parsedInches) * CM_PER_INCH;
  return String(round(cm, 1));
}

/** Converts centimeters to whole feet + fractional inches. Invalid input yields both empty. */
export function convertHeightCmToFtIn(heightCm: string): { ft: string; inch: string } {
  const parsedCm = Number.parseFloat(heightCm);
  if (!Number.isFinite(parsedCm) || parsedCm <= 0) return { ft: "", inch: "" };
  const totalInches = parsedCm / CM_PER_INCH;
  let ft = Math.floor(totalInches / 12);
  let inch = round(totalInches - ft * 12, 1);
  if (inch >= 12) {
    // Guard against floating-point carry-over (e.g. 12.0 inches -> 1 ft).
    inch -= 12;
    ft += 1;
  }
  return { ft: String(ft), inch: String(inch) };
}
