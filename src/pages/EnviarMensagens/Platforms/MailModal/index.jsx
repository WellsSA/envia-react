import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalHelper } from '../../../../components';
import { Container, Label, Value, SubMark } from './styles';
import { switchPlatform } from '../../../../store/modules/message/actions';

export default function MailModal({ visible, onSetVisible }) {
  const dispatch = useDispatch();
  const qtdAlunos = useSelector(state => state.message.alunos).length;
  const saldoAtual = 10;

  function handleConfirm() {
    alert(`confirm!${qtdAlunos}`);
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
      <Container>
        <div>
          <Label>
            A <strong>quantidade total</strong> de e-mails:
          </Label>
          <Value>{qtdAlunos}</Value>
        </div>
        <div>
          <Label>
            Seu <strong>saldo atual</strong> de e-mails:
          </Label>
          <Value>{saldoAtual}</Value>
        </div>
        <SubMark>
          * Ao clicar em confirmar, a quantidade de e-mails será descontada do
          seu saldo atual
        </SubMark>
      </Container>
    </ModalHelper>
  );
}

MailModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};
