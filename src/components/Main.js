import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions';
import Navbar from './Navbar';
import MovieGrid from './MovieGrid';
import '../assets/styles.css';
import { setPage } from '../redux/actions';
import { LOADER_TEXT } from '../utils/constants';

function Main() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);
    const loading = useSelector((state) => state.loading);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // api call
    useEffect(() => {
        dispatch(fetchMovies(page));
    }, [page]);

    // infinite scrolling
    useEffect(() => {
        const grid = document.querySelector('.movie-grid');
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = grid;
            if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
                dispatch(setPage(page + 1));
            }
        };
        grid.addEventListener('scroll', handleScroll);
        return () => grid.removeEventListener('scroll', handleScroll);
    }, [dispatch, loading, page]);


    return (
        <div className="container">
            <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
            />
            <MovieGrid
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {loading ? <h1>{LOADER_TEXT}</h1> : null}
        </div>
    );
}

export default Main;
