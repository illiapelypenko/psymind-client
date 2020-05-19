import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AnswerTable from './AnswerTable';
import { useDispatch, useSelector } from 'react-redux';
import { editThought } from '../redux/actions';

export default function QuestionsTable({ tindex }) {
  const thoughts = useSelector((state) => state.thoughts);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    columns: [{ title: 'Вопросы к мысле', field: 'question' }],
    data: [],
  });

  useEffect(() => {
    setState({ ...state, data: thoughts[tindex].questions });
  }, [thoughts]);

  return (
    <MaterialTable
      title={thoughts[tindex].name}
      columns={state.columns}
      data={state.data}
      options={{
        paging: false,
        search: false
      }}
      detailPanel={(rowData) => {
        return <AnswerTable tindex={tindex} qindex={thoughts[tindex].questions.findIndex(question => question.question === rowData.question)} />;
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
}

// {
//   name,
//   clientId,
//   questions: [
//     {
//       question,
//       answer
//     }
//   ]
// }