"use client";

import React, {
	createContext,
	useContext,
	useTransition,
	useState,
} from "react";
import Link, { LinkProps } from "next/link";
import Loader from "@/components/Loader";

interface LoadingContextType {
	startLoading: () => void;
	stopLoading: () => void;
	setInitialLoading: (isLoading: boolean) => void;
	LoadingLink: React.FC<
		LinkProps & { children: React.ReactNode; className?: string }
	>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isPending, startTransition] = useTransition();
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	const startLoading = () => {
		startTransition(() => {});
	};

	const stopLoading = () => {
		// No-op: isPending resets automatically
	};

	const setInitialLoading = (isLoading: boolean) => {
		setIsInitialLoading(isLoading);
	};

	const LoadingLink: React.FC<
		LinkProps & { children: React.ReactNode; className?: string }
	> = ({ href, children, className, ...props }) => {
		const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
			if (!e.defaultPrevented) {
				startTransition(() => {});
			}
		};

		return (
			<Link href={href} className={className} onClick={handleClick} {...props}>
				{children}
			</Link>
		);
	};

	return (
		<LoadingContext.Provider
			value={{ startLoading, stopLoading, setInitialLoading, LoadingLink }}
		>
			{(isPending || isInitialLoading) && (
				<Loader text="Please wait..." theme="white" />
			)}
			{children}
		</LoadingContext.Provider>
	);
};

export const useLoading = () => {
	const context = useContext(LoadingContext);
	if (!context) {
		throw new Error("useLoading must be used within a LoadingProvider");
	}
	return context;
};
