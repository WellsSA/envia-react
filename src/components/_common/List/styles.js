import styled from 'styled-components';
import { transparentize } from 'polished';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.ul`
  padding: 20px;
  font-size: ${fonts.fontSize};
  line-height: 1.5;

  li {
    &::before {
      content: '\\27A4  ';
      color: ${props => transparentize(0.2, getColor(props, 'text'))};
    }
  }
  span {
    margin-left: 4px;
  }
`;
