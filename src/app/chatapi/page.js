'use client';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/chat';

export const startChat = async () => {
  // Backend now creates conversation only, no blank email
  const res = await axios.post(`${API_BASE}/start`);
  return res.data; // { conversationId, message }
};

export const sendMessage = async (userId, message) => {
  const res = await axios.post(`${API_BASE}/message`, { userId, message });
  return res.data;
};
