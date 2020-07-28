import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ModalHelper, Notifier } from '~/components';
import { Alert } from '~/components/_common';
import { PLATFORMS, STEPS, BIRTH_STEPS } from '~/store/modules/message/data';
import QuantityDisplayer from './QuantityDisplayer';
import api from '~/services/api';
import { notifyError } from '~/utils/notify';

export default function MailModal({ visible, onSetVisible, onConfirm }) {
  const dispatch = useDispatch();
  const { curStep, aniversariantes, alunos } = useSelector(
    state => state.message
  );

  const [credits, setCredits] = useState(0);
  const quantity =
    alunos &&
    alunos.length +
      alunos.reduce((acc, cur) => (acc += cur.responsible_id !== '1'), 0);

  useEffect(() => {
    if (
      curStep !== STEPS.PLATFORMS ||
      (aniversariantes && curStep !== BIRTH_STEPS.PLATFORMS)
    )
      return;

    async function getCredits() {
      const { data, status } = await api.get('credit/e-mail');

      if (status !== 200) return;

      setCredits(data.credits);
    }

    getCredits();
  }, [aniversariantes, curStep]);

  function handleConfirm() {
    if (quantity > credits) {
      notifyError('Você não possui crédito suficiente.', dispatch);
      return;
    }
    onConfirm(PLATFORMS.EMAIL.value);
    onSetVisible(false);
  }

  return (
    <ModalHelper
      title="Confirmação de saldo de e-mail"
      visible={visible}
      onSetVisible={onSetVisible}
      onConfirm={handleConfirm}
      confirmLabel="Confirmar"
    >
      <Notifier />
      <Alert>
        Nota: Você pode adquirir mais créditos a qualquer momento em{' '}
        <Link to="/settings">Configurações</Link>.
      </Alert>
      <QuantityDisplayer
        label="e-mails"
        quantity={`${quantity}`}
        balance={`${credits}`}
      />
      <></>
    </ModalHelper>
  );
}

MailModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
