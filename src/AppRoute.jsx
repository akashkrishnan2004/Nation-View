import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/home";
import CountryDetails from "./components/countryDetails/countryDetails";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

import "./App.css";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="appRoute">

        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
