import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api', // Adjust the base URL as needed
  withCredentials: true, // Include credentials for CORS requests
}); 