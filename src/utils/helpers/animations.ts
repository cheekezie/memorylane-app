import { Variants } from "framer-motion";

// Fade in animations
export const fadeIn = (
	direction: "up" | "down" | "left" | "right" = "up",
	delay: number = 0,
): Variants => {
	return {
		hidden: {
			y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
			x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 15,
				stiffness: 100,
				delay,
			},
		},
	};
};

// Staggered children animations
export const staggerContainer = (
	staggerChildren: number = 0.1,
	delayChildren: number = 0,
): Variants => {
	return {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren,
				staggerChildren,
			},
		},
	};
};

// Hover animations
export const hoverScale = {
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 },
	transition: { type: "spring", stiffness: 400, damping: 10 },
};

// Custom image reveal animation
export const imageReveal: Variants = {
	hidden: { scale: 1.2, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

export const textReveal: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};
