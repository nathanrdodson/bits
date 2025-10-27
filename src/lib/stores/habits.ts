/**
 * Svelte store for habits state management
 */

import { writable } from 'svelte/store';
import type { Habit } from '$lib/types';
import { habits as habitsDB } from '$lib/services/db';
import { generateUUID } from '$lib/utils/uuid';
import { now } from '$lib/utils/date';

function createHabitsStore() {
	const { subscribe, set, update } = writable<Habit[]>([]);

	return {
		subscribe,

		/**
		 * Load all habits from IndexedDB
		 */
		async load() {
			const allHabits = await habitsDB.getAll();
			set(allHabits.sort((a, b) => a.createdAt - b.createdAt));
		},

		/**
		 * Add a new habit
		 */
		async add(name: string, frequency?: Habit['frequency']) {
			const habit: Habit = {
				id: generateUUID(),
				name,
				frequency,
				createdAt: now()
			};

			await habitsDB.add(habit);
			update((habits) => [...habits, habit]);
		},

		/**
		 * Update an existing habit
		 */
		async updateHabit(id: string, updates: Partial<Omit<Habit, 'id' | 'createdAt'>>) {
			update((habits) => {
				const index = habits.findIndex((h) => h.id === id);
				if (index !== -1) {
					const updated = { ...habits[index], ...updates };
					habitsDB.update(updated);
					habits[index] = updated;
				}
				return habits;
			});
		},

		/**
		 * Delete a habit
		 */
		async delete(id: string) {
			await habitsDB.delete(id);
			update((habits) => habits.filter((h) => h.id !== id));
		}
	};
}

export const habits = createHabitsStore();
