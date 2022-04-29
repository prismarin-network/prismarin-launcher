import axios from "axios"

const API_URL = 'https://api.prismar.in/'

const DEFAULT_API = {
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
}

export function changeAPIToken(token: string) {
    return new Promise((resolve) => {
        const bearer = `Bearer ${token}`;

        api.defaults.headers['Authorization'] = bearer;
        resolve(true)
    })
}

export const api = axios.create({
    baseURL: API_URL,
    ...DEFAULT_API
});
