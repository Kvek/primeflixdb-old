import { FC } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const AppWrapper: FC = ({ children }) => (
  <Container>{children}</Container>
);
