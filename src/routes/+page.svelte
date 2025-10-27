<script lang="ts">
	import { onMount } from 'svelte';
	import { habits } from '$lib/stores/habits';
	import { completions } from '$lib/stores/completions';
	import HabitList from '$lib/components/HabitList.svelte';
	import AddHabitModal from '$lib/components/AddHabitModal.svelte';

	let isModalOpen = false;

	onMount(async () => {
		// Load data from IndexedDB on mount
		await habits.load();
		await completions.load();
	});
</script>

<div class="min-h-screen p-4 md:p-8 bg-secondary">
	<header class="max-w-4xl mx-auto mb-8 flex items-center justify-between">
		<div>
			<h1 class="text-3xl md:text-4xl font-bold">Bits</h1>
			<p class="text-gray-600 text-sm md:text-base mt-1">
				A beautifully simple atomic habit tracker
			</p>
		</div>
		<button
			on:click={() => (isModalOpen = true)}
			class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white hover:bg-blue-600
           transition-all transform hover:scale-110 active:scale-95
           flex items-center justify-center text-3xl shadow-lg"
			aria-label="Add new habit"
		>
			+
		</button>
	</header>

	<main class="max-w-4xl mx-auto">
		<HabitList habits={$habits} />
	</main>
</div>

<AddHabitModal bind:isOpen={isModalOpen} />
