<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import Input from '$lib/components/ui/input/input.svelte';
  import Label from '$lib/components/ui/label/label.svelte';
  import * as Table from '$lib/components/ui/table/index.js';
  import { parseCSV } from '$lib/matchups';
  import type { Boxer } from '$lib/matchups/types';
  import Check from 'lucide-svelte/icons/check';
  import Cross from 'lucide-svelte/icons/x';

  let boxers: Boxer[] = $state([]);

  const handleFileAdded = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target?.result as string;
      boxers = parseCSV(csv);
    };
    reader.readAsText(file);
    // TODO: clear matchups
  };

  const clearBoxers = () => {
    boxers = [];
  };
</script>

<div class="mx-auto max-w-screen-2xl px-4 my-8 font-mont">
  <div class="grid grid-cols-2 gap-8">
    <div class="rounded-md shadow p-6 overflow-y-auto max-h-screen">
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

    <div class="rounded-md shadow p-6">hello</div>
  </div>
</div>
