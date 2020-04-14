const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const { mongodb } = require('./config');
const tables = require('./routes/tables');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.use('/api/tables', tables);

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
