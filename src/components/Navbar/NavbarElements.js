import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 0 0.5rem;
  background: #000;
  height: 70px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 1.1rem;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  @media screnn and (max-width: 60px) {
    transition: 0.8s all ease;
  }
 
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  max-width: -100px;
`;
export const Navlogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-weight: 900;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-90%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align center;
  margin-right: 80px; 
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRouter)`
  color: #fff;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  align-items: center;
  cursor: pointer;
  &.active {
    border-botoom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-raduis: 30%;
  background:  #FAEBD7;
  white-space: nowrap;
  padding: 6px 20px;
  color: green;
  font-size: 16px;
  outline: none;
  border-radius: 50%;
  cursor: pointer; 
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out,
    background: #fff;
    color: green;
  }

`;