/**
 * Core data models for Bits habit tracker
 */

export interface Habit {
	id: string; // UUID v4
	name: string; // Display name
	frequency?: {
		times: number; // Target completions
		period: 'day' | 'week' | 'month';
	};
	createdAt: number; // Unix timestamp
}

export interface Completion {
	id: string; // UUID v4
	habitId: string; // Foreign key to Habit
	completedAt: number; // Unix timestamp
}

export type FrequencyPeriod = 'day' | 'week' | 'month';
