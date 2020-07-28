import styled from 'styled-components';
import { transparentize } from 'polished';
import { getColor } from '~/utils/theme';

export const Mark = styled.div`
  width: 100%;
  color: ${props => getColor(props, 'contrastText')};
  background: ${props => getColor(props, 'strongText')};
  height: 3%;
  display: flex;
  align-items: center;
  padding-left: 0.3%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  color: ${props => getColor(props, 'contrastText')};
  background: ${({ theme: { colors } }) =>
    `linear-gradient(-90deg, ${colors.highlight}, ${colors.primary})`};
`;

export const Links = styled.div`
  width: 20%;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0 40px 5%;
  /* align-items: center; */

  li {
    padding-top: 10px;
    padding-left: 20%;

    a {
      cursor: pointer;
      color: ${props => getColor(props, 'contrastText')};

      &:hover {
        color: ${props => transparentize(0.2, getColor(props, 'contrastText'))};
      }
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
