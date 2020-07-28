import styled from 'styled-components';
import { transparentize } from 'polished';
import { fonts } from '~/styles/scale';
import { getColor } from '~/utils/theme';

const getColorByKind = props => {
  switch (props.kind) {
    case 'alert':
      return getColor(props, 'alert');
    case 'danger':
      return getColor(props, 'cancel');
    case 'success':
    default:
      return getColor(props, 'confirm');
  }
};

export const Container = styled.div`
  padding: 10px;
  margin: 5px 0;
  font-size: ${fonts.labelFontSize};
  svg {
    margin-right: 5px;
  }
  border-radius: 5px;
  color: ${props => transparentize(0.1, getColorByKind(props))};
  background-color: ${props => transparentize(0.8, getColorByKind(props))};
  border: thin solid ${props => transparentize(0.2, getColorByKind(props))};
`;
