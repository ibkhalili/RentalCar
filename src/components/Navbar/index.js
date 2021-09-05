

import React from "react";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";



import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav className="mr-auto my-1 my-lg-2">
        <NavbarContainer>
          <Navlogo to="/">TAZOTACAR</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
               <NavLinks to="services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItems>
          </NavMenu> 
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
