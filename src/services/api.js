import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const submitEnquiry = async (enquiryData) => {
  try {
    const response = await api.post('/enquiries', enquiryData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw new Error(error.message || 'Unable to submit enquiry. Please check your connection.');
  }
};

export const submitContact = async (contactData) => {
  try {
    const response = await api.post('/contact', contactData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw new Error(error.message || 'Unable to send message. Please check your connection.');
  }
};

export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    return { status: 'offline', error: error.message };
  }
};

export default api;
