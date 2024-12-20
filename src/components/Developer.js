import React from "react";
import {
  Users,
  Clock,
  ThumbsUp,
  Utensils,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Link,
} from "lucide-react";
import User from "./User";

const Developer = () => {
  const stats = [
    {
      label: "Cities",
      value: "100+",
      icon: <Users className="w-6 h-6 text-teal-500 mb-2" />,
    },
    {
      label: "Delivery Time",
      value: "30 mins",
      icon: <Clock className="w-6 h-6 text-teal-500 mb-2" />,
    },
    {
      label: "Happy Customers",
      value: "10K+",
      icon: <ThumbsUp className="w-6 h-6 text-teal-500 mb-2" />,
    },
    {
      label: "Restaurants",
      value: "500+",
      icon: <Utensils className="w-6 h-6 text-teal-500 mb-2" />,
    },
  ];

  const techStack = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Java",
    "UI/UX Design",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/yogeshkumarj7",
      hoverColor: "hover:bg-gray-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: "#",
      hoverColor: "hover:bg-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/yogeshkumar-jagtap/",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "https://mail.google.com/",
      hoverColor: "hover:bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Developer Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Meet the Developer
        </h2>

        <div className="space-y-8">
          <div className="flex justify-center">
            <User />
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110 ${social.hoverColor} bg-gray-600`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            A passionate Frontend developer with a keen eye for design. I
            specialize in creating seamless web experiences using modern
            technologies. My focus is on writing clean, efficient code while
            ensuring beautiful and intuitive user interfaces.
          </p>

          {/* Portfolio Link */}
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-teal-600 font-bold text-lg hover:underline"
            >
              <Link className="w-5 h-5" />
              <span>View My Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
          Technical Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-6 py-2 bg-white rounded-full shadow-md text-black font-semibold
                         transform hover:scale-105 transition-all duration-300
                         hover:bg-teal-500 hover:text-white cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developer;
