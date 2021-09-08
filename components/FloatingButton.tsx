import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { gsap } from 'gsap';
import { fromEvent, Subscription } from 'rxjs';
import styled from 'styled-components';

import { ThemeToggleIcon } from './Logos';

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
  height: 210px;
  padding-bottom: 30px;
  position: fixed;
  width: 70px;
  z-index: 2;
`;

const MenuContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

const DotContainer = styled.div<IconInterface>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  max-height: ${({ isMenuHovered }) => (isMenuHovered ? '30px' : '20px')};
  transform: ${({ index, isMenuHovered }) =>
    `matrix(1, 0, 0, 1, 0, ${isMenuHovered ? `${index * -10}` : 0})`};
  transition: ${({ theme: { transitionFunction, transitionSpeed } }) =>
    `transform ${transitionSpeed} ${transitionFunction}, max-height ${transitionSpeed} ${transitionFunction}`};
  width: 100%;

  svg {
    height: 20px;
    width: 20px;

    &.icons {
      opacity: 0;
    }
  }
`;

const Dot = styled.span`
  background: ${({ theme: { color } }) => color};
  border-radius: 50%;
  height: 5px;
  position: absolute;
  width: 5px;
`;

export const FloatingButton = () => {
  const boxRef = useRef(null);
  const dotRefs = gsap.utils.selector(boxRef);

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

  useLayoutEffect(() => {
    const dots = dotRefs('.dot');
    const icons = dotRefs('.icons');

    if (isMenuHovered) {
      gsap.to(dots, { duration: 0.15, opacity: 0 });
      gsap.to(icons, { delay: 0.075, duration: 0.15, opacity: 1 });
    } else {
      gsap.to(icons, { duration: 0.15, opacity: 0 });
      gsap.to(dots, { delay: 0.075, duration: 0.15, opacity: 1 });
    }
  }, [isMenuHovered, dotRefs]);

  return (
    <Container ref={setRef}>
      <MenuContainer ref={boxRef}>
        <DotContainer id="2" index={2} isMenuHovered={isMenuHovered}>
          <Dot className="dot" />
        </DotContainer>

        <DotContainer id="1" index={1} isMenuHovered={isMenuHovered}>
          <Dot className="dot" />
          <ThemeToggleIcon onClick={() => {}} />
        </DotContainer>
        <DotContainer id="0" index={0} isMenuHovered={isMenuHovered}>
          <Dot className="dot" />
        </DotContainer>
      </MenuContainer>
    </Container>
  );
};
