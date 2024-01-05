import React from "react";

const Country = ({ country }) => {
  return (
    <div className="country-card" data-testid="country-container">
      <img src={country.flags.png} alt={country.name.common} />
      <p>{country.name.common}</p>
    </div>
  );
};

export default Country;
