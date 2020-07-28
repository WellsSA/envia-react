import styled from 'styled-components';
import { getColor } from '../../../utils/themeHelper';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #558fc6, #33b5e5); */
  background: ${props => getColor(props, 'background')};
  overflow-x: hidden;

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

export const MobileWarning = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  background: linear-gradient(-90deg, #558fc6, #33b5e5);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
