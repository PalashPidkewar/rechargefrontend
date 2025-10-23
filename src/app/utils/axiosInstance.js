// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL: "rechargebackendnew-pvbf.vercel.app",
 

});
 //  baseURL: "https://recharge-cu59.onrender.com",
//   baseURL: "http://localhost:5000",
// baseURL:"https://rechargefrontend.onrender.com"
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
