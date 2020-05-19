import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AnswerTable from './AnswerTable';
import { useDispatch, useSelector } from 'react-redux';
import { addBelief, removeBelief, editBelief } from '../redux/actions';

export default function QuestionsTable() {
  const beliefs = useSelector((state) => state.beliefs);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    columns: [{ title: 'Вопросы к мысле', field: 'name' }],
    data: beliefs,
  });

  useEffect(() => {
    setState({ ...state, data: beliefs });
  }, [beliefs]);

  return (
    <MaterialTable
      title='Мысля'
      columns={state.columns}
      data={state.data}
      options={{
        paging: false,
        search: false
      }}
      detailPanel={(rowData) => {
        return <AnswerTable index={rowData.tableData.id} />;
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