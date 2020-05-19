import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';

const initialState = {
	token: '',
	userName: '',
	table: [],
	signIn: false,
	beliefs: [],
	thoughts: [],
};

export default createStore(
	reducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
); // {getState(), subscribe(func), discharge(action)}
