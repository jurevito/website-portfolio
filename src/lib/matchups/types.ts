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
    [AgeGroup.Elite]: [50, 55, 60, 65, 70, 75, 80, 85, 90],
    [AgeGroup.Youth]: [50, 55, 60, 65, 70, 75, 80, 85, 90],
    [AgeGroup.Junior]: [46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Kids]: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Babies]: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
  },
  [Gender.Female]: {
    [AgeGroup.Elite]: [48, 51, 54, 57, 60, 65, 70, 75, 80],
    [AgeGroup.Youth]: [48, 51, 54, 57, 60, 65, 70, 75, 80],
    [AgeGroup.Junior]: [46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Kids]: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
    [AgeGroup.Babies]: [34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 60, 63, 66, 70, 75, 80],
  },
};

// Type for boxing matches.
export type BoxingMatch = [Boxer, Boxer];

export type Matches = {
  [key in Gender]: {
    [key in AgeGroup]: BoxingMatch[];
  };
};
