import apiClient from "../apiClient.js";


export const getAllTodoService = async () => {
    try {
        const response = await apiClient.get("/dashboard/get/todo")
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        return null
    } catch (e) {
        console.log(e);
        return null
    }
}

export const addNewTodoService = async (newTodo) => {
    try {
        const response = await apiClient.post("/dashboard/add/todo", newTodo);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        return null
    } catch (e) {
        console.log(e);
        return null
    }
}

export const updateTodoService = async (bodyContent) => {
    try {
        const response = await apiClient.patch("/dashboard/update/todo", bodyContent)
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        return null
    } catch (e) {
        console.log(e)
        return null
    }
}

export const deleteTodoService = async (id) => {
    try {
        const response = await apiClient.delete(`/dashboard/delete/todo/${id}`)
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        return null
    } catch (e) {
        console.log(e)
        return null
    }
}