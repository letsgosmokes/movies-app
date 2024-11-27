import React, { Suspense } from 'react';
import '../assets/styles.css';
import { NAVBAR_TEXT, LAZY_FALLBACK_TEXT } from '../utils/constants';

const SearchBar = React.lazy(() => import('./SearchBar')); // lazy loading Search bar

const Navbar = ({ setSearchTerm, showSearch, setShowSearch }) => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <img
                        src="https://test.create.diagnal.com/images/Back.png"
                        alt="Back"
                        className="back-icon"
                    />
                    <p className="title">{NAVBAR_TEXT}</p>
                </div>
                <div className="navbar-right">
                    <img
                        onClick={() => setShowSearch(prev => !prev)}
                        src="https://test.create.diagnal.com/images/search.png"
                        alt="Search"
                        className="search-icon"
                    />
                </div>
            </div>
            {showSearch ? <div className="search">
                <Suspense fallback={<div>{LAZY_FALLBACK_TEXT}</div>}>
                    <SearchBar setSearchTerm={setSearchTerm} />
                </Suspense>
            </div> : null}
        </>
    );
};

export default Navbar;
