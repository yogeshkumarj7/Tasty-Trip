import React, { useState } from "react";
import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { motion } from "framer-motion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);
  const [indextoShow, setindextoShow] = useState(null);

  const { name, cuisines } = menuData?.cards[2]?.card?.card?.info || {};

  const filterCategories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      .filter((category) => {
        const validItems = category.card.card.itemCards.filter(
          (item) => item?.card?.info?.imageId && item?.card?.info?.description
        );
        return validItems.length > 0;
      });

  if (menuData == null) {
    return <Loading />;
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        {name}
      </h1>
      <p className="text-gray-600 mb-6">{cuisines?.join(" ,")}</p>

      <div className="space-y-6">
        {filterCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showResCategory={index === indextoShow}
            isOpen={index === indextoShow}
            setindextoShow={() =>
              setindextoShow(index === indextoShow ? null : index)
            }
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RestaurantMenu;

//..........

// import React, { useState } from "react";
// import Loader from "../utils/Loader"; // Import Loader
// import { useSelector } from "react-redux"; // Import Redux selector
// import { useParams } from "react-router-dom";
// import useMenuData from "../utils/useMenuData";
// import RestaurantCategory from "./RestaurantCategory";
// import { motion } from "framer-motion";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const menuData = useMenuData(resId);
//   const [indextoShow, setindextoShow] = useState(null);
//   const isLoading = useSelector((state) => state.loader.isLoading); // Get loader state

//   // Extract restaurant name & cuisines
//   const { name, cuisines } = menuData?.cards?.[2]?.card?.card?.info || {};

//   // Ensure menuData is valid before filtering categories
//   const filterCategories =
//     menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.filter(
//         (c) =>
//           c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//       )
//       ?.filter((category) => {
//         const validItems = category?.card?.card?.itemCards?.filter(
//           (item) => item?.card?.info?.imageId && item?.card?.info?.description
//         );
//         return validItems?.length > 0;
//       }) || []; // Default to an empty array if undefined

//   // Show Loader while loading OR if filterCategories is empty
//   if (isLoading || filterCategories.length === 0) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
//         {name}
//       </h1>
//       <p className="text-gray-600 mb-6">{cuisines?.join(", ")}</p>

//       <div className="space-y-6">
//         {filterCategories.map((category, index) => (
//           <RestaurantCategory
//             key={category?.card?.card?.title}
//             data={category?.card?.card}
//             showResCategory={index === indextoShow}
//             isOpen={index === indextoShow}
//             setindextoShow={() =>
//               setindextoShow(index === indextoShow ? null : index)
//             }
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default RestaurantMenu;
