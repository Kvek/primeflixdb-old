import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { scrollSubject } from 'observables/ScrollSubject';
import { Subscription } from 'rxjs';
import styled from 'styled-components';

const BrandLetter = dynamic(() => import('../logos/BrandLetter'));
const BrandLogo = dynamic(() => import('../logos/BrandLogo'));
const Menu = dynamic(() => import('../logos/Menu'));

interface NavbarInterface {
  showShadow: boolean;
}

const NavbarContainer = styled.div<NavbarInterface>`
  display: flex;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  ${({ showShadow, theme }) =>
    showShadow ? ` box-shadow: 0px 0px 19px -15px ${theme.boxShadow};` : ''};
`;

const IconContainer = styled.span`
  display: flex;
  margin-left: 20px;

  @media ${({ theme }) => theme.breakPoints.md} {
    display: none;
  }

  svg {
    width: 30px;
  }
`;

const BrandLogoContainer = styled.span`
  display: none;

  @media ${({ theme }) => theme.breakPoints.md} {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  svg {
    max-width: 200px;
    width: 100%;
  }
`;

const MenuContainer = styled.span`
  display: flex;
  margin-right: 20px;

  @media ${({ theme }) => theme.breakPoints.md} {
    display: none;
  }

  svg {
    width: 80px;
  }
`;

let ScrollSubjectSubscription$: Subscription;

export const Navbar = (): JSX.Element => {
  const [showShadow, setShowShadow] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const scrollToggleHeight = (window.innerWidth * 56.25) / 100;

    ScrollSubjectSubscription$ = scrollSubject.subscribe((e) => {
      if (pathname === '/') {
        setShowShadow(e > scrollToggleHeight);
      }
    });

    () => {
      ScrollSubjectSubscription$.unsubscribe();
    };
  }, [pathname]);

  return (
    <NavbarContainer showShadow={showShadow}>
      <IconContainer>
        <BrandLetter />
      </IconContainer>

      <BrandLogoContainer>
        <BrandLogo />
      </BrandLogoContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>
    </NavbarContainer>
  );
};
