<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import { Slider } from '$lib/components/ui/slider/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import Shuffle from 'lucide-svelte/icons/shuffle';
  import Check from 'lucide-svelte/icons/check';
  import Cross from 'lucide-svelte/icons/x';
  import type { Boxer } from '$lib/Boxer';

  let weightWeight: number[] = $state([0.8]);
  let numPairsWeight: number[] = $state([0.3]);
  let fightCountWeight: number[] = $state([0.3]);

  let optimizing: boolean = $state(false);
  let matchups: [Boxer, Boxer][] = $state([]);

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomName(): string {
    const names = ['Mike Tyson', 'Muhammad Ali', 'Joe Frazier'];
    return names[getRandomInt(0, names.length - 1)];
  }

  function getRandomClub(): string {
    const clubs = ['West Side Gym', 'Golden Gloves', 'Predator', 'Shape Boxing'];
    return clubs[getRandomInt(0, clubs.length - 1)];
  }

  // Generate an array of 100 random boxers
  let boxers: Boxer[] = $state(
    Array.from({ length: 100 }, () => ({
      year: getRandomInt(1980, 2010),
      name: getRandomName(),
      club: getRandomClub(),
      weight: getRandomInt(50, 110),
      fightCount: getRandomInt(0, 30),
      hasMatch: true,
    }))
  );

  const clearBoxers = () => {
    boxers = [];
  };

  const handleFileAdded = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target?.result as string;
      parseCSV(csv);
    };
    reader.readAsText(file);
  };

  const parseCSV = (csv: string) => {
    const lines = csv.split("\n").filter((line) => line.trim() !== ""); // Split into lines
    const data = lines.slice(1);

    boxers = data.map((line) => {
      console.log(line)
      const [name, year, weight, fightCount, club] = line.split(";");
      return {
        year: parseInt(year.trim()),
        name: name.trim().toUpperCase(),
        club: club.trim(),
        weight: parseFloat(weight.trim()),
        fightCount: parseInt(fightCount.trim()),
        hasMatch: true,
      };
    });
  }

  let maxWeightDiff = $derived(
    Math.max(...matchups.map((matchup) => Math.abs(matchup[0].weight - matchup[1].weight)))
  );
  let maxfightCountDiff = $derived(
    Math.max(...matchups.map((matchup) => Math.abs(matchup[0].fightCount - matchup[1].fightCount)))
  );

  const isUnderage = (year: number): boolean => {
    const currentYear = new Date().getFullYear();
    return currentYear - year < 18;
  };

  const AreConstraint = (boxer1: Boxer, boxer2: Boxer): boolean => {
    if (boxer1.club === boxer2.club) {
      return true;
    }

    const ageDiff = Math.abs(boxer1.year - boxer2.year);
    if (ageDiff > 2 && (isUnderage(boxer1.year) || isUnderage(boxer2.year))) {
      return true;
    }

    return false;
  };

  const GetPairs = (boxers: Boxer[]): [Boxer, Boxer][] => {
    const pairs: [Boxer, Boxer][] = [];

    for (let i = 0; i < boxers.length; i++) {
      for (let j = i + 1; j < boxers.length; j++) {
        if (AreConstraint(boxers[i], boxers[j])) {
          continue;
        }

        pairs.push([boxers[i], boxers[j]]);
      }
    }

    return pairs;
  };

  const normalize = (value: number, min: number, max: number): number => {
    return (value - min) / (max - min);
  };

  const Score = (pair: [Boxer, Boxer]): number => {
    // Better to do relative weight difference.
    const weightDiff =
      Math.abs(pair[0].weight - pair[1].weight) * (80 / Math.min(pair[0].weight, pair[1].weight));
    const fightCountDiff = Math.abs(pair[0].fightCount - pair[1].fightCount);

    const score = weightDiff * weightWeight[0] + fightCountDiff * fightCountWeight[0];
    return score;
  };

  const TotalScore = (pairs: [Boxer, Boxer][]): number => {
    const pairedScore = pairs.reduce((acc, pair) => acc + Score(pair), 0);
    const unpairedScore =
      (1 - pairs.length / Math.floor(boxers.length / 2)) * boxers.length * 5 * numPairsWeight[0];
    return pairedScore + unpairedScore;
  };

  const InitialMatchups = (pairs: [Boxer, Boxer][]): [[Boxer, Boxer][], Set<Boxer>] => {
    let matchups: [Boxer, Boxer][] = [];
    let unmatched = new Set<Boxer>(boxers);

    for (let i = 0; i < pairs.length; i++) {
      if (unmatched.has(pairs[i][0]) && unmatched.has(pairs[i][1])) {
        matchups.push(pairs[i]);
        unmatched.delete(pairs[i][0]);
        unmatched.delete(pairs[i][1]);
      }
    }

    return [matchups, unmatched];
  };

  const SimulatedAnnealing = (
    boxers: Boxer[],
    iterations: number,
    temperature: number,
    coolingRate: number
  ): [[Boxer, Boxer][], Set<Boxer>] => {
    let allPairs = GetPairs(boxers);
    let [bestPairs, bestUnmatched] = InitialMatchups(allPairs);
    let bestScore = TotalScore(bestPairs);

    console.log('Initial score:', bestScore);
    console.log('Initial pairs:', bestPairs);
    console.log('Initial unmatched:', bestUnmatched);

    for (let i = 0; i < iterations; i++) {
      const pairs = [...bestPairs];
      const unmatched = new Set([...bestUnmatched]);

      if (pairs.length == 0 || (Math.random() < 0.5 && unmatched.size >= 2)) {
        const unmatchedArray = Array.from(unmatched);

        let index1 = 0;
        let index2 = 0;

        for (let j = 0; j < 10; j++) {
          index1 = Math.floor(Math.random() * unmatchedArray.length);
          do {
            index2 = Math.floor(Math.random() * unmatchedArray.length);
          } while (index2 === index1);

          if (!AreConstraint(unmatchedArray[index1], unmatchedArray[index2])) {
            break;
          }
        }

        if (index1 != index2) {
          const first = unmatchedArray[index1];
          const second = unmatchedArray[index2];

          pairs.push([first, second]);
          unmatched.delete(first);
          unmatched.delete(second);
        }
        //console.log(`Adding pair (${i}): ${[first, second]}`);
      } else {
        const index = Math.floor(Math.random() * pairs.length);
        const pair = pairs[index];
        pairs.splice(index, 1);

        //console.log(`Removing pair (${i}): ${index}`);
        unmatched.add(pair[0]);
        unmatched.add(pair[1]);
      }

      const score = TotalScore(pairs);
      if (score < bestScore || Math.random() < temperature) {
        console.log(
          `New best score (${i}): ${score}, temperature: ${temperature}, new best pairs: ${pairs.length}`
        );
        bestPairs = pairs;
        bestUnmatched = unmatched;
        bestScore = score;
      }

      temperature *= coolingRate;
    }

    console.log('Final score:', bestScore);
    console.log('Final pairs:', bestPairs.length);
    return [bestPairs, bestUnmatched];
  };

  const GetMatchups = () => {
    optimizing = true;
    setTimeout(() => {
      let [tmp1, tmp2] = SimulatedAnnealing(boxers, 100000, 1, 0.9999);

      boxers = boxers
        .map((boxer) => {
          return { ...boxer, hasMatch: !tmp2.has(boxer) };
        })
        .sort((a, b) => a.weight - b.weight)
        .sort((a, b) => Number(a.hasMatch) - Number(b.hasMatch));

      matchups = tmp1.sort((a, b) => Score(a) - Score(b));
      optimizing = false;
    }, 0);
  };
