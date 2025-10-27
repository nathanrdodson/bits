<script lang="ts">
	import { habits } from '$lib/stores/habits';
	import type { FrequencyPeriod } from '$lib/types';

	export let isOpen = false;

	let habitName = '';
	let useFrequency = false;
	let frequencyTimes = 1;
	let frequencyPeriod: FrequencyPeriod = 'day';

	function close() {
		isOpen = false;
		habitName = '';
		useFrequency = false;
		frequencyTimes = 1;
		frequencyPeriod = 'day';
	}

	async function handleSubmit() {
		if (!habitName.trim()) return;

		const frequency = useFrequency
			? {
					times: frequencyTimes,
					period: frequencyPeriod
				}
			: undefined;

		await habits.add(habitName.trim(), frequency);
		close();
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
		on:click={close}
		on:keydown={(e) => e.key === 'Escape' && close()}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			class="bg-white rounded-lg max-w-md w-full p-6"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="none"
		>
			<h2 class="text-2xl font-bold mb-4">Add New Habit</h2>

			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label for="habit-name" class="block text-sm font-medium mb-2"> Habit Name </label>
					<input
						id="habit-name"
						type="text"
						bind:value={habitName}
						placeholder="e.g., Morning meditation"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
						autofocus
					/>
				</div>

				<div class="mb-4">
					<label class="flex items-center">
						<input type="checkbox" bind:checked={useFrequency} class="mr-2" />
						<span class="text-sm font-medium">Set frequency target</span>
					</label>
				</div>

				{#if useFrequency}
					<div class="mb-4 grid grid-cols-2 gap-4">
						<div>
							<label for="frequency-times" class="block text-sm font-medium mb-2">
								Times
							</label>
							<input
								id="frequency-times"
								type="number"
								bind:value={frequencyTimes}
								min="1"
								class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
							/>
						</div>
						<div>
							<label for="frequency-period" class="block text-sm font-medium mb-2">
								Per
							</label>
							<select
								id="frequency-period"
								bind:value={frequencyPeriod}
								class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
							>
								<option value="day">Day</option>
								<option value="week">Week</option>
								<option value="month">Month</option>
							</select>
						</div>
					</div>
				{/if}

				<div class="flex gap-2 justify-end">
					<button
						type="button"
						on:click={close}
						class="px-4 py-2 text-gray-600 hover:text-gray-800"
					>
						Cancel
					</button>
					<button
						type="submit"
						disabled={!habitName.trim()}
						class="px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-600
                     disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Add Habit
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
