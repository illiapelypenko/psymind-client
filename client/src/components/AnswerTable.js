import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { editBelief } from '../redux/actions';

export default function AnswerTable({ index }) {
  const [state, setState] = useState({
    columns: [
      { title: 'Ответ', field: 'answer' }
    ],
    data: [],
  });

  const beliefs = useSelector((state) => state.beliefs);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const row = beliefs[index];
    const newData = [];
    let length = 0;
    length = Math.max(row.forr.length, row.against.length);
    for (let i = 0; i < length; i++) {
      newData.push({});
    }
    for (let i = 0; i < row.forr.length; i++) {
      newData[i].forr = row.forr[i];
    }
    for (let i = 0; i < row.against.length; i++) {
      newData[i].against = row.against[i];
    }
    setState({ ...state, data: newData });
  }, [beliefs]);


  return (
    <MaterialTable
      title={beliefs[index].name}
      columns={state.columns}
      data={state.data}
      options={{
        search: false,
        paging: false,
      }}
      editable={{
        onRowUpdate: (newData, oldData) => {
          const belief = { ...beliefs[index] }
          belief.forr.splice(belief.forr.indexOf(oldData.forr), 1, newData.forr);
          belief.against.splice(belief.against.indexOf(oldData.against), 1, newData.against);
          return dispatch(editBelief(token, {
            forr: belief.forr,
            against: belief.against,
            id: belief._id
          }));
        },
      }}
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