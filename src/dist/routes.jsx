import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/globalFeed";
import Sample from "./pages/singleProduct/sample";
import SingleProduct from "./pages/singleProduct/singleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed></GlobalFeed>}></Route>
      <Route path='/products/:id' element={<Sample></Sample>}></Route>
    </Routes>
  );
};
export default AllRoutes;
