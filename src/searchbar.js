import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search for a country..."
      className="search-bar"
    />
  );
};

export default SearchBar;
