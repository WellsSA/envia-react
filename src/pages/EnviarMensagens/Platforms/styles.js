import styled from 'styled-components';
import { lighten } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Platform = styled.button`
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
  svg {
    margin-left: 0;
    font-size: ${fonts.iconFontSize};
  }
`;
