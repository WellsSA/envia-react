import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  max-height: 500px;
  overflow-y: ${({ isResponsible }) => (!isResponsible ? 'auto' : 'none')};
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Responsible = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  height: ${({ visible }) => (visible ? '200px' : '0')};
  transition: height 0.5s ease-in-out;
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
