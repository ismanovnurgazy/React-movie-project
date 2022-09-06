import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import LoadMore from "../../components/LoadMore";
import Movies from "../../components/movies";
import axios from "axios";

export default function MoviePage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState("");
  const [page, SetPage] = useState(1);
  // const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${page}language=en-US&page=1&include_adult=true&query=${query}`
      )
      .then((response) => {
      
        const data = response.data;
        setMovies((prevState) => [...prevState, ...data.results]);
      });
  }, [query, page]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (query) => {
    setQuery(query);
  };

  const showMoreFilms = () => {
    SetPage((prevState) => prevState + 1);
  };
  return (
    <>
      <div className="container">
        <Searchbar
          onChange={handleChange}
          onSubmit={handleSubmit}
          data={query}
        />
      </div>
      <Movies films={movies} />
      <LoadMore onClick={showMoreFilms} />
    </>
  );
}
