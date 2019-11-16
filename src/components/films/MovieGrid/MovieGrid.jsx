import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import style from "./MovieGrid.module.css";
import propTypes from "prop-types";

const MovieGrid = ({ items = [] }) => {
  if (items.length > 0) {
    return (
      <>
        <ul className={style.movieGrid}>
          {items.map(item => (
            <li key={item.id}>
              <MovieCard
                posterUrl={item.posterUrl}
                title={item.title}
                overview={item.overview}
              />
            </li>
          ))}
        </ul>
      </>
    );
  } else return <p>No matching results!</p>;
};
export default MovieGrid;

MovieGrid.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
};
