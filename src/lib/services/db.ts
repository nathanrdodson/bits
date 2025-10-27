/**
 * IndexedDB service for local data persistence
 * Uses the idb library for a cleaner Promise-based API
 */

import { openDB, type IDBPDatabase } from 'idb';
import type { Habit, Completion } from '$lib/types';

const DB_NAME = 'bits-db';
const DB_VERSION = 1;

export interface BitsDB {
	habits: {
		key: string;
		value: Habit;
	};
	completions: {
		key: string;
		value: Completion;
		indexes: { habitId: string };
	};
}

let dbInstance: IDBPDatabase<BitsDB> | null = null;

/**
 * Initialize and return the database instance
 */
export async function getDB(): Promise<IDBPDatabase<BitsDB>> {
	if (dbInstance) {
		return dbInstance;
	}

	dbInstance = await openDB<BitsDB>(DB_NAME, DB_VERSION, {
		upgrade(db) {
			// Create habits store
			if (!db.objectStoreNames.contains('habits')) {
				db.createObjectStore('habits', { keyPath: 'id' });
			}

			// Create completions store with index on habitId
			if (!db.objectStoreNames.contains('completions')) {
				const completionsStore = db.createObjectStore('completions', { keyPath: 'id' });
				completionsStore.createIndex('habitId', 'habitId', { unique: false });
			}
		}
	});

	return dbInstance;
}

/**
 * Habit CRUD operations
 */
export const habits = {
	async getAll(): Promise<Habit[]> {
		const db = await getDB();
		return db.getAll('habits');
	},

	async get(id: string): Promise<Habit | undefined> {
		const db = await getDB();
		return db.get('habits', id);
	},

	async add(habit: Habit): Promise<void> {
		const db = await getDB();
		await db.add('habits', habit);
	},

	async update(habit: Habit): Promise<void> {
		const db = await getDB();
		await db.put('habits', habit);
	},

	async delete(id: string): Promise<void> {
		const db = await getDB();
		await db.delete('habits', id);
	}
};

/**
 * Completion CRUD operations
 */
export const completions = {
	async getAll(): Promise<Completion[]> {
		const db = await getDB();
		return db.getAll('completions');
	},

	async get(id: string): Promise<Completion | undefined> {
		const db = await getDB();
		return db.get('completions', id);
	},

	async getByHabitId(habitId: string): Promise<Completion[]> {
		const db = await getDB();
		return db.getAllFromIndex('completions', 'habitId', habitId);
	},

	async add(completion: Completion): Promise<void> {
		const db = await getDB();
		await db.add('completions', completion);
	},

	async delete(id: string): Promise<void> {
		const db = await getDB();
		await db.delete('completions', id);
	}
};
