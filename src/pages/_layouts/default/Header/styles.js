import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '~/utils/themeHelper';
import { fonts, z_index } from '~/styles/scale';

export const Container = styled.div`
  /* background: #fff; */
  background: ${({ theme: { colors } }) =>
    `linear-gradient(-90deg, ${colors.primary}, ${colors.highlight})`};
  /* padding: 2px; */
  position: fixed;
  width: 100%;
  z-index: ${z_index.header.main};
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

export const UserName = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  font-size: ${fonts.iconFontSize};
  padding-left: 15px;
  color: ${props => darken(0.15, getColor(props, 'icon'))};

  span {
    display: block;
    position: absolute;
    max-width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
