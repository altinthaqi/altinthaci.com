import styled from "styled-components";
import skills1 from "../public/skills1.png";
import skills2 from "../public/skills2.png";
import skills3 from "../public/skills3.png";

import { media } from "../styles/media";

const Skills = () => {
  return (
    <Container>
      <ShapeLeft></ShapeLeft>
      <InnerContainer>
        <BoxContainer>
          <Box>
            <img src={skills1.src} alt="" />
            <h2>React</h2>
          </Box>

          <Box>
            <img src={skills2.src} alt="" />
            <h2>Front-end</h2>
          </Box>

          <Box>
            <img src={skills3.src} alt="" />
            <h2>Design</h2>
          </Box>
        </BoxContainer>

        <SkillsContent>
          <p>JavaScript (React) ⋅ TypeScript ⋅ NextJS</p>
          <p>SASS ⋅ Material/Chakra UI ⋅ styled-components</p>
        </SkillsContent>
      </InnerContainer>
      <ShapeRight></ShapeRight>
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

export const ShapeLeft = styled.div`
  position: absolute;
  /* height: 280px;
  max-width: 400px;
  width: 50%;
  background-color: ${(props) => props.theme.accent};
  bottom: 54%;
  left: 0;
  transform: translate(0, 50%);
  z-index: 0;

  ${media.mobile} {
    height: 250px;
    bottom: 57%;
  } */
`;

export const ShapeRight = styled.div`
  position: absolute;
  /* height: 280px;
  max-width: 400px;
  width: 50%;
   background-color: ${(props) => props.theme.accent}; 
  bottom: 54%;
  right: 0;
  transform: translate(0, 50%);
  z-index: 0;

  ${media.mobile} {
    height: 250px;
    bottom: 57%;
  } */
`;

export const Container = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  position: relative;
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
