<script lang="ts">
  import type { BoxingMatch } from './types';

  interface Props {
    match: BoxingMatch;
  }

  let { match }: Props = $props();
</script>

{#if match}
  <div class="flex p-4">
    <div class="w-1/2">
      <p>{match[0].name}</p>
      <p class="text-xs text-gray-500">
        {match[0].club} - {match[0].weight}kg - {match[0].year} - {match[0].fightCount}
      </p>
    </div>
    <div class="w-1/2">
      <p>{match[1].name}</p>
      <p class="text-xs text-gray-500">
        {match[1].club} - {match[1].weight}kg - {match[1].year} - {match[0].fightCount}
      </p>
    </div>
  </div>
{/if}
