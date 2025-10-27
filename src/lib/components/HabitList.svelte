<script lang="ts">
	import type { Habit } from '$lib/types';
	import HabitCard from './HabitCard.svelte';

	export let habits: Habit[] = [];
</script>

{#if habits.length === 0}
	<div class="text-center py-12 text-gray-500">
		<p class="text-lg">No habits yet.</p>
		<p class="text-sm mt-2">Click the + button to add your first habit.</p>
	</div>
{:else}
	<div class="space-y-4">
		{#each habits as habit (habit.id)}
			<HabitCard {habit} />
		{/each}
	</div>
{/if}
