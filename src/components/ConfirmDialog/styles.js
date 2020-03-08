import styled from 'styled-components';
import { transparentize } from 'polished';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  min-width: 100px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const Message = styled.h2`
  padding: 25px;
  padding-bottom: 15px;
  border: 1px solid #eee;
  text-transform: uppercase;
  color: ${props => getColor(props, 'strongText')};
`;

export const Options = styled.div`
  padding: 15px;
`;

export const Close = styled.div`
  position: absolute;
  right: 0;
  padding: 15px;
  text-align: right;

  svg {
    cursor: pointer;
    color: ${props => transparentize(0.5, getColor(props, 'text'))};

    &:hover {
      color: ${props => getColor(props, 'text')};
    }
  }
`;
