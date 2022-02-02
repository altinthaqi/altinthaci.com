import styled from "styled-components";
import skills1 from "../public/img/skills1.png";
import skills2 from "../public/img/skills2.png";
import skills3 from "../public/img/skills3.png";

import { media } from "../styles/media";

const Skills = () => {
  return (
    <Container>
      <InnerContainer>
        <BoxContainer>
          <Box>
            <img height="121px" width="128px" src={skills1.src} alt="" />
            <h2>React</h2>
          </Box>

          <Box>
            <img height="135px" width="124px" src={skills2.src} alt="" />
            <h2>Front-end</h2>
          </Box>

          <Box>
            <img height="135px" width="93px" src={skills3.src} alt="" />
            <h2>Design</h2>
          </Box>
        </BoxContainer>

        <SkillsContent>
          <p>JavaScript (React) ⋅ TypeScript ⋅ NextJS</p>
          <p>SASS ⋅ Material/Chakra UI ⋅ styled-components</p>
        </SkillsContent>
      </InnerContainer>
    </Container>
  );
};

export const SkillsContent = styled.div`
  z-index: 2;

  p {
    text-align: center;
    color: ${(props) => props.theme.skillsText};
    font-family: "Inter";
    padding: 5px 0px;
    font-weight: 500;
    margin: 10px;
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  position: relative;
  padding: 2rem 0rem;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 900px;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0rem;
  z-index: 2;

  h2 {
    font-family: "arsenica_trialmedium";
    color: ${(props) => props.theme.skillsText};
    margin-top: 21px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 2;
`;

export default Skills;
