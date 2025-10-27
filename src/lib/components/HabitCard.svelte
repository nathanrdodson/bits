<script lang="ts">
	import type { Habit } from '$lib/types';
	import CompletionButton from './CompletionButton.svelte';

	export let habit: Habit;
</script>

<div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
	<div class="flex items-center justify-between">
		<div class="flex-1">
			<h3 class="text-xl font-semibold">{habit.name}</h3>
			{#if habit.frequency}
				<p class="text-sm text-gray-600 mt-1">
					{habit.frequency.times}x per {habit.frequency.period}
				</p>
			{/if}
		</div>
		<CompletionButton habitId={habit.id} />
	</div>
</div>
