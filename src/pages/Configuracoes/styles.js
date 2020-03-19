import styled from 'styled-components';
import { lighten } from 'polished';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  .input {
    label {
      color: ${props => lighten(0.1, getColor(props, 'text'))};
      text-transform: uppercase;
    }

    span {
      position: inherit;
      color: initial;
      margin-left: 4px;
    }
  }

  button {
    display: block;
    padding: 6px 12px;
    margin: 10px auto;
  }
`;
