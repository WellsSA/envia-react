import styled, { css } from 'styled-components';

import { lighten, darken, transparentize } from 'polished';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/theme';
import { Button } from '~/components/_common';

export const Container = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  background: ${props => lighten(0.05, getColor(props, 'confirm'))} !important;
  text-align: center;

  &:hover {
    background: ${props =>
      transparentize(
        0.1,
        lighten(0.05, getColor(props, 'confirm'))
      )} !important;
  }

  svg {
    margin-left: 0;
    font-size: ${fonts.iconFontSize};
  }

  ${props =>
    props.checked &&
    css`
      background: ${darken(0.08, getColor(props, 'confirm'))} !important;
      &:hover {
        background: ${transparentize(
          0.1,
          darken(0.08, getColor(props, 'confirm'))
        )} !important;
      }
    `}
`;
