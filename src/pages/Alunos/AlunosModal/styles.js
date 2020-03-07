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

export const Radios = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;

  label {
    margin: 0 5px 0 15px;
  }

  input[type='radio'] {
    margin: 0px 2px;
  }
`;
