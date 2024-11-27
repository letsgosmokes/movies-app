import React from 'react';
import '../assets/styles.css';
import { SEARCH_PLACEHOLDER_TEXT } from '../utils/constants';

const SearchBar = ({ setSearchTerm }) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <input
            type="text"
            placeholder={SEARCH_PLACEHOLDER_TEXT}
            className="search-bar"
            onChange={handleSearch}
            autoFocus
        />
    );
};
export default SearchBar;
