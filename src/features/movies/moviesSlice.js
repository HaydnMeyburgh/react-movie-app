import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = "Harry";
  const response = await movieApi
    .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriesText = "Friends";
  const response = await movieApi
    .get(`?apikey=${apiKey}&s=${seriesText}&type=series`)
    return response.data;
})
export const fetchAsyncDetails = createAsyncThunk('movies/fetchAsyncDetails', async (id) => {
  const response = await movieApi
    .get(`?apikey=${apiKey}&i=${id}&Plot=full`)
    return response.data;
})

const initialState = {
  movies: {},
  shows: {},
  selectedDetails: {}
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedDetails = {};
    }
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
    [fetchAsyncDetails.fulfilled]: (state, action) => {
      console.log("fetched successfully!");
      return {...state, selectedDetails: action.payload}
    },
  }
});

export const { removeSelectedMovieOrShow } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedDetails = (state) => state.movies.selectedDetails;
export default moviesSlice.reducer;

