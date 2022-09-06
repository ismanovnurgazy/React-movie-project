import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({
  vote_average,
  poster_path,
  name,
  backdrop_path,
  title,
  id,
}) {
  return (
    <div className="card">
      <Link to={`/movie/${id}/*`}>
        <div className="card-image">
          <img
            className="card-img"
            src={` https://image.tmdb.org/t/p/w500${
              poster_path || backdrop_path
            }`}
            alt="img"
          />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-action">
          <p className="card-text blue-grey lighten-3">{title || name}</p>
          <p className="card-text  light-green accent-3 ">
            User score:{vote_average}
          </p>
        </div>
      </Link>
    </div>
  );
}
