import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data)