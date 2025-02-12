import styled from 'styled-components';
import { getColor } from '../../../utils/theme';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #558fc6, #33b5e5); */
  background: ${props => getColor(props, 'background')};
  overflow-x: hidden;
  zoom: 85%;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  height: calc(97% - 50px);
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
