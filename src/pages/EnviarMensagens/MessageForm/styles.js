import styled from 'styled-components';
import { transparentize, darken, lighten } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  form {
    .form {
      &__header {
        height: 50px;
        margin: 10px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      &__body {
        &__input-section {
          width: 50%;
          display: flex;
          flex-direction: column;
          float: left;

          .input {
            padding: 5px;
            display: flex;
            flex-direction: column;
            margin: auto 5px;

            label {
              text-transform: uppercase;
              font-size: ${fonts.labelFontSize};
              color: ${props => lighten(0.2, getColor(props, 'strongText'))};
              font-weight: bold;
              margin: 5px 0;
            }
            input,
            textarea {
              background: ${props =>
                transparentize(
                  0.5,
                  darken(0.05, getColor(props, 'backgroundHighlight'))
                )};
              border: 0;
              border-radius: 4px;
              height: 44px;
              font-size: ${fonts.inputFontSize};
              padding: 15px;
              color: ${props => getColor(props, 'text')};
              margin: 0 0 10px;

              &::placeholder {
                color: ${props => transparentize(0.5, getColor(props, 'text'))};
              }
            }
            span {
              font-size: 12px;
              display: block;
              position: relative;
            }
            textarea {
              height: auto;
            }
          }
        }
      }
    }
  }
`;

export const ModelosMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => getColor(props, 'confirm')};
  cursor: pointer;
  margin: 5px;
  svg {
    font-size: ${fonts.iconFontSize};
  }
`;
