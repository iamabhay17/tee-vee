import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="bg"
      />
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;
export default Background;
