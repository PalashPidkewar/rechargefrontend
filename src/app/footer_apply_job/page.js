'use client';

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    contact_number: '',
    skill: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(job || null);
  const [showApplyForm, setShowApplyForm] = useState(!!job);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      setMessage({ type: 'error', text: 'Please upload PDF only.' });
      e.target.value = null;
      return;
    }
    setResumeFile(file);
    setMessage(null);
  };

  const handleApplyClick = (jobData) => {
    setSelectedJob(jobData);
    setShowApplyForm(true);
    setMessage(null);
  };

  const handleCloseForm = () => {
    setShowApplyForm(false);
    setSelectedJob(null);
    setForm({ name: '', mobile: '', email: '', address: '', contact_number: '', skill: '' });
    setResumeFile(null);
    setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.email) {
      setMessage({ type: 'error', text: 'Please fill name, mobile and email.' });
      return;
    }

    if (!selectedJob?.id) {
      setMessage({ type: 'error', text: 'Job ID is missing. Please try again.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const fd = new FormData();
      fd.append('job_id', selectedJob.id);
      Object.entries(form).forEach(([key, val]) => fd.append(key, val || ''));
      if (resumeFile) fd.append('resume', resumeFile);

      const res = await axiosInstance.post('/api/applications', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setMessage({ type: 'success', text: res.data?.message || 'Applied successfully!' });
      setForm({ name: '', mobile: '', email: '', address: '', contact_number: '', skill: '' });
      setResumeFile(null);
      
      // Close form after 2 seconds on success
      setTimeout(() => {
        handleCloseForm();
      }, 2000);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || 'Submission failed';
      setMessage({ type: 'error', text: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs from API
  const fetchJobs = async () => {
    try {
      setJobsLoading(true);
      const res = await axiosInstance.get('/api/');
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pb-5">
      {/* Banner Section */}
      <section className="w-full h-60 sm:h-80 md:h-96 mb-6">
        <img
          src="brandpatnerimg/careers-banner2.webp"
          alt="Infrastructure Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Heading Section */}
      <section className="w-full py-4 mb-4 bg-gray-100">
        <div className="flex items-center gap-2 px-4 sm:px-8">
          <img src="brandpatnerimg/next.png" alt="Arrow" className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800">
            Careers
          </h2>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="w-full max-w-6xl px-4 sm:px-8 py-4 text-center mb-6">
        <p className="text-md sm:text-lg text-gray-600">
          Welcome to <span className="font-semibold">PATH RECHARGE</span>
        </p>
        <p className="text-sm font-thin text-gray-600 mt-1">Careers Pages</p>
        <div className="w-40 border-b-2 border-gray-400 mt-2 mx-auto"></div>
      </section>

      <hr className="border-t border-gray-300 w-full mb-6" />

      {/* Company Info Section */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-8 md:px-16 py-4 mb-6 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Careers at Path Recharge</h2>
        <h3 className="text-lg sm:text-xl text-blue-600 font-medium">
          Build Your Future with Us
        </h3>
        <p className="text-gray-700 mt-2">
          At Path India Ltd., we believe our people are our greatest strength. As a leading
          infrastructure company, we are committed to building not just roads and highways
          but also careers that drive growth, innovation, and excellence. If you are
          passionate about making a difference in the infrastructure sector and want to
          be part of a dynamic, forward-thinking organization, Path India Ltd is the
          right place for you!
        </p>
      </section>

      {/* Jobs List Section */}
      <section className="w-full max-w-6xl mb-6 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Available Jobs</h2>
        {jobsLoading ? (
          <p className="text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-600">No jobs available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((j) => (
              <div
                key={j.id}
                className="p-4 border border-gray-300 rounded hover:shadow-lg transition-shadow bg-gray-50"
              >
                <h3 className="font-semibold text-gray-800 text-lg">{j.title}</h3>
                <p className="text-gray-600 text-sm">
                  Date: {new Date(j.post_date).toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm">
                  Experience: {j.experience_required || 'N/A'}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  Skills: {j.required_skills || 'N/A'}
                </p>
                <button
                  onClick={() => handleApplyClick(j)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Apply Form Modal */}
      {showApplyForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Apply for: <span className="text-blue-600">{selectedJob.title}</span>
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name*"
                  className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile number*"
                  className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address*"
                  className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  name="contact_number"
                  value={form.contact_number}
                  onChange={handleChange}
                  placeholder="Contact number (alt)"
                  className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                rows={3}
                className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <input
                name="skill"
                value={form.skill}
                onChange={handleChange}
                placeholder="Skill (optional)"
                className="px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Resume Upload */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Upload Resume (PDF)</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFile}
                  className="text-sm text-gray-700"
                />
                {resumeFile && <p className="text-xs text-gray-600 mt-1">{resumeFile.name}</p>}
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`text-sm p-2 rounded ${
                    message.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 justify-end mt-3">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Applying...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}