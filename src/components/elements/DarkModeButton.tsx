"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="p-3 rounded-full bg-background hover:bg-foreground/5 transition-all duration-300 hover:scale-110 active:scale-95"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDark ? (
				<Sun className="h-5 w-5 text-primary" aria-hidden="true" />
			) : (
				<Moon className="h-5 w-5 text-secondary" aria-hidden="true" />
			)}
		</button>
	);
};

export default DarkModeButton;
