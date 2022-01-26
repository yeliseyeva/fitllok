import "./App.css";
import Header from "./Components/Header/Header";
// import Conteiner from './Components/Conteiner/Conteiner';
// import Hero from './Components/Hero/Hero';
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import CatalogPage from "./pages/Catalog";
import DeliveryPage from "./pages/Delivery";
import ContactsPage from "./pages/Contacts";
import CardPage from "./pages/Card";
import MobileMenu from "./pages/MobileMenu";

function App() {
  return (
    <>
      {/* <Conteiner> */}
      <Header />
      {/* </Conteiner> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog/*" element={<CatalogPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/menu" element={<MobileMenu />} />
      </Routes>
    </>
  );
}

export default App;
