"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";

const SidebarLayout = ({ children }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Show scroll to top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Newsroom Add", href: "/Dashboard" },
    { label: "All Newsroom", href: "/Dashboard_All_Newroom" },
    { label: "Newsroom Edit", href: "/Dashboard_All_NewsRoom_Update_Delete" },
    { label: "Newsletter Emails", href: "/Dashboard_Newletter_email" },
    { label: "NewsLetter_Send Email_", href: "/Dashboard_Send_email_NewsLetter" },
    { label: "Add Job (Requirement)", href: "/Dashboard_Add_Job" },
    { label: "Recived Job Application", href: "/Dashboard_All_Application_Recived" },
    
     { label: "Brands Logo Add ", href: "/Dashboard_Brand_Partner_Add_Show" },
      { label: "Brands Logo Delete ", href: "/Dashboard_brand_partner_Logo_Delete" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop & Tablet) */}
      <aside className="hidden md:flex w-52 bg-blue-400 text-white flex-col py-6 px-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar (Mobile Slide In) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white p-6 transform transition-transform duration-300 z-50 md:hidden
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 relative">
        {children}

        {/* Floating Sidebar Toggle Button (Mobile Only) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-27 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          title="Menu"
        >
          <FaBars size={20} />
        </button>

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            title="Back to top"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </main>
    </div>
  );
};

export default SidebarLayout;
