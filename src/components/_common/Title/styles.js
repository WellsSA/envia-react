import styled from 'styled-components';
import { darken } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.h1`
  font-size: ${fonts.titleFontSize};
  color: ${props => darken(0.2, getColor(props, 'primary'))};
  padding: 8px 0;
  text-transform: uppercase;
  text-align: ${props => (props.centered ? 'center' : 'left')};
`;
