import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '~/utils/themeHelper';
import { fonts } from '~/styles/scale';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100%;
  display: flex;
  /* background: radial-gradient(#eee, #e3e3e3); */
  background: ${props => darken(0.2, getColor(props, 'primary'))};
  cursor: pointer;
  font-size: ${fonts.iconFontSize};
  color: ${props => darken(0.15, getColor(props, 'icon'))};
`;
