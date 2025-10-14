"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import SidebarLayout from "../components/SidebarLayout";

export default function NewsroomTable() {
  const [newsData, setNewsData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Fetch news data
  const fetchNews = async () => {
    try {
      const res = await axiosInstance.get("/api/news/get");
      setNewsData(res.data);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Delete news
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this news?")) return;
    try {
      await axiosInstance.delete(`/api/news/delete/${id}`);
      fetchNews();
    } catch (err) {
      console.error("Error deleting news:", err);
    }
  };

  // Start editing
  const handleEdit = (news) => {
    setEditId(news.id);
    setEditTitle(news.title);
    setEditDescription(news.description);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditId(null);
    setEditTitle("");
    setEditDescription("");
  };

  // Submit update
  const handleUpdate = async (id) => {
    try {
      await axiosInstance.put(`/api/news/edit/${id}`, {
        title: editTitle,
        description: editDescription,
      });
      setEditId(null);
      setEditTitle("");
      setEditDescription("");
      fetchNews();
    } catch (err) {
      console.error("Error updating news:", err);
    }
  };

  return (
    <SidebarLayout>
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
                      <th className="px-4 py-2 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsData.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                        <td className="px-4 py-2 border-b">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-32 h-20 object-cover rounded"
                          />
                        </td>
                        <td className="px-4 py-2 border-b">
                          {editId === item.id ? (
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="border rounded px-2 py-1 w-full"
                            />
                          ) : (
                            item.title
                          )}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {editId === item.id ? (
                            <input
                              type="text"
                              value={editDescription}
                              onChange={(e) => setEditDescription(e.target.value)}
                              className="border rounded px-2 py-1 w-full"
                            />
                          ) : (
                            item.description
                          )}
                        </td>
                        <td className="px-4 py-2 border-b space-x-2">
                          {editId === item.id ? (
                            <>
                              <button
                                onClick={() => handleUpdate(item.id)}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleEdit(item)}
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </td>
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
