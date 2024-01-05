import React from "react";
import CountryCard from "./countrycard";

const CountryList = ({ countries }) => {
  return (
    <div className="flags-container">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
