import styled from 'styled-components';
import OverlayHelper from '../OverlayHelper';
import { z_index } from '~/styles/scale';

// import { transparentize } from 'polished';
// import { fonts } from '../../styles/scale';
// import { getColor } from '../../utils/themeHelper';

export const LoadingOverlay = styled(OverlayHelper)`
  z-index: ${z_index.overlay.loading};

  .content {
    background-color: transparent;
    box-shadow: none;
  }

  .background {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const MainLoading = styled.img``;

export const SubLoading = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  left: 10px;
  bottom: 45px;
  background: #fff;
  border-radius: 50%;
`;
