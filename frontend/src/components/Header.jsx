import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">Tee-Vee</div>
      <button
        onClick={() => navigate(props.type === "login" ? "/login" : "/signup")}
      >
        {props.type === "login" ? "Login" : "SignUp"}
      </button>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    font-size: 3rem;
    color: #0ea5e9;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 2px solid #0ea5e9;
    color: #0ea5e9;
    :hover {
      background-color: #0ea5e9;
      color: white;
      border: 2px solid white;
    }
    cursor: pointer;
  }
`;

export default Header;
