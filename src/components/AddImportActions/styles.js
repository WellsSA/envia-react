import styled from 'styled-components';
import { fonts } from '../../styles/scale';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: inline-flex;
    align-items: center;
    font-size: ${fonts.inputFontSize};
    color: ${props => getColor(props, 'contrastText')};
    background: ${props => getColor(props, 'confirm')};
    border: none;
    border-radius: 4px;
    margin-left: 15px;
    padding: 4px 8px;

    svg {
      margin-left: 4px;
    }
  }
`;

export const AddButton = styled.button``;
export const ImportButton = styled.button``;
