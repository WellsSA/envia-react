import styled from 'styled-components';
import { lighten } from 'polished';
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

    a {
      display: flex;
      height: 70px;
      color: ${props => lighten(0.01, getColor(props, 'primary'))};
      padding: 0 20px;
      font-size: 18px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        /* padding-right: 15px; */
        /* border-right: 1px solid #c3c3c3; */
      }

      strong {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
      }
    }
  }
`;
