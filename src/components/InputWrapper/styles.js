import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { fonts } from '../../styles/scale';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  margin: 15px 5px;
  position: relative;

  input,
  select,
  textarea {
    width: 100%;
    border-radius: 4px;
    font-size: ${fonts.inputFontSize};
    border: none;
    padding: 4px 8px;
    margin: 4px 0;
    pointer-events: auto;
    color: ${props => transparentize(0.1, getColor(props, 'text'))};
  }

  > span {
    position: absolute;
    top: 0;
    right: 0;
    color: ${props => lighten(0.15, getColor(props, 'cancel'))};
    /* #fb6f91; */
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  ${props =>
    props.styled === 'default' &&
    css`
      position: relative;
      pointer-events: none;

      &::before {
        content: '';
        right: 0;
        left: 0;
        bottom: 0;
        position: absolute;
        border-radius: 4px;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-bottom: 1px solid
          ${darken(0.2, getColor(props, 'backgroundHighlight'))};
        pointer-events: none;
      }

      &:hover:before {
        border-bottom-width: 2px;
        border-bottom-color: ${getColor(props, 'text')};
      }

      &:focus-within:before {
        border-bottom-width: 2px;
        border-bottom-color: ${getColor(props, 'primary')};
      }
    `};

  ${props =>
    props.styled === 'select' &&
    css`
      display: flex;
      label {
        width: 20%;
      }
      select {
        cursor: pointer;
        width: 80%;
      }
    `};
`;
