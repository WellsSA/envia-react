import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '../../../../utils/themeHelper';
import { fonts } from '../../../../styles/scale';

export const Container = styled.div`
  /* background: #fff; */
  background: ${({ theme: { colors } }) =>
    `linear-gradient(-90deg, ${colors.primary}, ${colors.highlight})`};
  /* padding: 2px; */
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Content = styled.div`
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MainNavigation = styled.div`
  height: 100%;
  display: flex;
  opacity: 0.7;
`;

export const NavItem = styled.div`
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
