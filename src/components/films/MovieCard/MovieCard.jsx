import React from "react";
import style from "./MovieCard.module.css";
import propTypes from 'prop-types';

const MovieCard = ({ title, posterUrl, overview }) => {
  return (
    <div className={style.movieCard}>
      <img src={posterUrl} alt={title} />
      <div className={style.content}>
        <h2 className={style.title}>{title.substring(28, -10)}</h2>
        <p className={style.descr}>{overview.substring(120, -20)}...</p>
      </div>
    </div>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  title: propTypes.string,
  posterUrl: propTypes.string,
  overview: propTypes.string,
};