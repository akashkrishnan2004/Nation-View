import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Globe2,
  MapPin,
  Users,
  Languages,
  Coins,
  Phone,
  Hash,
} from "lucide-react";
import Countries from "../data.json";

export default function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const data =
      Countries.find((country) => country.alpha3Code === id) ||
      Countries.find((country) => country.alpha2Code === id) ||
      Countries.find((country) => country.name === decodeURIComponent(id));

    setCountryDetails(data || null);
  }, [id]);

  if (!countryDetails) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700 dark:border-slate-700 dark:border-t-white" />

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Loading country details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-x-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700"
        >
          <ArrowLeft size={17} />
          Back to Countries
        </Link>

        {/* Country */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Flag */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="aspect-3/2 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={countryDetails.flag || countryDetails.flags?.png}
                alt={`${countryDetails.name} flag`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Country Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            {/* Country Name */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <Globe2 size={18} className="text-slate-400" />

                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Country Details
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {countryDetails.name}
              </h1>

              {countryDetails.nativeName && (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Native name:{" "}
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {countryDetails.nativeName}
                  </span>
                </p>
              )}
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Capital */}
              <InfoItem
                icon={<MapPin size={17} />}
                label="Capital"
                value={countryDetails.capital || "N/A"}
              />

              {/* Population */}
              <InfoItem
                icon={<Users size={17} />}
                label="Population"
                value={countryDetails.population?.toLocaleString() || "N/A"}
              />

              {/* Region */}
              <InfoItem
                icon={<Globe2 size={17} />}
                label="Region"
                value={countryDetails.region || "N/A"}
              />

              {/* Subregion */}
              <InfoItem
                icon={<MapPin size={17} />}
                label="Sub Region"
                value={countryDetails.subregion || "N/A"}
              />

              {/* Numeric Code */}
              <InfoItem
                icon={<Hash size={17} />}
                label="Numeric Code"
                value={countryDetails.numericCode || "N/A"}
              />

              {/* Demonym */}
              <InfoItem
                label="Demonym"
                value={countryDetails.demonym || "N/A"}
              />

              {/* Calling Code */}
              <InfoItem
                icon={<Phone size={17} />}
                label="Calling Code"
                value={
                  countryDetails.callingCodes?.length
                    ? `+${countryDetails.callingCodes.join(", +")}`
                    : "N/A"
                }
              />

              {/* CIOC */}
              <InfoItem label="CIOC" value={countryDetails.cioc || "N/A"} />
            </div>

            {/* Divider */}
            <div className="my-7 border-t border-slate-100 dark:border-slate-800" />

            {/* Domain */}
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Top Level Domain
              </p>

              <div className="flex flex-wrap gap-2">
                {countryDetails.topLevelDomain?.map((domain, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <Languages size={17} className="text-slate-400" />

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Languages
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {countryDetails.languages?.map((language, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {language.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Currencies */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Coins size={17} className="text-slate-400" />

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Currencies
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {countryDetails.currencies?.map((currency, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {currency.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Reusable Information Item */
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      {icon && (
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {icon}
        </div>
      )}

      <div className={icon ? "" : "ml-0"}>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}
