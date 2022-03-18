import { FC, memo, ReactNode } from 'react';

import styled from '@emotion/styled';

interface DotContainerPropsInterface {
  children: ReactNode;
  className: string;
  index: number;
  setHoverIndex: (index: number | null) => void;
}
const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  max-height: 20px;

  svg {
    height: 20px;
    max-width: 70px;
    min-width: 50px;
    width: 100%;
  }

  .icons {
    opacity: 0;
  }
`;

const Dot = styled.span`
  background: ${({ theme: { color } }) => color};
  border-radius: 50%;
  height: 5px;
  position: absolute;
  width: 5px;
`;

export const DotContainer: FC<DotContainerPropsInterface> = memo(
  ({ children, className, index, setHoverIndex }) => (
    <Container
      className={className}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}>
      <Dot className="dot" />
      {children}
    </Container>
  )
);

DotContainer.displayName = 'DotContainer';
