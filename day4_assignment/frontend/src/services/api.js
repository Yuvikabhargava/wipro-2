import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (data) => axios.post(`${API_URL}/tasks`, data);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
