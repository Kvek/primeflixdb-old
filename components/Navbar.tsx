import { BrandLetter, BrandLogo, Menu } from '@components/Logos';

import styled from 'styled-components';

const NavbarContainer = styled.div`
  box-shadow: ${({ theme }) => `0px 0px 19px -15px ${theme.boxShadow}`};
  display: flex;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const IconContainer = styled.span`
  display: flex;
  margin-left: 20px;

  @media ${({ theme }) => theme.breakPoints.md} {
    display: none;
  }

  svg {
    width: 25px;
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

export const Navbar = (): JSX.Element => {
  const onMenuClick = () => null;

  return (
    <NavbarContainer>
      <IconContainer>
        <BrandLetter />
      </IconContainer>

      <BrandLogoContainer>
        <BrandLogo />
      </BrandLogoContainer>

      <MenuContainer>
        <Menu onClick={onMenuClick} />
      </MenuContainer>
    </NavbarContainer>
  );
};
