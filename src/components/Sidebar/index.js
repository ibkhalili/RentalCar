
import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLinks,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
  
} from "./SidebarElement";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>   
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about">About</SidebarLinks>
          <SidebarLinks to="discover">Discover</SidebarLinks>
          <SidebarLinks to="services">Services</SidebarLinks>
          <SidebarLinks to="signup">Sign Up</SidebarLinks>
        </SidebarMenu>
        <SidebarBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
 