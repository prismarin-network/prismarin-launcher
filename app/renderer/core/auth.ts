import {api} from "./api";

/* User registration flow */
export async function createEmailVerificationCode (email: string) {
    return await api.post('/auth/verification/create/email', {note: email})
}

export async function verifyEmailVerificationCode (code: string): Promise<boolean> {
    const response = await api.post('/auth/verification/verify', {code: parseInt(code)})
    return response.data
}

export async function registerUser (username: string, email: string, password: string, code: string): Promise<void> {
    return await api.post('/auth/register', {id: username, email, password, code: parseInt(code)})
}

/* User Authentication flow */
export async function authenticateUserWithLoginDetails(username: string, password: string): Promise<{user: InitialUser, token: string}> {
    const response = await api.post(`/auth/login/basic`, {id: username, password: password})
    return response.data
}

export async function authenticateUserWithToken(token: unknown): Promise<{user: InitialUser, token: string}> {
    const response = await api.post(`/auth/login/token`, {token: token})
    return response.data
}
