import cacheService from "./cache.service";
import requestService from "./request.service";
import {
	CreateAccountPayload,
	LoginPayload,
} from "@/types/interface/auth.interface";

class AuthService {
	async createAccount(payload: CreateAccountPayload): Promise<any> {
		try {
			const response = await requestService.post("/auth/register", payload);
			return response;
		} catch (error: any) {
			const errorMessage =
				error.error ||
				error.response?.data?.error ||
				error.message ||
				"Failed to create account";
			throw new Error(errorMessage);
		}
	}

	async login(payload: LoginPayload): Promise<any> {
		try {
			const response = await requestService.post("/auth/login", payload);
			return response;
		} catch (error: any) {
			const errorMessage =
				error.error ||
				error.response?.data?.error ||
				error.message ||
				"Failed to Login";
			throw new Error(errorMessage);
		}
	}

	googleLogin() {
		try {
			const response = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google/login`;
			return response;
		} catch (error: any) {
			const errorMessage =
				error.error ||
				error.response?.data?.error ||
				error.message ||
				"Failed to login with Google";
			throw new Error(errorMessage);
		}
	}

	logout() {
		try {
			cacheService.removeCredentials();
			cacheService.clearLocalStorage();
		} catch (error: any) {
			throw new Error(error.message || "Failed to logout");
		}
	}
}

const authService = new AuthService();
export default authService;
