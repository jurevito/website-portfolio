<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import Input from '$lib/components/ui/input/input.svelte';
  import Label from '$lib/components/ui/label/label.svelte';
  import * as Table from '$lib/components/ui/table/index.js';
  import {
    compareGender,
    genderToString,
    getAgeGroup,
    getExperienceLevel,
    getMatchupScore,
    getWeightClassString,
    isInWeightClass,
    parseCSV,
  } from '$lib/matchups';
  import {
    AGE_GROUPS,
    AgeGroup,
    Experience,
    Gender,
    GENDERS,
    WEIGHT_CLASSES,
    type Boxer,
    type BoxingMatch,
    type Matches,
  } from '$lib/matchups/types';
  import Check from 'lucide-svelte/icons/check';
  import Cross from 'lucide-svelte/icons/x';
  import Shuffle from 'lucide-svelte/icons/shuffle';
  import { FileDown } from 'lucide-svelte';
  import Matchup from '$lib/matchups/Matchup.svelte';
  import { toast } from 'svelte-sonner';

  let totalPairs: number = $state(0);
  let matched: boolean = $state(false);
  let optimizing: boolean = $state(false);
  let boxers: Boxer[] = $state([]);
  let matches: Matches = $state<Matches>({
    [Gender.Male]: {
      [AgeGroup.Elite]: [] as BoxingMatch[],
      [AgeGroup.Youth]: [] as BoxingMatch[],
      [AgeGroup.Junior]: [] as BoxingMatch[],
      [AgeGroup.Cadets]: [] as BoxingMatch[],
      [AgeGroup.Kids]: [] as BoxingMatch[],
    },
    [Gender.Female]: {
      [AgeGroup.Elite]: [] as BoxingMatch[],
      [AgeGroup.Youth]: [] as BoxingMatch[],
      [AgeGroup.Junior]: [] as BoxingMatch[],
      [AgeGroup.Cadets]: [] as BoxingMatch[],
      [AgeGroup.Kids]: [] as BoxingMatch[],
    },
  });

  function handleFileAdded(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target?.result as string;
      try {
        boxers = parseCSV(csv);
        boxers.sort((a, b) => (a.name > b.name ? 1 : -1));
        toast.success('Loaded boxers', {
          description: `Found ${boxers.length} valid boxers inside the CSV file.`,
        });
      } catch (e) {
        toast.error('Failed loading CSV', {
          description: (e as Error).message,
        });
      }
    };
    reader.readAsText(file);
  }

  function csvLineFromMatchup(match: BoxingMatch): string {
    let data: string[] = [];
    data.push(match[0].name);
    data.push(getAgeGroup(match[0].year));
    data.push(getWeightClassString(match[0]));
    data.push(getExperienceLevel(match[0].fightCount));
    data.push(match[0].club.toUpperCase());

    data.push('-');

    data.push(match[1].name);
    data.push(getAgeGroup(match[1].year));
    data.push(getWeightClassString(match[1]));
    data.push(getExperienceLevel(match[1].fightCount));
    data.push(match[1].club.toUpperCase());

    return data.join(',');
  }

  const exportCSV = () => {
    let lines: string[] = [];

    // Only C0 and C without Elite.
    for (const ageGroup of [AgeGroup.Kids, AgeGroup.Cadets, AgeGroup.Junior, AgeGroup.Youth]) {
      for (const experience of [Experience.C0, Experience.C]) {
        const allMatches = [...matches.Female[ageGroup], ...matches.Male[ageGroup]]
          .filter((boxer) => getExperienceLevel(boxer[0].fightCount) === experience)
          .sort((a, b) => compareGender(a[0].gender, b[0].gender));
        const sublines = allMatches.map((match) => csvLineFromMatchup(match));
        lines = [...lines, ...sublines];
      }
    }

    // Only B and A.
    for (const ageGroup of AGE_GROUPS.reverse()) {
      for (const experience of [Experience.B, Experience.A]) {
        const allMatches = [...matches.Female[ageGroup], ...matches.Male[ageGroup]]
          .filter((boxer) => getExperienceLevel(boxer[0].fightCount) === experience)
          .sort((a, b) => compareGender(a[0].gender, b[0].gender));
        const sublines = allMatches.map((match) => csvLineFromMatchup(match));
        lines = [...lines, ...sublines];
      }
    }

    // Only C0 and C Elite.
    for (const experience of [Experience.C0, Experience.C]) {
      const allMatches = [...matches.Female[AgeGroup.Elite], ...matches.Male[AgeGroup.Elite]]
        .filter((boxer) => getExperienceLevel(boxer[0].fightCount) === experience)
        .sort((a, b) => compareGender(a[0].gender, b[0].gender));
      const sublines = allMatches.map((match) => csvLineFromMatchup(match));
      lines = [...lines, ...sublines];
    }

    const headers = [
      'RDEČI KOT',
      'STAROSTNA KATEGORIJA',
      'TEŽNOSTNA KATEGORIJA',
      'KLASA',
      'KLUB',
      '',
      'MODRI KOT',
      'STAROSTNA KATEGORIJA',
      'TEŽNOSTNA KATEGORIJA',
      'KLASA',
      'KLUB',
    ].join(',');
    lines = [headers, ...lines];
    const csvContent = lines.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    const fileName = `wsg_league_${new Date().toISOString().split('T')[0]}.csv`;
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('CSV Exported', {
      description: `Saved ${lines.length} in '${fileName}'.`,
    });
  };

  function clearBoxers() {
    boxers = [];
    matched = false;
    optimizing = false;
    totalPairs = 0;
  }

  interface ScoredMatch {
    pair: BoxingMatch;
    score: number;
  }

  function optimize(boxersInCategory: Boxer[]): BoxingMatch[] {
    let allPairs: ScoredMatch[] = [];
    for (let i = 0; i < boxersInCategory.length - 1; i++) {
      for (let j = i + 1; j < boxersInCategory.length; j++) {
        allPairs.push({
          pair: [boxersInCategory[i], boxersInCategory[j]],
          score: getMatchupScore(boxersInCategory[i], boxersInCategory[j]),
        });
      }
    }

    allPairs.sort((a, b) => a.score - b.score);
    allPairs = allPairs.filter((match) => match.score < 1_000);

    const result: BoxingMatch[] = [];
    const used = new Set<string>();

    for (const { pair } of allPairs) {
      const [boxer1, boxer2] = pair;
      if (!used.has(boxer1.name) && !used.has(boxer2.name)) {
        result.push(pair);
        used.add(boxer1.name);
        used.add(boxer2.name);
      }

      if (used.size + 1 >= boxersInCategory.length) break;
    }

    return result;
  }

  function GetMatchups() {
    optimizing = true;
    let numPaired = 0;

    GENDERS.forEach((gender, _) => {
      AGE_GROUPS.forEach((ageGroup, _) => {
        const weightClasses = WEIGHT_CLASSES[gender][ageGroup];
        for (let i = 0; i <= weightClasses.length; i++) {
          const lowerBound = i === 0 ? null : weightClasses[i - 1];
          const upperBound = i === weightClasses.length ? null : weightClasses[i];

          if (lowerBound !== null && upperBound !== null && lowerBound >= upperBound) {
            console.error('Weight categories are not setup correctly');
          }

          const boxersInCategory = boxers.filter(
            (boxer) =>
              !boxer.hasMatch &&
              boxer.gender === gender &&
              ageGroup === getAgeGroup(boxer.year) &&
              isInWeightClass(boxer.weight, lowerBound, upperBound)
          );

          const optimalPairs = optimize(boxersInCategory);
          matches[gender][ageGroup].push(...optimalPairs);
          numPaired += optimalPairs.length;
        }

        boxers = boxers.map((boxer) => ({
          ...boxer,
          hasMatch:
            matches[gender][ageGroup].some(
              (match) => match[0].name === boxer.name || match[1].name === boxer.name
            ) || boxer.hasMatch,
        }));
      });
    });

    boxers.sort((a, b) => {
      if (!a.hasMatch && b.hasMatch) return -1;
      if (a.hasMatch && !b.hasMatch) return 1;

      const indexA = AGE_GROUPS.indexOf(getAgeGroup(a.year));
      const indexB = AGE_GROUPS.indexOf(getAgeGroup(b.year));
      if (indexA !== indexB) return indexB - indexA;

      return a.weight - b.weight;
    });

    matched = true;
    optimizing = false;
    totalPairs = numPaired;
    toast.success('Matchups created', { description: `Found total of ${numPaired} pairs.` });
  }
