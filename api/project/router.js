// build your `/api/projects` router here
const express = require('express');

const Project = require('./model');

const router = express.Router();

const validateProject = require('../middlewares/validateProject');

router.get('/', async (_, res) => {
	try {
		const projects = await Project.getAll();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

router.post('/', validateProject, async (req, res) => {
	try {
		await Project.add(req.body);
		res.status(201).json(req.body);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
