import styled from "styled-components";
import { media } from "../styles/media";

import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillBehanceSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container id="contact">
      <h2>contact</h2>
      <FooterInfo>
        <span>
          {" "}
          <a href="mailto:info@altinthaci.com">
            <AiOutlineMail className="icon" /> info@altinthaci.com
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/altinthaqi"
          >
            <AiFillGithub className="icon" />
            GitHub
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/altin-thaçi-b6721921b/"
          >
            <AiFillLinkedin className="icon" />
            LinkedIn
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/altinthaqi1"
          >
            <AiFillBehanceSquare className="icon" />
            Behance
          </a>
        </span>
      </FooterInfo>
    </Container>
  );
};

export const FooterInfo = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    a {
      color: ${(props) => props.theme.secondaryText};
      font-size: 18px;
      font-family: "Inter";
      font-weight: 500;
      margin: 0rem 1rem;
      display: flex;
      align-items: center;

      &:hover {
        color: ${(props) => props.theme.text};
      }

      .icon {
        margin: 0px 15px;
        font-size: 31px;
      }
    }
  }

  ${media.mobile} {
    justify-content: flex-start;

    span {
      a {
        font-size: 16px;
      }
    }
  }
`;

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bannerBody};
  padding: 20px 0px;

  h2 {
    font-size: 61px;
    color: ${(props) => props.theme.text};
    font-family: "arsenica_trialmedium";
    font-weight: 500;
    margin-left: 8rem;

    ${media.tablet} {
      margin-left: 6rem;
    }

    ${media.mobile} {
      margin-left: 2rem;
      font-size: 41px;
    }
  }

  ${media.mobile} {
    font-size: 41px;
  }
`;

export default Footer;
