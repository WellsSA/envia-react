import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  /* background: #f00; */
  display: flex;
  justify-content: ${props => (props.centered ? 'center' : 'space-between')};
  align-items: center;
  padding: 0 20px;
`;
