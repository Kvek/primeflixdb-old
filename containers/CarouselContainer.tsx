import { Carousel } from '@components/Carousel';

import styled from 'styled-components';
import { GRAYISH_YELLOW } from 'theme';

const Container = styled.div`
  background: ${GRAYISH_YELLOW};
  display: flex;
  height: 56.25vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;

  .shadow {
    background-image: linear-gradient(
      to top,
      rgba(20, 20, 20, 0) 0,
      rgba(20, 20, 20, 0.05) 5%,
      rgba(20, 20, 20, 0.15) 15%,
      rgba(20, 20, 20, 0.3) 30%,
      rgba(20, 20, 20, 0.6) 45%,
      #141414eb 70%,
      #000000 100%
    );
    height: 15vw;
    position: absolute;
    width: 100%;
  }

  .shadow {
    &.bottom {
      background-image: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0) 0,
        rgba(20, 20, 20, 0.15) 15%,
        rgba(20, 20, 20, 0.3) 30%,
        rgba(20, 20, 20, 0.6) 45%,
        #141414eb 70%,
        #000000 100%
      );
      bottom: 0;
    }
  }
`;

export const CarouselContainer = () => (
  <Container>
    <div className="shadow" />
    <Carousel />
    <div className="shadow bottom" />
  </Container>
);
