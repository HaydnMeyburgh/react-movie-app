import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = "Harry";
  const response = await movieApi
    .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriesText = "Friends";
  const response = await movieApi
    .get(`?apiKey=${apiKey}&s=${seriesText}&type=series`)
    return response.data;
})

const initialState = {
  movies: {},
  shows: {}
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetched successfully!");
      return {...state, movies: action.payload}
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("fetched successfully!");
      return {...state, shows: action.payload}
    },
  }
});

export const { addMovies, addShows } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default moviesSlice.reducer;

