import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API = axios.create({
  baseURL: baseUrl.endsWith("/api") ? baseUrl : `${baseUrl}/api`,
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;