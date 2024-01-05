import React from "react";
import "./countrycard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card" data-testid="country-container">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <p>{country.name.common}</p>
    </div>
  );
};

export default CountryCard;
