import React from "react";

const CategoryList = ({ items }) => {
  return (
    <div className="space-y-4 w-6/12 mx-auto">
      {/* Filtered data to omit results without necessary info */}
      {items
        .filter(
          (item) =>
            item?.card?.info?.name &&
            item?.card?.info?.price &&
            item?.card?.info?.imageId &&
            item?.card?.info?.description &&
            item?.card?.info?.ratings?.aggregatedRating?.rating
        )
        .map((item) => (
          <div
            key={item.card.info.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex"
          >
            {/* Leftmost: Content Section */}
            <div className="flex-1 flex flex-col  justify-start text-left">
              {/* Name */}
              <span className="font-bold text-lg mb-2">
                {item.card.info.name}
              </span>

              {/* Price */}
              <span className="text-gray-500 text-sm mb-2 font-semibold">
                ₹{item.card.info.price / 100}
              </span>

              {/* Ratings and Count */}
              <span className="text-yellow-600 text-sm mb-2">
                {item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>

              {/* Description */}
              <span className="text-gray-700 text-sm">
                {item.card.info.description}
              </span>
            </div>

            {/* Right: Image Section */}
            <div className="w-40 h-40 flex-shrink-0 ml-4">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="w-full h-full rounded object-cover"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;

// import React from "react";

// const CategoryList = ({ items = [] }) => {
//   if (!Array.isArray(items) || items.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-64 text-gray-500">
//         <div className="text-center">No items available</div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4 w-6/12 mx-auto">
//       {items
//         .filter(
//           (item) =>
//             item?.card?.info?.name &&
//             item?.card?.info?.price &&
//             item?.card?.info?.imageId &&
//             item?.card?.info?.description &&
//             item?.card?.info?.ratings?.aggregatedRating?.rating
//         )
//         .map((item) => (
//           <div
//             key={item.card.info.id}
//             className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex bg-white"
//           >
//             {/* Leftmost: Content Section */}
//             <div className="flex-1 flex flex-col justify-start text-left pr-4">
//               {/* Name */}
//               <span className="font-bold text-xl mb-2 text-gray-800">
//                 {item.card.info.name}
//               </span>

//               {/* Price */}
//               <span className="text-green-600 text-lg mb-2 font-bold">
//                 ₹{item.card.info.price / 100}
//               </span>

//               {/* Ratings and Count */}
//               <div className="flex items-center mb-2">
//                 <span className="text-yellow-500 font-semibold mr-2">
//                   {item.card.info.ratings.aggregatedRating.rating} ★
//                 </span>
//                 <span className="text-gray-500 text-sm">
//                   ({item.card.info.ratings.aggregatedRating.ratingCountV2}{" "}
//                   ratings)
//                 </span>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-sm line-clamp-2">
//                 {item.card.info.description}
//               </p>
//             </div>

//             {/* Right: Image Section */}
//             <div className="w-48 h-48 relative flex-shrink-0">
//               <img
//                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
//                 alt={item.card.info.name}
//                 className="w-full h-full rounded-lg object-cover shadow-md"
//               />

//               {/* Cart Button Overlay */}
//               <button
//                 className="absolute bottom-2 left-1/2 transform -translate-x-1/2
//                            bg-green-500 text-white px-3 py-1
//                            rounded-full text-sm
//                            hover:bg-green-600 transition-colors
//                            shadow-md focus:outline-none"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default CategoryList;
