import styled from 'styled-components';

interface CarouselItemPropsInterface {
  src: string;
}

const Item = styled.div<CarouselItemPropsInterface>`
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
`;

export const CarouselItem = ({
  src,
}: CarouselItemPropsInterface): JSX.Element => <Item src={src} />;
