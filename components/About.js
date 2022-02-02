import React from "react";
import styled from "styled-components";
import sculpt from "../public/aboutSculpt.png";
import { media } from "../styles/media";

function About() {
  return (
    <Container>
      <InnerContainer>
        <h2>about</h2>
        <p>
          I’m Altin, based in Prishtina. A React Front-end Developer and an
          overall web enthusiast experienced in building all aspects of the user
          experience and user interfaces.
        </p>
        <p>
          I have a growth mindset and perpetually working on improving my
          skills, a project at a time. I consider myself an individual with both
          Problem-solving & Artistic skills, so web development and design are
          both a part of me.
        </p>
      </InnerContainer>
      <img className="sculpture" src={sculpt.src} alt="" />
    </Container>
  );
}

export const Container = styled.section`
  height: calc(100vh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
  position: relative;
  max-width: 1920px;
  margin: auto;

  .sculpture {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 450px;
    width: 50%;
    z-index: 0;
    opacity: 40%;
  }

  ${media.tablet} {
    .sculpture {
      width: 40%;
    }
  }
  ${media.mobile} {
    background-color: ${(props) => props.theme.accentBody};
    .sculpture {
      width: 60%;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  margin-bottom: 10rem;

  h2 {
    font-size: 91px;
    font-family: "arsenica_trialmedium";

    font-weight: 500;
  }

  p {
    font-size: 21px;
    font-family: "Inter";
    font-weight: 500;
    max-width: 600px;
    margin: 2rem 0rem 0rem 4rem;
    z-index: 1;
  }

  ${media.tablet} {
    margin-left: 2rem;

    p {
      margin: 2rem 0rem 0rem 2rem;
    }
  }
  ${media.mobile} {
    margin-left: 0rem;

    h2 {
      font-size: 41px;
      margin: 10px 20px;
    }
    p {
      margin: 10px 20px;
      font-size: 18px;
    }
  }
`;

export default About;
