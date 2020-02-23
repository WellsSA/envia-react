import { createGlobalStyle } from 'styled-components';
import { fonts } from './scale';
import { getColor } from '../utils/themeHelper';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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

  button {
    padding: 4px 8px;
    font-size: ${fonts.inputFontSize};
    border-radius: 4px;
    border: none;
    margin-left: 15px;
    color: ${props => getColor(props, 'contrastText')};

    &.confirm {
      background: ${props => getColor(props, 'confirm')};
    }

    &.cancel {
      background: ${props => getColor(props, 'cancel')};
    }
  }
`;
