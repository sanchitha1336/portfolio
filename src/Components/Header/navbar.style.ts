import styled from "styled-components";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const HeaderNav = styled(Nav)``;
export const HeaderNavbar = styled(Navbar)`
  background-image: linear-gradient(#cc2b5e, #753a88);
  .navbar-nav .show > .nav-link, .navbar-nav .nav-link.active{
    background: linear-gradient(45deg, black, transparent);
    color: #ffff;
    width: 5.875rem;
    border-radius: 50Px;
    font-size: 17px;
    text-align: center;
    display: inline-block;
}

`;
export const NavLink = styled(Nav.Link)`
color: aliceblue;
`;
export const NavBrand = styled(Navbar.Brand)`
  color: aliceblue;
`;
export const NavContainer = styled(Container)`
@media(max-width:576px){
    display: flex;

    justify-content: end !important;
}
`;
export const NavToggelDiv=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(#cc2b5e,#753a88,#ffff);
        a {
        background-image: linear-gradient(
          to right,
          #fff,
          #fff 50%,
          #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
      }
      
      a:before {
        content: '';
        background: #fff;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }
      
      a:hover{
       background-position: 0;
      }
      
      a:hover::before {
        width:100%;
      }
`;
export const NavMenuButton=styled(Button)`
background-image: linear-gradient(#cc2b5e, #753a88);
`;
export const NavMenuIcon=styled.img`
`;