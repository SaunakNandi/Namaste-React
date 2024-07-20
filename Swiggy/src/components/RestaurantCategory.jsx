import ItemList from "./ItemsList";
import React from "react";

const RestaurantCategory = ({ data, index, handleClick, showItem }) => {
  const clicked = () => {
    handleClick(index);
  };
  return (
    <>
      {/* Hearder */}
      {
        <div className="w-1/2 mx-auto my-4 bg-gray-100 shadow-lg p-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={clicked}
          >
            {/* Header Title */}
            <span className="font-bold text-lg">
              {data.title} ({data?.itemCards.length})
            </span>
            <span>⬇️</span>
            {/* Accordian Body */}
          </div>
          {showItem && <ItemList items={data.itemCards} />}
        </div>
      }
    </>
  );
};
export default RestaurantCategory;
