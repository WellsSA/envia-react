import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { InputWrapper } from '../../../../components';
import { Button } from '../../../../components/_common';
import api from '../../../../services/api';
import { notifyError } from '../../../../utils/notifyHelper';
import { Container, Turma } from './styles';

function Turmas({ initialData }) {
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

  useEffect(() => {
    setTurmas(initialData.map(id => ({ id })));
  }, [initialData]);

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
        id="turmas"
        value={JSON.stringify(turmas.map(({ id }) => id))}
        onChange={() => {}}
        hidden
      />
      <Button onClick={addEmptyTurma}>
        <FaPlus />
      </Button>
      {turmas.map(({ id }, index) => (
        <Turma key={`turma${index + 1}`}>
          <InputWrapper
            id={`turma${index + 1}`}
            placeholder="Selecione..."
            type="select"
            options={available}
            onChange={e => addTurma(e.target.value, index)}
            defaultValue={id}
          />
        </Turma>
      ))}
    </Container>
  );
}

Turmas.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.string),
};

Turmas.defaultProps = {
  initialData: [],
};

export default Turmas;
