import axios from 'axios';
import { API } from '../../utils/api';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export const fetchBooks = (params?: { page?: number; category?: string }) =>
  axiosInstance.get(API.BOOKS.LIST, { params }).then((res) => res.data);

export const fetchRecommendations = () =>
  axiosInstance.get(API.BOOKS.RECOMMEND).then((res) => res.data);

export const fetchCategories = () =>
  axiosInstance.get(API.CATEGORIES.LIST).then((res) => res.data);

export const fetchPopularAuthors = () =>
  axiosInstance.get(API.AUTHORS.LIST).then((res) => res.data);
