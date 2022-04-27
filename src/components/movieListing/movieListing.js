import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/moviesSlice";
import { MovieCard } from "../movieCard/movieCard";
import "./movieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
    ) : (<div className="movies-error"><h3>{movies.error}</h3></div>);
    return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

