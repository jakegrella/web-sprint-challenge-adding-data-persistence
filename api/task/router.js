// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model');

const router = express.Router();

router.get('/', async (_, res) => {
	try {
		const tasks = await Task.getAll();
		res.status(200).json(tasks);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
