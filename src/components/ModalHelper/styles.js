import styled from 'styled-components';
import { transparentize } from 'polished';
import { fonts } from '../../styles/scale';
import { getColor } from '../../utils/themeHelper';

export const Header = styled.div`
  height: 60px;
  font-size: ${fonts.titleFontSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: ${props => getColor(props, 'contrastText')};

  background: ${props => getColor(props, 'primary')};

  svg {
    cursor: pointer;
    color: ${props => transparentize(0.5, getColor(props, 'icon'))};

    &:hover {
      color: ${props => getColor(props, 'icon')};
    }
  }
`;

export const Body = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${props => getColor(props, 'backgroundHighlight')};
`;

export const Footer = styled.div`
  padding: 15px;
  text-align: right;
`;
