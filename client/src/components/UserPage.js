import React from 'react';
import TableSample from './TableSample.js';
import { Container } from '@material-ui/core';
import BeliefsTable from './BeliefsTable.js';
import ThoughtsTable from './ThoughtsTable.js';

function UserPage() {
	return (
		<Container>
			{/* <BeliefsTable /> */}
			{/* <TableSample /> */}
			<ThoughtsTable />
		</Container>
	);
}

export default UserPage;
