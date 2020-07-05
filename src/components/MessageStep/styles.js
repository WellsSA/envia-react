import styled, { keyframes, css } from 'styled-components';
import {
  fadeInRight as animationIn,
  fadeInLeft as animationOut,
} from 'react-animations';
import { z_index } from '~/styles/scale';

const animation = {
  time: '0.5s',
  in: keyframes`${animationIn}`,
  out: keyframes`${animationOut}`,
};

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: ${props => (props.active ? 'block' : 'none')};
  position: relative;
  z-index: ${z_index.messageStep.main};

  ${props =>
    props.next
      ? css`
          animation: ${animation.time} ${animation.in} forwards;
        `
      : css`
          animation: ${animation.time} ${animation.out} forwards;
        `}
`;
