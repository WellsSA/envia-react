import styled from 'styled-components';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.div`
  width: 560px;
  padding: 20px 40px;
  span {
    display: inline-block;
    font-size: ${fonts.titleFontSize};
    margin: 10px 4px;
  }
`;

export const Label = styled.span`
  color: ${props => getColor(props, 'strongText')};
`;

export const Value = styled.span`
  color: ${props => getColor(props, 'text')};
  font-weight: bold;
`;

export const SubMark = styled.span`
  font-size: ${fonts.subMarkerFontSize} !important;
`;
