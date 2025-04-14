export interface Boxer {
  year: number;
  name: string;
  club: string;
  weight: number;
  fightCount: number;
  hasMatch: boolean;
}

export enum Gender {
  Male,
  Female,
}

export enum AgeGroup {
  Elite,
  Youth,
  Junior,
  Kids,
  Babies,
}

export enum Experience {
  C0,
  C,
  B,
  A,
}
