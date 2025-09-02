import { Link } from "react-router-dom";
import "./Css/home.css";
import Countries from "../data.json";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [regionFilter, setRegionFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter countries by search and region (memoized for perf)
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
    <div className="data">
      <nav className="nav2">
        <input
          type="text"
          placeholder="Search for a country"
          className="SearchBar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          onChange={(e) => setRegionFilter(e.target.value)}
          value={regionFilter}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </nav>

      <div className="grid">
        {filteredCountries.map((country) => {
          const id = country.alpha3Code || country.alpha2Code || country.name; // stable id
          return (
            <div className="card" key={id}>
              <div className="image">
                <img
                  src={country.flags?.png || country.flag}
                  alt={country.name}
                />
              </div>

              <Link to={`/country/${encodeURIComponent(id)}`}>
                <div className="details">
                  <h3>{country.name}</h3>
                  <p>
                    <strong>Population:</strong>{" "}
                    {country.population?.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
