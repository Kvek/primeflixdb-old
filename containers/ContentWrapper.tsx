import { FC } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { selectLoading } from '@store/config.reducer';

import dynamic from 'next/dynamic';
import { scrollSubject } from 'observables/ScrollSubject';
import { fromEvent, Subscription } from 'rxjs';

const Loading = dynamic(() => import('@components/Loading'));

const Container = styled.div`
  height: 100%;
  min-height: calc(100% - 80px);
  overflow: auto;
`;

let ScrollSubscription$: Subscription;

const onScrollHandler = (node: Element | null) => {
  if (node) {
    ScrollSubscription$ = fromEvent(node, 'scroll').subscribe((e) => {
      scrollSubject.next((e?.target as HTMLElement)?.scrollTop);
    });
  } else {
    ScrollSubscription$.unsubscribe();
  }
};

export const ContentWrapper: FC = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loading />}

      <Container ref={onScrollHandler}>{children}</Container>
    </>
  );
};
