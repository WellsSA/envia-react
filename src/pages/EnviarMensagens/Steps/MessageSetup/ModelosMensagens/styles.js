import styled from 'styled-components';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => getColor(props, 'confirm')};
  cursor: pointer;
  margin: 5px;
  svg {
    font-size: ${fonts.iconFontSize};
  }
`;
