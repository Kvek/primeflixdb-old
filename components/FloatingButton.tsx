import { useCallback, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { fromEvent, Subscription, tap } from 'rxjs';
import styled from 'styled-components';

import { Menu, Search, ThemeToggleIcon } from './Logos';

const Container = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakPoints.lg} {
    align-items: flex-end;
    bottom: 0;
    display: flex;
    height: 210px;
    padding-bottom: 30px;
    padding-right: 30px;
    position: fixed;
    right: 0;
    width: 80px;
    z-index: 2;
  }
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

const DotContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  max-height: 25px;
  width: 100%;

  svg {
    height: 20px;
    width: 20px;

    &.icons {
      opacity: 0;
    }
  }
`;

const MenuIconContainer = styled.span`
  svg {
    width: 50px;
  }
`;

const SearchIconContainer = styled.span`
  svg {
    width: 70px;
  }
`;

const ThemeIconContainer = styled.span``;

const Dot = styled.span`
  background: ${({ theme: { color } }) => color};
  border-radius: 50%;
  height: 5px;
  position: absolute;
  width: 5px;
`;

export const FloatingButton = () => {
  let MouseEnterSubscription$ = useRef<Subscription | null>(null);
  let MouseLeaveSubscription$ = useRef<Subscription | null>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const setIndex = (index: number | null) => {
    setHoveredIndex(index);
  };

  const resetIndex = () => setHoveredIndex(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const dotRefs = gsap.utils.selector(node);
      const container1 = dotRefs('.container-1');
      const container2 = dotRefs('.container-2');
      const dots = dotRefs('.dot');
      const icons = dotRefs('.icons');

      MouseEnterSubscription$.current = fromEvent(node, 'mouseenter').subscribe(
        () => {
          gsap.to(container1, {
            duration: 0.15,
            transform: 'matrix(1, 0, 0, 1, 0, -20)',
          });

          gsap.to(container2, {
            duration: 0.15,
            transform: 'matrix(1, 0, 0, 1, 0, -40)',
          });

          gsap.to(dots, { delay: 0.075, duration: 0.15, opacity: 0 });
          gsap.to(icons, {
            delay: 0.1125,
            duration: 0.15,
            opacity: 1,
          });
        }
      );

      MouseLeaveSubscription$.current = fromEvent(node, 'mouseleave')
        .pipe(
          tap(() => {
            gsap.killTweensOf(dots);
            gsap.killTweensOf(icons);
          })
        )
        .subscribe(() => {
          gsap.to(container1, {
            duration: 0.15,
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
          });

          gsap.to(container2, {
            duration: 0.15,
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
          });

          gsap.to(icons, { delay: 0.075, duration: 0.15, opacity: 0 });
          gsap.to(dots, { delay: 0.1125, duration: 0.15, opacity: 1 });
        });
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
        <DotContainer className="container-2">
          <Dot className="dot" />
          <MenuIconContainer
            onMouseEnter={() => setIndex(2)}
            onMouseLeave={resetIndex}>
            <Menu isActive={hoveredIndex === 2} onClick={() => {}} />
          </MenuIconContainer>
        </DotContainer>

        <DotContainer className="container-1">
          <Dot className="dot" />
          <SearchIconContainer
            onMouseEnter={() => setIndex(1)}
            onMouseLeave={resetIndex}>
            <Search isActive={hoveredIndex === 1} onClick={() => {}} />
          </SearchIconContainer>
        </DotContainer>

        <DotContainer className="container">
          <Dot className="dot" />
          <ThemeIconContainer
            onMouseEnter={() => setIndex(0)}
            onMouseLeave={resetIndex}>
            <ThemeToggleIcon onClick={() => {}} />
          </ThemeIconContainer>
        </DotContainer>
      </MenuContainer>
    </Container>
  );
};
