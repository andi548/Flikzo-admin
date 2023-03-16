import axios from "axios";
const API = "http://172.232.78.160:8000/api/vendor";

export const createVendor = async (data) => {
  return await axios.post(`${API}`, data);
};

export const getVendor = async () => {
  return await axios.get(`${API}`);
};

export const deleteVendor = async (id) => {
  return await axios.delete(`${API}/${id}`);
};
