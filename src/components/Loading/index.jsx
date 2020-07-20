import React, { useState } from 'react';
import loadingSVG from '~/assets/loading.svg';
import subLoadingSVG from '~/assets/sub-loading.svg';

import { Container, MainLoading, SubLoading, LoadingOverlay } from './styles';

export default function Loading() {
  const [visible, setVisible] = useState(false);
  return (
    <LoadingOverlay visible={visible} onSetVisible={setVisible} locked>
      <Container>
        <MainLoading src={loadingSVG} alt="Loading..." />
        <SubLoading src={subLoadingSVG} alt="Sub Loading..." />
      </Container>
    </LoadingOverlay>
  );
}
