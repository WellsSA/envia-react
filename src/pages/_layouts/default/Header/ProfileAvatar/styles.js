import styled from 'styled-components';
import { darken } from 'polished';
import { getColor } from '../../../../../utils/themeHelper';
// import { fonts } from '../../../../../styles/scale';

export const Container = styled.div`
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  z-index: 200;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  margin: 25px 0 0 5px;
  border: 7px solid
    ${props => darken(0.2, getColor(props, 'backgroundHighlight'))};
  border-radius: 50%;
  background: ${props => getColor(props, 'primary')};
  background-image: ${props => `url(${props.src})`};
  image-rendering: optimizeSpeed;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const OptionBar = styled.ul`
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: absolute;
  left: 90px;
  top: 110px;
  width: 160px;
  background: ${props => getColor(props, 'background')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #000;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  z-index: 201;
`;

export const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${props => getColor(props, 'text')};
  border-bottom: thin solid ${props => getColor(props, 'backgroundHighlight')};
  padding: 20px;
  border-radius: 4px;

  &:hover {
    background: ${props => darken(0.04, getColor(props, 'background'))};
  }
`;

export const Background = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.4);
  z-index: 199;
`;

export const FileLabel = styled.label`
  cursor: pointer;
  input {
    display: none;
  }
`;
