import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/themeHelper';

export const Container = styled.div`
  display: flex;
  border-left: 5px solid ${props => getColor(props, 'strongText')};
  background: ${props => getColor(props, 'backgroundHighlight')};
  padding: 10px 0;
  border-radius: 12px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: thin solid #ccc;
  padding: 25px;

  &:last-child {
    border-right: none;
  }

  &.message {
    h2 {
      padding: 8px 0;
      font-size: ${fonts.labelFontSize};
      font-weight: normal;
      color: ${props => darken(0.2, getColor(props, 'text'))};
      border-bottom: thin solid
        ${props => transparentize(0.6, getColor(props, 'text'))};
    }
    span {
      padding: 4px 0;
      font-size: ${fonts.fontSize};
      color: ${props => transparentize(0.2, getColor(props, 'text'))};
    }
    p {
      color: ${props => transparentize(0.4, getColor(props, 'text'))};
      font-size: ${fonts.fontSize};
    }
  }
`;

export const ColumnTitle = styled.h1`
  font-size: ${fonts.labelFontSize};
  text-transform: uppercase;
  color: ${props => darken(0.2, getColor(props, 'primary'))};
`;

export const Criteria = styled.div`
  height: 50%;

  div {
    width: 100%;
  }

  span {
    margin-top: 5px;
    /* #1592c2cc */
    color: ${props =>
      transparentize(0.2, darken(0.1, getColor(props, 'primary')))};
  }
`;

export const Platforms = styled.div`
  display: flex;
`;

export const Alunos = styled.ul`
  padding: 8px 0;
`;

export const Aluno = styled.li`
  color: ${props => transparentize(0.2, getColor(props, 'text'))};

  &::before {
    content: '\\27A4  ';
  }
`;

export const Marker = styled.div`
  width: 90%;
  margin: 20px auto 10px auto;
  height: 20px;
  background: ${props => getColor(props, 'backgroundHighlight')};
  border-radius: 0 0 12px 12px;
  border-top: thin solid
    ${props => darken(0.1, getColor(props, 'backgroundHighlight'))};
`;
