import api from '../../services/api';
import { notifySuccess } from '../../utils/notifyHelper';
import { turmaFFB } from './turma.util';

const handleInsert = async (newData, setTableData, dispatch) => {
  const { data, status } = await api.post('turmas', turmaFFB(newData));
  if (status !== 200) return;

  setTableData(prevState => [...prevState, data]);
  notifySuccess('Turma cadastrada com sucesso!', dispatch);
};

const handleUpdate = async (newData, setTableData, tableDataId, dispatch) => {
  const { data, status } = await api.put(
    `turmas/${+newData.id}`,
    turmaFFB(newData)
  );
  if (status !== 200) return;

  setTableData(prevState => {
    const _data = [...prevState];
    _data[tableDataId] = data;
    return _data;
  });
  notifySuccess('Turma editada com sucesso!', dispatch);
};

const handleDelete = async (id, tableDataId, setTableData) => {
  const { status } = await api.delete(`turmas/${+id}`);
  if (status !== 200) return;

  setTableData(prevState => {
    const data = [...prevState];
    data.splice(tableDataId, 1);
    return data;
  });
  notifySuccess('Turma apagada com sucesso!');
};

export { handleInsert, handleUpdate, handleDelete };
