export const formatDate = (dateString: string): string => {
	if (!dateString) return "";

	try {
		const date = new Date(dateString);
		if (isNaN(date.getTime())) return dateString;

		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	} catch {
		return dateString;
	}
};
