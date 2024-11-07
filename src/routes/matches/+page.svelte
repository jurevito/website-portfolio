<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import { Slider } from '$lib/components/ui/slider/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from "$lib/components/ui/badge/index.js";
  import Shuffle from 'lucide-svelte/icons/shuffle';
  import type { Boxer } from '$lib/boxer';

  let weightWeight: number[] = $state([0.5]);
  let numPairsWeight: number[] = $state([0.5]);
  let numMatchesWeight: number[] = $state([0.5]);

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
  const boxers: Boxer[] = Array.from({ length: 100 }, () => ({
    year: getRandomInt(1980, 2010),
    name: getRandomName(),
    club: getRandomClub(),
    weight: getRandomInt(50, 110),
    numMatches: getRandomInt(0, 30),
    hasMatch: true,
  }));

  const normalize = (arr: number[]): number[] => {
    min = Math.min(...arr);
    max = Math.max(...arr);

    return arr.map((val) => (val - min) / (max - min));
  };

  const isUnderage = (year: number): boolean => {
    const currentYear = new Date().getFullYear();
    return year > currentYear;
  };

  const GetPairs = (boxers: Boxer[]): [Boxer, Boxer][] => {
    const pairs: [Boxer, Boxer][] = [];

    for (let i = 0; i < boxers.length; i++) {
      for (let j = i + 1; j < boxers.length; j++) {
        if (boxers[i].club === boxers[j].club) {
          continue;
        }

        const ageDiff = Math.abs(boxers[i].year - boxers[j].year);
        if (ageDiff > 2 && (isUnderage(boxers[i].year) || isUnderage(boxers[j].year))) {
          continue;
        }

        pairs.push([boxers[i], boxers[j]]);
      }
    }

    return pairs;
  };

  const CalcScore = (pair: [Boxer, Boxer]): number => {
    const weightDiff = Math.abs(pair[0].weight - pair[1].weight);
    const numMatchesDiff = Math.abs(pair[0].numMatches - pair[1].numMatches);

    const score = weightDiff * weightWeight[0] + numMatchesDiff * numMatchesWeight[0];
    return score;
  };

  const GetMatchups = () => {
    optimizing = true;
    let totalScore = 0;
    let bestPairs: Boxer[] = [];

    let pairs = GetPairs(boxers);
    pairs = pairs.sort(pair => CalcScore(pair));
    matchups = pairs.slice(0, 10);

    setTimeout(() => {
      optimizing = false;
    }, 500);
  };
</script>

<div class="mx-auto max-w-7xl px-4 my-8">
  <div class="flex flex-col md:flex-row md:space-x-10">
    <div class="w-full md:w-1/2">
      <Table.Root class="font-mont">
        <Table.Caption>List of registered boxers.</Table.Caption>
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
              <Table.Cell>{boxer.name}</Table.Cell>
              <Table.Cell>{boxer.club}</Table.Cell>
              <Table.Cell>{boxer.year}</Table.Cell>
              <Table.Cell>{boxer.weight}</Table.Cell>
              <Table.Cell>{boxer.numMatches}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
    <div class="w-full md:w-1/2">
      <h2 class="text-center my-4 text-lg">Optimization Settings</h2>
      <div class="space-y-4 text-sm">
        <div class="flex items-center space-x-8">
          <span class="w-36">Weight</span>
          <Slider bind:value={weightWeight} max={1} step={0.1} />
          <span class="w-8">{weightWeight}</span>
        </div>

        <div class="flex items-center space-x-8">
          <span class="w-36">Num. Pairs</span>
          <Slider bind:value={numPairsWeight} max={1} step={0.1} />
          <span class="w-8">{numPairsWeight}</span>
        </div>

        <div class="flex items-center space-x-8">
          <span class="w-36">Num. Matches</span>
          <Slider bind:value={numMatchesWeight} max={1} step={0.1} />
          <span class="w-8">{numMatchesWeight}</span>
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

      <div class="space-y-4">
        {#each matchups as [boxer1, boxer2]}
          <div class="flex justify-between items-center p2-3 px-3">
            <div>
              <p class="font-bold">{boxer1.name}</p>
              <p class="text-xs">born {boxer1.year} - {boxer1.club}</p>
              <Badge>{boxer1.weight}kg</Badge>
            </div>
            <div>
              <p class="text-xs">vs {CalcScore([boxer1, boxer2])}</p>
            </div>
            <div>
              <p class="font-bold">{boxer2.name}</p>
              <p class="text-xs">born {boxer2.year} - {boxer2.club}</p>
              <Badge>{boxer2.weight}kg</Badge>
            </div>
          </div>

          <div class="border-b"></div>
        {/each}
      </div>
    </div>
  </div>
</div>
