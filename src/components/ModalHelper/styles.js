import styled from 'styled-components';
import { transparentize } from 'polished';
import { fonts } from '../../styles/scale';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  background: ${props => getColor(props, 'background')};
  border-radius: 4px;
  z-index: 101;

  > div {
    border-radius: 4px;
  }
`;

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
  button {
    padding: 4px;
    font-size: ${fonts.titleFontSize};
    border-radius: 4px;
    border: none;
    background: ${props => getColor(props, 'highlight')};
    color: ${props => getColor(props, 'contrastText')};
    margin-left: 15px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
