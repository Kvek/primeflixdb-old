import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  height: 100vh;
`;

const Home: NextPage = () => <Container />;

export default Home;
