import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserIcon, MailIcon, MessageSquareIcon, SendIcon, LoaderIcon,
  Users, Clock, ThumbsUp, Utensils, Github, Twitter, Linkedin, Mail, Link
} from "lucide-react";
import User from "./User";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef(null);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResizeTextarea();
    setCharCount(formData.message.length);
  }, [formData.message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (validateForm()) {
      toast.success(
        <div className="flex items-center">Message sent successfully!</div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            marginTop: "60px",
          },
        }
      );

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }

    setIsSubmitting(false);
  };


  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat p-4 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : ''
      }`}
      style={{
        backgroundImage: 'url("/api/placeholder/1600/900")',
        backgroundBlendMode: "overlay",
        backgroundColor: isDarkMode ? "rgba(17, 24, 39, 0.8)" : "rgba(245, 245, 245, 0.7)",
      }}
    >
      <div className={`${
        isDarkMode 
          ? 'bg-gray-800/80 border-gray-700 text-gray-100' 
          : 'bg-white/80 border-gray-300 text-gray-800'
      } backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md border transition-colors duration-300`}>
        <h2 className={`text-3xl font-serif font-semibold mb-6 text-center ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input
              className={`w-full p-3 pl-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              } ${errors.name ? 'border-red-400' : ''}`}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input
              className={`w-full p-3 pl-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              } ${errors.email ? 'border-red-400' : ''}`}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute top-3 left-0 pl-3 pointer-events-none">
              <MessageSquareIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <textarea
              ref={textareaRef}
              className={`w-full p-3 pl-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300 resize-none overflow-hidden ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300 text-gray-900'
              } ${errors.message ? 'border-red-400' : ''}`}
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              maxLength={500}
            ></textarea>
            <div className="flex justify-between text-xs mt-1">
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
              <p className={`ml-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {charCount}/500
              </p>
            </div>
          </div>

          <button
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderIcon className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <SendIcon className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;