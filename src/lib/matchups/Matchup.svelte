<script lang="ts">
  import { getExperienceLevel } from '.';
  import type { BoxingMatch } from './types';

  interface Props {
    match: BoxingMatch;
  }

  let { match }: Props = $props();
</script>

{#if match}
  <div class="grid items-center grid-cols-5 p-2">
    <div class="col-span-2">
      <p>{match[0].name}</p>
      <p class="text-xs text-gray-500 flex gap-2">
        <span>{match[0].club}</span>
        <span>{match[0].weight}kg</span>
        <span>{getExperienceLevel(match[0].fightCount)}</span>
      </p>
    </div>
    <div class="col-span-1 text-sm">vs</div>
    <div class="col-span-2">
      <p>{match[1].name}</p>
      <p class="text-xs text-gray-500 flex gap-2">
        <span>{match[1].club}</span>
        <span>{match[1].weight}kg</span>
        <span>{getExperienceLevel(match[1].fightCount)}</span>
      </p>
    </div>
  </div>
{/if}
