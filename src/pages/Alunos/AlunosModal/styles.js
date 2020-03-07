import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
`;
export const Responsible = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const DatePlace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input:first-child {
    width: 40%;
  }

  .input:last-child {
    padding-top: 16px;
  }
`;
