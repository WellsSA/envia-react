import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  width: 315px;
  transform: translateY(-30px);

  .logo {
    width: 150px;
    height: auto;
    background-size: cover;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => getColor(props, 'background')};
    background: ${props => getColor(props, 'highlight')};
    font-size: 18px;
    position: absolute;
    top: -5px;
    right: 0;
    width: 30px;
    height: 30px;
  }

  form {
    width: 100%;
    background: ${props => getColor(props, 'background')};
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-top: 5px solid ${props => getColor(props, 'highlight')};
    text-align: left;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    position: relative;

    label {
      margin: 0 0 20px;
      color: ${props => getColor(props, 'highlight')};
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
    }

    input {
      padding: 10px 15px;
      margin-bottom: 20px;
      background: ${props => getColor(props, 'background')};

      border: 1px solid
        ${props => darken(0.1, getColor(props, 'backgroundHighlight'))};

      &:hover {
        background: ${props => darken(0.01, getColor(props, 'background'))};
      }

      &:focus {
        border: 1px solid ${props => getColor(props, 'highlight')};
      }
    }

    button {
      margin: 0;
      border-radius: 0;
      padding: 10px 15px;
      justify-content: center;

      a {
        color: ${props => getColor(props, 'highlight')};
      }
    }

    span {
      color: ${props => lighten(0.15, getColor(props, 'cancel'))};
      /* #fb6f91; */
      display: inline-flex;
      align-self: flex-start;
      font-weight: bold;
      margin: -12px 0 10px 4px;
    }
  }

  a.forgot {
    display: block;
    font-size: 12px;
    padding: 15px 40px;
    background: #f2f2f2;
  }
`;
