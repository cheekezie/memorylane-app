export interface User {
	email: string;
	email_verified: boolean;
	id: number;
	image_url?: string;
	name: string;
	oauth_id: string;
	oauth_provider: string;
	role: string;
}

export interface Credentials {
	token: string;
	user: User;
}
