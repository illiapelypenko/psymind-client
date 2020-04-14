import { createStore } from 'redux';
import reducer from './reducer.js';

const initialState = {
	table: 'initial table',
};

export default createStore(reducer, initialState); // {getState(), subscribe(func), discharge(action)}
