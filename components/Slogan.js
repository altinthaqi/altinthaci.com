import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { media } from "../styles/media";

function Slogan() {
  return (
    <Container>
      <Shape></Shape>
      <Content>
        <h2>I code and design</h2>
        <h2 className="space-me">beautiful things.</h2>
      </Content>
    </Container>
  );
}

export const Shape = styled.div`
  position: absolute;
  height: 450px;
  max-width: 800px;
  width: 90%;
  background-color: ${(props) => props.theme.accent};
  z-index: 1;
  border-radius: 0px 240px 240px 0px;

  ${media.tablet} {
    height: 350px;
  }
  ${media.mobile} {
    max-height: 600px;
    max-width: 340px;
    width: 90%;
    border-radius: 240px;
    right: 50%;
    transform: translate(50%);
    height: 80%;
  }
`;

export const Content = styled.div`
  z-index: 2;
  padding-left: 8rem;
  h2 {
    font-size: 91px;
    font-family: "arsenica_trialmedium";
    color: ${(props) => props.theme.text};
    font-weight: 500;
  }

  .space-me {
    margin-left: 8rem;
  }

  ${media.tablet} {
    padding-left: 6rem;
    h2 {
      font-size: 71px;
    }
    .space-me {
      margin-left: 6rem;
    }
  }

  ${media.mobile} {
    padding: 0;
    width: 100%;
    text-align: center;
    h2 {
      font-size: 36px;
    }
    .space-me {
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 66.5px);
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1920px;
  margin: auto;
`;

export default Slogan;
