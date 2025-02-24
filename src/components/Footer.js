// import React from "react";

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-white shadow-sm border-t border-gray-200">
//       <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//           {/* Left Section - Legal Links */}
//           <div className="flex items-center space-x-4 text-gray-600">
//             <a
//               href="#privacy-policy"
//               className="hover:text-teal-500
//                transition-colors duration-300 text-sm"
//             >
//               Privacy Policy
//             </a>
//             <span className="text-gray-300">|</span>
//             <a
//               href="#terms-of-use"
//               className="hover:text-teal-500
//                transition-colors duration-300 text-sm"
//             >
//               Terms of Use
//             </a>
//           </div>

//           {/* Middle Section - Branding and Credit */}
//           <div className="text-center text-sm text-gray-700">
//             <a href="https://github.com/yogeshkumarj7/Tasty-Trip">
//               <span className="font-semibold text-amber-500">Tasty Trip </span>
//             </a>
//             | Created & Designed by{" "}
//             <a
//               href="https://github.com/yogeshkumarj7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-teal-600 hover:text-teal-900 font-bold transition-colors duration-300 inline-flex items-center"
//             >
//               YOGI
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="ml-1"
//               >
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//               </svg>
//             </a>
//           </div>

//           {/* Right Section - Copyright */}
//           <div className="flex items-center text-gray-500 text-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="mr-1"
//             >
//               <circle cx="12" cy="12" r="10" />
//               <path d="M14.5 9a3.5 3.5 0 0 0-5 0" />
//               <path d="M9 12v3h6" />
//             </svg>
//             <span>{year} Tasty Trip. All Rights Reserved.</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


//...................

import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const year = new Date().getFullYear();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <footer className={`w-full shadow-sm border-t transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section - Legal Links */}
          <div className={`flex items-center space-x-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <a
              href="#privacy-policy"
              className={`transition-colors duration-300 text-sm hover:text-teal-500 ${
                isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-500'
              }`}
            >
              Privacy Policy
            </a>
            <span className={isDarkMode ? 'text-gray-600' : 'text-gray-300'}>|</span>
            <a
              href="#terms-of-use"
              className={`transition-colors duration-300 text-sm hover:text-teal-500 ${
                isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-500'
              }`}
            >
              Terms of Use
            </a>
          </div>

          {/* Middle Section - Branding and Credit */}
          <div className={`text-center text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <a href="https://github.com/yogeshkumarj7/Tasty-Trip">
              <span className="font-semibold text-amber-500">Tasty Trip </span>
            </a>
            | Created & Designed by{" "}
            <a
              href="https://github.com/yogeshkumarj7"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold transition-colors duration-300 inline-flex items-center ${
                isDarkMode 
                  ? 'text-teal-400 hover:text-teal-300' 
                  : 'text-teal-600 hover:text-teal-900'
              }`}
            >
              YOGI
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>

          {/* Right Section - Copyright */}
          <div className={`flex items-center text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.5 9a3.5 3.5 0 0 0-5 0" />
              <path d="M9 12v3h6" />
            </svg>
            <span>{year} Tasty Trip. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;