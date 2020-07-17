import api from '~/services/api';
import { notifySuccess } from '~/utils/notifyHelper';

const handleInsert = async (newData, setTableData, dispatch) => {
  const { data, status } = await api.post('modelosMensagens', newData);
  if (status !== 200) return;

  setTableData(prevState => [...prevState, data]);
  notifySuccess('Modelo cadastrado com sucesso!', dispatch);
};

const handleUpdate = async (
  { id, ...newData },
  setTableData,
  tableDataId,
  dispatch
) => {
  const { status } = await api.put(`modelosMensagens/${+id}`, {
    id: +id,
    ...newData,
  });
  if (status !== 200) return;

  setTableData(prevState => {
    const data = [...prevState];
    data[tableDataId] = newData;
    return data;
  });

  notifySuccess('Modelo editado com sucesso!', dispatch);
};

const handleDelete = async (id, tableDataId, setTableData) => {
  const { status } = await api.delete(`modelosMensagens/${+id}`);
  if (status !== 200) return;

  setTableData(prevState => {
    const data = [...prevState];
    data.splice(tableDataId, 1);
    return data;
  });

  notifySuccess('Modelo apagado com sucesso!');
};

export { handleInsert, handleUpdate, handleDelete };
