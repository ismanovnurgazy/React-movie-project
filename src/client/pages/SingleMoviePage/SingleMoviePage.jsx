import React, { useEffect, useState } from "react";
import axios from "axios";
import Cast from "../../components/cast/CastList";
import ReviewsList from "../../components/reviews/ReviewsList";
import { Link, Route, Routes, useParams } from "react-router-dom";
export default function SingleMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const apiMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    axios.get(apiMovie).then(async (response) => {
      const data = await response.data;
      setMovie(data);
      console.log(data);
    });
  }, [API_KEY, id]);

  const genres = movie.genres?.map((item) => {
    return <p key={item.id}>{item.name}</p>;
  });

  return (
    <>
      {movie && (
        <>
          <div className="singlePage container">
            <div className="singleWrapper">
              <img
                className="singleImg"
                src={` https://image.tmdb.org/t/p/w500${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt="img"
              />
              <div className="singleInner">
                <p>{movie.title || movie.original_title}</p>
                <div className="singleGenres">Genres: {genres}</div>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>User Score: {movie.vote_average}</p>
                <div>
                  <button className="btn">
                    <Link className="btn-click" to="cast">
                      Cast
                    </Link>
                  </button>
                  <button className="btn">
                    <Link className="btn-click" to="reviews">
                      Reviews
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<ReviewsList />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}
