import styled from 'styled-components';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/theme';

export const CustomLabel = styled.label`
  color: ${props => getColor(props, 'text')};
  font-size: ${fonts.labelFontSize};
  font-weight: 600;
  display: inline-flex;
  span {
    margin-left: 5px;
    font-weight: 400;
  }
`;
