import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/globalFeed";
import CardPage from "./pages/cardPage/cardPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed></GlobalFeed>}></Route>
      <Route path='/products/:id' element={<CardPage></CardPage>}></Route>
    </Routes>
  );
};
export default AllRoutes;
