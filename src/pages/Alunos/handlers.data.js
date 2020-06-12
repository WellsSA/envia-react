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

  notifySuccess('Turma editada com sucesso!', dispatch);
};

// export function handleDelete(oldData, setTableData) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//       setTableData(prevState => {
//         const data = [...prevState];
//         data.splice(data.indexOf(oldData), 1);
//         return data;
//       });
//     }, 600);
//   });
// }

// export function handleDeleteAll(evt, data) {
//   alert(`Olha só, ${data.length} a menos`);
// }

export { handleInsert, handleUpdate };
