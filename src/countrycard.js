import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <p>{country.name.common}</p>
    </div>
  );
};

export default CountryCard;
