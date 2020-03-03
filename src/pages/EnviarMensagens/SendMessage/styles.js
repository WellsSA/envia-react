import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div``;

export const Marker = styled.div`
  width: 90%;
  margin: 20px auto 10px auto;
  height: 20px;
  background: ${props => getColor(props, 'backgroundHighlight')};
  border-radius: 0 0 12px 12px;
  border-top: thin solid
    ${props => darken(0.1, getColor(props, 'backgroundHighlight'))};
`;

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
