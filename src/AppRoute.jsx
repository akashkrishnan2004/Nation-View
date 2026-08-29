import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails";
import Footer from "./components/footer";

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
