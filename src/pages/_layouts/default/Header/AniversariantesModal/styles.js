import styled from 'styled-components';

export const Container = styled.div`
  min-width: 400px;
`;

export const Content = styled.div`
  width: 1000px;
  height: 600px;
`;

export const OnEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  img {
    width: 200px;
    margin-bottom: 50px;
  }
`;
