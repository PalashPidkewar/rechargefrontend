'use client';

import ProtectedRoute from "../components/ProtectedRoute";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import SidebarLayout from "../components/SidebarLayout";

export default function DashboardPage() {
  const [form, setForm] = useState({ title: "", description: "" });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      if (file) formData.append("image", file);

      await axiosInstance.post("/api/news/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ News added successfully!");
      setForm({ title: "", description: "" });
      setFile(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding news");
    }
  };

  return (
    <ProtectedRoute>
      <SidebarLayout>
        <main className="min-h-screen bg-white p-6 flex items-center justify-center">
          <div className="w-full max-w-2xl md:max-w-3xl bg-gray-100 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
              🛠 Admin Dashboard
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter news title"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm sm:text-base"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Enter news description"
                  className="w-full border px-3 py-2 rounded h-28 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm sm:text-base"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full text-sm sm:text-base border px-3 py-2 rounded bg-white cursor-pointer
                  file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm sm:file:text-base file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded font-medium hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Add News
              </button>
            </form>
          </div>
        </main>
      </SidebarLayout>
    </ProtectedRoute>
  );
}
