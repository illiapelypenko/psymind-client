import axios from 'axios';
import serverURL from '../serverURL';

export function getBeliefs(token) {
  return async dispatch => {
    if (!token) return dispatch({ type: "", payload: [] });
    const res = await axios.post(`${serverURL}/api/beliefs/getbeliefs`, {
      token,
    });

    const beliefs = res.data;
    return dispatch({ type: 'SET_BELIEFS', payload: beliefs });
  }
}

export function addBelief(token, belief) {
  return async dispatch => {
    const res = await axios.post(`${serverURL}/api/beliefs/belief`, {
      token, belief
    });
    const beliefs = res.data;
    return dispatch({ type: 'SET_BELIEFS', payload: beliefs })
  }
}

export function editBelief(token, belief) {
  debugger;
  return async dispatch => {
    const res = await axios.put(`${serverURL}/api/beliefs/belief`, {
      token, belief
    });
    const beliefs = res.data;
    return dispatch({ type: 'SET_BELIEFS', payload: beliefs })
  }
}

// export function addSubBelief(token, belief) {
//   debugger;
//   return async dispatch => {
//     const res = await axios.post(`${serverURL}/api/beliefs/subbelief`, {
//       token, belief
//     });
//     const beliefs = res.data;
//     return dispatch({ type: 'SET_BELIEFS', payload: beliefs })
//   }
// }

export function removeBelief(token, beliefId) {
  return async dispatch => {
    const res = await axios.post(`${serverURL}/api/beliefs/removebelief`, {
      token, beliefId
    });
    const beliefs = res.data;
    return dispatch({ type: 'SET_BELIEFS', payload: beliefs })
  }
}

export function addSubBelief(token, subbelief) {
  return async dispatch => {
    const res = await axios.post(`${serverURL}/api/beliefs/subbelief`, {
      token, subbelief
    });

    const beliefs = res.data;
    return dispatch({ type: 'SET_BELIEFS', payload: beliefs })
  }
}
