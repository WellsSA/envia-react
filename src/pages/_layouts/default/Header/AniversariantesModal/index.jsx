import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageStep, ModalHelper, ProgressBar } from '~/components';
import { Title } from '~/components/_common';
import { alunosBFF } from '~/pages/Alunos/alunos.util';
import {
  BirthdaysSetup,
  ConfirmEnvio,
  MessageSetup,
  PlatformsSetup,
} from '~/pages/EnviarMensagens/Steps';
import api from '~/services/api';
import { setAniversariantes, setStep } from '~/store/modules/message/actions';
import { BIRTH_STEPS, CRITERION } from '~/store/modules/message/data';
import AniversariantesIMG from '~/assets/dashboard/aniversariantes.png';
import { Container, Content, OnEmpty } from './styles';

const AniversariantesModal = () => {
  const dispatch = useDispatch();
  const { curStep: step, aniversariantes } = useSelector(
    state => state.message
  );
  const [alunos, setAlunos] = useState([]);

  const maxSteps = Object.keys(BIRTH_STEPS).length;

  useEffect(() => {
    if (!aniversariantes) return;

    async function getAniversariantes() {
      const { data, status } = await api.post(
        `filters/${CRITERION.BIRTHDAYS.endpoint}`
      );

      if (status !== 200) return;

      setAlunos(alunosBFF(data));
    }

    getAniversariantes();
  }, [aniversariantes]);

  return (
    <ModalHelper
      title="ANIVERSARIANTES DO DIA"
      visible={aniversariantes}
      onSetVisible={data => dispatch(setAniversariantes({ open: data }))}
      noFooter
    >
      <Container>
        {!alunos || !alunos.length ? (
          <OnEmpty>
            <img src={AniversariantesIMG} alt="Aniversariantes" />
            <Title>Sem aniversáriantes hoje</Title>
          </OnEmpty>
        ) : (
          <Content>
            <ProgressBar
              step={step <= maxSteps ? step : 1}
              maxSteps={maxSteps}
              onBulletClick={_step => dispatch(setStep({ step: _step }))}
            />
            <MessageStep active={step === BIRTH_STEPS.STUDENTS}>
              <BirthdaysSetup alunos={alunos} />
            </MessageStep>
            <MessageStep active={step === BIRTH_STEPS.MESSAGE}>
              <MessageSetup unique="aniv" />
            </MessageStep>
            <MessageStep active={step === BIRTH_STEPS.PLATFORMS}>
              <PlatformsSetup />
            </MessageStep>
            <MessageStep active={step === BIRTH_STEPS.CONFIRM}>
              <ConfirmEnvio />
            </MessageStep>
          </Content>
        )}
      </Container>
    </ModalHelper>
  );
};

export default AniversariantesModal;
