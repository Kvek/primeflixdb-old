import React, { useCallback, useEffect } from 'react';

import styled from '@emotion/styled';

import { SET_LOADING } from '@store/config.reducer';
import { useAppDispatch } from '@store/index';

import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

const BrandIcon = dynamic(() => import('@logos/BrandIcon'));

const Container = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.BLACK};
  bottom: 0%;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 3;
`;

const IconContainer = styled.div`
  height: 150px;
  width: 150px;
`;

const timeLine = gsap.timeline({
  duration: 1,
  ease: 'elastic',
});

const Loading = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onCompleteLoadingHandler = useCallback(() => {
    dispatch(SET_LOADING(false));
  }, [dispatch]);

  useEffect(() => {
    timeLine
      .to('#loading-logo', {
        scale: 1,
      })
      .to('#loading-lettering', {
        delay: 0.5,
        duration: 0.75,
        opacity: 1,
      })
      .to('#loading-logo', {
        delay: 0.5,
        scale: 0,
      })
      .to('#loading-container', {
        opacity: 0,
      })
      .to('#loading-container', {
        display: 'none',
        onComplete: () => onCompleteLoadingHandler(),
      });
  }, [onCompleteLoadingHandler]);

  return (
    <Container id="loading-container">
      <IconContainer>
        <BrandIcon />
      </IconContainer>
    </Container>
  );
};

export default Loading;
