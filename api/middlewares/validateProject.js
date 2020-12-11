const validateProject = (req, res, next) => {
	if (!req.body.project_name) {
		res.status(400).status({ message: 'missing project_name field' });
	} else {
		next();
	}
};

module.exports = validateProject;
