import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  console.log("CategoryList.js:", categories);
  return (
    <div className="category-list">
      {/* add link to each of these
      <CategoryCard id="potions" categoryData={categories[0]} />
      <CategoryCard id="charms" categoryData={categories[1]} />

      {categories.slice(2).map((category) => (
        <CategoryCard categoryData={category} />
      ))} */}
    </div>
  );
};

export default CategoryList;
