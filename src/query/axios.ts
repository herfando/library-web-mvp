// src/utils/axios.ts
import axios from 'axios';

// Base URL API
const BASE_URL = 'http://localhost:5173'; // ganti sesuai server lokalmu

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan token secara otomatis
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // ambil token dari localStorage
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
