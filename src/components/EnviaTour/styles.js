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

  #envia-sidebar-home {
    position: absolute;
    top: ${`${45 * 2}px`};
    right: 0;
    width: 250px;
    height: 40px;
  }

  #envia-sidebar-send {
    position: absolute;
    top: ${`${45 * 3}px`};
    right: 0;
    width: 250px;
    height: 40px;
  }

  #envia-sidebar-cruds {
    position: absolute;
    top: ${`${45 * 7}px`};
    right: 0;
    width: 250px;
    height: ${`${45 * 5}px`};
  }
`;

export const Marker = styled(Label)`
  font-weight: normal;
  display: inline;
  strong {
    color: ${props => getColor(props, 'primary')};
  }
`;
