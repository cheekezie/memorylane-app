import axios, { Axios, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import cacheService from "./cache.service";

class RequestService {
	baseUrl: string;
	axiosClient: Axios;

	constructor() {
		this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

		this.axiosClient = axios.create({
			baseURL: this.baseUrl,
			timeout: 30000,
		});

		this.axiosClient.interceptors.request.use(
			this.requestInterceptor.bind(this),
			this.errorHandler.bind(this),
		);
		this.axiosClient.interceptors.response.use(
			this.responseInterceptor.bind(this),
			this.errorHandler.bind(this),
		);
	}

	private async requestInterceptor(
		config: InternalAxiosRequestConfig,
	): Promise<InternalAxiosRequestConfig> {
		// Skip adding Authorization if already set ( for Google OAuth)
		if (!config.headers.get("Authorization")) {
			const credentials: any = cacheService.getCredentials();
			const token = credentials?.token;

			if (!credentials) {
				console.warn(
					"cacheService.getCookieDomain() returned null. Cookie may not be set or accessible. Skipping Authorization header.",
				);
			} else if (!token) {
				console.warn(
					"No token found in cacheService.getCookieDomain(). Credentials:",
					credentials,
					"Skipping Authorization header.",
				);
			} else {
				config.headers.set("Authorization", `Bearer ${token}`);
			}
		}

		if (config.data instanceof FormData) {
			config.headers.delete("Content-Type");
		} else {
			config.headers.set("Content-Type", "application/json");
		}

		return config;
	}

	private async responseInterceptor(response: AxiosResponse): Promise<any> {
		return response?.data;
	}

	private async errorHandler(error: any): Promise<never> {
		if (axios.isCancel(error)) {
			return Promise.reject({
				message: "Request was cancelled. Please try again.",
			});
		}
		return Promise.reject(
			error?.response?.data || {
				message:
					"Unable to perform request. Our engineers are looking into this error.",
			},
		);
	}

	async post<T>(
		url: string,
		data: T,
		headerConfig?: InternalAxiosRequestConfig,
	): Promise<any> {
		return this.axiosClient.post(url, data, headerConfig);
	}

	async get<T>(
		url: string,
		options?: InternalAxiosRequestConfig,
	): Promise<any> {
		return this.axiosClient.get<T>(url, options);
	}

	async put<T>(
		url: string,
		data: T,
		headerConfig?: InternalAxiosRequestConfig,
	): Promise<any> {
		return this.axiosClient.put(url, data, headerConfig);
	}

	async delete(url: string): Promise<any> {
		return this.axiosClient.delete(url);
	}
}

const requestService = new RequestService();
export default requestService;
