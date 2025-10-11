"use client";

import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";
//import cacheService from "@/app/core/services/cache.service";

interface AuthContextType {
	isAuthenticated: boolean;
	loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const checkAuth = () => {
			const publicPaths = ["/", "/login", "/register"];
			const normalizedPathname =
				pathname?.toLowerCase().replace(/\/$/, "") || "";
			const isPublicPage = publicPaths.includes(normalizedPathname);

			// Temporarily  authenticate without cache check
			setIsAuthenticated(true);
			setLoading(false);

			// try {
			// 	const credentials = cacheService.getCredentials();
			// 	const isAuth = !!credentials?.token;

			// 	setIsAuthenticated(isAuth);

			// 	if (isAuth && isPublicPage && normalizedPathname !== "/") {
			// 		router.push("/dashboard");
			// 	} else if (!isAuth && normalizedPathname.startsWith("/dashboard")) {
			// 		router.push("/login");
			// 	}
			// } catch (error) {
			// 	console.error("Error checking auth:", error);
			// 	setIsAuthenticated(false);
			// 	if (!isPublicPage) {
			// 		router.push("/login");
			// 	}
			// } finally {
			// 	setLoading(false);
			// }
		};

		checkAuth();
	}, [router, pathname]);

	return (
		<AuthContext.Provider value={{ isAuthenticated, loading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
