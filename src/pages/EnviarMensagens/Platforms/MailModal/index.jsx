import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalHelper } from '../../../../components';
import { switchPlatform } from '../../../../store/modules/message/actions';
import QuantityDisplayer from '../QuantityDisplayer';

export default function MailModal({ visible, onSetVisible }) {
  const dispatch = useDispatch();
  const qtdAlunos = useSelector(state => state.message.alunos).length;
  const saldoAtual = 10;

  function handleConfirm() {
    dispatch(switchPlatform({ platform: 'email' }));
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
        quantity={`${qtdAlunos}`}
        balance={`${saldoAtual}`}
      />
      <></>
    </ModalHelper>
  );
}

MailModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};
