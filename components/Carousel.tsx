import React from 'react';

import styled from '@emotion/styled';

import { CarouselItem } from './CarouselItem';

const Container = styled.div`
  display: flex;
  height: 56.25vw;
  overflow: hidden;
  width: 100%;
`;

export const Carousel = (): JSX.Element => (
  <Container>
    <CarouselItem src={'/1.webp'} />
  </Container>
);
