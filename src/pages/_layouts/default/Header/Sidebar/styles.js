import styled from 'styled-components';
import { getColor } from '../../../../../utils/themeHelper';
import { fonts } from '../../../../../styles/scale';

export const Container = styled.div`
  display: block;
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 100;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: ${props => (props.isOpen ? '304px' : '0')};
  transition: width 0.5s ease-in, visibility 0.5s ease-in;

  aside {
    height: 80px;
    background: ${props => getColor(props, 'strongText')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: ${props => getColor(props, 'constrast')};
    svg {
      font-size: ${fonts.iconFontSize};
      cursor: pointer;
      color: ${props => getColor(props, 'icon')};
    }
  }

  nav {
    background: ${props => getColor(props, 'backgroundHighlight')};
    height: calc(100% - 80px);
    overflow-y: auto;
  }
`;

export const Background = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  transition: display 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.4);
`;
