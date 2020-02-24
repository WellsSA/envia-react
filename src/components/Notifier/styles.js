import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;
