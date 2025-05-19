import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert('Searching for: ' + searchTerm);
    // Perform your search logic or any other actions here
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
