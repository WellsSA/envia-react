import styled from 'styled-components';

export const Mark = styled.div`
  width: 100%;
  background: #fafa;
  height: 3%;
  display: flex;
  align-items: center;
  padding-left: 0.3%;
`;

export const Container = styled.div`
  width: 100%;
  color: #fff;
  background: #000;
  display: flex;
`;

export const Links = styled.div`
  width: 20%;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  /* align-items: center; */
  li {
    cursor: pointer;
    padding-top: 10px;
    padding-left: 20%;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
