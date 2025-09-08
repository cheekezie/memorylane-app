export const handleNumericInputKeyDown = (
	event: React.KeyboardEvent<HTMLInputElement>,
) => {
	const validKeys = [
		"Backspace",
		"Delete",
		"ArrowLeft",
		"ArrowRight",
		"Tab",
		"Enter",
	];

	if (event.ctrlKey || event.metaKey || validKeys.includes(event.key)) {
		return;
	}

	if (!/[0-9]/.test(event.key)) {
		event.preventDefault();
	}
};
