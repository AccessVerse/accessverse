import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10_000,
  withCredentials: true,
  // headers: {},
});

export default axiosClient;
