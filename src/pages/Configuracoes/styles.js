import styled from 'styled-components';
import { lighten } from 'polished';
import { getColor } from '../../utils/themeHelper';
import { fonts } from '../../styles/scale';

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

export const SectionDivisor = styled.div`
  display: flex;
  padding: 40px;

  section {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px;
    border-right: 1px solid ${props => getColor(props, 'backgroundHighlight')};

    &:last-child {
      border-right: none;
    }
  }
`;

export const ListDisplayer = styled.ul`
  padding: 20px;
  font-size: ${fonts.fontSize};
  line-height: 1.5;

  span {
    margin-left: 4px;
  }
`;
