import styled from 'styled-components';
import { getColor } from '../../../utils/themeHelper';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #558fc6, #33b5e5); */
  background: ${props => getColor(props, 'background')};
`;
