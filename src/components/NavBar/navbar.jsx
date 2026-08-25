import { useState } from "react";
import "./Css/navbar.css";
import { Moon, Sun } from "lucide-react";

// import {}

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div>
      <nav className="nav1">
        <h2>Where in the World?</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </nav>
    </div>
  );
}
