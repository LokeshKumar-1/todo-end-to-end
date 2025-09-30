import apiClient from "../apiClient.js";

export const registerUser = async (content) => {
    try {
        const response = await apiClient.post("/auth/signup", content);
        if (response.status === 200 || response.status === 201) {
            return response?.data
        }
        return null
    } catch (e) {
        console.log(e, "error")
        return null
    }
}

export const loginUser = async (content) => {
    try {
        const response = await apiClient.post("/auth/login", content);
        console.log(response, "response")
        if (response.status === 200 || response.status === 201) {
            console.log("entered if")
            return response?.data
        }
        return null
    } catch (e) {
        console.log(e, "error")
        return null
    }
}