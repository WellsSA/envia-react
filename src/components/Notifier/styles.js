import styled, { keyframes, css } from 'styled-components';
import {
  flipInY as animationIn,
  fadeOutDown as animationOut,
} from 'react-animations';

const animation = {
  timeIn: '1s',
  timeOut: '0.5s',
  in: keyframes`${animationIn}`,
  out: keyframes`${animationOut}`,
};

export const Container = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
  height: ${props => (props.visible ? 'auto' : '0')};
  ${props =>
    props.visible
      ? css`
          visibility: visible;
          opacity: 1;
          height: auto;
          animation: ${animation.timeIn} ${animation.in} forwards;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          height: 0;
          animation: ${animation.timeOut} ${animation.out} forwards;
        `}
`;
