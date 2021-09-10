import React, { useEffect, useState } from 'react';

import { BrandIcon } from '@logos/BrandIcon';

import { ShowLoading } from '@store/atoms/ShowLoading.atom';

import { gsap } from 'gsap';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

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

export const Loading = (): JSX.Element => {
  const setShowLoadingScreen = useSetRecoilState(ShowLoading);

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

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
        onComplete: () => setIsLoadingComplete(true),
        scale: 0,
      });
  }, []);

  useEffect(() => {
    if (isLoadingComplete) {
      timeLine.to('#loading-container', {
        onComplete: () => setShowLoadingScreen(false),
        opacity: 0,
      });
    }
  }, [isLoadingComplete, setShowLoadingScreen]);

  return (
    <Container id="loading-container">
      <IconContainer>
        <BrandIcon />
      </IconContainer>
    </Container>
  );
};
