const validateResource = (req, res, next) => {
	if (!req.body.resource_name) {
		res.status(400).status({ message: 'missing resource_name field' });
	} else {
		next();
	}
};

module.exports = validateResource;
