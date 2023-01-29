/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
  const W = input.weight;
  const H = input.height;
  const bmi = Math.round(W / (H * H));
  if (bmi < 18.5) {
    return { status: 1, bmi: bmi };
  } else if (bmi < 60) {
    return { status: 2, bmi: bmi };
  } else {
    return { status: 3, bmi: bmi };
  }
}
