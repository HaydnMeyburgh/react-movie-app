import React, { useEffect } from "react";
import { MovieListing } from "../movieListing/movieListing";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";

export const Home = () => {
  //API fetch call
  useEffect(() => {
    const movieText = "Harry"
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
    console.log(response);

    }
    fetchMovies();
  }, []); 

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
    
  )
}