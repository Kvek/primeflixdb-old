import { FC } from 'react';

import { ShowLoading } from '@store/atoms/ShowLoading.atom';

import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const Loading = dynamic(() => import('../components/Loading'));

const Container = styled.div`
  height: 100%;
  margin-top: 80px;
  min-height: calc(100% - 80px);
  overflow: auto;
`;

export const ContentWrapper: FC = ({ children }) => {
  const isLoading = useRecoilValue(ShowLoading);
  return (
    <>
      {isLoading && <Loading />}

      <Container>{children}</Container>
    </>
  );
};
