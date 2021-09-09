import { useCallback, useEffect, useRef, useState } from 'react';

import { DotContainer } from '@components/DotContainer';
import { Menu, Search, ThemeToggleIcon } from '@components/Logos';

import { ShowDarkTheme } from '@store/atoms/ShowDarkTheme.atom';
import { ShowMenu } from '@store/atoms/ShowMenu.atom';
import { ShowSearch } from '@store/atoms/ShowSearch.atom';

import { gsap } from 'gsap';
import { toggleUpdaterHelper } from 'helper';
import { useSetRecoilState } from 'recoil';
import { fromEvent, Subscription, tap } from 'rxjs';
import styled from 'styled-components';

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

const MenuIconContainer = styled.span`
  svg {
    width: 50px;
  }
`;

const SearchIconContainer = styled.span``;

const ThemeIconContainer = styled.span``;

export const FloatingButton = (): JSX.Element => {
  const MouseEnterSubscription$ = useRef<Subscription | null>(null);
  const MouseLeaveSubscription$ = useRef<Subscription | null>(null);

  const [hoveredIndex, setHoverIndex] = useState<number | null>(null);

  const setToggleDarkTheme = useSetRecoilState(ShowDarkTheme);
  const setToggleMenu = useSetRecoilState(ShowMenu);
  const setToggleSearch = useSetRecoilState(ShowSearch);

  const toggleTheme = () => toggleUpdaterHelper(setToggleDarkTheme);
  const toggleMenu = () => toggleUpdaterHelper(setToggleMenu);
  const toggleSearch = () => toggleUpdaterHelper(setToggleSearch);

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
        <DotContainer
          className="container-2"
          index={2}
          setHoverIndex={setHoverIndex}>
          <MenuIconContainer>
            <Menu isActive={hoveredIndex === 2} onClick={toggleMenu} />
          </MenuIconContainer>
        </DotContainer>

        <DotContainer
          className="container-1"
          index={1}
          setHoverIndex={setHoverIndex}>
          <SearchIconContainer>
            <Search isActive={hoveredIndex === 1} onClick={toggleSearch} />
          </SearchIconContainer>
        </DotContainer>

        <DotContainer
          className="container"
          index={0}
          setHoverIndex={setHoverIndex}>
          <ThemeIconContainer>
            <ThemeToggleIcon onClick={toggleTheme} />
          </ThemeIconContainer>
        </DotContainer>
      </MenuContainer>
    </Container>
  );
};
