const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongodb } = require('./config');
const tables = require('./routes/tables');
const clients = require('./routes/clients');
const beliefs = require('./routes/beliefs');
const app = express();

const { port } = require('./config');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tables', tables);
app.use('/api/clients', clients);
app.use('/api/beliefs', beliefs);

mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Now connected to MongoDB!'))
	.catch((err) => console.error('Something went wrong', err));

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
