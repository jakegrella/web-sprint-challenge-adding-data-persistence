// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');

const router = express.Router();

router.get('/', async (_, res) => {
	try {
		const resources = await Resource.getAll();
		res.status(200).json(resources);
	} catch (err) {
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
