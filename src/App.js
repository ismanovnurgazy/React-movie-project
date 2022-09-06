import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./client/pages/HomePage";
import MoviePage from "./client/pages/MoviePage";
import SingleMoviePage from "./client/pages/SingleMoviePage";
import Navbar from "./client/components/navbar";
import Footer from "./client/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id/*" element={<SingleMoviePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
