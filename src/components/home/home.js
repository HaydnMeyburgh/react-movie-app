import React, { useEffect } from "react";
import { MovieListing } from "../movieListing/movieListing";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";

export const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  //API fetch call
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  }, [dispatch]); 

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
    
  )
}