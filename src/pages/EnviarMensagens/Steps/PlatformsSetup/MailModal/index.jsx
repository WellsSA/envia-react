import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalHelper } from '~/components';
import { PLATFORMS, STEPS } from '~/store/modules/message/data';
import QuantityDisplayer from './QuantityDisplayer';
import api from '~/services/api';

export default function MailModal({ visible, onSetVisible, onConfirm }) {
  const { curStep, alunos } = useSelector(state => state.message);

  const [credits, setCredits] = useState(0);
  const quantity =
    alunos &&
    alunos.length +
      alunos.reduce((acc, cur) => (acc += cur.responsible_id !== '1'), 0);

  useEffect(() => {
    if (curStep !== STEPS.PLATFORMS) return;

    const getCredits = async () => {
      const { data, status } = await api.get('credit/e-mail');

      if (status !== 200) return;

      setCredits(data.credits);
    };

    getCredits();
  }, [curStep]);

  console.log({ alunos: JSON.stringify(alunos) });

  function handleConfirm() {
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
