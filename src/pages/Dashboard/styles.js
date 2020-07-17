import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const Carousel = styled.div`
  display: flex;
  height: 500px;
  button {
    width: 10%;
    margin: 0;
  }

  > div {
    width: 80%;
  }
`;

export const QuestionContainer = styled.div`
  background: #f00;
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
  display: flex;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background: #000;
  margin: 10px;
  padding: 10px;
`;
