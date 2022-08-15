import styled from '@emotion/styled';

import { Carousel } from '@components/Carousel';
import { Shadow } from '@components/Shadow';

const Container = styled.div`
  display: flex;
  position: relative;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
`;

export const CarouselContainer = () => (
  <Container>
    <Shadow />

    <InnerContainer>
      <Carousel />
    </InnerContainer>

    <Shadow bottom />
  </Container>
);
