import React from "react";
import contactBackground from "../../images/contactbackground.jpg";

const ContactUsPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundAttachment: "fixed",
        filter: "brightness(0.8)",
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full backdrop-blur-sm bg-opacity-90">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-6">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
