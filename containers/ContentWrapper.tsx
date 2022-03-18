import { FC } from 'react';

import styled from '@emotion/styled';

import { Search } from '@components/Search';

import { ShowLoading } from '@store/atoms/ShowLoading.atom';
import { ShowSearch } from '@store/atoms/ShowSearch.atom';

import dynamic from 'next/dynamic';
import { scrollSubject } from 'observables/ScrollSubject';
import { useRecoilValue } from 'recoil';
import { fromEvent, Subscription } from 'rxjs';

const Loading = dynamic(() => import('../components/Loading'));

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
  const isLoading = useRecoilValue(ShowLoading);
  const showSearch = useRecoilValue(ShowSearch);

  return (
    <>
      {isLoading && <Loading />}

      {showSearch && <Search />}

      <Container ref={onScrollHandler}>{children}</Container>
    </>
  );
};
