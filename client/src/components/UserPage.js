import React from 'react';
import TableSample from './TableSample.js';
import { Container } from '@material-ui/core';
import BeliefsTable from './BeliefsTable.js';

function UserPage() {
	return (
		<Container>
			<BeliefsTable />
			<TableSample />
		</Container>
	);
}

export default UserPage;
