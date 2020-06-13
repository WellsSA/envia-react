import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlunosTable from '~/pages/Alunos/AlunosTable/index.jsx';
import { alunosBFF } from '~/pages/Alunos/alunos.util';
import { setupAlunos } from '~/store/modules/message/actions';
import { Title } from '~/components/_common';
import api from '~/services/api';

function AlunosSetup() {
  // const [keepEase, setKeepEase] = useState(false);
  const keepEase = false;
  const { criteria, filters } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await api.get(`filters/${criteria}`, {
        filters,
      });
      if (status !== 200) return;

      setTableData(alunosBFF(data));
    })();
  }, [criteria, filters]);

  // useEffect(() => {
  //   (async () => {
  //     await new Promise(resolve => setTimeout(resolve, 500));
  //     setKeepEase(curStep !== 3);
  //   })();
  // }, [curStep]);

  return (
    <>
      <Title>Selecione os alunos que deseja enviar:</Title>
      {!keepEase && (
        <AlunosTable
          tableData={tableData}
          actions={[
            {
              tooltip: 'Selecionar estes alunos(as)',
              icon: 'check',
              onClick: async (evt, data) => {
                if (data) {
                  // setKeepEase(true);
                  // await new Promise(resolve => setTimeout(resolve, 1000));
                  dispatch(setupAlunos({ data }));
                }
                return null;
              },
            },
          ]}
        />
      )}
    </>
  );
}

export default AlunosSetup;
