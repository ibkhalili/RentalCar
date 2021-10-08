
import React from 'react';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItems,
  NavLinks,
  Navlogo,
  NavMenu,
} from './NavbarElements';


import { FaBars } from 'react-icons/fa';
import { shallowEqual, useSelector } from 'react-redux';
import { isLoggedSelector } from 'redux/User/userSelectors';

const Navbar = ({ toggle }) => {
  const isLoggedIn = useSelector(isLoggedSelector, shallowEqual);

  return (
    <div>
      <Nav className="navbar navbar-fixed-top navbar-dark bg-dark">
        <NavbarContainer>
          <Navlogo className="navbar-brand" to="/">
            TAZOTACAR
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu classeName="navbar-nav mr-auto">
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItems>
            {isLoggedIn && (
              <NavItems>
                <NavLinks to="admin">Administra tion</NavLinks>
              </NavItems>
            )}
            {!isLoggedIn && (
              <NavItems>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItems>
            )}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={isLoggedIn ? 'logout' : 'signin'}>
              {isLoggedIn ? 'Logout' : 'Sign In'}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
