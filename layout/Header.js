import React, { useState, useEffect } from "react";
import { Nav, Hamburger, Menu, MenuLink } from "./HeaderStyled";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

function Header({ themeToggler, theme }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {theme === "light" ? (
        <BsFillMoonFill className="themeIcon" onClick={() => themeToggler()} />
      ) : (
        <MdLightMode className="themeIcon" onClick={() => themeToggler()} />
      )}
    </div>
  );
}

export default Header;
