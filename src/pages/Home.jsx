import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

import Countries from "../data.json";

export default function Home() {
  const [regionFilter, setRegionFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const r = regionFilter.trim().toLowerCase();

    return Countries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(q);

      const matchesRegion = !r || (country.region || "").toLowerCase() === r;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, regionFilter]);

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Search / Filter */}
      <div className="border-b border-slate-200 bg-white/90 px-4 py-5 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-slate-600 dark:focus:bg-slate-800 dark:focus:ring-slate-700"
            />
          </div>

          {/* Region */}
          <div className="relative w-full sm:w-52">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:border-slate-600 dark:focus:ring-slate-700"
            >
              <option value="">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Countries */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Countries
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {filteredCountries.length}{" "}
            {filteredCountries.length === 1 ? "country" : "countries"} found
          </p>
        </div>

        {/* Grid */}
        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCountries.map((country) => {
              const id =
                country.alpha3Code || country.alpha2Code || country.name;

              return (
                <Link
                  key={id}
                  to={`/country/${encodeURIComponent(id)}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  {/* Flag */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={country.flags?.png || country.flag}
                      alt={`${country.name} flag`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Region */}
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:bg-slate-900/90 dark:text-slate-200">
                      {country.region}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <h3 className="mb-4 truncate text-lg font-bold text-slate-900 dark:text-white">
                      {country.name}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500 dark:text-slate-400">
                          Population
                        </span>

                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {country.population?.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500 dark:text-slate-400">
                          Capital
                        </span>

                        <span className="max-w-37.5 truncate font-medium text-slate-800 dark:text-slate-200">
                          {country.capital || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Details Link */}
                    <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                      <span className="text-sm font-semibold text-slate-600 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <Search size={24} className="text-slate-400" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              No countries found
            </h3>

            <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Try searching for a different country or select another region.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
