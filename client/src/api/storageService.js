import {VITE_STORAGE_KEY} from "../config/env.js";

export const storeToken = (token) => {
    try {
        localStorage.setItem(VITE_STORAGE_KEY, token)
    } catch (e) {
        console.error(e)
    }
}

export const getToken = () => {
    try {
        return localStorage.getItem(VITE_STORAGE_KEY)
    } catch (e) {
        console.error(e)
        return null
    }
}

export const deleteToken = () => {
    try {
        localStorage.removeItem(VITE_STORAGE_KEY)
    } catch (e) {
        console.error(e)
    }
}