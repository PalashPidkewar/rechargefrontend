// 'use client';
// import axios from 'axios';

// const API_BASE = 'http://localhost:5000/api/chat';

// export const startChat = async () => {
//   // Backend now creates conversation only, no blank email
//   const res = await axios.post(`${API_BASE}/start`);
//   return res.data; // { conversationId, message }
// };

// export const sendMessage = async (userId, message) => {
//   const res = await axios.post(`${API_BASE}/message`, { userId, message });
//   return res.data;
// };


'use client';
import axiosInstance from '../utils/axiosInstance'; // adjust path if needed

const API_BASE = '/api/chat'; // no need for full URL since axiosInstance has baseURL

// Start a new chat conversation
export const startChat = async () => {
  const res = await axiosInstance.post(`${API_BASE}/start`);
  return res.data; // { conversationId, message }
};

// Send a user message
export const sendMessage = async (userId, message) => {
  const res = await axiosInstance.post(`${API_BASE}/message`, { userId, message });
  return res.data;
};
