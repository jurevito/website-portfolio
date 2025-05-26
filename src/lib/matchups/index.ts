import { AgeGroup, Experience, Gender, WEIGHT_CLASSES } from './types';
import type { Boxer } from './types';

export function getAgeGroup(year: number): AgeGroup {
  const age = new Date().getFullYear() - year;

  if (age >= 19) return AgeGroup.Elite;
  if (age >= 17) return AgeGroup.Youth;
  if (age >= 15) return AgeGroup.Junior;
  if (age >= 13) return AgeGroup.Cadets;

  return AgeGroup.Kids;
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

export function getWeightClassString(boxer: Boxer): string {
  const weight = getWeightClass(boxer);
  if (weight) {
    return weight.toFixed(0);
  }
  return '/';
}

export function getWeightClass(boxer: Boxer): number | null {
  const ageGroup = getAgeGroup(boxer.year);
  const weights = WEIGHT_CLASSES[boxer.gender][ageGroup];

  const weightClass = weights.filter((w) => w > boxer.weight).pop();
  if (weightClass) {
    return weightClass;
  }
  return null;
}

export function getExperienceLevel(numMatches: number): Experience {
  if (numMatches >= 15) return Experience.A;
  if (numMatches >= 5) return Experience.B;
  if (numMatches >= 1) return Experience.C;

  return Experience.C0;
}

export function getMatchupScore(boxer1: Boxer, boxer2: Boxer): number {
  if (boxer1.club === boxer2.club) {
    return 1_000_000;
  }

  const weightDiff = Math.abs(boxer1.weight - boxer2.weight);
  const numMatchesDiff = Math.abs(boxer1.fightCount - boxer2.fightCount);
  const yearDiff = Math.abs(boxer1.year - boxer2.year);

  const exp1 = getExperienceLevel(boxer1.fightCount);
  const exp2 = getExperienceLevel(boxer2.fightCount);

  let penalty = 0;
  if (exp1 !== exp2) {
    if (
      (exp1 === Experience.C0 && exp2 === Experience.C) ||
      (exp1 === Experience.C && exp2 === Experience.C0)
    ) {
      penalty += 100;
    } else {
      return 1_000_000;
    }
  }

  return (
    normalize(weightDiff, 0, 10) +
    normalize(numMatchesDiff, 0, 15) +
    normalize(yearDiff, 0, 10) +
    penalty
  );
}

function normalize(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}

function getMessage(num: number, name: string, msg: string): string {
  return `Òn line ${num} for boxer "${name}" ${msg}.`;
}

export function parseCSV(content: string): Boxer[] {
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .slice(1);

  if (lines.length === 0) throw new Error('Number of lines is zero.');

  let delimiter = ';';
  if (!lines[0].includes(';')) {
    delimiter = ',';
  }

  let boxers: Boxer[] = [];
  for (let i = 0; i < lines.length; i++) {
    const cleanLine = lines[i].trim().replaceAll(delimiter, '');
    if (cleanLine.length === 0) continue;

    const [name, gender, yearStr, weightStr, fightCountStr, club] = lines[i].split(delimiter);

    if (!name || name.trim().length === 0)
      throw new Error(getMessage(i + 1, 'unknown', 'name is missing'));

    if (!yearStr) throw new Error(getMessage(i + 1, name, 'year is missing'));
    const year = parseInt(yearStr.trim());
    if (Number.isNaN(year)) throw new Error(getMessage(i + 1, name, 'year is not a number'));

    if (!weightStr) throw new Error(getMessage(i + 1, name, 'weight is missing'));
    const weight = parseInt(weightStr.trim());
    if (Number.isNaN(weight)) throw new Error(getMessage(i + 1, name, 'weight is not a number'));

    if (!fightCountStr) throw new Error(getMessage(i + 1, name, 'fight count is missing'));
    const fightCount = parseInt(fightCountStr.trim());
    if (Number.isNaN(fightCount))
      throw new Error(getMessage(i + 1, name, 'fight count is not a number'));

    if (!club || club.trim().length === 0)
      throw new Error(getMessage(i + 1, name, 'club is missing'));

    boxers.push({
      name: name.trim().toUpperCase(),
      gender: stringToGender(gender),
      year: year,
      club: club.trim(),
      weight: weight,
      fightCount: fightCount,
      hasMatch: false,
    });
  }

  return boxers;
}

function stringToGender(field: string): Gender {
  if (field.trim() == 'F' || field.trim() == 'f') {
    return Gender.Female;
  }

  return Gender.Male;
}

export function genderToString(gender: Gender): string {
  if (gender === Gender.Male) return 'M';
  return 'F';
}

export function compareGender(g1: Gender, g2: Gender): number {
  if (g1 === Gender.Male && g2 === Gender.Female) {
    return -1;
  }
  if (g1 === Gender.Female && g2 === Gender.Male) {
    return 1;
  }
  return 0;
}
