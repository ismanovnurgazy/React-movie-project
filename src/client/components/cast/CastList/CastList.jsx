import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastItem from "../CastItem";

export default function CastList() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const apiMovie = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;

    axios.get(apiMovie).then(async (response) => {
      const data = await response.data;
      const { cast } = data;
      setCast(cast);
      console.log(data);
    });
  }, [id]);

  return (
    <div className="cast">
      {cast && (
        <>
          <ul className="castList">
            {cast.map((item) => (
              <CastItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
