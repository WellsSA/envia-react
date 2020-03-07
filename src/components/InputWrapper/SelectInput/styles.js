import styled from 'styled-components';
import { transparentize } from 'polished';
import { getColor } from '../../../utils/themeHelper';

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
`;
