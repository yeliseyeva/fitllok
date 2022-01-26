import React from "react";
import Conteiner from "../Components/Conteiner/Conteiner";
import { Route, Routes, useLocation } from "react-router-dom";
// import CardsItems from "../Components/Catalog/Leggins/Leggins";
import LegginsItem from "../Components/Catalog/Items/LegginsItem";
import Categories from "../Components/Catalog/Categories/Categories";
import TopsItem from "../Components/Catalog/Items/TopsItem";
import ComplectsItem from "../Components/Catalog/Items/ComplectsItem";
import CasualItem from "../Components/Catalog/Items/CasualItem";
import ShortsItem from "../Components/Catalog/Items/ShortsItem";
import TshortsItem from "../Components/Catalog/Items/T_shortsItem";
import OverallsItem from "../Components/Catalog/Items/OverallsItems";

function CatalogPage() {
  return (
    <>
      <Conteiner>
        <Categories />
        <Routes>
          <Route path="/leggins/*" element={<LegginsItem />} />
          <Route path="/tops/*" element={<TopsItem />} />
          <Route path="/complects/*" element={<ComplectsItem />} />
          <Route path="/casual/*" element={<CasualItem />} />
          <Route path="/shorts/*" element={<ShortsItem />} />
          <Route path="/t_shorts/*" element={<TshortsItem />} />
          <Route path="/overalls/*" element={<OverallsItem />} />
        </Routes>
      </Conteiner>
    </>
  );
}

export default CatalogPage;
