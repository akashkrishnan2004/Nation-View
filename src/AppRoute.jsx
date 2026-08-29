import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <div className="appRoute">

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HomePage from "./components/home";
// import CountryDetails from "./components/countryDetails";
// import NavBar from "./components/navbar";
// import Footer from "./components/footer";

// import "./App.css";

// export default function AppRoute() {
//   return (
//     <BrowserRouter>
//       <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
//         <NavBar />

//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<HomePage />} />

//             <Route path="/country/:id" element={<CountryDetails />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }
