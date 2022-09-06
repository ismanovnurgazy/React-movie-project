import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadMore from "../../components/LoadMore";
import Preloader from "../../components/Preloader";
import Movies from "../../components/movies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, SetPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
      )
      .then((response) => {
        const data = response.data;
        setMovies((prevState) => [...prevState, ...data.results]);
      });
  }, [page, API_KEY]);
  const showMoreFilms = () => {
    SetPage((prevState) => prevState + 1);
  };
  return (
    <>
      {movies.length ? <Movies films={movies} /> : <Preloader />}
      <LoadMore onClick={showMoreFilms} />
    </>
  );
}
