import React from "react";
import CatalogList from "../Components/Catalog/CatalogList/CatalogList";
import Conteiner from "../Components/Conteiner/Conteiner";
import { Route, Routes } from "react-router-dom";
// import CardsItems from "../Components/Catalog/Leggins/Leggins";
import LegginsItem from "../Components/Catalog/LegginsItem/LegginsItem";
import ButtonGroup from "../Components/Catalog/CardsCatalog/ButtonGroup";

function CatalogPage() {
  return (
    <>
    <Conteiner>
      <ButtonGroup/>
      {/* <CatalogList /> */}
    </Conteiner>
    <Conteiner>
      <Routes>
        <Route path="leggins" element={<LegginsItem />} />
      </Routes>
    </Conteiner>
    </>
  );
}

export default CatalogPage;
