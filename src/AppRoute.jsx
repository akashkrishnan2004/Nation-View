import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Footer from "./components/Footer";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
        <NavBar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/country/:id" element={<CountryDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
