import styled from 'styled-components';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  .input {
    label {
      color: ${props => getColor(props, 'text')};
      font-size: ${fonts.labelFontSize};
    }

    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid ${props => getColor(props, 'backgroundHighlight')};
      font-size: ${fonts.inputFontSize};
      padding: 4px 8px;
      margin: 4px 0;

      &:focus {
        background: ${props => getColor(props, 'backgroundHighlight')};
        border: 1px solid ${props => getColor(props, 'highlight')};
      }
    }
  }
`;
