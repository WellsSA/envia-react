import styled from 'styled-components';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  color: ${props => getColor(props, 'strongText')};
  width: 100%;

  div {
    width: 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100px;
  }

  svg {
    font-size: 50px;
  }

  span {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 4px;
  }

  &.main {
    div {
      width: 100%;
    }

    span {
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;
