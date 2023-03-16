import axios from "axios";
const API = "http://172.232.78.160:8000/api/offer";

export const createOffer = async (data) => {
    return await axios.post(`${API}`, data , {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

export const getOffer = async () => {
  return await axios.get(`${API}`);
};

export const deleteOffer = async (id) => {
  return await axios.delete(`${API}/${id}`);
};
