import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import { firebaseAuth } from "../config/Firebase-config";
import { fetchMovies, getGenres } from "../store";

const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const genresLoaded = useSelector((state) => state.teevee.genresLoaded);
  const movies = useSelector((state) => state.teevee.movies);
  const genres = useSelector((state) => state.teevee.genres);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (user) => {
    if (!user) navigate("/signup");
  });

  useEffect(() => {
    dispatch(getGenres());
  });
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
  }, [genresLoaded, dispatch]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <div className="genres">
          <SelectGenre genres={genres} type="movie" />
        </div>

        {movies.length ? (
          <Slider movies={movies} />
        ) : (
          <NotAvailable className="not-available" />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default Movies;
