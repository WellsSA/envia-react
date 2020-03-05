import styled from 'styled-components';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  height: 100px;
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
  cursor: pointer;
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
`;
