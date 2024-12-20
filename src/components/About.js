import React from "react";
import {
  Users,
  Star,
  Truck,
  ChefHat,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import aboutbg from "../../images/TRIP.png";

const About = () => {
  const stats = [
    {
      label: "Cities Served",
      value: "120+",
      icon: <Users className="w-8 h-8 text-teal-600 mb-2" />,
    },
    {
      label: "Deliveries",
      value: "1M+",
      icon: <Truck className="w-8 h-8 text-teal-600 mb-2" />,
    },
    {
      label: "Top Rated",
      value: "4.8/5",
      icon: <Star className="w-8 h-8 text-teal-600 mb-2" />,
    },
    {
      label: "Chefs",
      value: "200+",
      icon: <ChefHat className="w-8 h-8 text-teal-600 mb-2" />,
    },
  ];

  const socialLinks = [
    { name: "Facebook", link: "#", icon: <Facebook className="w-6 h-6" /> },
    { name: "Twitter", link: "#", icon: <Twitter className="w-6 h-6" /> },
    { name: "Instagram", link: "#", icon: <Instagram className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64 rounded-lg"
        style={{ backgroundImage: `url()` }}
      >
        {/* ${aboutbg} */}
        <div className="absolute inset-0 bg-teal-800 opacity-40 rounded-lg"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 max-w-lg text-center text-lg">
            Bringing delicious food to your doorstep, fast and fresh.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-semibold text-teal-600">
              {stat.value}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mt-16 max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg text-center">
          Our mission is to connect people with the best food experiences
          through technology. We aim to empower local chefs and restaurants to
          reach their customers while ensuring fast and reliable service.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          Connect with Us
        </h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-transform transform hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Developer Link Section */}
      <div className="mt-16 text-center">
        <a
          href="/developer"
          rel="noopener noreferrer"
          className="text-teal-600 text-lg font-semibold underline hover:text-teal-800"
        >
          Meet the Developer
        </a>
      </div>
    </div>
  );
};

export default About;
