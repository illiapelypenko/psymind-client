import React from 'react';
import './App.css';
import TableSample from './components/TableSample.js';
import { connect } from 'react-redux';

function App() {
	return (
		<div className='app'>
			<TableSample />
		</div>
	);
}

export default connect((state, props) => ({}), {})(App);
