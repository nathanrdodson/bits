/**
 * Svelte store for completions state management
 */

import { writable } from 'svelte/store';
import type { Completion } from '$lib/types';
import { completions as completionsDB } from '$lib/services/db';
import { generateUUID } from '$lib/utils/uuid';
import { now } from '$lib/utils/date';

function createCompletionsStore() {
	const { subscribe, set, update } = writable<Completion[]>([]);

	return {
		subscribe,

		/**
		 * Load all completions from IndexedDB
		 */
		async load() {
			const allCompletions = await completionsDB.getAll();
			set(allCompletions.sort((a, b) => b.completedAt - a.completedAt));
		},

		/**
		 * Add a new completion for a habit
		 */
		async complete(habitId: string) {
			const completion: Completion = {
				id: generateUUID(),
				habitId,
				completedAt: now()
			};

			await completionsDB.add(completion);
			update((completions) => [completion, ...completions]);
		},

		/**
		 * Delete a completion
		 */
		async delete(id: string) {
			await completionsDB.delete(id);
			update((completions) => completions.filter((c) => c.id !== id));
		},

		/**
		 * Get completions for a specific habit
		 */
		async getByHabitId(habitId: string): Promise<Completion[]> {
			return completionsDB.getByHabitId(habitId);
		}
	};
}

export const completions = createCompletionsStore();
