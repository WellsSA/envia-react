import styled from 'styled-components';
import { Label } from '../_common';
import { getColor } from '~/utils/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  #envia-sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 60px;
  }

  #envia-sidebar-expanded {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
  }
`;

export const Marker = styled(Label)`
  font-weight: normal;
  display: inline;
  strong {
    color: ${props => getColor(props, 'primary')};
  }
`;
