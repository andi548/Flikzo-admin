import axios from "axios";
const API = "http://172.232.78.160:8000/api/category";

export const createCategory = async (data) => {
  return await axios.post(`${API}`, data);
};

export const getCategory = async () => {
  return await axios.get(`${API}`);
};

export const deleteCategory = async (id) => {
  return await axios.delete(`${API}/${id}`);
};
