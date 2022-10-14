import { HeaderNav, HeaderNavbar, NavBrand, NavContainer, NavLink } from "./navbar.style";
import React from "react";

function Topbar() {
  return (
    <>
      <HeaderNavbar>
        <NavContainer>
        <HeaderNav>
          <NavBrand>Portfolio</NavBrand>
        </HeaderNav>
        <HeaderNav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </HeaderNav>
        </NavContainer>
      </HeaderNavbar>
    </>
  );
}
export default Topbar;
