import { FC } from 'react';

import { CssBaseline } from '@material-ui/core';

import { Loading } from '@components/Loading';

import { ShowLoading } from '@store/atoms/ShowLoading.atom';

import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  margin-top: 80px;
  min-height: calc(100% - 80px);
  overflow: auto;
`;

export const ContentWrapper: FC = ({ children }) => (
  <>
    <CssBaseline />
    {useRecoilValue(ShowLoading) ? (
      <Loading />
    ) : (
      <Container>{children}</Container>
    )}
  </>
);
