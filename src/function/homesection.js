import axios from 'axios';

const SECTION_API_BASE_URL = 'http://172.232.78.160:8000/api/homesection';

const createSection = (sectionData) => {
  return axios.post(`${SECTION_API_BASE_URL}`, sectionData);
};

const getSections = () => {
  return axios.get(`${SECTION_API_BASE_URL}`);
};

const getSectionById = (sectionId) => {
  return axios.get(`${SECTION_API_BASE_URL}/${sectionId}`);
};

const addProductToSection = (sectionId, productId) => {
  return axios.post(`${SECTION_API_BASE_URL}/${sectionId}/products/${productId}`);
};

const removeProductFromSection = (sectionId, productId) => {
  return axios.delete(`${SECTION_API_BASE_URL}/${sectionId}/products/${productId}`);
};

const deleteSection = (sectionId) => {
  return axios.delete(`${SECTION_API_BASE_URL}/${sectionId}`);
};

export {
  createSection,
  getSections,
  getSectionById,
  addProductToSection,
  removeProductFromSection,
  deleteSection,
};
