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
  if (numMatches >= 15) return Experience.A;
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

    if (name.trim().length === 0) throw new Error(getMessage(i + 1, 'unknown', 'name is missing'));

    const year = parseInt(yearStr.trim());
    if (Number.isNaN(year)) throw new Error(getMessage(i + 1, name, 'year is missing'));

    const weight = parseInt(weightStr.trim());
    if (Number.isNaN(weight)) throw new Error(getMessage(i + 1, name, 'weight is missing'));

    const fightCount = parseInt(fightCountStr.trim());
    if (Number.isNaN(fightCount))
      throw new Error(getMessage(i + 1, name, 'fight count is missing'));

    if (club.trim().length === 0) throw new Error(getMessage(i + 1, name, 'club is missing'));

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
