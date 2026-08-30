import { describe, expect, it } from "vitest";
import {
  calculateBmi,
  convertHeightCmToFtIn,
  convertHeightFtInToCm,
  convertWeight,
  getBmiBand,
  getGaugeAngle,
} from "./bmi";

describe("calculateBmi", () => {
  it("computes metric BMI (kg/m²)", () => {
    const result = calculateBmi({
      unit: "metric",
      weight: "70",
      heightCm: "170",
      heightFt: "",
      heightIn: "",
    });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.bmi).toBeCloseTo(24.22, 1);
  });

  it("computes imperial BMI (703·lb/in²)", () => {
    const result = calculateBmi({
      unit: "imperial",
      weight: "154",
      heightFt: "5",
      heightIn: "7",
      heightCm: "",
    });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.bmi).toBeCloseTo(24.12, 1);
  });

  it("metric and imperial agree on the same physical body", () => {
    const metric = calculateBmi({
      unit: "metric",
      weight: "70",
      heightCm: "170",
      heightFt: "",
      heightIn: "",
    });
    const imperial = calculateBmi({
      unit: "imperial",
      weight: convertWeight("70", "metric"),
      heightFt: convertHeightCmToFtIn("170").ft,
      heightIn: convertHeightCmToFtIn("170").inch,
      heightCm: "",
    });
    expect(metric.ok && imperial.ok).toBe(true);
    if (metric.ok && imperial.ok) {
      expect(imperial.bmi).toBeCloseTo(metric.bmi, 1);
    }
  });

  it("rejects non-positive weight", () => {
    const result = calculateBmi({
      unit: "metric",
      weight: "0",
      heightCm: "170",
      heightFt: "",
      heightIn: "",
    });
    expect(result).toEqual({ ok: false, error: "bmi.errors.weight" });
  });

  it("rejects out-of-range metric height", () => {
    const result = calculateBmi({
      unit: "metric",
      weight: "70",
      heightCm: "300",
      heightFt: "",
      heightIn: "",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects inches >= 12", () => {
    const result = calculateBmi({
      unit: "imperial",
      weight: "154",
      heightFt: "5",
      heightIn: "12",
      heightCm: "",
    });
    expect(result.ok).toBe(false);
  });

  it("rejects zero total height", () => {
    const result = calculateBmi({
      unit: "imperial",
      weight: "154",
      heightFt: "0",
      heightIn: "0",
      heightCm: "",
    });
    expect(result.ok).toBe(false);
  });

  it("returns a silent (empty error) result when inputs are incomplete", () => {
    const result = calculateBmi({
      unit: "metric",
      weight: "",
      heightCm: "",
      heightFt: "",
      heightIn: "",
    });
    expect(result).toEqual({ ok: false, error: "" });
  });
});

describe("getBmiBand", () => {
  it("classifies band boundaries correctly", () => {
    expect(getBmiBand(18.49).label).toBe("bmi.bands.underweight.label");
    expect(getBmiBand(18.5).label).toBe("bmi.bands.healthy.label");
    expect(getBmiBand(25).label).toBe("bmi.bands.overweight.label");
    expect(getBmiBand(30).label).toBe("bmi.bands.obesity1.label");
    expect(getBmiBand(35).label).toBe("bmi.bands.obesity2.label");
    expect(getBmiBand(40).label).toBe("bmi.bands.obesity3.label");
    expect(getBmiBand(60).label).toBe("bmi.bands.obesity3.label");
  });
});

describe("getGaugeAngle", () => {
  it("maps the gauge min/max to the needle ends", () => {
    expect(getGaugeAngle(10)).toBe(-90);
    expect(getGaugeAngle(50)).toBe(90);
    expect(getGaugeAngle(30)).toBeCloseTo(0, 5);
  });

  it("clamps out-of-range values", () => {
    expect(getGaugeAngle(5)).toBe(-90);
    expect(getGaugeAngle(500)).toBe(90);
  });
});

describe("unit conversions", () => {
  it("converts kg to lb and back", () => {
    expect(Number(convertWeight("70", "metric"))).toBeCloseTo(154.3, 1);
    expect(Number(convertWeight("154.3", "imperial"))).toBeCloseTo(70, 0);
  });

  it("leaves empty/invalid weight unchanged", () => {
    expect(convertWeight("", "metric")).toBe("");
    expect(convertWeight("abc", "imperial")).toBe("abc");
  });

  it("converts cm to ft/in and back", () => {
    const { ft, inch } = convertHeightCmToFtIn("170");
    expect(ft).toBe("5");
    expect(Number(inch)).toBeCloseTo(6.9, 1);
    expect(Number(convertHeightFtInToCm(ft, inch))).toBeCloseTo(170, 0);
  });

  it("handles invalid cm input", () => {
    expect(convertHeightCmToFtIn("")).toEqual({ ft: "", inch: "" });
    expect(convertHeightCmToFtIn("0")).toEqual({ ft: "", inch: "" });
    expect(convertHeightFtInToCm("", "")).toBe("");
  });
});
