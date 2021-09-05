import React from 'react';

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

export const Navbar = () => <NavbarContainer />;
