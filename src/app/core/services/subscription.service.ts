import { NewsLetterSubscriptionPayload } from "@/types/interface/subscription.interface";
import requestService from "./request.service";

class SubscriptionService {
	async handleNewsletterSubscription(
		payload: NewsLetterSubscriptionPayload,
	): Promise<any> {
		try {
			const response = await requestService.post(
				"/newsletter/subscribe",
				payload,
			);
			return response;
		} catch (error: any) {
			const errorMessage =
				error.error ||
				error.response?.data?.error ||
				error.message ||
				"Failed to subscribe to our newsletter";
			throw new Error(errorMessage);
		}
	}
}

const subscriptionService = new SubscriptionService();

export default subscriptionService;
