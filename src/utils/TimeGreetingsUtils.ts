import { getFirstName } from "./UserUtils";

/**
 * Gets a time-based greeting based on the current hour
 * Works with both 12-hour and 24-hour system settings
 * @returns Time-appropriate greeting string
 */
export const getTimeBasedGreeting = (): string => {
	const hour = new Date().getHours();

	if (hour >= 5 && hour < 12) {
		return "Good morning";
	} else if (hour >= 12 && hour < 17) {
		return "Good afternoon";
	} else if (hour >= 17 && hour < 21) {
		return "Good evening";
	} else {
		return "Good night";
	}
};

/**
 * Gets the full greeting message with time-based greeting and first name
 * @param fullName - The user's full name
 * @returns Complete greeting message
 */
export const getFullGreeting = (fullName: string): string => {
	const firstName = getFirstName(fullName);
	const greeting = getTimeBasedGreeting();
	return `${greeting}, ${firstName}`;
};
