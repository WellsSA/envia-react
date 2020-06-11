import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

const colorByKind = {
  confirm: {
    color: 'contrastText',
    background: 'confirm',
    hover: 'confirm',
  },
  cancel: {
    color: 'contrastText',
    background: 'cancel',
    hover: 'cancel',
  },
  default: {
    color: 'contrastText',
    background: 'constrast',
    hover: 'constrast',
  },
  envia: {
    color: 'contrastText',
    background: 'highlight',
    hover: 'highlight',
  },
  contrast: {
    color: 'highlight',
    background: 'background',
    hover: 'background',
  },
};

const getByKind = (props, option) =>
  getColor(
    props,
    colorByKind[props.kind] ? colorByKind[props.kind][option] : 'contrastText'
  );

export const CustomButton = styled.button`
  padding: 4px 8px;
  font-size: ${fonts.inputFontSize};
  border-radius: 4px;
  border: none;
  margin-left: 15px;
  color: ${props => getByKind(props, 'color')};
  display: inline-flex;
  align-items: center;
  background: ${props => getByKind(props, 'background')};

  ${props =>
    props.kind === 'contrast' &&
    css`
      border: thin solid ${getByKind(props, 'color')};
    `}
  &:hover {
    background: ${props => darken(0.1, getByKind(props, 'hover'))};
  }

  svg {
    margin: 0 4px;
  }
`;
