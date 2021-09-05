import React, { FC } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  margin-top: 80px;
  min-height: calc(100% - 80px);
  overflow: auto;
`;

export const ContentWrapper: FC = ({ children }) => (
  <Container>{children}</Container>
);
