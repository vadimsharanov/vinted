import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalFeed from "./pages/globalFeed/globalFeed";
import CardPage from "./pages/cardPage/cardPage";
import Modal from "./pages/cardPage/modal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GlobalFeed></GlobalFeed>}></Route>
      <Route path='/products/:id' element={<CardPage></CardPage>}></Route>
      <Route path='/productssss' element={<Modal></Modal>}></Route>
    </Routes>
  );
};
export default AllRoutes;
