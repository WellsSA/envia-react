import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.div`
  width: 33%;
  height: 108px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: ${fonts.iconFontSize};
    color: ${props =>
      transparentize(0.2, darken(0.02, getColor(props, 'primary')))};
  }

  span {
    font-size: ${fonts.labelFontSize};
    font-weight: bold;
    color: ${props => transparentize(0.5, getColor(props, 'text'))};
  }

  &:hover {
    background: ${props =>
      darken(0.01, getColor(props, 'backgroundHighlight'))};
  }
`;
