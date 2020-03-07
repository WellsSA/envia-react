import styled from 'styled-components';
// import { lighten } from 'polished';
// import { fonts } from '../../styles/scale';
// import { getColor } from '../../utils/themeHelper';

export const Container = styled.div``;

export const MessageStep = styled.div`
  width: 90%;
  margin: 0 auto;
  display: ${props => (props.active ? 'block' : 'none')};
`;
