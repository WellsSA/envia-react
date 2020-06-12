import api from '../../services/api';
import { notifySuccess } from '../../utils/notifyHelper';
import { alunoFFB, alunoBFF } from './alunos.util';

export async function handleInsert(newData, setTableData, dispatch) {
  const { data, status } = await api.post('alunos', alunoFFB(newData));
  if (status !== 200) return;

  setTableData(prevState => [...prevState, alunoBFF(data)]);
  notifySuccess('Aluno cadastrada com sucesso!', dispatch);
  return true;
}

export function handleUpdate(newData, oldData, setTableData) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      if (oldData) {
        setTableData(prevState => {
          const data = [...prevState];
          data[data.indexOf(oldData)] = newData;
          return data;
        });
      }
    }, 600);
  });
}

export function handleDelete(oldData, setTableData) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      setTableData(prevState => {
        const data = [...prevState];
        data.splice(data.indexOf(oldData), 1);
        return data;
      });
    }, 600);
  });
}

export function handleDeleteAll(evt, data) {
  alert(`Olha só, ${data.length} a menos`);
}
