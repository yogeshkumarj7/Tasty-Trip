// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CategoryList from "./CategoryList";

// const RestaurantCategory = ({
//   data,
//   showResCategory,
//   setindextoShow,
//   isOpen,
// }) => {
//   return (
//     <div>
//       <motion.div
//         className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto rounded-lg bg-emerald-500 my-3 flex p-4 cursor-pointer"
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <div
//           className="flex justify-between w-full items-center"
//           onClick={setindextoShow}
//         >
//           <span className="font-bold text-white">
//             {data.title} ({data.itemCards.length})
//           </span>
//           <motion.span
//             animate={{ rotate: isOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <i className="fa-solid fa-chevron-down text-white"></i>
//           </motion.span>
//         </div>
//       </motion.div>
//       <AnimatePresence>
//         {showResCategory && <CategoryList items={data.itemCards} />}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default RestaurantCategory;

//............

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import Loader from "../utils/Loader"; // Import the Loader component

const RestaurantCategory = ({
  data,
  showResCategory,
  setindextoShow,
  isOpen,
}) => {
  const isLoading = useSelector((state) => state.loader.isLoading); // Get loader state

  return (
    <div>
      {/* Show loader when data is loading */}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <motion.div
            className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto rounded-lg bg-emerald-500 my-3 flex p-4 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="flex justify-between w-full items-center"
              onClick={setindextoShow}
            >
              <span className="font-bold text-white">
                {data.title} ({data.itemCards.length})
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fa-solid fa-chevron-down text-white"></i>
              </motion.span>
            </div>
          </motion.div>
          <AnimatePresence>
            {showResCategory && <CategoryList items={data.itemCards} />}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default RestaurantCategory;
