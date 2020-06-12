import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
