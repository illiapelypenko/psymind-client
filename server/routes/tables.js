const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

router.post('/upload', async (req, res) => {
	try {
		res.send();
	} catch (e) {
		res.status(400).send();
		console.log(e);
	}
});