</script>

<div class="mx-auto max-w-screen-2xl px-4 py-8 font-mont bg-gray-100 h-full w-full">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="rounded-md shadow p-6 md:overflow-y-auto md:max-h-[90vh] bg-white">
      {#if boxers.length == 0}
        <div class="space-y-2">
          <Label for="csv-file">Upload CSV File</Label>
          <Input id="csv-file" type="file" accept=".csv" onchange={handleFileAdded} />
        </div>
      {:else}
        <div class="space-y-4">
          <Button onclick={clearBoxers}>Clear Boxers</Button>
          <div>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Club</Table.Head>
                  <Table.Head>Year</Table.Head>
                  <Table.Head>Weight</Table.Head>
                  <Table.Head># Matches</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#each boxers as boxer}
                  <Table.Row>
                    <Table.Cell class="flex items-center gap-2">
                      {#if boxer.hasMatch}
                        <Check class=" text-green-500 size-3" />
                      {:else}
                        <Cross class="size-3 text-red-500" />
                      {/if}
                      <span>{boxer.name}</span>
                      <span
                        class="{boxer.gender === Gender.Female
                          ? 'text-pink-500'
                          : 'text-blue-500'} text-sm">{genderToString(boxer.gender)}</span
                      >
                    </Table.Cell>
                    <Table.Cell>{boxer.club}</Table.Cell>
                    <Table.Cell class="flex gap-2">
                      <span>{boxer.year}</span>
                      <span class="text-gray-500">{getAgeGroup(boxer.year)}</span>
                    </Table.Cell>
                    <Table.Cell>{boxer.weight}kg</Table.Cell>
                    <Table.Cell class="flex gap-2">
                      <span>{boxer.fightCount}</span>
                      <span class="text-gray-500">{getExperienceLevel(boxer.fightCount)}</span>
                    </Table.Cell>
                  </Table.Row>
                {/each}
              </Table.Body>
              <Table.Caption>List of {boxers.length} registered boxers.</Table.Caption>
            </Table.Root>
          </div>
        </div>
      {/if}
    </div>

    {#if boxers.length !== 0}
      <div class="rounded-md shadow p-6 md:overflow-y-auto md:max-h-[90vh] bg-white space-y-6">
        <div class="space-x-4">
          <Button onclick={GetMatchups} disabled={optimizing}>
            <Shuffle class="mr-1 size-4" />
            {#if optimizing}
              Optimizing...
            {:else}
              Find Matchups
            {/if}
          </Button>

          {#if totalPairs > 0}
            <Button onclick={exportCSV} variant="secondary" class="">
              <FileDown class="mr-1 size-4" />
              Export</Button
            >
          {/if}
        </div>

        {#if matched}
          <div class="mt-12">
            {#each GENDERS as gender}
              <div class="space-y-6">
                {#each AGE_GROUPS as ageGroup}
                  {#if matches[gender][ageGroup].length > 0}
                    <div class="my-4">
                      <h3 class="font-bold items-center flex gap-2 mb-4">
                        {ageGroup.toUpperCase()}
                        <span
                          class="{gender === Gender.Female
                            ? 'text-pink-500'
                            : 'text-blue-500'} text-sm">{genderToString(gender)}</span
                        >
                      </h3>
                      <div class="space-y-2">
                        {#each matches[gender][ageGroup] as match}
                          <Matchup {match} />
                        {/each}
                      </div>
                    </div>
                  {/if}
                {/each}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
