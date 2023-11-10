import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setSearchResults([]);
  };

  const handleSearch = async () => {
    console.log('Searching...');
    if (searchValue.length >= 3) {
      try {
        const response = await axios.get(`/api/search?query=${searchValue}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    } else {
      setSearchResults([]); // Clear search results when search value is less than 3 characters
    }
  };
  const handleSearchIconClick = () => {
    handleSearch(searchValue);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for products, brands, and more"
        value={searchValue}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
        onClick={handleSearchIconClick}
      />
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result) => (
            <li key={result._id}>
              <Link to={`/products/${result._id}`}>{result.productName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
