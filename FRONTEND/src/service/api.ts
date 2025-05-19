import axios from "axios"

const apiURL = import.meta.env.VITE_API_URL
const getToken = () => {
  return localStorage.getItem("token"); 
};
const api = axios.create({
  baseURL: apiURL, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