</script>

<div class="mx-auto max-w-7xl px-4 my-8 font-mont">
  <div class="flex flex-col md:flex-row md:space-x-10">

    <div class="w-full md:w-1/2">
    {#if boxers.length == 0}
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="csv-file">Upload CSV File</Label>
        <Input id="csv-file" type="file" accept=".csv" onchange={handleFileAdded} />
      </div>
    {:else}
      <Button onclick={clearBoxers}>Clear Boxers</Button>
      <div>
        <Table.Root>
          <Table.Caption>List of {boxers.length} registered boxers.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Club</Table.Head>
              <Table.Head>Year</Table.Head>
              <Table.Head>Weight</Table.Head>
              <Table.Head>Num. Matches</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {#each boxers as boxer}
              <Table.Row>
                <Table.Cell class="flex">
                  {#if boxer.hasMatch}
                    <Check class="mr-2 size-4 text-green-500" />
                  {:else}
                    <Cross class="mr-2 size-4 text-red-500" />
                  {/if}
                  {boxer.name}
                </Table.Cell>
                <Table.Cell>{boxer.club}</Table.Cell>
                <Table.Cell>{boxer.year}</Table.Cell>
                <Table.Cell>{boxer.weight}</Table.Cell>
                <Table.Cell>{boxer.fightCount}</Table.Cell>
              </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      </div>
    {/if}
    </div>

    <div class="w-full md:w-1/2">
      <h2 class="text-center my-4 text-lg">Optimization Settings</h2>
      <div class="space-y-4 text-sm">
        <div class="flex items-center space-x-8">
          <span class="w-36">Weight</span>
          <Slider bind:value={weightWeight} max={1} step={0.05} />
          <span class="w-12">{weightWeight[0].toFixed(2)}</span>
        </div>

        <div class="flex items-center space-x-8">
          <span class="w-36">Fight Count</span>
          <Slider bind:value={fightCountWeight} max={1} step={0.05} />
          <span class="w-12">{fightCountWeight[0].toFixed(2)}</span>
        </div>

        <div class="flex items-center space-x-8">
          <span class="w-36">Num. Pairs</span>
          <Slider bind:value={numPairsWeight} max={1} step={0.05} />
          <span class="w-12">{numPairsWeight[0].toFixed(2)}</span>
        </div>
      </div>

      <div class="flex justify-center mt-6">
        <Button onclick={GetMatchups} disabled={optimizing} class="w-full sm:w-auto min-w-[14rem]">
          <Shuffle class="mr-2 size-4" />
          {#if optimizing}
            Optimizing...
          {:else}
            Optimize Matchups
          {/if}
        </Button>
      </div>

      <div class="space-y-4 my-4">
        {#if matchups.length > 0}
          <div>
            <p class="text-center">{matchups.length} / {Math.floor(boxers.length / 2)} Pairs</p>
            <p class="text-center text-sm">{maxWeightDiff}kg Max Weight Difference</p>
            <p class="text-center text-sm">{maxfightCountDiff} Max Fight Count Difference</p>
          </div>
        {/if}

        {#each matchups as [boxer1, boxer2]}
          <div class="flex justify-between items-center p2-3 px-3">
            <div>
              <p class="font-bold">{boxer1.name}</p>
              <p class="text-xs">{boxer1.year} - {boxer1.club} - {boxer1.fightCount}</p>
              <Badge>{boxer1.weight}kg</Badge>
            </div>
            <div>
              <p class="text-sm font-bold">vs</p>
              <p class="text-xs">{Score([boxer1, boxer2]).toFixed(2)}</p>
            </div>
            <div>
              <p class="font-bold">{boxer2.name}</p>
              <p class="text-xs">{boxer2.year} - {boxer2.club} - {boxer2.fightCount}</p>
              <Badge>{boxer2.weight}kg</Badge>
            </div>
          </div>

          <div class="border-b"></div>
        {/each}
      </div>
    </div>
  </div>
</div>
