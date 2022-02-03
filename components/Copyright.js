import styled from "styled-components";

const Copyright = () => {
  return <CRParagraph>@ 2022 Altin Thaci</CRParagraph>;
};

export const CRParagraph = styled.p`
  text-align: center;
  padding: 13px 0px;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.skillsText};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
`;

export default Copyright;
