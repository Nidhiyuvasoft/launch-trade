import { logout } from "@/Redux/Slice/authSlice";
import store from "@/Redux/Store";
import axios from "axios";

import { toast } from "react-toastify";

const API_URL = "http://44.218.138.239/api/v1/";
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState()?.auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const token = store.getState()?.auth?.token;
      if (token) {
        toast.error("Your session has been expired, please login again");
        store.dispatch(logout());
      }
    } else if (error?.response?.status !== 400) {
      toast.error("An error occured, please contact to admin");
    }
    return error?.response;
  }
);

export default apiClient;
