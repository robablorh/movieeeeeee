
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    updateMovie: (state, action) => {
      const { id, userName, movieTitle, review, rating } = action.payload;
      const movieToUpdate = state.find((movie) => movie.id === id);
      if (movieToUpdate) {
        movieToUpdate.userName = userName;
        movieToUpdate.movieTitle = movieTitle;
        movieToUpdate.review = review;
        movieToUpdate.rating = rating;
      }
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, updateMovie, deleteMovie } = movieSlice.actions;

export default movieSlice.reducer;
