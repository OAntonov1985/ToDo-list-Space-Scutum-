import { api } from './api';

export async function setNewTaskAPI(body) {
    try {
        const response = await api.post('/todos', body);
        return response.data;
    } catch (error) {
        return { error: error.message };
    };
};

export async function setTaskStatus(body) {
    try {
        const response = await api.patch('/todos', body);
        return response.data;
    } catch (error) {
        return { error: error.message };
    };
};

export async function deleteTaskAPI(id) {
    try {
        const response = await api.delete(`/todos/${id}`);
        return response.data;
    } catch (error) {
        return { error: error.message };
    };
};

export async function saveChangesInTask(id, body) {
    try {
        const response = await api.put(`/todos/${id}`, body);
        return response.data;
    } catch (error) {
        return { error: error.message };
    };
};