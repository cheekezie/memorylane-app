/**
 * Extracts the first name from a full name string
 * @param fullName - The full name string
 * @returns The first name
 */
export const getFirstName = (fullName: string): string => {
	return fullName.trim().split(" ")[0];
};

/**
 * Gets the first initial from a name (uppercase)
 * @param name - The name string
 * @returns The first initial in uppercase
 */
export const getFirstInitial = (name: string): string => {
	const firstName = getFirstName(name);
	return firstName.charAt(0).toUpperCase();
};
