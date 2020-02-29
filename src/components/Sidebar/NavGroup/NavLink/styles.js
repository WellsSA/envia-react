import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { getColor } from '../../../../utils/themeHelper';
import { fonts } from '../../../../styles/scale';

export const Container = styled.div`
  a {
    display: flex;
    height: 70px;
    color: ${props => lighten(0.01, getColor(props, 'constrast'))};
    padding: 0 20px;
    font-size: ${fonts.labelFontSize};
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      /* padding-right: 15px; */
      /* border-right: 1px solid #c3c3c3; */
      svg {
        font-size: ${fonts.sectionTitleSize};
      }
    }

    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
    }

    &:hover {
      background: ${props => darken(0.15, getColor(props, 'background'))};
    }
  }
`;
