import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlunosTable from '~/pages/Alunos/AlunosTable/index.jsx';
import { alunosBFF } from '~/pages/Alunos/alunos.util';
import { setupAlunos, clear } from '~/store/modules/message/actions';
import { Title } from '~/components/_common';
import api from '~/services/api';
import { STEPS, CRITERION } from '~/store/modules/message/data';
import StepNavigator from '../../StepNavigator';

function AlunosSetup() {
  const [keepEase, setKeepEase] = useState(false);
  const [confirmAll, setConfirmAll] = useState(false);

  const { curStep, criteria, filters } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!criteria || curStep !== STEPS.STUDENTS) return;

    if (criteria === CRITERION.ALL.value) {
      setConfirmAll(true);
      return;
    }
    setConfirmAll(false);
    (async () => {
      const { data, status } = await api.post(
        `filters/${CRITERION[criteria].endpoint}`,
        {
          filters: filters.map(({ id }) => id),
        }
      );
      if (status !== 200) return;

      setTableData(alunosBFF(data));
    })();
  }, [criteria, curStep, filters]);

  useEffect(() => {
    if (curStep === STEPS.STUDENTS) setKeepEase(false);
  }, [curStep]);

  const actions = [
    {
      tooltip: 'Selecionar estes alunos(as)',
      icon: 'check',
      onClick: async (evt, data) => {
        if (data) {
          setKeepEase(true);
          dispatch(
            setupAlunos({
              alunos: data.map(({ id, name, responsible_id }) => ({
                id,
                name,
                responsible_id,
              })),
            })
          );
        }
        return null;
      },
    },
  ];

  return (
    <>
      {!keepEase ? (
        <>
          {confirmAll ? (
            <>
              <Title>Confirme para prosseguir:</Title>
              <Title centered>
                Tem deseja que certeza enviar para todos os alunos?
              </Title>
              <StepNavigator
                centered
                onCancel={() => {
                  dispatch(clear({ criteria: '', filters: [] }));
                  setKeepEase(true);
                }}
                onConfirm={() => dispatch(setupAlunos({ id: -1 }))}
              />
            </>
          ) : (
            <>
              <Title>Selecione os alunos que deseja enviar:</Title>
              <AlunosTable tableData={tableData} actions={actions} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AlunosSetup;
