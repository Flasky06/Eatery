import React from "react";
import Home from "./Home";
import Searched from "./Searched";
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";
import Search from "../Components/Search";
import Recipe from "./Recipe";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Pages;
