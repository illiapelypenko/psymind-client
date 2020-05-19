import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import QuestionsTable from './QuestionsTable';
import { useDispatch, useSelector } from 'react-redux';
import { addThought, removeThought, editThought } from '../redux/actions';

export default function ThoughtsTable() {
  const thoughts = useSelector((state) => state.thoughts);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    columns: [{ title: 'Мысль', field: 'name' }],
    data: thoughts,
  });

  useEffect(() => {
    setState({ ...state, data: thoughts });
  }, [thoughts]);

  return (
    <MaterialTable
      title='Мои негативные мысли'
      columns={state.columns}
      data={state.data}
      options={{
        paging: false,
      }}
      editable={{
        onRowAdd: (newData) => {
          return dispatch(addThought(token, {
            name: newData.name,
          }))
        },
        onRowUpdate: (newData, oldData) =>
          dispatch(editThought(token, {
            name: newData.name,
            id: oldData._id
          })),
        onRowDelete: (oldData) =>
          dispatch(removeThought(token, oldData._id))
      }}
      detailPanel={(rowData) => {
        return <QuestionsTable index={rowData.tableData.id} />;
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
}

// {
//   thought,
//   clientId,
//   questions: [
//     {
//       question,
//       answer
//     }
//   ]
// }