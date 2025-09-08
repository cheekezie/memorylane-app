"use client";

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useLoading } from "@/utils/loading-context";

interface AppInitializerProps {
	children: React.ReactNode;
}

export function AppInitializer({ children }: AppInitializerProps) {
	const { loading } = useAuth();
	const { setInitialLoading } = useLoading();

	useEffect(() => {
		if (!loading) {
			setInitialLoading(false);
		}
	}, [loading, setInitialLoading]);

	return <>{children}</>;
}
