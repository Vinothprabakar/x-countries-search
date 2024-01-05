import React, { useState, useEffect } from "react";
import SearchBar from "./searchbar";
import Country from "./country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="country-list">
        {filteredCountries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
