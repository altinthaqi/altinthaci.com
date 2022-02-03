import React from "react";
import styled from "styled-components";
import me from "../public/img/me.png";
import { media } from "../styles/media";

function Banner() {
  return (
    <Container id="banner">
      <InnerContainer>
        <Left>
          <h1>Altin Thaci</h1>
          <p>
            Hello, I’m Altin. <br /> I’m a React Front-end Developer and an
            overall web enthusiast experienced in building all aspects of the
            user experience and user interfaces.
          </p>
          <p>
            I design and develop performant beautiful experiences that make
            people’s lives simple. I’m highly inspired by the antique.
          </p>
        </Left>
        <Right></Right>
        <div className="spacer"></div>
        <Image src={me.src} alt="" />
      </InnerContainer>
      <BottomLinks>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/altinthaqi"
        >
          GitHub
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/altin-thaçi-b6721921b/"
        >
          LinkedIn
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/altinthaqi1"
        >
          Behance
        </a>
      </BottomLinks>

      {/* <img className="arrowBottom" src={arrowBottom.src} alt="" /> */}
    </Container>
  );
}

export const BottomLinks = styled.div`
  margin-left: 10rem;
  display: block;

  a {
    margin: 20px;
    font-size: 21px;
    color: ${(props) => props.theme.secondaryText};
    display: inline-block;
    font-family: "Inter";
    text-decoration: none;
    font-weight: 500;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${(props) => props.theme.secondaryText};
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-self: center;
  align-self: center;
  width: 100%;
  margin: 2rem 2rem 0rem 0rem;
  background-color: ${(props) => props.theme.accent};
  height: 700px;
  max-width: 500px;
  border-radius: 250px;
  overflow: hidden;

  ${media.tablet} {
    margin: 0;
    position: absolute;
    bottom: 0;
    height: 500px;
    width: 370px;
    z-index: 0;
  }
  ${media.mobile} {
    margin: 0;
    position: absolute;
    bottom: 0;
    height: 300px;
    width: 225px;
    z-index: 0;
    border-radius: 25%;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 1rem;
  align-items: center;
  justify-content: center;
  min-height: calc(80vh - 67px);
  .spacer {
    flex: 1;
    display: none;
  }

  ${media.tablet} {
    flex-direction: column;

    .spacer {
      display: block;
    }
  }

  ${media.mobile} {
    flex-direction: column;

    .spacer {
      display: block;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  margin: 3rem 1rem;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: ${(props) => props.theme.text};
  h1 {
    font-family: "arsenica_trialmedium";
    font-size: 96px;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  p {
    margin: 1rem 1rem 1rem 4rem;
    font-size: 21px;
    font-family: "krylonregular";
    max-width: 500px;
  }

  ${media.tablet} {
    margin: 0;
  }

  ${media.mobile} {
    align-items: flex-start;
    h1 {
      font-size: 41px;
    }
    p {
      margin: 1rem 0;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 520px;
  width: 50%;

  ${media.tablet} {
    flex-direction: column;
    right: 50%;
    transform: translate(50%);
    max-width: 350px;
  }
  ${media.mobile} {
    right: 50%;
    transform: translate(50%);
    max-width: 300px;
  }
`;

export const Container = styled.section`
  background-color: ${(props) => props.theme.bannerBody};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: calc(100vh - 66.5px);
  position: relative;

  .arrowBottom {
    position: absolute;
    bottom: 20px;
    right: 50%;
    transform: translate(50%);
  }

  ${media.tablet} {
    justify-content: flex-start;
    .arrowBottom {
      display: none;
    }
  }

  ${media.mobile} {
    justify-content: flex-start;
    .arrowBottom {
      display: none;
    }
  }
`;

export default Banner;
