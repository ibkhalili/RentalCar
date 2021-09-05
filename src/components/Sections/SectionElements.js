import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link as LinkRouter } from "react-router-dom";

export const SectionsContainer = styled.div`
  background: #0c0c0c;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 800px;
  z-index: 1;
  width: 100%;
  position: relative;
  padding: 0 30px;
`;
export const Bg = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  position: absolute;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  background: #232a34;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const SectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Prg1 = styled.div`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const PrgBtnWrapper = styled(LinkRouter)`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
