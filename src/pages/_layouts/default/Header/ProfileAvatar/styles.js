import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '../../../../../utils/themeHelper';
// import { fonts } from '../../../../../styles/scale';

export const Container = styled.div`
  /* width: 150px;
  height: 150px; */
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 25px 0 0 5px;
    /* width: 140%;
    height: 140%; */
    border: 7px solid
      ${props => darken(0.2, getColor(props, 'backgroundHighlight'))};
    border-radius: 50%;
    background-attachment: fixed;
    background-size: cover;
    image-rendering: optimizeSpeed;
    background-repeat: no-repeat;
  }
`;

export const OptionBar = styled.div`
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 100px;
  height: 100px;
  background: #ccc;
  border-radius: 12px;
`;
