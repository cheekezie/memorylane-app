"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LoadingProvider } from "@/utils/loading-context";
import { AppInitializer } from "@/components/AppInitializer";
import LayoutContent from "@/components/LayoutContent";
import { ReactNode } from "react";
import { AuthProvider } from "@/providers/AuthProvider";

interface ClientProvidersProps {
	children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
	return (
		<SessionProvider>
			<AuthProvider>
				<ThemeProvider>
					<LoadingProvider>
						<AppInitializer>
							<LayoutContent>{children}</LayoutContent>
						</AppInitializer>
					</LoadingProvider>
				</ThemeProvider>
			</AuthProvider>
		</SessionProvider>
	);
}
