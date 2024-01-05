import React, { useState, useEffect } from "react";
import "./App.css";
import CountryList from "./countrylist";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
