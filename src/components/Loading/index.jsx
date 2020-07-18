import React, { useState } from 'react';
import OverlayHelper from '../OverlayHelper';
import loadingSVG from '~/assets/loading.svg';
import subLoadingSVG from '~/assets/sub-loading.svg';

import { Container, MainLoading, SubLoading } from './styles';

export default function Loading() {
  const [visible, setVisible] = useState(false);
  return (
    <OverlayHelper visible={visible} onSetVisible={setVisible}>
      <Container>
        <MainLoading src={loadingSVG} alt="Loading..." />
        <SubLoading src={subLoadingSVG} alt="Sub Loading..." />
      </Container>
    </OverlayHelper>
  );
}
