'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import SidebarLayout from "../components/SidebarLayout";

export default function NewsletterPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchNewsletterEmails = async () => {
    try {
      const res = await axiosInstance.get('/api/getnewletteremails');
      setEmails(res.data.data);
    } catch (err) {
      console.error('Error fetching emails:', err);
      setError('Failed to load newsletter emails');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsletterEmails();
  }, []);

  return (
   <SidebarLayout>
  <main className="bg-white p-6 flex justify-center mt-10">
    <div className="w-full max-w-3xl bg-gray-100 rounded-2xl shadow-xl p-6 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        📧 Newsletter Subscribers
      </h1>

      {loading && <p className="text-gray-700 text-center">Loading...</p>}
      {error && <p className="text-red-600 font-semibold text-center">{error}</p>}

      {!loading && emails.length === 0 && (
        <p className="text-gray-700 text-center">No subscribers found.</p>
      )}

      {!loading && emails.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </main>
</SidebarLayout>

  );
}
