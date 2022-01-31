import React from "react";
import styled from "styled-components";

function Logo() {
  return <LogoText>AT</LogoText>;
}

const LogoText = styled.p`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  font-size: 26px;
  font-weight: 600;
  font-family: "arsenica_trialmedium";
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
`;

export default Logo;
