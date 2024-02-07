import React from "react";
import CategoryList from "./Categories/CategoryList";
import HogwartsLogo from "./Header/HogwartsLogo";
import "./Home.css";

const Home = ({ categories }) => {
  console.log(categories);
  return (
    <div className="home">
      <HogwartsLogo />
      <CategoryList categories={categories} />
      <div>hello</div>
    </div>
  );
};

export default Home;
