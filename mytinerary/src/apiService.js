import { data } from 'autoprefixer';
import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/cities`);
    return response.data;
    
  } catch (error) {
    throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/cities`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};
