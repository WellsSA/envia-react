import styled from 'styled-components';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
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
