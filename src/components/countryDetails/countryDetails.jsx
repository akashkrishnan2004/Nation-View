import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Css/countryDetails.css";
import Countries from "../data.json";

export default function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCountryDetails = () => {
      // Match by alpha3Code, alpha2Code, or name instead of array index
      const data =
        Countries.find((c) => c.alpha3Code === id) ||
        Countries.find((c) => c.alpha2Code === id) ||
        Countries.find((c) => c.name === decodeURIComponent(id));

      setCountryDetails(data || null);
    };

    fetchCountryDetails();
  }, [id]);

  if (!countryDetails) return <div>Loading...</div>;

  return (
    <div className="countryDetailsContainer">
      <div className="leftItems">
        <img src={countryDetails.flag} alt={countryDetails.name} />
      </div>

      <div className="rightItems">
        <h3>{countryDetails.name}</h3>
        <div className="rightItemsBottom">
          <div className="rightItems1">
            <p>
              <strong>Capital :</strong> {countryDetails.capital}
            </p>
            <p>
              <strong>Native Name :</strong> {countryDetails.nativeName}
            </p>
            <p>
              <strong>Region :</strong> {countryDetails.region}
            </p>
            <p>
              <strong>Sub Region :</strong> {countryDetails.subregion}
            </p>
            <p>
              <strong>Demonym :</strong> {countryDetails.demonym}
            </p>
            <p>
              <strong>Numeric Code :</strong> {countryDetails.numericCode}
            </p>
          </div>

          <div className="rightItems2">
            <p>
              <strong>Top Level Domain :</strong>{" "}
              {countryDetails.topLevelDomain?.join(", ")}
            </p>
            <p>
              <strong>Population :</strong>{" "}
              {countryDetails.population?.toLocaleString()}
            </p>

            {countryDetails.currencies?.map((currency, idx) => (
              <div key={idx}>
                <p>
                  <strong>Currencies :</strong> {currency.name}
                </p>
              </div>
            ))}

            <div className="languageDetails">
              <p>
                <strong>Languages :</strong>
              </p>
              {countryDetails.languages?.map((language, idx) => (
                <div key={idx} className="languageDetails">
                  <p className="languageBox">{language.name}</p>
                </div>
              ))}
            </div>

            <p>
              <strong>Calling Code :</strong> +
              {countryDetails.callingCodes?.join(", ")}
            </p>
            <p>
              <strong>CIOC :</strong> {countryDetails.cioc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
