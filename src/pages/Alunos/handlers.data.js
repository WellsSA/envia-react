export function handleInsert(newData, setTableData) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      setTableData(prevState => {
        const data = [...prevState];
        data.push(newData);
        return data;
      });
    }, 600);
  });
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
