const logger = (req, res, next) => {
	console.log(res.message);
	next();
};

module.exports = logger;
