export interface Boxer {
  year: number;
  gender: Gender;
  name: string;
  club: string;
  weight: number;
  fightCount: number;
  hasMatch: boolean;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export const GENDERS = [Gender.Female, Gender.Male];

export enum AgeGroup {
  Elite = 'Elite',
  Youth = 'Youth',
  Junior = 'Junior',
  Kids = 'Kids',
  Babies = 'Babies',
}

export const AGE_GROUPS = [
  AgeGroup.Elite,
  AgeGroup.Youth,
  AgeGroup.Junior,
  AgeGroup.Kids,
  AgeGroup.Babies,
];

export enum Experience {
  C0 = 'C0',
  C = 'C',
  B = 'B',
  A = 'A',
}

export const EXPERIENCE_LEVELS = [Experience.C0, Experience.C, Experience.B, Experience.A];

// Type for weight classes.
export type WeightClassesType = {
  [key in Gender]: {
    [key in AgeGroup]: number[];
  };
};

export const WEIGHT_CLASSES: WeightClassesType = {
  [Gender.Male]: {
    [AgeGroup.Elite]: [
      34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 67, 71, 75, 80, 86, 92,
    ],
    [AgeGroup.Youth]: [
      34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 67, 71, 75, 80, 86, 92,
    ],
    [AgeGroup.Junior]: [
      34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 67, 71, 75, 80, 86, 92,
    ],
    [AgeGroup.Kids]: [
      34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 67, 71, 75, 80, 86, 92,
    ],
    [AgeGroup.Babies]: [
      34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 67, 71, 75, 80, 86, 92,
    ],
  },
  [Gender.Female]: {
    [AgeGroup.Elite]: [34, 36, 38, 40, 42, 44, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Youth]: [34, 36, 38, 40, 42, 44, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Junior]: [34, 36, 38, 40, 42, 44, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Kids]: [34, 36, 38, 40, 42, 44, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Babies]: [34, 36, 38, 40, 42, 44, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
  },
};

// Type for boxing matches.
export type BoxingMatch = [Boxer, Boxer];

export type Matches = {
  [key in Gender]: {
    [key in AgeGroup]: BoxingMatch[];
  };
};
