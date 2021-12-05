import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/globalFeed";
import CardPage from "./pages/cardPage/cardPage";
import BottomNav from "./shared/topBar/bottomNav/bottomNav";
import HamburgerMenu from "./shared/topBar/hamburgerMenu/hamburgerMenu";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed></GlobalFeed>}></Route>
      <Route path='/products/:id' element={<CardPage></CardPage>}></Route>
      <Route
        path='/productssss'
        element={<HamburgerMenu></HamburgerMenu>}></Route>
    </Routes>
  );
};
export default AllRoutes;
