import React from "react";
import defaultImg from "../../../../image/no-image.jpg";
export default function CastItem({ profile_path, name }) {
  return (
    <li className="castItem">
      <img
        className="castImg"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt="img"
      />
      <h2 className="castTitle text">{name}</h2>
    </li>
  );
}
