/**
 * Date utility functions for habit tracking
 */

/**
 * Get the current Unix timestamp
 */
export function now(): number {
	return Date.now();
}

/**
 * Get the start of today (midnight)
 */
export function startOfToday(): number {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today.getTime();
}

/**
 * Get the start of this week (Monday)
 */
export function startOfWeek(): number {
	const today = new Date();
	const day = today.getDay();
	const diff = today.getDate() - day + (day === 0 ? -6 : 1);
	const monday = new Date(today.setDate(diff));
	monday.setHours(0, 0, 0, 0);
	return monday.getTime();
}

/**
 * Get the start of this month
 */
export function startOfMonth(): number {
	const today = new Date();
	const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
	firstDay.setHours(0, 0, 0, 0);
	return firstDay.getTime();
}

/**
 * Format a timestamp for display
 */
export function formatDate(timestamp: number): string {
	return new Date(timestamp).toLocaleDateString();
}

/**
 * Format a timestamp for time display
 */
export function formatTime(timestamp: number): string {
	return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
