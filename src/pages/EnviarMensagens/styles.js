import styled from 'styled-components';
// import { darken, transparentize } from 'polished';
// import { fonts } from '../../styles/scale';
// import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  padding: 0 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.div`
  height: 100px;
  max-width: 800px;
  background: #0f0;
  margin: 0 auto;
`;

export const MessageStep = styled.div`
  width: 90%;
  margin: 0 auto;
  display: ${props => (props.active ? 'block' : 'none')};
`;
