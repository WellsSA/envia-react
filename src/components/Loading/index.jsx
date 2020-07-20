import React from 'react';
import { useSelector } from 'react-redux';
import loadingSVG from '~/assets/loading.svg';
import subLoadingSVG from '~/assets/sub-loading.svg';

import { Container, MainLoading, SubLoading, LoadingOverlay } from './styles';

export default function Loading() {
  const visible = useSelector(state => state.loading.visible);

  return (
    <LoadingOverlay visible={visible} locked>
      <Container>
        <MainLoading src={loadingSVG} alt="Loading..." />
        <SubLoading src={subLoadingSVG} alt="Sub Loading..." />
      </Container>
    </LoadingOverlay>
  );
}
