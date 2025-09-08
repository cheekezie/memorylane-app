import { deleteCookie, getCookie, setCookie } from "cookies-next";

type CredentialData = Record<string, any>;

class CacheService {
	private readonly COOKIE_NAME = "_cred";

	storeCredentials(data: CredentialData): void {
		try {
			setCookie(this.COOKIE_NAME, JSON.stringify(data), {
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 30 * 24 * 60 * 60,
			});
		} catch (error) {
			console.error("Error storing credentials:", error);
			throw new Error("Failed to store credentials");
		}
	}

	getCredentials(): CredentialData | null {
		try {
			const cookie = getCookie(this.COOKIE_NAME) as string | undefined;
			return cookie ? JSON.parse(cookie) : null;
		} catch (error) {
			console.error("Error parsing cookie:", error);
			return null;
		}
	}

	removeCredentials(): void {
		deleteCookie(this.COOKIE_NAME);
	}

	saveToLocalStorage(key: string, value: any): void {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Error saving to localStorage:", error);
		}
	}

	getFromLocalStorage(key: string): any | null {
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : null;
		} catch (error) {
			console.error("Error retrieving from localStorage:", error);
			return null;
		}
	}

	clearLocalStorage(): void {
		localStorage.clear();
	}
}

const cacheService = new CacheService();
export default cacheService;
