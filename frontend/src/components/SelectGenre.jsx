import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <Container
      className="flex"
      onChange={(e) =>
        dispatch(fetchDataByGenre({ genre: e.target.value, type }))
      }
    >
      {genres.map((genre) => (
        <option value={genre.id}>{genre.name}</option>
      ))}
    </Container>
  );
};
const Container = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-family: inherit;
  outline: none;
`;
export default SelectGenre;
