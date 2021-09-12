import React from 'react';

import styled from 'styled-components';

import { CarouselItem } from './CarouselItem';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Carousel = (): JSX.Element => (
  <Container>
    <CarouselItem src={'/1.webp'} />
  </Container>
);
