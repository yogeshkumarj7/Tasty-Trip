// import React, { useEffect } from "react";
// import { useState } from "react";
// const useResData = (API_URL) => {
//   const [resList, setresList] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = fetch(API_URL);
//       if (!response.ok) {
//         const err = (await response).status;
//         throw new Error(err);
//       } else {
//         const toJson = await response.json();
//         console.log(toJson);
//         console.log("cat");
//         // Checked swiggy res data

//         const checkJsonData = (jsonData) => {
//           for (let i = 0; i < jsonData?.data?.cards.length; i++) {
//             let checkData =
//               toJson.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
//                 ?.restaurants;

//             if (checkData !== undefined) {
//               return checkData;
//             }
//           }
//         };
//         const resData = checkJsonData(toJson);
//         setresList(resData);
//         setFilteredRestaurants(resData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return [resList];
// };

// export default useResData;
