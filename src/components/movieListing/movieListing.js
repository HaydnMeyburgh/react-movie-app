import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/moviesSlice";
import { getAllShows } from "../../features/movies/moviesSlice";
import { MovieCard } from "../movieCard/movieCard";
import "./movieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";
  
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
    ) : (<div className="movies-error"><h3>{movies.error}</h3></div>);

    renderShows = shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
      ) : (<div className="movies-error"><h3>{shows.error}</h3></div>);

    return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {renderShows}
        </div>
      </div>
    </div>
  )
}

