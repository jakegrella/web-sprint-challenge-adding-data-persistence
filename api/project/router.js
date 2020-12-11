// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', async (_, res) => {
	try {
		const projects = await Projects.getAll();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
