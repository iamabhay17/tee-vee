import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import { firebaseAuth } from "../config/Firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <Background />
      <div className="content ">
        <Header type="login" />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Tv Shows and more...</h1>
            <h4>Watch Anywhere. Cancel anytime</h4>
            <h6>Ready to watch? Login or Signup now</h6>
          </div>
          <div className="form">
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
            />
            {showPassword && (
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
            )}

            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignin}>Sign Up</button>}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.4rem;
        h1 {
          padding: 0 25rem;
          color: #38bdf8;
        }
        h4 {
          color: #bae6fd;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.2rem;
          font-size: 1rem;
          border: 1px solid black;
          :focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;

          background-color: #0ea5e9;
          color: white;
          font-weight: bolder;
          font-size: 1.2rem;
          border: 1px solid black;
          :hover {
            background-color: transparent;
            border: 1px solid #0ea5e9;
            color: #0ea5e9;
          }
          cursor: pointer;
        }
      }
      button {
        padding: 0.5rem 1rem;

        background-color: #0ea5e9;
        color: white;
        font-size: 1.2rem;
        border: 1px solid black;
        font-weight: bolder;
        :hover {
          background-color: transparent;
          border: 1px solid #0ea5e9;
          color: #0ea5e9;
        }
        cursor: pointer;
      }
    }
  }
`;

export default Signup;
