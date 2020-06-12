import api from '../../services/api';
import { notifySuccess } from '../../utils/notifyHelper';
import { alunoFFB, alunoBFF } from './alunos.util';

const handleInsert = async (newData, setTableData, dispatch) => {
  const { data, status } = await api.post('alunos', alunoFFB(newData));
  if (status !== 200) return;

  setTableData(prevState => [...prevState, alunoBFF(data)]);
  notifySuccess('Aluno(a) cadastrado(a) com sucesso!', dispatch);
};

const handleUpdate = async (upData, setTableData, tableDataId, dispatch) => {
  // console.log({ upData, new: alunoFFB(upData) });
  const { data, status } = await api.put(
    `alunos/${+upData.id}`,
    alunoFFB(upData)
  );
  if (status !== 200) return;

  setTableData(prevState => {
    const _data = [...prevState];
    _data[tableDataId] = alunoBFF(data);
    return _data;
  });

  notifySuccess('Aluno(a) atualizado(a) com sucesso!', dispatch);
};

const handleDelete = async (id, tableDataId, setTableData) => {
  const { status } = await api.delete(`alunos/${+id}`);
  if (status !== 200) return;

  setTableData(prevState => {
    const _data = [...prevState];
    _data.splice(tableDataId, 1);
    return _data;
  });

  notifySuccess('Aluno(a) excluído(a) com sucesso!');
};

export { handleInsert, handleUpdate, handleDelete };
