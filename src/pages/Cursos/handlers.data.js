import api from '../../services/api';
import { notifySuccess } from '../../utils/notify';

const handleInsert = async (newData, setTableData, dispatch) => {
  const { data, status } = await api.post('cursos', {
    name: newData.name,
  });
  if (status !== 200) return;

  setTableData(prevState => [...prevState, data]);
  notifySuccess('Curso cadastrado com sucesso!', dispatch);
};

const handleUpdate = async (newData, oldData, setTableData, dispatch) => {
  const { status } = await api.put(`cursos/${oldData.id}`, {
    name: newData.name,
  });
  if (status !== 200) return;

  setTableData(prevState => {
    const data = [...prevState];
    data[data.indexOf(oldData)] = newData;
    return data;
  });
  notifySuccess('Curso editado com sucesso!', dispatch);
};

const handleDelete = async (oldData, setTableData, dispatch) => {
  const { status } = await api.delete(`cursos/${oldData.id}`);

  if (status !== 200) return;

  setTableData(prevState => {
    const data = [...prevState];
    data.splice(data.indexOf(oldData), 1);
    return data;
  });
  notifySuccess('Curso apagado com sucesso!', dispatch);
};

export function handleDeleteAll(evt, dataToDelete, setTableData) {
  setTableData(prevState => {
    const data = [...prevState];
    dataToDelete.forEach(professor =>
      api
        .delete(`cursos/${professor.id}`)
        .then(data.splice(data.indexOf(professor), 1))
        .then(notifySuccess('Cursos apagados com sucesso!'))
    );
    return data;
  });
}

export { handleInsert, handleUpdate, handleDelete };
