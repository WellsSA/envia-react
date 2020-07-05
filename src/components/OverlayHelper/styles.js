import styled, { keyframes, css } from 'styled-components';
import {
  fadeInLeft as animationIn,
  fadeOutRight as animationOut,
} from 'react-animations';
import { getColor } from '../../utils/themeHelper';

const animation = {
  timeIn: '1s',
  timeOut: '0.5s',
  in: keyframes`${animationIn}`,
  out: keyframes`${animationOut}`,
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  /* display: ${props => (props.visible ? 'flex' : 'none')}; */
  display: flex;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: visibility ${animation.timeOut} ease-in-out, opacity ${
  animation.timeOut
} ease-in-out;
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

  ${props =>
    props.visible
      ? css`
          animation: ${animation.timeIn} ${animation.in} forwards;
        `
      : css`
          animation: ${animation.timeOut} ${animation.out} forwards;
        `}
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
