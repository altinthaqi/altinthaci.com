import React, { useState, useEffect } from "react";
import { Nav, Menu, Hamburger, MenuLink } from "./HeaderStyled";
import styled from "styled-components";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import Logo from "../components/Logo";

function Header({ themeToggler, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <a href="#banner">
        <Logo />
      </a>

      {theme === "light" ? (
        <BsFillMoonFill className="themeIcon" onClick={() => themeToggler()} />
      ) : (
        <MdLightMode className="themeIcon" onClick={() => themeToggler()} />
      )}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink
          href="#about"
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
        >
          who
        </MenuLink>
        <MenuLink
          href="#projects"
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
        >
          work
        </MenuLink>
        <MenuLink
          href="#contact"
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
        >
          where
        </MenuLink>
      </Menu>
    </Nav>
  );
}

export default Header;
