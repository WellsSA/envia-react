import { darken } from 'polished';
import styled from 'styled-components';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/theme';

const colorByKind = {
  confirm: {
    color: 'contrastText',
    background: 'confirm',
    hover: 'contrastText',
    hoverBackground: 'confirm',
  },
  cancel: {
    color: 'contrastText',
    background: 'cancel',
    hover: 'contrastText',
    hoverBackground: 'cancel',
  },
  default: {
    color: 'contrastText',
    background: 'constrast',
    hover: 'contrastText',
    hoverBackground: 'constrast',
  },
  envia: {
    color: 'contrastText',
    background: 'highlight',
    hover: 'contrastText',
    hoverBackground: 'highlight',
  },
  contrast: {
    color: 'highlight',
    background: 'background',
    hover: 'background',
    hoverBackground: 'highlight',
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
  justify-content: center;
  align-items: center;
  background: ${props => getByKind(props, 'background')};

  &:hover {
    color: ${props => getByKind(props, 'hover')};
    background: ${props => darken(0.1, getByKind(props, 'hoverBackground'))};
  }

  svg {
    margin: 0 4px;
  }

  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
`;
