import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <input
    type="text"
    placeholder="Search transactions"
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBar;