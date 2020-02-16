import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import { fonts } from '../../../styles/scale';
import { getColor } from '../../../utils/themeHelper';

export const Container = styled.div`
  form {
    .form {
      &__header {
        height: 50px;
        background: #f00;
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
              padding: 0 15px;
              color: ${props => getColor(props, 'text')};
              margin: 0 0 10px;

              &::placeholder {
                color: ${props => transparentize(0.5, getColor(props, 'text'))};
              }
            }
            textarea {
              height: auto;
            }
          }
        }
      }

      &__footer {
        width: 100%;
        height: 50px;
        background: #f00;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 20px;
      }
    }
  }
`;
