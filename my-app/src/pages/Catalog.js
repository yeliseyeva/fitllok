import React from "react";
import Conteiner from "../Components/Conteiner/Conteiner";
import { Route, Routes, useLocation } from "react-router-dom";
// import CardsItems from "../Components/Catalog/Leggins/Leggins";
import LegginsItem from "../Components/Catalog/Items/LegginsItem";
import Categories from "../Components/Catalog/Categories/Categories";
import TopsItem from "../Components/Catalog/Items/TopsItem";
import ComplectsItem from "../Components/Catalog/Items/ComplectsItem";
import CasualItem from "../Components/Catalog/Items/CasualItem";




function CatalogPage() {

  return (
    <>
    <Conteiner>
      <Categories/>
      <Routes>
        <Route path="/leggins" element={<LegginsItem />} />
        <Route path="/tops" element={<TopsItem />} />
        <Route path="/complects" element={<ComplectsItem />} />
        <Route path="/casual" element={<CasualItem />} />
      </Routes>
    </Conteiner>
    </>
  );
}

export default CatalogPage;




