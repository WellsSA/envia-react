import styled from 'styled-components';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const CustomButton = styled.button`
  padding: 4px 8px;
  font-size: ${fonts.inputFontSize};
  border-radius: 4px;
  border: none;
  margin-left: 15px;
  color: ${props => getColor(props, 'contrastText')};
  display: inline-flex;
  align-items: center;
  background: ${props => getColor(props, 'constrast')};

  svg {
    margin: 0 4px;
  }

  &.confirm {
    background: ${props => getColor(props, 'confirm')};
  }

  &.cancel {
    background: ${props => getColor(props, 'cancel')};
  }
`;
