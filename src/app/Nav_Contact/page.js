'use client'; // Include this only if using inside /app

import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult('Sending...');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('access_key', '7de05cde-5699-4aa8-954b-6b23776b340f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-4 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10 mt-15">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold fonty  text-[#0078AE]  ">
          GET IN TOUCH WITH PATH RECHARGE
        </h2>
        <p className="text-gray-600 mt-2">
          We value communication and are eager to hear from you.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-xl">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-100 p-6 rounded-lg space-y-4"
        >
          <img
            src="/Image/logo.png"  // 👉 apna actual logo path yahan daalo
            alt="PATH Recharge Logo"
            className="w-24 h-24 object-contain"
          />
          {/* <h2 className="text-2xl font-bold text-gray-800">PATH Recharge</h2> */}
          <p className="text-gray-700">Prakash Asphaltings & Toll Highways (India) Ltd.</p>
          <p className="text-gray-700">
            <strong>Address:</strong> 76, Mall Rd, Dr. Ambedkar Nagar, MHOW, Indore, MP
          </p>
          <p className="text-gray-700"><strong>Phone:</strong> +91-7324-350100</p>
          <p className="text-gray-700"><strong>Email:</strong> path@pathltd.com</p>
          <p className="text-gray-700"><strong>CIN:</strong> U45203MP1996PLC011034</p>

          {/* Social Links */}
          <div className="pt-4 flex gap-4">
            <a href="https://www.facebook.com/pathltd/" target="_blank" rel="noreferrer" className="text-blue-600 text-xl hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/path_india/" target="_blank" rel="noreferrer" className="text-pink-500 text-xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in" target="_blank" rel="noreferrer" className="text-blue-700 text-xl hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h1 className="text-xl font-semibold text-gray-800">Contact Us</h1>

          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition flex items-center gap-2"
          >
            {loading ? <ClipLoader size={20} color="white" /> : 'Send Message'}
          </button>

          <p className="text-sm text-gray-600">{result}</p>
        </motion.form>
      </div>

      {/* Company Message */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-lg shadow-md fonty "
        >
          Path Recharge – Wayside Amenities is a value-driven initiative by PATH India Limited, aimed at enhancing the travel experience of highway commuters across India. Our mission is to offer safe, clean, and convenient rest and service points on national and state highways, ensuring comfort and accessibility for all travelers.
        </motion.p>
      </div>

      {/* Maps */}0
      <div className="mt-12 px-4 max-w-6xl mx-auto justify-center align-bottom">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-col-1  gap-8">
          <div>
            <h1 className="font-bold text-gray-800 mb-2 text-xl">Head Office - Mhow</h1>
            <iframe
              title="Path India Ltd Location"
              src="https://www.google.com/maps?q=76,+Mall+Rd,+Dr.+Ambedkar+Nagar,+MHOW,+Indore,+MP&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* <div>
            <h1 className="font-bold text-gray-800 mb-2 text-xl">PATH ENGINEERING (MANUFACTURING UNIT)</h1>
            <iframe
              title="Path Engineering Pvt Ltd Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9581053624433!2d75.76045207512463!3d22.505754979539386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f70026861e3b%3A0x86507d882bf7f942!2sPATH%20Engineering%20Private%20Limited!5e0!3m2!1sen!2sin!4v1757222886623!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
}
