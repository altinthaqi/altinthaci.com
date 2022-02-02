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
          <a href="https://github.com/altinthaqi">
            <AiFillGithub className="icon" />
            GitHub
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/altin-thaçi-b6721921b/">
            <AiFillLinkedin className="icon" />
            LinkedIn
          </a>
        </span>
        <span>
          <a href="https://www.behance.net/altinthaqi1">
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
  margin: 1rem auto;

  span {
    display: flex;
    align-items: center;

    a {
      color: ${(props) => props.theme.secondaryText};
      font-size: 18px;
      font-family: "Inter";
      font-weight: 500;
      margin: 1rem 1rem;
      display: flex;
      align-items: center;

      .icon {
        margin: 0px 15px;
        font-size: 31px;
      }
    }
  }
`;

export const Container = styled.footer`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bannerBody};

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
    min-height: 50vh;

    font-size: 41px;
  }
`;

export default Footer;
