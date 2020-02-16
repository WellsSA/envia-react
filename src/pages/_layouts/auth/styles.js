import styled from 'styled-components';
// import { darken } from 'polished';

/*
  primary color ideas:

  primary: #558FC6
  highlight: #33B5E5
  text: #FFF
  backgroundHighlight: #F2F2F2
  background: #FFF

*/

export const Wrapper = styled.div`
  height: 100%;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(-90deg, ${colors.primary}, ${colors.highlight})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
`;
