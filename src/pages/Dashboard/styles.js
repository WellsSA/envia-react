import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const Carousel = styled.div`
  display: flex;

  button {
    width: 8%;
    margin: 1%;
    font-size: 48px;
  }

  > div {
    width: 80%;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    height: 0px;
    background: transparent;
  }
`;

export const Question = styled.div`
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  margin: 30px 15px;
  padding: 15px;
  border-radius: 12px;
  background: ${props => darken(0.05, getColor(props, 'background'))};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;
