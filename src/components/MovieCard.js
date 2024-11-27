import React from 'react';
import '../assets/styles.css';
import { handleImageError } from '../utils/utils';
import { fallbackImgUrl } from '../utils/constants';

const MovieCard = React.memo(({ movie }) => {
    return (
        <div className="movie-card">
            <img
                src={movie.Poster || fallbackImgUrl}
                alt={movie.Title}
                className="movie-poster"
                onError={handleImageError}
            />
            <div className="movie-title">{movie.Title}</div>
        </div>
    );
});

export default MovieCard;
