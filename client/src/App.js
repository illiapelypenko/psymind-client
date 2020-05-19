import React, { useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import axios from 'axios';
import serverURL from './serverURL.js';
import UserPage from './components/UserPage';
import { getBeliefs } from './redux/actions';

function App() {
	const token = useSelector((state) => state.token);
	const signIn = useSelector((state) => state.signIn);
	const dispatch = useDispatch();

	useEffect(() => {
		trySignIn();
		dispatch(getBeliefs(token));
	}, [signIn, token]);

	const trySignIn = async () => {
		const token = localStorage.getItem('token');
		if (!token) return;
		let res;
		try {
			res = await axios.put(`${serverURL}/api/clients/isclient`, {
				token,
			});
		} catch {
			return;
		}
		const { isClient, userName } = res.data;
		if (isClient) {
			dispatch({
				type: 'SET_SIGNIN',
				payload: {
					signIn: true,
					token,
					userName,
				},
			});
		}
	};

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						{signIn ? <UserPage /> : <SignIn />}
					</Route>
					<Route path='/signin'>
						<SignIn />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
