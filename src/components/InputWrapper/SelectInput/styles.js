import styled from 'styled-components';
import { transparentize, lighten } from 'polished';
import { getColor } from '../../../utils/theme';

export const Container = styled.div`
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  select {
    /* background-color: #f07575; */
    &:hover {
      color: ${props => getColor(props, 'contrastText')};
      background-color: ${props =>
        transparentize(0.2, getColor(props, 'highlight'))};
    }
  }

  span {
    color: ${props => lighten(0.15, getColor(props, 'cancel'))};
    font-weight: bold;
    text-align: right;
  }
`;
