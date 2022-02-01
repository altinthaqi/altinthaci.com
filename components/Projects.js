import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../styles/media";
import acropolis from "../public/acropolis.png";
import Project from "./Project";

import { codingData, designingData } from "../data/data";

function Projects() {
  const [projectsType, setProjectsType] = useState("coding");

  return (
    <Container>
      <Title>projects</Title>
      <InnerContainer>
        <ProjectsType>
          <p
            className={projectsType === "coding" ? "active" : ""}
            onClick={() => setProjectsType("coding")}
          >
            coding
          </p>
          <p
            className={projectsType === "design" ? "active" : ""}
            onClick={() => setProjectsType("design")}
          >
            design
          </p>
        </ProjectsType>

        <ProjectsContainer>
          {projectsType === "coding" &&
            codingData.map((project) => (
              <Project key={project.id} {...project} />
            ))}

          {projectsType === "design" &&
            designingData.map((project) => (
              <Project key={project.id} {...project} />
            ))}
        </ProjectsContainer>
      </InnerContainer>

      <Acropolis src={acropolis.src} alt="" />
    </Container>
  );
}

export const ProjectsContainer = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 225px);
  width: 100%;
  gap: 80px 80px;
  margin-top: 2rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 225px);
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 225px);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-height: calc(100vh - 67px);
  background-color: ${(props) => props.theme.bannerBody};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0rem;
`;

export const Acropolis = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  max-width: 613px;
  opacity: 30%;
  z-index: 0;
`;

export const Title = styled.h2`
  font-size: 91px;
  text-align: start;
  align-self: flex-start;
  font-family: "arsenica_trialmedium";
  font-weight: 500;
  margin: 2rem 0rem 2rem 8rem;
  color: ${(props) => props.theme.text};

  ${media.tablet} {
    margin: 2rem 0rem 2rem 2rem;
  }
  ${media.mobile} {
    margin: 1rem 0rem 1rem 2rem;
    font-size: 41px;
  }
`;

export const ProjectsType = styled.div`
  display: flex;

  .active {
    color: ${(props) => props.theme.text};
  }

  p {
    z-index: 2;
    cursor: pointer;
    margin: 2rem;
    font-size: 21px;
    font-family: "Inter";
    font-weight: 500;
    color: ${(props) => props.theme.greyText};

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

    ${media.tablet} {
    }
    ${media.mobile} {
      margin: 2rem 1rem;
    }
  }
`;

export default Projects;
