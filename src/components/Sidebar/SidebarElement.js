
import styled from "styled-components";
import { FaTimes} from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
position: fixed;
background: #0d0d0d;
align-items: center;
top: 0;
left: 0;
display: grid;
justify-content: space-around;
height: 100%;
z-index: 999;
  width: 100%;
transition: 0.3s all ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
   top: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
position: absolute; 
background: transparent;
align-items: center;
top: 1.2rem;
right: 1.5rem;
font-size: 2rem;
cursor: ponter;
outline: none;

`; 

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;;
  grid-template-rows: repeat(6, 80px);
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinks = styled(LinkRouter)`
color: #fff; 
display: flex;
text-decoration: none;
align-items: right;
justify-content: center;
cursor: pointer;
font-size: 1.5rem;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition:  0.2s ease-in-out;
    color: #01bf71;
  }


`;

export const SidebarBtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const SidebarRoute = styled(LinkRouter)`
background: #FAEBD7;
white-space: nowrap;
padding: 12px 55px;
font-size: 15px;
cursor: pointer;
outline: none;
color: #010606;
border-radius: 20px;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-top : -130px;
margin-right: -28px;

&:hover {
    transition:  0.2s ease-in-out;
    color: #010606;
    background: #fff;
  }


`