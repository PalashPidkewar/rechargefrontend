"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import SidebarLayout from "../components/SidebarLayout";

export default function BrandPartnerPage() {
  const [file, setFile] = useState(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  // ✅ Fetch existing logos
  const fetchLogos = async () => {
    try {
      const res = await axiosInstance.get("/api/brandpartners");
      setLogos(res.data || []);
    } catch (err) {
      console.error("Error fetching logos:", err);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  // ✅ Handle file select
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  // ✅ Handle upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a logo");

    const formData = new FormData();
    formData.append("logo", file);

    setLoading(true);
    try {
      await axiosInstance.post("/api/brandpartners/brandLogoupload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      setPreview(null);
      alert("Logo uploaded successfully!");
      fetchLogos();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload logo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarLayout>
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-blue-700">
            🏢 Brand Partner Logos
          </h1>

          {/* ✅ Upload Form */}
          <form
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            onSubmit={handleUpload}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-20 h-20 object-cover rounded border"
              />
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </form>

          {/* ✅ Logos Grid (No Delete Button) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {logos.length > 0 ? (
              logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-24 flex items-center justify-center">
                    <img
                      src={`http://localhost:5000/${logo.logo_path}`}
                      alt={`Brand-${logo.id}`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">No Image</text></svg>';
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-center py-8">
                No logos uploaded yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
