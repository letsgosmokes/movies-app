import { FETCH_MOVIES_SUCCESS, SET_PAGE, LOADING } from './actions';

const initialState = {
  movies: [],
  page: 1,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      // get only unique movies
      const uniqueMovies = action.payload.filter(
        (movie) => !state.movies.some((existingMovie) => existingMovie.imdbID === movie.imdbID)
      );
      return {
        ...state,
        movies: [...state.movies, ...uniqueMovies],
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
