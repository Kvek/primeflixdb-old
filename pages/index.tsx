import { CarouselContainer } from '@containers/CarouselContainer';

import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const Home: NextPage = () => (
  <Container>
    <CarouselContainer />
  </Container>
);

export default Home;
