import styled, { keyframes, css } from 'styled-components';
import {
  fadeInRight as animationIn,
  fadeInLeft as animationOut,
} from 'react-animations';

const animation = {
  time: '0.5s',
  in: keyframes`${animationIn}`,
  out: keyframes`${animationOut}`,
};

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: ${props => (props.active ? 'block' : 'none')};

  ${props =>
    props.next
      ? css`
          animation: ${animation.time} ${animation.in};
        `
      : css`
          animation: ${animation.time} ${animation.out};
        `}
`;
