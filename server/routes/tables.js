const express = require('express');
const Table = require('../models/Table');
const Client = require('../models/Client');
const router = express.Router();

router.get('/table', async (req, res) => {
	res.json();
});

router.post('/table', async (req, res) => {
	res.json();
});

module.exports = router;
