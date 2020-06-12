import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { InputWrapper } from '../../../../components';
import { Button } from '../../../../components/_common';
import api from '../../../../services/api';
import { notifyError } from '../../../../utils/notifyHelper';
import { Container, Turma } from './styles';

function Turmas() {
  const [available, setAvailable] = useState([]);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    async function getTurmas() {
      const { status, data } = await api.get('turmas');

      if (status !== 200) return;

      setAvailable(data.map(({ id, name }) => ({ id, title: name })));
    }

    getTurmas();
  }, []);

  const addEmptyTurma = () => {
    setTurmas(_turmas => [..._turmas, {}]);
  };

  const addTurma = (id, index) => {
    if (turmas.find(_turma => _turma.id === id)) {
      notifyError('Esta turma já havia sido selecionada');
      return setTurmas([...turmas.slice(0, index), ...turmas.slice(index + 1)]);
    }
    setTurmas(_turmas => {
      const newTurmas = [..._turmas];
      newTurmas[index] = { id };
      return newTurmas;
    });
  };

  return (
    <Container>
      <InputWrapper
        name="turmas"
        value={JSON.stringify(turmas.map(({ id }) => id))}
        onChange={() => {}}
        hidden
      />
      <Button onClick={addEmptyTurma}>
        <FaPlus />
      </Button>
      {turmas.map((_, index) => (
        <Turma key={`turma${index + 1}`}>
          <InputWrapper
            placeholder="Selecione..."
            type="select"
            options={available}
            onChange={e => addTurma(e.target.value, index)}
          />
        </Turma>
      ))}
    </Container>
  );
}

export default Turmas;
