import axios from "axios";
import {VITE_END_POINT} from "../config/env.js";
import {getToken} from "./storageService.js";

const apiClient = axios.create({
    baseURL: VITE_END_POINT,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.request.use(configs => {
    try {
        const token = getToken()
        if (token) configs.headers.authorization = `Bearer ${token}`
    } catch (e) {
        console.log(e)
    }

    return configs
})

apiClient.interceptors.response.use((res) => res, err => {
    const message = err?.response?.data?.message || "Something went wrong";

    window.dispatchEvent(new CustomEvent("SHOW_POPUP", {detail: {message, type: 'error'}}))
    return Promise.reject(err)
})

export default apiClient;