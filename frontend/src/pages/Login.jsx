import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import { firebaseAuth } from "../config/Firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate("/");
  });

  return (
    <Container>
      <Background />
      <div className="content">
        <Header type={"signup"} />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
              <button onClick={handleSignin}>Sign In</button>
            </div>
          </div>
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
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.75rem 1rem;
            width: 15rem;
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
      }
    }
  }
`;

export default Login;
