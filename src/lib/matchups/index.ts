import { AgeGroup, Experience, Gender } from './types';
import type { Boxer } from './types';

export function getAgeGroup(year: number): AgeGroup {
  const age = new Date().getFullYear() - year;

  if (age >= 19) return AgeGroup.Elite;
  if (age >= 17) return AgeGroup.Youth;
  if (age >= 15) return AgeGroup.Junior;
  if (age >= 13) return AgeGroup.Kids;

  return AgeGroup.Babies;
}

export function isInWeightClass(
  weight: number,
  lower: number | null,
  upper: number | null
): boolean {
  const bellowUpper = upper == null || weight <= upper;
  const aboveLower = lower == null || weight > lower;

  return bellowUpper && aboveLower;
}

export function getExperienceLevel(numMatches: number): Experience {
  if (numMatches > 15) return Experience.A;
  if (numMatches >= 5) return Experience.B;
  if (numMatches >= 1) return Experience.C;

  return Experience.C0;
}

export function getMatchupScore(boxer1: Boxer, boxer2: Boxer): number {
  const weightDiff = Math.abs(boxer1.weight - boxer2.weight);
  const numMatchesDiff = Math.abs(boxer1.fightCount - boxer2.fightCount);
  const yearDiff = Math.abs(boxer1.year - boxer2.year);

  // Same club.
  if (boxer1.club === boxer2.club) {
    return 1_000_000;
  }

  if (getExperienceLevel(boxer1.fightCount) !== getExperienceLevel(boxer2.fightCount)) {
    return 1_000_000;
  }

  return (
    normalize(weightDiff, 0, 10) + normalize(numMatchesDiff, 0, 15) + normalize(yearDiff, 0, 10)
  );
}

function normalize(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}

export function parseCSV(content: string): Boxer[] {
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .slice(1);

  let delimiter = ';';
  if (lines.length > 0 && !lines[0].includes(';')) {
    delimiter = ',';
  }

  return lines
    .filter((line) => line.length > 0)
    .map((line) => {
      const [name, gender, year, weight, fightCount, club] = line.split(delimiter);
      return {
        gender: stringToGender(gender),
        year: parseInt(year.trim()),
        name: name.trim().toUpperCase(),
        club: club.trim(),
        weight: parseFloat(weight.trim()),
        fightCount: parseInt(fightCount.trim()),
        hasMatch: false,
      };
    })
    .filter((b) => b.name);
}

function stringToGender(field: string): Gender {
  if (field.trim() == 'F' || field.trim() == 'f') {
    return Gender.Female;
  }

  return Gender.Male;
}
