// "use client";

import apiClient from "./API";
import API_PATH from "./apiPath";


const login = async (body) => {
  const response = await apiClient.post(API_PATH.AUTH.SIGN_IN, body);
  return response?.data;
};

const authService = {
  login
};

export default authService;
