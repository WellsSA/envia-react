import styled from 'styled-components';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  /* width: 50%; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background: ${props => getColor(props, 'background')};
  border-radius: 4px;
  z-index: 101;

  > div {
    border-radius: 4px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
