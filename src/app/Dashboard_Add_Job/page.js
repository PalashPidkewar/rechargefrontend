'use client';

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import SidebarLayout from '../components/SidebarLayout';

export default function CreateJobPage() {
  const [form, setForm] = useState({
    title: '',
    post_date: new Date().toISOString().slice(0, 10),
    experience_required: '',
    required_skills: ''
  });

  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  // Handle input change
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      const res = await axiosInstance.post('/api/job', form);
      setMsg({ type: 'success', text: res.data.message || 'Job created successfully ✅' });
      setForm({
        title: '',
        post_date: new Date().toISOString().slice(0, 10),
        experience_required: '',
        required_skills: ''
      });
      fetchJobs(); // Refresh job list after creation
    } catch (err) {
      setMsg({ type: 'error', text: err.response?.data?.error || err.message });
    } finally {
      setLoading(false);
    }
  };

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      setJobsLoading(true);
      const res = await axiosInstance.get('/api/'); // Get all jobs
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <SidebarLayout>
      <main className="min-h-screen bg-white p-4 md:p-6 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
          
          {/* Left: Create Job Form */}
          <div className="w-full md:w-3/5 lg:w-2/5 bg-gray-100 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Create Job Post
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Job Title"
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="date"
                  name="post_date"
                  value={form.post_date}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-3 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  name="experience_required"
                  value={form.experience_required}
                  onChange={handleChange}
                  placeholder="Experience Required"
                  className="w-full sm:w-1/2 p-3 rounded bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                name="required_skills"
                value={form.required_skills}
                onChange={handleChange}
                placeholder="Required skills (comma separated)"
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              ></textarea>
              {msg && (
                <div
                  className={`p-2 rounded text-center font-medium ${
                    msg.type === 'error' ? 'bg-red-600' : 'bg-green-600'
                  } text-white`}
                >
                  {msg.text}
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 rounded text-white transition ${
                    loading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Jobs List */}
          <div className="w-full md:w-2/5 lg:w-3/5 bg-gray-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              All Jobs
            </h2>

            {jobsLoading ? (
              <p className="text-gray-700 text-center">Loading jobs...</p>
            ) : jobs.length === 0 ? (
              <p className="text-gray-700 text-center">No jobs available.</p>
            ) : (
              <ul className="space-y-3 max-h-[70vh] overflow-y-auto">
                {jobs.map((job) => (
                  <li
                    key={job.id}
                    className="p-3 bg-white border border-gray-300 rounded shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 text-sm">
                      Date: {new Date(job.post_date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Experience: {job.experience_required || 'N/A'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Skills: {job.required_skills || 'N/A'}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </main>
    </SidebarLayout>
  );
}
