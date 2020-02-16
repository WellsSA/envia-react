import styled from 'styled-components';
import { getColor } from '../../utils/themeHelper';
import { fonts } from '../../styles/scale';

export const Container = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  height: 100vh;
  width: 460px;
  top: 0;
  right: 0;

  aside {
    height: 80px;
    background: ${props => getColor(props, 'primary')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: ${props => getColor(props, 'text')};
    svg {
      font-size: ${fonts.iconFontSize};
      cursor: pointer;
      color: ${props => getColor(props, 'icon')};
    }
  }

  nav {
    background: ${props => getColor(props, 'backgroundHighlight')};
    height: calc(100% - 80px);
  }
`;
