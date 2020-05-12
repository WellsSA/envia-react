import styled from 'styled-components';
import { darken } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  font-size: ${fonts.labelFontSize};
`;

export const ViewModel = styled.a`
  display: flex;
  cursor: pointer;
  color: ${props => darken(0.1, getColor(props, 'confirm'))};
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const SpreadSheetContainer = styled.label`
  *,
  input[type='file']::-webkit-file-upload-button {
    cursor: pointer;
  }
`;
