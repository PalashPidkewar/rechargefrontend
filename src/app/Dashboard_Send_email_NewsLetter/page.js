'use client';

import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import SidebarLayout from '../components/SidebarLayout';
export default function NewsletterSender() {
  const [form, setForm] = useState({ subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axiosInstance.post('/api/newsletter/send', form);
      setStatus({ type: 'success', message: res.data.message });
      setForm({ subject: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to send',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarLayout>
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        📢 Send Newsletter
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Sending...' : 'Send Newsletter'}
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 text-center font-medium ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
    </SidebarLayout>
  );
}
