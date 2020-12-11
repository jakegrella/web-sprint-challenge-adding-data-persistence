// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');

const router = express.Router();

const validateResource = require('../middlewares/validateResource');

router.get('/', async (_, res) => {
	try {
		const resources = await Resource.getAll();
		res.status(200).json(resources);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

router.post('/', validateResource, async (req, res) => {
	try {
		await Resource.add(req.body);
		res.status(201).json(req.body);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
