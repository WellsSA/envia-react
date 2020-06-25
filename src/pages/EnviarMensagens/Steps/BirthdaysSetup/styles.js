import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  > div {
    padding: 0;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0;
      margin: 40px 0;
      img {
        width: 40%;
      }
    }
  }
`;
