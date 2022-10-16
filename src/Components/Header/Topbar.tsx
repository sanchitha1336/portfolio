import {
  HeaderNav,
  HeaderNavbar,
  NavBrand,
  NavContainer,
  NavLink,
  NavMenuIcon,
  NavToggelDiv,
  NavMenuButton,
  MenuIconScrollTop,
} from "./navbar.style";
import React, { useState } from "react";
import Menu from "../../Images/icons-menu.png";
import MenuTop from "../../Images/icon-scroll-up.gif";

function Topbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <HeaderNavbar className="d-md-flex d-lg-flex d-sm-flex d-none d-xl-flex">
        <NavContainer>
          <HeaderNav>
            <NavBrand>Portfolio</NavBrand>
          </HeaderNav>
          <HeaderNav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#project">Project</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </HeaderNav>
        </NavContainer>
      </HeaderNavbar>
      <HeaderNavbar className="d-md-none d-lg-none d-sm-none d-flex d-xl-none">
        <NavContainer>
          <NavMenuButton
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <NavMenuIcon src={Menu}></NavMenuIcon>
          </NavMenuButton>
        </NavContainer>
      </HeaderNavbar>
      {toggle && (
        <NavToggelDiv className="d-md-none d-lg-none d-sm-none d-flex d-xl-none">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <NavLink href="#project">Project</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavToggelDiv>
      )}
      <MenuIconScrollTop
        src={MenuTop}
        height="50"
        width="50"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      />
    </>
  );
}
export default Topbar;
