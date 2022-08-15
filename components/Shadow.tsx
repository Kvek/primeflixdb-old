import styled from '@emotion/styled';

interface ShadowPropsInterface {
  bottom?: boolean;
}

const Container = styled.div<ShadowPropsInterface>`
  background: linear-gradient(
    ${({ bottom }) => (bottom ? ' 180deg' : ' 0deg')},
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.013) 8.1%,
    hsla(0, 0%, 0%, 0.049) 15.5%,
    hsla(0, 0%, 0%, 0.104) 22.5%,
    hsla(0, 0%, 0%, 0.175) 29%,
    hsla(0, 0%, 0%, 0.259) 35.3%,
    hsla(0, 0%, 0%, 0.352) 41.2%,
    hsla(0, 0%, 0%, 0.45) 47.1%,
    hsla(0, 0%, 0%, 0.55) 52.9%,
    hsla(0, 0%, 0%, 0.648) 58.8%,
    hsla(0, 0%, 0%, 0.741) 64.7%,
    hsla(0, 0%, 0%, 0.825) 71%,
    hsla(0, 0%, 0%, 0.896) 77.5%,
    hsla(0, 0%, 0%, 0.951) 84.5%,
    hsla(0, 0%, 0%, 0.987) 91.9%,
    hsl(0, 0%, 0%) 100%
  );
  height: 20vw;
  position: absolute;
  width: 100%;
  z-index: 2;
  ${({ bottom }) => (bottom ? 'bottom: 0' : 'top: 0')};
`;

export const Shadow = ({ bottom }: { bottom?: boolean }) => (
  <Container bottom={bottom} />
);
