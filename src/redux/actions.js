import axios from 'axios';

// Action types
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const SET_PAGE = 'SET_PAGE';
export const LOADING = 'LOADING';

// api call for fetching movies list
export const fetchMovies = (page) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`https://www.omdbapi.com/?apikey=b9bd48a6&s=drive&page=${page}`);
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response?.data?.Search || [],
      });
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

// Action creators
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setLoading = (loading) => ({
  type: LOADING,
  payload: loading,
});