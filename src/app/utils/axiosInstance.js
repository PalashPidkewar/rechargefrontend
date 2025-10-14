// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://rechargebackendnew.onrender.com"
 

});
 //  baseURL: "https://recharge-cu59.onrender.com",
//   baseURL: "http://localhost:5000",
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
