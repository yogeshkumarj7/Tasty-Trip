import React from "react";
import CategoryList from "./CategoryList";
const RestaurantCategory = ({ data }) => {
//   console.log(data);

  return (
    <div>
      <div className="w-6/12 mx-auto rounded-lg bg-violet-300 my-3 flex p-4 cursor-pointer">
        <div className="flex justify-between">
          <span className="font-bold">
            
            {data.title} ({data.itemCards.length}) 
          </span>
          <span>
            <i className="fa-solid fa-chevron-down"></i> 
          </span>
        </div>
      </div>
      <CategoryList items={data.itemCards} />
    </div>
  );
};

{
  /* <div>
      <div className="w-6/12 p-2 mx-auto rounded-lg bg-violet-300 my-3 flex p-4 cursor-pointer">
        <div className="flex justify-between">
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <CategoryList data={data.itemCards} />
      </div>
    </div> */
}
export default RestaurantCategory;
