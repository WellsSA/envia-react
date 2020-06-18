import styled from 'styled-components';
import { fonts } from '../../../../styles/scale';
import { getColor } from '../../../../utils/themeHelper';

export const Container = styled.div``;

export const ModelosMensagens = styled.div`
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

export const FormHeader = styled.div`
  height: 50px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  float: left;
`;
