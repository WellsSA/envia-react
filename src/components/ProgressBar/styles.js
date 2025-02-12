import styled from 'styled-components';
import { getColor } from '~/utils/theme';

export const Container = styled.div`
  height: 100px;
  width: 80%;
  max-width: 800px;
  background: ${props => getColor(props, 'background')};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  position: relative;
`;

export const Bullet = styled.div`
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => getColor(props, 'background')};
  border: 8px solid
    ${props =>
      props.active
        ? getColor(props, 'strongText')
        : getColor(props, 'backgroundHighlight')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: border 1s ease-in;
  animation-delay: 0.5s;
`;

export const Bar = styled.div`
  position: absolute;
  width: ${({ fill, max }) => `${(100 / max) * fill}%`};
  height: 8px;
  background: ${props =>
    props.active
      ? getColor(props, 'strongText')
      : getColor(props, 'backgroundHighlight')};
  z-index: 9;
  transition: width 0.5s ease-in-out;
`;
