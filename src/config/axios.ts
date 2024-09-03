import { AUTH_TOKEN } from "@/constants";
import axios from "axios";
import { getCookie } from "cookies-next";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getCookie(AUTH_TOKEN)}`
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie(AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Error Response:', error.response);  
    }
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - possibly invalid token');
    }
    return Promise.reject(error);
  }
);
