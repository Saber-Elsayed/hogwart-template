import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA } from "./Constants";
import HogwartNavbar from "./components/Header/HogwartNavbar";
import Entities from "./components/Entities/Entities";
import EntityDescription from "./components/Entities/EntityDescription";
import About from "./components/About";

const App = (props) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [potions, setPotions] = useState(POTIONS_DATA);
  const [charms, setCharms] = useState(CHARMS_DATA);
  const STATE_MAP = {
    potions: potions,
    charms: charms,
  };

  const getCategoryData = (category) => {
    console.log(category);
    return STATE_MAP[category];
  };
  return (
    <Router>
      <div>
        <div className="App">
          <HogwartNavbar />
          <ul>
            <li>
              <Link to="/wiki/potions">Potions</Link>
            </li>
            <li>
              <Link to="/wiki/charms">Charms</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home getCategoryData={getCategoryData} />}
          />
          <Route
            path="/wiki/:category"
            element={<Entities getCategoryData={getCategoryData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
