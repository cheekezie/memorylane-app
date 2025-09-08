export interface CreateAccountPayload {
	name: string;
	email: string;
	password: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface ForgotPasswordPayload {
	email: string;
}

export interface ResetPasswordPayload {
	code: string;
	password: string;
	confirm_password: string;
}

export interface ChangePasswordPayload {
	old_password: string;
	password: string;
}
