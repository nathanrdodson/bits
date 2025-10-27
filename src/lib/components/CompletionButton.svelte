<script lang="ts">
	import { completions } from '$lib/stores/completions';

	export let habitId: string;

	let loading = false;

	async function handleComplete() {
		if (loading) return;
		loading = true;

		try {
			await completions.complete(habitId);
		} catch (error) {
			console.error('Failed to mark habit as complete:', error);
		} finally {
			loading = false;
		}
	}
</script>

<button
	on:click={handleComplete}
	disabled={loading}
	class="w-12 h-12 rounded-full bg-accent text-white hover:bg-blue-600
         disabled:opacity-50 disabled:cursor-not-allowed
         transition-all transform hover:scale-110 active:scale-95
         flex items-center justify-center text-2xl"
	aria-label="Mark habit as complete"
>
	{#if loading}
		<span class="animate-spin">⏳</span>
	{:else}
		✓
	{/if}
</button>
