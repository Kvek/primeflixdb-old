import React, { useCallback, useEffect, useRef, useState } from 'react';

import { fromEvent, Subscription } from 'rxjs';
import styled from 'styled-components';

interface HoveredStateInterface {
  isMenuHovered: boolean;
}

interface IconInterface extends HoveredStateInterface {
  index: number;
}

const Container = styled.div`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  height: 150px;
  padding-bottom: 30px;
  position: fixed;
  width: 75px;
  z-index: 2;
`;

const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
`;

const DotContainer = styled.div<IconInterface>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 20px;
  transform: ${({ index, isMenuHovered }) =>
    `matrix(1, 0, 0, 1, 0, ${isMenuHovered ? `${index * -20}` : 0})`};
  transition: ${({ theme: { transitionFunction, transitionSpeed } }) =>
    `transform ${transitionSpeed} ${transitionFunction}`};
  width: 100%;

  svg {
    cursor: pointer;
  }
`;

const Dot = styled.span`
  background: ${({ theme: { color } }) => color};
  border-radius: 50%;
  height: 5px;
  width: 5px;
`;

export const FloatingButton = () => {
  let MouseEnterSubscription$ = useRef<Subscription | null>(null);
  let MouseLeaveSubscription$ = useRef<Subscription | null>(null);

  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      MouseEnterSubscription$.current = fromEvent(node, 'mouseenter').subscribe(
        () => setIsMenuHovered(true)
      );

      MouseLeaveSubscription$.current = fromEvent(node, 'mouseleave').subscribe(
        () => setIsMenuHovered(false)
      );
    }
  }, []);

  useEffect(() => {
    () => {
      if (MouseEnterSubscription$.current)
        MouseEnterSubscription$.current.unsubscribe();

      if (MouseLeaveSubscription$.current)
        MouseLeaveSubscription$.current.unsubscribe();
    };
  }, []);

  return (
    <Container ref={setRef}>
      <MenuContainer>
        <DotContainer index={2} isMenuHovered={isMenuHovered}>
          <Dot />
        </DotContainer>
        <DotContainer index={1} isMenuHovered={isMenuHovered}>
          <Dot />
        </DotContainer>
        <DotContainer index={0} isMenuHovered={isMenuHovered}>
          <Dot />
        </DotContainer>
      </MenuContainer>
    </Container>
  );
};
