import { CarouselContainer } from '@containers/CarouselContainer';

import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
  width: 100vw;
`;

const Home: NextPage = () => (
  <Container>
    <CarouselContainer />
  </Container>
);

export default Home;
