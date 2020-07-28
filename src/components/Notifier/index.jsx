import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { NOTIFY_STATE } from '~/store/modules/notify/data';

import { Alert, List } from '~/components/_common';

export default function Notifier() {
  const { message, type } = useSelector(state => state.notify);

  const getAlertKind = useCallback(_type => {
    switch (_type) {
      case NOTIFY_STATE.ERROR:
        return 'danger';
      case NOTIFY_STATE.NEUTRAL:
        return 'warning';
      case NOTIFY_STATE.SUCCESS:
      case NOTIFY_STATE.CLOSED:
      default:
        return 'success';
    }
  }, []);

  return (
    <Container visible={type !== NOTIFY_STATE.CLOSED}>
      <Alert kind={getAlertKind(type)}>
        {message instanceof Array ? <List list={message} /> : message}
      </Alert>
    </Container>
  );
}
