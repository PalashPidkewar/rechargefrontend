"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import SidebarLayout from "../components/SidebarLayout";

export default function BrandPartnerPage() {
  const [logos, setLogos] = useState([]);
  // const backendURL = "http://localhost:5000"; // 🧠 change if deployed

  // 🧠 Fetch all logos
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

  // 🧹 Delete Logo Button Component
  const DeleteLogoButton = ({ id }) => {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
      if (!confirm("Are you sure you want to delete this logo?")) return;

      setDeleting(true);
      try {
        const res = await axiosInstance.delete(`/api/brandpartners/${id}`);
        if (res.status === 200) {
          alert("Logo deleted successfully!");

          // Try local state update
          const updated = logos.filter(
            (l) => String(l.id) !== String(id) && String(l._id) !== String(id)
          );
          setLogos(updated);

          // Fallback: If not updated properly, refetch
          if (updated.length === logos.length) {
            await fetchLogos();
          }
        }
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete logo");
      } finally {
        setDeleting(false);
      }
    };

    return (
      <button
        onClick={handleDelete}
        disabled={deleting}
        className={`w-full px-3 py-1.5 rounded text-sm font-medium transition ${
          deleting ? "bg-gray-400" : "bg-red-600 hover:bg-red-700 text-white"
        }`}
      >
        {deleting ? "Deleting..." : "Delete"}
      </button>
    );
  };

  return (
    <SidebarLayout>
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-blue-700">
            🏢 Brand Partner Logos
          </h1>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {logos.length > 0 ? (
              logos.map((logo) => (
                <div
                  key={logo.id || logo._id}
                  className="flex flex-col items-center justify-between border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-24 flex items-center justify-center mb-3">
                    <img
                      src={`${axiosInstance.defaults.baseURL}/${logo.logo_path}`}
                      alt={`Brand-${logo.id || logo._id}`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23ddd"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">No Image</text></svg>';
                      }}
                    />
                  </div>

                  <DeleteLogoButton id={logo.id || logo._id} />
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
