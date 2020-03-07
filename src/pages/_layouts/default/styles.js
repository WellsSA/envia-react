import styled from 'styled-components';
import { getColor } from '../../../utils/themeHelper';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #558fc6, #33b5e5); */
  background: ${props => getColor(props, 'background')};
  overflow-x: hidden;
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;
