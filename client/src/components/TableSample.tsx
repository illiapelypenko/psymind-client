import React from 'react';
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.common.white,
			align: 'center'
		},
		root: {
			fontSize: 16,
			'&:nth-of-type(3n)': {
				width: '15%'
			},
			'&:nth-of-type(2n)': {
				width: '50%'
			},
			'&:nth-of-type(3n+1)': {
				width: '35%'
			},
			spellcheck: false
		}
	})
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {}
		}
	})
)(TableRow);

function createData(
	id: number,
	event: string,
	thought: string,
	reaction: string
) {
	return { id, event, thought, reaction };
}

const rows = [
	createData(0, 'Programming', "It's Interesting", 'Pleasure'),
	createData(
		1,
		'It is important to educate the patient as to what behavioral activation is and how it can be useful for improving depression and anxiety. Let him/her know that when feeling a little down or having a bad day and not feeling well physically can make it more likely that he or she will stop doing many activities that used to be pleasurable.',
		'When this happens, the patient can get into the habit of avoiding pleasant activities that might actually help him/her feel better. It is also important for the patient to understand the connection between what he or she does and how he/she feels, both mentally and physically. You are encouraged to explain to the patient that increasing activity and/or taking action, even when we do not feel like it, help one to feel better physically, as well as decrease depression.',
		'What about in the afternoon after your shower and walk? How would you rate your depression?'
	),
	createData(2, 'Programming', "It's Interesting", 'Pleasure')
];

const useStyles = makeStyles({
	tableContainer: {}
});

export default function CustomizedTables() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} className={classes.tableContainer}>
			<Table aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='center'>Event</StyledTableCell>
						<StyledTableCell align='center'>Thought</StyledTableCell>
						<StyledTableCell align='center'>Reaction</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {rows.map(row => (
						<StyledTableRow key={row.id} hover>
							<StyledTableCell>{row.event}</StyledTableCell>
							<StyledTableCell>{row.thought}</StyledTableCell>
							<StyledTableCell>{row.reaction}</StyledTableCell>
						</StyledTableRow>
					))} */}
					<StyledTableRow key={-1}>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
					</StyledTableRow>
					<StyledTableRow key={-2}>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
						<StyledTableCell>
							<TextField
								id='outlined-basic'
								variant='outlined'
								multiline
								fullWidth
							/>
						</StyledTableCell>
					</StyledTableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
