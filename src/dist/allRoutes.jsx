import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/globalFeed";
import SingleProduct from "./pages/singleProduct/singleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed></GlobalFeed>}></Route>
      <Route path='/product/' element={<SingleProduct></SingleProduct>}></Route>
    </Routes>
  );
};
export default AllRoutes;
