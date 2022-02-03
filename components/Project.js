import styled from "styled-components";
import { media } from "../styles/media";
import { AiFillGithub, AiFillBehanceSquare } from "react-icons/ai";
import { ImSphere } from "react-icons/im";

import { FiExternalLink } from "react-icons/fi";

const Project = (props) => {
  return (
    <ProjectWrapper>
      <div className="imgBox">
        <img src={props.img.src} alt={props.title} />
      </div>
      <div className="content">
        <p>
          {props.title}
          <br />
          <span>
            {props.github && (
              <a target="_blank" rel="noreferrer" href={props.github}>
                <AiFillGithub className="icon" />
              </a>
            )}

            {props.deployed && (
              <a target="_blank" rel="noreferrer" href={props.deployed}>
                <FiExternalLink className="icon" />
              </a>
            )}

            {props.behance && (
              <a target="_blank" rel="noreferrer" href={props.behance}>
                <AiFillBehanceSquare className="icon" />
              </a>
            )}
          </span>
        </p>
      </div>
    </ProjectWrapper>
  );
};

export const ProjectWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 270px;

  &:hover .imgBox {
    transform: translate(-0.5rem, -3rem);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  &:hover .content {
    transform: translate(0.5rem, 2rem);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  ${media.mobile} {
    &:hover .content {
      transform: translate(0, 3.5rem);
    }
    &:hover .imgBox {
      transform: translate(0, -3.5rem);
    }
  }

  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    img {
      width: 270px;
      height: 270px;
      object-fit: cover;
      resize: both;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.accent};
    z-index: 1;
    align-items: flex-end;
    text-align: center;
    transition: 0.5s ease-in-out;
    /* border-radius: 15px; */

    ${media.mobile} {
      padding: 1.8rem 0.9rem;
    }

    p {
      display: block;
      font-family: "arsenica_trialmedium";
      font-weight: 600;
      font-size: 19px;
      color: ${(props) => props.theme.text};
    }

    span {
      display: inline-block;
      margin-top: 10px;
      color: #555;
      font-size: 16px;

      font-family: "Inter";

      .icon {
        margin: 0px 10px;
        font-weight: 500;
        color: ${(props) => props.theme.secondaryText};
        font-size: 30px;

        &:hover {
          color: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

export default Project;
