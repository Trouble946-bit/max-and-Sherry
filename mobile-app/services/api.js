import axios from 'axios';

// Change this to your backend URL
// For local testing: http://10.0.2.2:3000 (Android Emulator)
// For local testing: http://localhost:3000 (iOS Simulator)
// For production: your deployed backend URL
const API_BASE_URL = 'http://10.0.2.2:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Menu API calls
export const getMenu = async () => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};

export const getMenuItemById = async (id) => {
  try {
    const response = await api.get(`/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu item:', error);
    throw error;
  }
};

export const getMenuByCategory = async (category) => {
  try {
    const response = await api.get(`/menu/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

// Order API calls
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrderById = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

export const getCustomerOrders = async (phone) => {
  try {
    const response = await api.get(`/orders/customer/${phone}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    throw error;
  }
};

export default api;
