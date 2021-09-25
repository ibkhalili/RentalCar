import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  Bg,
  VideoBg,
  SectionsContainer,
  SectionContent,
  H1,
  Prg1,
  PrgBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './SectionElements';
import Video from 'video.mp4';

function Sections() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionsContainer>
      <Bg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </Bg>
      <SectionContent>
        <H1>Learn more about TAZOTA</H1>
        <Prg1>
          TAZOTA CAR is located in EL JADIDA, Morocco and is part of the
          Automotive Equipment Rental and Leasing Industry. TAZOTA CAR has 10
          total employees across all of its locations and generates $41,016 in
          sales (USD). (Employees figure is modelled).
        </Prg1>
        <PrgBtnWrapper
          to="/signup"
          as={Button}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Commencer {hover ? <ArrowForward /> : <ArrowRight />}
        </PrgBtnWrapper>
      </SectionContent>
    </SectionsContainer>
  );
}

export default Sections;
