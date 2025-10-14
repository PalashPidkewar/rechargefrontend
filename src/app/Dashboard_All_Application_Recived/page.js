'use client';

import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import SidebarLayout from '../components/SidebarLayout';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend base URL
  // const backendURL = 'http://localhost:5000';

  const fetchApplications = async () => {
    try {
      const res = await axiosInstance.get('/api/applications/applications');
      setApplications(res.data);
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <SidebarLayout>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          Job Applications
        </h1>

        {loading ? (
          <p className="text-gray-600 text-center">Loading applications...</p>
        ) : applications.length === 0 ? (
          <p className="text-gray-600 text-center">No applications found.</p>
        ) : (
          <div className="w-full overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-[700px] sm:min-w-full border border-gray-600 bg-white text-sm sm:text-base">
              <thead className="bg-blue-400 text-white">
                <tr>
                  <th className="p-3 text-left border">Job</th>
                  <th className="p-3 text-left border">Name</th>
                  <th className="p-3 text-left border">Email</th>
                  <th className="p-3 text-left border">Mobile</th>
                  <th className="p-3 text-left border">Skills</th>
                  <th className="p-3 text-left border">Color</th>
                  <th className="p-3 text-left border">Resume</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 text-gray-700">
                    <td className="p-3 border">{app.job_title}</td>
                    <td className="p-3 border">{app.name}</td>
                    <td className="p-3 border break-all">{app.email}</td>
                    <td className="p-3 border">{app.mobile}</td>
                    <td className="p-3 border">{app.skill || '-'}</td>
                    <td className="p-3 border">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          app.color === 'red'
                            ? 'bg-red-600'
                            : app.color === 'green'
                            ? 'bg-green-600'
                            : app.color === 'blue'
                            ? 'bg-blue-600'
                            : 'bg-gray-400'
                        }`}
                      >
                        {app.color || 'none'}
                      </span>
                    </td>
                    <td className="p-3 border">
                      {app.resume_path ? (
                        <a
                          href={`${axiosInstance.defaults.baseURL}/${app.resume_path}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}
