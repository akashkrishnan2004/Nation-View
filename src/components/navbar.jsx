import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            Where in the World?
          </h1>

          <p className="hidden text-xs text-slate-500 sm:block dark:text-slate-400">
            Explore countries around the globe
          </p>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="group flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          {darkMode ? (
            <>
              <Sun
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
              <span className="hidden sm:inline">Light Mode</span>
            </>
          ) : (
            <>
              <Moon
                size={18}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
              <span className="hidden sm:inline">Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
