import { Carousel } from '@components/Carousel';

import styled from 'styled-components';
import { GRAYISH_YELLOW } from 'theme';

const Container = styled.div`
  background: ${GRAYISH_YELLOW};
  display: flex;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  scroll-snap-align: start;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  top: 80px;
  width: 100vw;

  @media ${({ theme }) => theme.breakPoints.lg} {
    top: 0;
  }

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
    display: none;
    height: 15vw;
    position: absolute;
    width: 100%;

    @media ${({ theme }) => theme.breakPoints.lg} {
      display: block;
    }
  }

  .shadow {
    &.bottom {
      background-image: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0) 0,
        rgba(20, 20, 20, 0.05) 5%,
        rgba(20, 20, 20, 0.15) 15%,
        rgba(20, 20, 20, 0.3) 30%,
        rgba(20, 20, 20, 0.6) 45%,
        #000000 70%,
        #000000 100%
      );
      bottom: 0;
    }
  }
`;

export const CarouselContainer = () => (
  <Container>
    <InnerContainer>
      <div className="shadow" />
      <Carousel />
      <div className="shadow bottom" />
    </InnerContainer>
  </Container>
);
