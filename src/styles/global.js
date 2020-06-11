import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';
import { fonts } from './scale';
import { getColor } from '../utils/themeHelper';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Open Sans','Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .input {
    margin: 15px 5px;
    position: relative;

    label {
      color: ${props => getColor(props, 'text')};
      font-size: ${fonts.labelFontSize};
      font-weight: 600;
      display: inline-flex;
    }

    input, select {
      width: 100%;
      border-radius: 4px;
      font-size: ${fonts.inputFontSize};
      border: none;
      padding: 4px 8px;
      margin: 4px 0;
      pointer-events: auto;
    }

    &.styled {
      position: relative;
      pointer-events: none;

      &::before {
        content: '';
        right: 0;
        left: 0;
        bottom: 0;
        position: absolute;
        border-radius: 4px;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-bottom: 1px solid ${props =>
          darken(0.2, getColor(props, 'backgroundHighlight'))};
        pointer-events: none;
      }

      &:hover:before{
        border-bottom-width: 2px;
        border-bottom-color: ${props => getColor(props, 'text')};
      }

      &:focus-within:before{
        border-bottom-width: 2px;
        border-bottom-color: ${props => getColor(props, 'primary')};
      }
    }

    &.select {
      display: flex;
      label {
        width: 20%;
      }
      select {
        cursor: pointer;
        width: 80%;
      }
    }

    > span {
      position: absolute;
      top: 0;
      right: 0;
      color: ${props => lighten(0.15, getColor(props, 'cancel'))};
          /* #fb6f91; */
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      pointer-events: auto;
    }
  }
`;
