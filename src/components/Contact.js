import React, { useState } from "react";
import contactBackground from "../../images/contactbackground.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form successfully sent!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundAttachment: "fixed",
        filter: "brightness(0.7)", // Removed blur effect, only brightness adjustment
      }}
    >
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-xl p-10 max-w-lg w-full bg-opacity-90">
        {" "}
        {/* Updated container style */}
        <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
          {" "}
          {/* Updated font size, color */}
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {" "}
          {/* Increased spacing between inputs */}
          <div>
            <input
              className={`w-full p-4 border ${
                errors.name ? "border-red-500" : "border-transparent"
              } rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent`} // Enhanced input style
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              className={`w-full p-4 border ${
                errors.email ? "border-red-500" : "border-transparent"
              } rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent`} // Enhanced input style
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              className={`w-full p-4 border ${
                errors.message ? "border-red-500" : "border-transparent"
              } rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent`} // Enhanced textarea style
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300" // Enhanced button style
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
