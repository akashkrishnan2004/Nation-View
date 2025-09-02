import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/home";
import CountryDetails from "./components/countryDetails/countryDetails";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

export default function AppRoute() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
