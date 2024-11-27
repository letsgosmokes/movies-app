import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { NO_SEARCH_RESULTS_TEXT } from '../utils/constants';

const MovieGrid = ({ searchTerm }) => {
    const movies = useSelector((state) => state.movies);
    const filteredMovies = useMemo(() => {
        return movies?.filter?.((movie) =>
            movie?.Title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        );
    }, [searchTerm, movies]);
    return (
        <div className="movie-grid">
            {filteredMovies?.length > 0 ? (
                filteredMovies?.map?.((movie) => (
                    <React.Fragment key={movie?.imdbID}>
                        <MovieCard movie={movie} />
                    </React.Fragment>
                ))
            ) : (
                <h1 className='no-results-found'>{NO_SEARCH_RESULTS_TEXT}</h1>
            )}
        </div>
    );
};

export default MovieGrid;
