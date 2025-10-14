"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SidebarLayout from "../components/SidebarLayout";
export default function NewsroomTable() {
  const [newsData, setNewsData] = useState([]);

  // Fetch news data
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news/get")
      .then((res) => setNewsData(res.data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (<SidebarLayout>
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Newsroom</h1>

          {newsData.length === 0 ? (
            <p className="text-gray-900">Loading news...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-50 text-black">
                  <tr>
                    <th className="px-4 py-2 border-b">#</th>
                    <th className="px-4 py-2 border-b">Image</th>
                    <th className="px-4 py-2 border-b">Title</th>
                    <th className="px-4 py-2 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {newsData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b text-center text-black">{index + 1}</td>
                      <td className="px-4 py-2 border-b text-black">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-32 h-20 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border-b font-semibold text-black">{item.title}</td>
                      <td className="px-4 py-2 border-b text-black">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
    </SidebarLayout>
  );
}
