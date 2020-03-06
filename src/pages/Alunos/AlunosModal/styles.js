import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
`;
export const Responsible = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;
