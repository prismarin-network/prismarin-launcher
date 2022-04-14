import {api} from "./api";

export async function createEmailVerificationCode (email: string) {
    return await api.post('/auth/verification/create/email', {note: email})
}

export async function verifyEmailVerificationCode (code: string): Promise<boolean> {
    return await api.post('/auth/verification/verify', {code: parseInt(code)})
}

export async function registerUser (username: string, email: string, password: string, code: string): Promise<void> {
    return await api.post('/auth/register', {id: username, email, password, code: parseInt(code)})
}
